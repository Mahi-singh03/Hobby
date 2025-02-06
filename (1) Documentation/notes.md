Creating the Models and Schemas for MongoDB
--
* create the models ans schemas for mongoDB in Root/modele/Schemas.ts
* this is used to valdate the data before saving it to the database


Create the Schema using Zod
--
* create the schemas in root/Schemas/somthing.ts
* this is used to valdate the data before saving it to the database
* this just like the models and schemas for mongoDB
* we can use this to validate the data before saving it to the database
* it is good for type safety and autocomplete


Database Connection
--
* create the database connection in root/lib/db.ts


Resend
--

* create the resend connection in root/lib/resend.ts
* create the resend.ts using the resend API key and export it


* create root/Emails/VarificationEmail.tsx
* for this use the use NPM package @react-email/components for the email template
* chose the email templete 


* Create the SendVarificationEmail.tsx file in root/src/Helpers/SendVarificationEmail.tsx
* import the resend from the root/lib/resend.ts
* import the VarificationEmail from the root/Emails/VarificationEmail.tsx ro the root/src/Helpers/SendVarificationEmail.tsx

* Stenderedizing the resoponse:
* createt the root/src/types/SignipResponseAPI.ts
