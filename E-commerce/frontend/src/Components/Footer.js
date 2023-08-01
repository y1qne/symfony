import React from "react";

export default function Footer() {
    return (
        <>
            <footer className={"flex flex-col items-center justify-center bg-[#393939] text-white"}>
                <div className={"bg-black w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full md:w-1/4 flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path
                                d="M39 48V18C39 17.2044 38.6839 16.4413 38.1213 15.8787C37.5587 15.3161 36.7956 15 36 15H12C11.2044 15 10.4413 15.3161 9.87868 15.8787C9.31607 16.4413 9 17.2044 9 18V48C9 48.7956 9.31607 49.5587 9.87868 50.1213C10.4413 50.6839 11.2044 51 12 51H15M39 48C39 48.7956 38.6839 49.5587 38.1213 50.1213C37.5587 50.6839 36.7956 51 36 51H27M39 48V24C39 23.2044 39.3161 22.4413 39.8787 21.8787C40.4413 21.3161 41.2044 21 42 21H49.758C50.5536 21.0002 51.3165 21.3164 51.879 21.879L62.121 32.121C62.6837 32.6835 62.9998 33.4464 63 34.242V48C63 48.7956 62.6839 49.5587 62.1213 50.1213C61.5587 50.6839 60.7956 51 60 51H57M39 48C39 48.7956 39.3161 49.5587 39.8787 50.1213C40.4413 50.6839 41.2044 51 42 51H45M15 51C15 52.5913 15.6321 54.1174 16.7574 55.2426C17.8826 56.3679 19.4087 57 21 57C22.5913 57 24.1174 56.3679 25.2426 55.2426C26.3679 54.1174 27 52.5913 27 51M15 51C15 49.4087 15.6321 47.8826 16.7574 46.7574C17.8826 45.6321 19.4087 45 21 45C22.5913 45 24.1174 45.6321 25.2426 46.7574C26.3679 47.8826 27 49.4087 27 51M57 51C57 52.5913 56.3679 54.1174 55.2426 55.2426C54.1174 56.3679 52.5913 57 51 57C49.4087 57 47.8826 56.3679 46.7574 55.2426C45.6321 54.1174 45 52.5913 45 51M57 51C57 49.4087 56.3679 47.8826 55.2426 46.7574C54.1174 45.6321 52.5913 45 51 45C49.4087 45 47.8826 45.6321 46.7574 46.7574C45.6321 47.8826 45 49.4087 45 51"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={"uppercase"}>livraison gratuite en point de retrait dès 150€ d'achats</p>
                    </div>
                    <div className={"w-full md:w-1/4 flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path
                                d="M15 51C15 52.5913 15.6321 54.1174 16.7574 55.2426C17.8826 56.3679 19.4087 57 21 57C22.5913 57 24.1174 56.3679 25.2426 55.2426C26.3679 54.1174 27 52.5913 27 51C27 49.4087 26.3679 47.8826 25.2426 46.7574C24.1174 45.6321 22.5913 45 21 45C19.4087 45 17.8826 45.6321 16.7574 46.7574C15.6321 47.8826 15 49.4087 15 51ZM45 51C45 52.5913 45.6321 54.1174 46.7574 55.2426C47.8826 56.3679 49.4087 57 51 57C52.5913 57 54.1174 56.3679 55.2426 55.2426C56.3679 54.1174 57 52.5913 57 51C57 49.4087 56.3679 47.8826 55.2426 46.7574C54.1174 45.6321 52.5913 45 51 45C49.4087 45 47.8826 45.6321 46.7574 46.7574C45.6321 47.8826 45 49.4087 45 51Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M15 51H9V18C9 17.2044 9.31607 16.4413 9.87868 15.8787C10.4413 15.3161 11.2044 15 12 15H39V33H24M24 33L30 39M24 33L30 27M27 51H45M39 18H54L63 33V51H57"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={"uppercase"}>retours gratuits</p>
                    </div>
                    <div className={"w-full md:w-1/4 flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <path
                                d="M36 63C50.9117 63 63 50.9117 63 36C63 21.0883 50.9117 9 36 9C21.0883 9 9 21.0883 9 36C9 50.9117 21.0883 63 36 63Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M36 21V32.292C36 33.4065 36.3105 34.4989 36.8965 35.4469C37.4826 36.3948 38.3211 37.1608 39.318 37.659L48 42"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className={"uppercase"}>30 jours pour changer d'avis</p>
                    </div>
                    <div className={"w-full md:w-1/4 flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <g clipPath="url(#clip0_7_125)">
                                <path
                                    d="M46.2129 7.80239e-05C45.6591 0.0222319 45.1246 0.121924 44.568 0.260386L6.92305 9.43208C2.47013 10.5232 -0.315718 15.0148 0.778128 19.4705L6.05628 41.0207C6.37612 42.3043 6.99888 43.4927 7.87239 44.4861C8.74591 45.4796 9.84475 46.2493 11.0769 46.7308V41.5385C11.0769 33.9038 17.2883 27.6924 24.9231 27.6924H59.7987L54.6064 6.31669C54.1472 4.45859 53.0613 2.81569 51.5317 1.66503C50.0022 0.514362 48.1255 -0.0736732 46.2129 7.80239e-05ZM49.5858 11.9438L51.8372 21.3758L42.4911 23.6244L40.1538 14.2782L49.5858 11.9438ZM24.9231 33.2309C20.3372 33.2309 16.6154 36.9527 16.6154 41.5385V63.6924C16.6154 68.2782 20.3372 72.0001 24.9231 72.0001H63.6923C68.2781 72.0001 72 68.2782 72 63.6924V41.5385C72 36.9527 68.2781 33.2309 63.6923 33.2309H24.9231ZM24.9231 37.645H63.6923C65.8274 37.645 67.5858 39.4035 67.5858 41.5385V44.3078H21.0295V41.5385C21.0295 39.4035 22.788 37.645 24.9231 37.645ZM21.0295 52.6155H67.5858V63.6924C67.5858 65.8275 65.8274 67.5859 63.6923 67.5859H24.9231C23.8922 67.5801 22.9053 67.168 22.1763 66.4391C21.4474 65.7102 21.0353 64.7232 21.0295 63.6924V52.6155Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7_125">
                                    <rect width="72" height="72" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className={"uppercase"}>paiement en 3x ou 4x sans frais</p>
                    </div>
                </div>
                <div className={"w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>aide et contact</p>
                        <a href={"#"}>Questions fréquentes et contacts</a>
                        <a href={"#"}>Suivre ma commande</a>
                        <a href={"#"}>Retourner mon article</a>
                        <p className={"font-bold"}>Contactez-nous :</p>
                        <a href={"#"}>&rsaquo; Email</a>
                        <a href={"#"}>&rsaquo; Téléphone</a>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>les services</p>
                        <a href={"#"}>nos modes de livraisons</a>
                        <a href={"#"}>Nos modes de paiement</a>
                        <a href={"#"}>Nos modes de retour</a>
                        <a href={"#"}>Kompozant +</a>
                        <a href={"#"}>Carte cadeau Kompozant</a>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>à propos de nous</p>
                        <a href={"#"}>Actualités</a>
                        <a href={"#"}>Entreprise</a>
                        <a href={"#"}>Responsabilité Sociétale</a>
                        <a href={"#"}>Activités</a>
                        <a href={"#"}>Recrutement</a>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>les sites partenaires</p>
                        <a href={"https://www.epitech.eu/"}>Epitech</a>
                    </div>
                </div>
                <div className={"w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full h-0.5 rounded-full bg-white"}></div>
                </div>
                <div className={"w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>modes de paiement</p>
                        <p>CB</p>
                        <p>Visa</p>
                        <p>MASTERCARD</p>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>accessibilité</p>
                        <p className={"text-4xl font-bold"}>&#123;EPITECH&#125;</p>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>Toujours avec nous</p>
                        <div className={"flex items-center"}>
                            <a href={"#"} className={"w-24 h-24"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28001 9.09 5.11001 7.38 3.00001 4.79C2.63001 5.42 2.42001 6.16 2.42001 6.94C2.42001 8.43 3.17001 9.75 4.33001 10.5C3.62001 10.5 2.96001 10.3 2.38001 10V10.03C2.38001 12.11 3.86001 13.85 5.82001 14.24C5.19074 14.4122 4.5301 14.4362 3.89001 14.31C4.16162 15.1625 4.69355 15.9084 5.41103 16.4429C6.1285 16.9775 6.99546 17.2737 7.89001 17.29C6.37364 18.4904 4.494 19.1393 2.56001 19.13C2.22001 19.13 1.88001 19.11 1.54001 19.07C3.44001 20.29 5.70001 21 8.12001 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href={"#"} className={"w-24 h-24"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href={"#"} className={"w-24 h-24"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M13.028 2.00099C13.7577 1.99819 14.4875 2.00552 15.217 2.02299L15.411 2.02999C15.635 2.03799 15.856 2.04799 16.123 2.05999C17.187 2.10999 17.913 2.27799 18.55 2.52499C19.21 2.77899 19.766 3.12299 20.322 3.67899C20.8304 4.17859 21.2238 4.78293 21.475 5.44999C21.722 6.08699 21.89 6.81399 21.94 7.87799C21.952 8.14399 21.962 8.36599 21.97 8.58999L21.976 8.78399C21.9938 9.51318 22.0014 10.2426 21.999 10.972L22 11.718V13.028C22.0025 13.7577 21.9948 14.4875 21.977 15.217L21.971 15.411C21.963 15.635 21.953 15.856 21.941 16.123C21.891 17.187 21.721 17.913 21.475 18.55C21.2246 19.2177 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2237 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.856 21.952 15.635 21.962 15.411 21.97L15.217 21.976C14.4875 21.9938 13.7577 22.0014 13.028 21.999L12.282 22H10.973C10.2433 22.0025 9.51352 21.9948 8.784 21.977L8.59 21.971C8.35261 21.9624 8.11527 21.9524 7.878 21.941C6.814 21.891 6.088 21.721 5.45 21.475C4.78268 21.2243 4.17823 20.8308 3.679 20.322C3.17004 19.8223 2.77622 19.2175 2.525 18.55C2.278 17.913 2.11 17.187 2.06 16.123C2.04886 15.8857 2.03886 15.6484 2.03 15.411L2.025 15.217C2.00656 14.4875 1.99823 13.7577 2 13.028V10.972C1.99721 10.2426 2.00454 9.51318 2.022 8.78399L2.029 8.58999C2.037 8.36599 2.047 8.14399 2.059 7.87799C2.109 6.81299 2.277 6.08799 2.524 5.44999C2.77537 4.78261 3.16996 4.17843 3.68 3.67999C4.17889 3.17074 4.78296 2.77656 5.45 2.52499C6.088 2.27799 6.813 2.10999 7.878 2.05999L8.59 2.02999L8.784 2.02499C9.51318 2.00656 10.2426 1.99823 10.972 1.99999L13.028 2.00099ZM12 7.00099C11.3375 6.99162 10.6798 7.11401 10.065 7.36105C9.45019 7.6081 8.89064 7.97487 8.41884 8.44004C7.94704 8.90522 7.5724 9.45952 7.31668 10.0707C7.06097 10.682 6.92929 11.3379 6.92929 12.0005C6.92929 12.663 7.06097 13.319 7.31668 13.9302C7.5724 14.5414 7.94704 15.0958 8.41884 15.5609C8.89064 16.0261 9.45019 16.3929 10.065 16.6399C10.6798 16.887 11.3375 17.0094 12 17C13.3261 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5978 17 13.3261 17 12C17 10.6739 16.4732 9.40213 15.5355 8.46445C14.5978 7.52677 13.3261 7.00099 12 7.00099ZM12 9.00099C12.3985 8.99364 12.7945 9.06578 13.1648 9.21319C13.5351 9.3606 13.8723 9.58033 14.1568 9.85953C14.4412 10.1387 14.6672 10.4718 14.8214 10.8393C14.9757 11.2068 15.0552 11.6014 15.0553 12C15.0553 12.3986 14.976 12.7931 14.8218 13.1607C14.6677 13.5283 14.4418 13.8614 14.1575 14.1407C13.8731 14.42 13.536 14.6399 13.1657 14.7874C12.7955 14.9349 12.3995 15.0072 12.001 15C11.2053 15 10.4423 14.6839 9.87968 14.1213C9.31707 13.5587 9.001 12.7956 9.001 12C9.001 11.2043 9.31707 10.4413 9.87968 9.87867C10.4423 9.31606 11.2053 8.99999 12.001 8.99999L12 9.00099ZM17.25 5.50099C16.9274 5.5139 16.6223 5.65114 16.3986 5.88396C16.1749 6.11678 16.05 6.42712 16.05 6.74999C16.05 7.07285 16.1749 7.38319 16.3986 7.61601C16.6223 7.84884 16.9274 7.98607 17.25 7.99899C17.5815 7.99899 17.8995 7.86729 18.1339 7.63287C18.3683 7.39845 18.5 7.08051 18.5 6.74899C18.5 6.41747 18.3683 6.09952 18.1339 5.8651C17.8995 5.63068 17.5815 5.49899 17.25 5.49899V5.50099Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href={"#"} className={"w-24 h-24"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={"w-full md:w-1/4 flex flex-col gap-2 mt-4 mb-4"}>
                        <p className={"font-bold uppercase"}>rendez-vous sur l'app</p>
                        <a href={"#"} target={"_blank"} referrerPolicy={"no-referrer"}>
                            APPSTORE
                        </a>
                        <a href={"#"} target={"_blank"} referrerPolicy={"no-referrer"}>
                            PLAYSTORE
                        </a>
                    </div>
                </div>
                <div className={"w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full h-0.5 rounded-full bg-white"}></div>
                </div>
                <div className={"w-full flex flex-col justify-center md:flex-row px-8 py-2 gap-8"}>
                    <div className={"w-full"}>
                        <p>CGV Kompozant • CGU Kompozant • Avis clients • Conditions d’utilisation #Kompozant • Données
                            personnelles • Gérer mes cookies • *Conditions des Offres • **Conditions des Facilités de
                            Paiement</p>
                    </div>
                </div>
            </footer>
        </>
    )
}