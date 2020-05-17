import React from 'react';
import useForm from './useForm';
import validate from './LoginFormValidationRules';
import './Form.css';

const Form = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <div className="text-1">
      <p className="social">Social Media Handle</p>
      <div className="hand"></div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="media-center">
          <label htmlFor="twitter" className="label-10">
            Twitter
          </label>
          <div className="control">
            <input
              className={`input-2 ${errors.twitter && 'is-danger'}`}
              type="text"
              name="twitter"
              onChange={handleChange}
              value={values.twitter || ''}
              required
            />
          </div>

          {errors.twitter && <p className="help is-danger">{errors.twitter}</p>}
        </div>
        <div className="media-center">
          <label htmlFor="instagram" className="label-10">
            Instagram
          </label>
          <div className="control">
            <input
              className={`input-2 ${errors.instagram && 'is-danger'}`}
              type="text"
              name="instagram"
              onChange={handleChange}
              value={values.instagram || ''}
              required
            />
          </div>
          {errors.instagram && (
            <p className="help is-danger">{errors.instagram}</p>
          )}
        </div>
        <div className="media-center">
          <label className="label-10">Youtube</label>
          <div className="control">
            <input
              className={`input-2 ${errors.youtube && 'is-danger'}`}
              type="text"
              name="youtube"
              onChange={handleChange}
              value={values.youtube || ''}
              required
            />
          </div>
          {errors.youtube && <p className="help is-danger">{errors.youtube}</p>}
        </div>
        <div className="media-center">
          <label htmlFor="" className="label-10">
            Facebook
          </label>
          <div className="control">
            <input
              className={`input-2 ${errors.facebook && 'is-danger'}`}
              type="text"
              name="facebook"
              onChange={handleChange}
              value={values.facebook || ''}
              required
            />
          </div>
          {errors.facebook && (
            <p className="help is-danger">{errors.facebook}</p>
          )}
        </div>
        <div className="media-center">
          <label htmlFor="linkedin" className="label-10">
            Linkedin
          </label>
          <div className="control">
            <input
              className={`input-2 ${errors.linkedin && 'is-danger'}`}
              type="text"
              name="linkedin"
              onChange={handleChange}
              value={values.linkedin || ''}
              required
            />
          </div>
          {errors.linkedin && (
            <p className="help is-danger">{errors.linkedin}</p>
          )}
        </div>
      <div className="less">
      <button className="btn-3" type="submit" value="Submit">
          SAVE CHANGES
        </button>
      </div>

      </form>
    </div>
  );
};

export default Form;
