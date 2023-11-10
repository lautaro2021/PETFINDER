import React from "react";
import UserProfile from "@/app/layouts/profile/UserProfile";
import { getSession } from "@auth0/nextjs-auth0";

async function Profile() {
 const Session = await getSession();

 let data; 
 if(Session) data = await fetch(`http://localhost:3001/petowner/login?email=${Session.user.email}`).then(res => res.json());
  return (
    <main className="main_container">
      {
        data && Session &&
        <UserProfile data={data} user={Session.user}/>
      }
    </main>
  );
}

export default Profile;
