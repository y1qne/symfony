<?php

// fixed based on stackoverflow: https://stackoverflow.com/questions/67875812

namespace App\Controller\Api;

use App\Entity\Product;
use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ProductApiController extends AbstractController
{
    #[Route('/product/api', name: 'app_product_api', methods: ['GET'])]
    public function getAllProducts(Request $request, EntityManagerInterface $entityManager)
    {
        // Get the query parameters from the request
        $itemsPerPage = $request->query->getInt('item', 18);
        $currentPage = $request->query->getInt('page', 1);
        $categoryId = $request->query->getInt('category_id', 0); // Add this line to get the category_id from the request query

        // Calculate the offset to paginate the results
        $offset = ($currentPage - 1) * $itemsPerPage;

        // Prepare the filter array based on the category ID
        $filter = [];
        if ($categoryId > 0) {
            $category = $entityManager->getRepository(Category::class)->find($categoryId);
            if ($category) {
                $filter['category'] = $category;
            }
        }

        // Get the products based on the pagination settings and the filter
        $products = $entityManager->getRepository(Product::class)
            ->findBy($filter, null, $itemsPerPage, $offset);

        // Serialize the products array to JSON
        $jsonProducts = json_encode($products, JSON_PRETTY_PRINT);

        // Create the JsonResponse with the serialized JSON
        return new JsonResponse($jsonProducts, 200, [], true);
    }

    #[Route('/product/api/{id}', name: 'app_product_detail', methods: ['GET'])]
    public function getProductDetail(int $id, EntityManagerInterface $entityManager)
    {
        // Get the product based on the given ID
        $product = $entityManager->getRepository(Product::class)->find($id);

        // Check if the product exists
        if (!$product) {
            // Return a JSON response indicating that the product was not found
            return new JsonResponse(['error' => 'Product not found'], 404);
        }

        // Serialize the product object to JSON
        $jsonProduct = json_encode($product, JSON_PRETTY_PRINT);

        // Create the JsonResponse with the serialized JSON
        return new JsonResponse($jsonProduct, 200, [], true);
    }
}
