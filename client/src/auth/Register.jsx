import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

 const handleSubmit = (values) => {
     console.log(values)
 }
 
  const Register = () => (
   <div>
       <div className='container-fluid bg-secondary p5 text-center'>
               Register Form
            </div>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={handleSubmit}
     >
       {({ errors, touched }) => (
           <div className="container">
               <div className="col-md-6 col-md-offset-3">
               <Form>

<div className='row'>
    <Field name="firstName" placeholder="firstName" />
    {errors.firstName && touched.firstName ? (
        <div>{errors.firstName}</div>
    ) : null}
</div>
<div className='row'>

<Field name="lastName" placeholder="lastName"/>
{errors.lastName && touched.lastName ? (
<div>{errors.lastName}</div>
) : null}
</div>

<div className='row'>

<Field name="email" type="email" placeholder="email"/>
{errors.email && touched.email ? <div>{errors.email}</div> : null}
</div>

<button type="submit">Submit</button>
</Form>
               </div>
            
           </div>
       )}
     </Formik>
   </div>
 );


 export default Register;