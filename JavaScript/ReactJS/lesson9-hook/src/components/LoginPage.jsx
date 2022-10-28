
import { useState } from 'react';
import user from '../data/user';

const LoginPage = props => {

    const [iusername,setIuser] = useState();
    const [ipass,setIpass] = useState();
    const [altertext,setAlerttext] = useState();
    const [alert,setAlert] = useState();

const formSubmit=(e)=>{
    e.preventDefault();
    if (!iusername || !ipass ) {
        setAlerttext("fill in the input");
        setAlert('alert-warning');
    }else{
        if (iusername === user.uname) {
            setAlerttext('login successfully');
            setAlert('alert-success');
            props.history.push('/admin');
        }else{
            setAlerttext('login wrong');
            setAlert('alert-danger');
        }
    }
}
  return (
<div className="container mt-5">
    <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className={`alert ${alert}`}>{altertext}</h1>
        <form className="col-6" onSubmit={formSubmit}>
            <div className="mb-3">
                <label  className="form-label">User Name</label>
                <input onChange={(e)=>{setIuser(e.target.value)}} type="text" className="form-control"  />
                <div  className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={(e)=>{setIpass(e.target.value)}} type="password" className="form-control"  />
            </div>
         
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
</div>

  )
}

export default LoginPage