import { action, makeObservable, observable } from "mobx";

export type personType = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    dob: string
}
const defaultData = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  }
export class Person {

    personDetail: personType = defaultData;
    personDetails: personType[] = [];
    isSubmit: boolean = true;
    constructor(){
        makeObservable(this, {
            personDetails: observable,
            personDetail: observable,
            isSubmit: observable,
            setPersonDetails: action,
            setPersonDetail: action,
            setSingleDetail:action,
            clearPersonDetail: action,
            clearPersonDetails: action,
            setIsSubmit: action
        })
    }

    setPersonDetails = (person: personType) => {
        this.personDetails.push(person)
    }

    setPersonDetail = (person: personType) => {
        this.personDetail = person
    }

    setSingleDetail = (name: string, value: string) => {
        this.personDetail = { ...this.personDetail, [name]: value }   
    }

    setIsSubmit = (bool: boolean) => {
        this.isSubmit = bool
    }
    clearPersonDetail = () => {
        this.personDetail = defaultData
    }
    clearPersonDetails = () => {
        this.personDetails = [];
    }
}

export const person = new Person();