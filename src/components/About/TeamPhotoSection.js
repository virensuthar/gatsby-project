import React from "react"

function TeamPhotoSection() {
  return (
    <div className="row mb-4">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Jessica</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Mark</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                cumque, debitis aliquam tempora magni ea alias porro ipsum
                veritatis modi ex aperiam. Praesentium, quibusdam harum!
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/948875/pexels-photo-948875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Mariya</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPhotoSection
