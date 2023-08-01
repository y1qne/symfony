import React, {useState} from "react";
import {axiosLogin} from "../apiCall";

const Connect = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosLogin(email, password);

            window.location.href = "/";
        } catch (error) {
            alert("Erreur de connexion  :" + error + "\nVeuillez réessayer.");
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full justify-center items-center gap-16 p-8">
            <div className="flex flex-col items-center w-full">
                <h3 className="text-2xl font-semibold mb-4">Déjà Client ?</h3>
                <form className="w-full flex flex-col" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-70 p-3 border border-gray-300 focus:none focus:outline-0 rounded mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        required
                        className="w-70 p-3 border border-gray-300 rounded mb-3 focus:outline-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Me Connecter"
                        className="w-70 p-3 bg-black text-white cursor-pointer border-none rounded-md hover:bg-[#f553c7]"
                    />
                </form>
            </div>
            <div className="flex flex-col items-center w-full">
                <h3 className="text-2xl font-semibold mb-4">Nouveau client ?</h3>
                    <a className="mb-3">
                        Afin de profiter de tous les avantages de Kompozant, des offres exclusives, d'avoir un suivi optimum de vos commandes, il suffit d'un clic :
                    </a>

                    <form className="w-full flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-70 p-3 border border-gray-300 rounded mb-3 focus:outline-0"
                        />
                        <input
                            type="submit"
                            value="Créer mon compte"
                            className="w-70 p-3 bg-black text-white cursor-pointer border-none rounded-md hover:bg-[#f553c7]"
                        />
                    </form>
                </div>
        </div>

    );
};

export default Connect;
