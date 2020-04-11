# BE-BookMark
The backend includes the user, financial, shopping, and personal tables that are found in the migrations folder. The endpoints include the ability for user's to create a profile, and add their requested sites to the backend. An jwt token is generated and bcrypt is utilized to help protect user's password from being seen.

The backend is deployed on [Heroku](https://be-bookmark.herokuapp.com/).
- [Frontend Repo](https://github.com/diaz4674/BookMark)

## Tables
The user's table create's new users, and must include the following:
  - username
  - email
  - password
  
the _user-id's at the the end of each table are already included in the endpoint function. 

The financial table are each individual user's financial sites they request, and include the following:
  - FinancialName
  - FinancialSite
  - financial_user_id

The shopping table are each individual user's store sites they request, and include the following:
  - storeName
  - storeSite
  - shopping_user_id
 
The personal table are each individual user's personal sites they request, and include the following:
  - personalName
  - personalSite
  - personal_user_id
