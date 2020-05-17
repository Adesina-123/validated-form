export default function validate(values) {
    let errors = {};
  
    if (!values.twitter) {
      errors.twitter = 'This field is required';
    } 

    if (!values.instagram) {
      errors.instagram = 'This field is required';
    }
    
    if (!values.youtube) {
      errors.youtube = 'This field is required';
    }
    
    if (!values.facebook) {
      errors.facebook = 'This field is required';
    }
    
    if (!values.linkedin) {
      errors.linkedin = 'This field is required';
    }
    
  return errors
};