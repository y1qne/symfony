import "../App.css";
import React, { useState } from "react";
import axios from 'axios';
import {axiosRegister} from "../apiCall";

export default function Register() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthdate: "",
        phone: "",
        country: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
          values.first_name &&
          values.last_name &&
          values.email &&
          values.password &&
          values.birthdate &&
          values.phone &&
          values.country
        ) {
          setValid(true);
          setSubmitted(true);
      
          try {
            const response = await axiosRegister(values);
            console.log(response.data);
      
            if (response.data.error) {
              alert(response.data.error);
            } else {
              setTimeout(() => {
                window.location.href = "/connect";
              }, 2000);
            }
          } catch (error) {
            console.error('Erreur lors de l\'envoi des données au backend:', error);
            alert("An error occurred. Please try again.");
          }
        } else {
          setValid(false);
          setSubmitted(true);
        }
    };
      

    return (
        <div className="bg-gray-100 min-h-screen justify-center items-center pt-10 pb-8">
            <div className="flex">
                <div>
                    <img className="w-80 absolute top-[200px] left-20" src="https://laviedesreines.com/wp-content/uploads/2021/07/Famille-heureuse-17-Secrets-pour-avoir-une-vie-familiale-harmonieuse-scaled.jpg"></img>
                    <img className="w-96 absolute top-[400px] left-96" src="https://www.letsfamily.ch/files/content/Bilder/Artikelbilder/Kind/gl%C3%BCckliche-familie.jpg"></img>
                    <img className="w-80 absolute top-[600px] left-40" src="https://autohypnose-hypnose.com/wp-content/uploads/2020/06/comment-avoir-une-famille-heureuse-8-regles-dor.jpg"></img>
                </div>

                <form className="flex justify-center items-center z-10 mr-52 m-auto w-96 flex-col p-10 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h1 className="justify-center p-3 font-bold text-xl">Creez votre compte Kompozant</h1>
                    {!valid && (
                        <input
                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="text"
                            placeholder="Prénom"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.first_name && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un prénom
                        </span>
                    )}


                    {!valid && (
                        <input

                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="text"
                            placeholder="Nom"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.last_name && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un nom
                        </span>
                    )}

                    {!valid && (
                        <input
                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.email && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer une adresse mail
                        </span>
                    )}

                    {!valid && (
                        <input
                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.password && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un password
                        </span>
                    )}

                    {!valid && (
                        <input
                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="date"
                            placeholder="birthdate"
                            name="birthdate"
                            value={values.birthdate}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.birthdate && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un birthdate
                        </span>
                    )}

                    {!valid && (
                        <input

                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="tel"
                            placeholder="Téléphone"
                            name="phone"
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.phone && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un numéro
                        </span>
                    )}

                    {!valid && (
                        <input
                            className="p-3 text-lg border border-gray-500 mt-3 focus:outline-0"
                            type="text"
                            placeholder="Pays"
                            name="country"
                            value={values.country}
                            onChange={handleInputChange}
                        />
                    )}
                    {submitted && !values.country && (
                        <span className="text-red-500 font-normal">
                            Veuillez entrer un pays
                        </span>
                    )}

                    {!valid && (
                        <button className="bg-black text-white font-semibold py-3 px-24 mt-4 rounded cursor-pointer" type="submit">
                            Register
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
