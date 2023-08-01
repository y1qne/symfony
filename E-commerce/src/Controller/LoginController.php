<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    /**
     * @Route("/connect", name="app_connect", methods={"POST"})
     */

    public function login(Request $request)
    {
        $email = $request->request->get('email');
        $password = $request->request->get('password');

    
        if ($email === 'user@example.com' && $password === 'password') {
            return $this->redirectToRoute('/'); 
        } else {
            return $this->redirectToRoute('/login'); 
        }
    }
}
