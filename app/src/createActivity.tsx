import React from 'react';
import './Activity.css';
import './create.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

/**
 * CreateActivity component for creating new activities.
 */
const CreateActivity: React.FC = () => {
    const history = useNavigate();

    /**
     * Function to handle form submission for creating a new activity.
     * @param event The form submission event.
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get('Title') as string;
        const description = formData.get('description') as string;
        const total_youth = formData.get('total_youth') as string;
        const location = formData.get('location') as string;
        const date = formData.get('date') as string;

        try {
            await Register({ title, description, total_youth, location, date });
            toast.success('Registration Successful!');
            setTimeout(() => {
                history("/activities")
            }, 200);
        } catch (e) {
            console.error(e);
        }
    };

    /**
     * Function to register a new activity.
     * @param form The activity data to be registered.
     */
    const Register = async (form: any): Promise<void> => {
        const forms = {
            action: "volunteer",
            data: {
                volunteer: {
                    volunteer_Id: 123,
                    title: form.title,
                    description: form.description,
                    total_youth: form.total_youth,
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
            const response = await fetch('http://3.22.180.190:3000/activitymodels/', options);
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
                        Create an Activity
                    </div>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className='form-fields'> 
                        <label htmlFor="title">Title </label> <br />
                        <input type="text" id="Title" name="Title" placeholder="Title of your Activity" required /><br /><br />
                    </div>
                    <div className='form-fields'>
                        <label htmlFor="description">Description </label> <br />
                        <input type="text"  id="description" name="description"  placeholder="Description of your activity" required/><br /><br />
                    </div>
                    <div className='form-fields'> 
                        <label htmlFor="total_youth">Total youth </label> <br />
                        <input type="text" id="total_youth" name="total_youth" placeholder="Total youth attendees" required /><br /><br />
                    </div>
                    <div className='form-fields'>
                        <label htmlFor="number">Date </label> <br />
                        <input type="text" id="date" name="date" placeholder="Enter the date" required /><br /><br />
                    </div>
                    <div className='form-fields'> 
                        <label htmlFor="location">Location</label> <br />
                        <input type="text" id="location" name="location" placeholder="Location" required /><br /><br />
                    </div>
                    {/* Submit button */}
                    <button className="btn btn-form-activity" type="submit">Register</button>
                </form>
            </div>
        </section>
    );
};

export default CreateActivity;
