import React from 'react'
import Comment from './comment';
import faker from 'faker';

 const ApproveRej=()=>{
  return (
    <div>
    <div class="ui card">
    <div class="ui content">

    
<Comment author ={faker.name.firstName()} 
date={faker.date.month()}
src={faker.image.avatar()} 
Comment={faker.random.words()+ faker.random.words()} />
  
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button" >Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ApproveRej;


