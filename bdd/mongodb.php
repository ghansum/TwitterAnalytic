<?php
   // connect to mongodb
   $m = new MongoClient("mongodb://localhost:27017/projet-nosql");
   echo "Connection to database successfully";

   // select a database
   $db = $m->mydb;
   echo "Database mydb selected";

   $collection = $db->createCollection("candidats");
   echo "Collection created succsessfully";
?>
