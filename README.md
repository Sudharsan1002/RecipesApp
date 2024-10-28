 SAMPLE RESPONSE:GET ALL PRODUCTS:

 {
     "message": "Recipes fetched successfully",
    "data": [

        {
             "_id": "671d0c13e7c0d8e99ab30401",           
              "name": "dosa",
              "description": "As smooth as paper",
              "ingredients": [ "batter", "oil"],
            "__v": 0
       },
         {
            "_id": "671dde69e7c0d8e99ab30403",
            "name": "biriyani",
            "description": "A little bit of spice, a whole lot of flavour",
             "ingredients": [
                 "chicken",
                "rice",
                 "spices"
             ],
             "__v": 0
         },

   ] }



   SAMPLE RESPONSE:GET PRODUCTS BY ID

{
    "message": "Recipe fetched successfully",
    "matchedRecipe": {
        "_id": "671d0bc5deb48003dc927d76",
        "name": "dosa",
        "description": "As smooth as paper",
        "ingredients": [
            "batter",
            "oil"
        ],
        "__v": 0
    }
}




SAMPLE REQUEST:CREATE RECIPE

 {
    "name":"parotta",
    "description":"Flaky layers and flavor explosion-Parotta perfection",
    "ingredients":["maida","oil","water"]
}

SAMLE RESPONSE:CREATE RECIPE

{
    "message": "Recipe created successfully",
    "data": {
        "name": "parotta",
        "description": "Flaky layers and flavor explosion-Parotta perfection",
        "ingredients": [
            "maida",
            "oil",
            "water"
        ],
        "_id": "671de622e7c0d8e99ab30409",
        "__v": 0
    }
}



SAMPLE REQUEST:UPDATE RECIPE

{
        "name": "egg dosa",
        "description": "As smooth as paper with egg on top",
        "ingredients": [
            "batter",
            "oil",
            "egg"
        ]
    }

SAMPLE RESPONSE:UPDATE RECIPE

{
    "message": "Recipe updated successfully",
    "updatedRecipe": {
        "_id": "671d0bc5deb48003dc927d76",
        "name": "egg dosa",
        "description": "As smooth as paper with egg on top",
        "ingredients": [
            "batter",
            "oil",
            "egg"
        ],
        "__v": 0
    }
}




SAMPLE RESPONSE:DELETE RECIPE

{
    "message": "Successfully deleted",
    "deletedRecipe": {
        "_id": "671d0bc5deb48003dc927d76",
        "name": "egg dosa",
        "description": "As smooth as paper with egg on top",
        "ingredients": [
            "batter",
            "oil",
            "egg"
        ],
        "__v": 0
    }
}
