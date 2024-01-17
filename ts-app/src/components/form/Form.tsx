import { useMutation, useQueryClient } from "@tanstack/react-query";
import { person } from "../../store/PersonStore";
import { observer } from "mobx-react-lite";
import { createPerson } from "../../api/data";
import { updatePerson } from "../../api/data";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = observer(() => {

  const nav = useNavigate();
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: createPerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["person"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatePerson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["person"] });
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    postMutation.mutate(person.personDetail);
    person.clearPersonDetail();
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    updateMutation.mutate(person.personDetail);
    person.clearPersonDetail();
    person.setIsSubmit(true);
  };

  const handleChange = (e: any) => {
    person.setSingleDetail(e.target.name, e.target.value);
  };

  return (
    <div className="form-container">
      <form className="form-style" autoComplete="off">
        <div className="input-container">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            onChange={(e) => handleChange(e)}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={person.personDetail.email}
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="firstName">
            FirstName
          </label>
          <input
            className="form-input"
            onChange={(e) => handleChange(e)}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={person.personDetail.firstName}
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="lastName">
            LastName
          </label>
          <input
            className="form-input"
            onChange={(e) => handleChange(e)}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={person.personDetail.lastName}
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="dob">
            DOB
          </label>
          <input
            className="form-input"
            onChange={(e) => handleChange(e)}
            type="date"
            name="dob"
            id="dob"
            value={person.personDetail.dob}
          />
        </div>
        <button
          className="submit-button"
          onClick={(e) => {
            person.isSubmit ? handleSubmit(e) : handleUpdate(e);
            nav("/Integration/Detail")
          }}
        >
          {person.isSubmit ? "Submit" : "Update"}
        </button>
      </form>
    </div>
  );
});

export default Form;
