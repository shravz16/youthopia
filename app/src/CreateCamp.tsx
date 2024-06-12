import React from 'react';

import './Modal.css';
import './Camps.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

/**
 * CreateCamp component for creating new camps.
 */
const CreateCamp: React.FC = () => {
    const history = useNavigate();

    /**
     * Function to handle form submission for creating a new camp.
     * @param event The form submission event.
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get('Title') as string;
        const description = formData.get('description') as string;
        const location = formData.get('location') as string;
        const date = formData.get('date') as string;

        try {
            await Register({ title, description, location, date });
            toast.success('Registration Successful!');
            setTimeout(() => {
                history("/camps");
            }, 200);
        } catch (e) {
            console.error(e);
        }
    };

    /**
     * Function to register a new camp.
     * @param form The camp data to be registered.
     */
    const Register = async (form: any): Promise<void> => {
        const forms = {
            action: "volunteer",
            data: {
                camp: {
                    volunteer_id: 123,
                    title: form.title,
                    description: form.description,
                    location: form.location,
                    date: form.date,
                }
            }
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forms)
        };

        try {
            const response = await fetch('http://localhost:3000/campmodels/', options);
            const resp = await response.json();
            console.log(resp);
            if (response.status === 200) {
                console.log('Registered Successfully', resp.data);
            } else {
                console.log('Registration Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="contact">
            <div className="mail">
                <div>
                    <div className="create-activity-title">
                        Create a camp
                    </div>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className='form-fields'> 
                        <label htmlFor="title">Title </label> <br />
                        <input type="text" id="Title" name="Title" placeholder="Enter the title" required /><br /><br />
                    </div>
                    <div className='form-fields'>
                        <label htmlFor="description">Description </label> <br />
                        <input type="text"  id="description" name="description"  placeholder="Enter the description" required/><br /><br />
                    </div>
                    <div className='form-fields'>
                        <label htmlFor="date">Date </label> <br />
                        <input type="text" id="date" name="date" placeholder="Enter the date" required /><br /><br />
                    </div>
                    <div className='form-fields'>
                        <label htmlFor="location">Location</label> <br />
                        <input type="text" id="location" name="location" placeholder="Enter the location" required /><br /><br />
                    </div>
                    {/* Submit button */}
                    <button className="btn btn-form-activity" type="submit">Register</button>
                </form>
            </div>
        </section>
    );
};

export default CreateCamp;
