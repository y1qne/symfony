<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class NavigationController extends AbstractController
{
        /**
         * @Route("/", name="home")
         */
        public function home()
        {
                return $this->render('navigation/home.html.twig');
        }

        /**
         * Nécessite juste d'être connecté
         * @Route("/membre", name="membre")
         * @IsGranted("IS_AUTHENTICATED_FULLY")
         * fonctionne aussi avec ROLE_USER
        */
        public function membre()
        {
                return $this->render('navigation/membre.html.twig');
        }

        /**
         * Besoin des droits admin
         * @Route("/admin", name="admin")
         * @IsGranted("ROLE_ADMIN")
        */
        public function admin()
        {
                return $this->render('navigation/admin.html.twig');
        }

}
