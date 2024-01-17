import { useState, useEffect } from "react";
import { person } from "../../store/PersonStore";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { FiEdit } from "react-icons/fi";
import { getAllPerson, deletePerson } from "../../api/data";
import "./PersonDetail.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getPaginatedPerson } from "../../api/data";

export const PersonDetail = observer(() => {
  const defaultData = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  };

  const nav = useNavigate();

  const [isTableEmpty, setIsTableEmpty] = useState(false);
  const [page, setPage] = useState<any>(1);

  const queryClient = useQueryClient();

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["person"],
  //   queryFn: getAllPerson,
  // });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["person", { page }],
    queryFn: () => getPaginatedPerson(page),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["person"] });
    },
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      person.clearPersonDetails();
      data.post.map((e: any) => {
        person.setPersonDetails(e);
      });
      setIsTableEmpty(data.post.length != 0);
    }
  }, [data]);

  return (
    <>
      <div className="add-button-container">
        <div
          className="add-button"
          onClick={() => nav("/Integration/Register")}
        >
          Add
        </div>
      </div>
      <div className="detail-container">
        {isTableEmpty && (
          <div className="detail-header">
            <p className="email bold">Email</p>
            <p className="fname bold">FirstName</p>
            <p className="lname bold">LastName</p>
            <p className="dob bold">DOB</p>
            <p className="action bold">Action</p>
          </div>
        )}
        {person.personDetails.map((e) => {
          return (
            <div className="detail-header" key={e.id}>
              <p className="email">{e.email}</p>
              <p className="fname">{e.firstName}</p>
              <p className="lname">{e.lastName}</p>
              <p className="dob">{e.dob}</p>
              <p className="action">
                <FiEdit
                  style={{ fontSize: 30 }}
                  onClick={() => {
                    console.log("edit");
                    person.setPersonDetail(e);
                    person.setIsSubmit(false);
                    nav("/Integration/Register");
                  }}
                />
                <AiOutlineDelete
                  style={{ fontSize: 24 }}
                  onClick={() => deleteMutation.mutate(e.id)}
                />
              </p>
            </div>
          );
        })}

        <div className="page-button-container">
          {data?.previousPage && (
            <button
              className="post-header-button"
              onClick={() => setPage(data.previousPage)}
            >
              Previous
            </button>
          )}
          <p>{page}</p>
          {data?.nextPage && (
            <button
              className="post-header-button"
              onClick={() => {
                setPage(data?.nextPage);
                console.log(page);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
});

export default PersonDetail;
