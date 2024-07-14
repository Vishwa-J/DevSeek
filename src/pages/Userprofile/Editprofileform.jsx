import React,{useState} from 'react'

const Editprofileform = ({currentuser, setswitch}) => {
    const [name, setname] =useState(currentuser?.name)
    const [about, setabout]=useState(currentuser?.about)
    const [tags, settags]=useState([])
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(tags[0]==''||tags.length===0){
            alert('update tags field');
        }
        setswitch(false)
    }
  return (
    <div>
        <h1 className="edit-profile-title">
            Edit Your Profile
        </h1>
        <h2 className="edit-profile-title-2">Public Information</h2>
        <form className="edit-profile-form" onSubmit={handlesubmit}>
            <label htmlFor="name">
                <h3>Display name</h3>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            </label>
            <label htmlFor="about">
            <h3>About me</h3>
            <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e)=>setabout(e.target.value)}></textarea>
            </label>
            <br/>
            <input type="submit" value="save profile" className='user-submit-btn'/>
            <button type='button' className='user-cancel-btn' onClick={()=>setswitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default Editprofileform