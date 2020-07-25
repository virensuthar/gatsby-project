import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function DualInfoblock({ heading, imgsrc }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              laborum in placeat accusantium nesciunt voluptatibus, iusto
              possimus quidem quas! Blanditiis deleniti alias, eligendi esse
              ullam temporibus dignissimos deserunt modi, est illum error,
              quidem fuga tenetur dicta corporis ad adipisci? Porro, vitae.
              Alias exercitationem inventore molestias voluptates animi
              voluptatum saepe impedit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex blanditiis animi delectus autem cupiditate
              eius iure ab officiis? Magnam neque velit natus pariatur quae
              quibusdam enim quaerat nulla, dolor facilis nostrum veniam non
              harum, odio earum quis itaque. Hic perspiciatis, aperiam
              laboriosam temporibus ab ullam aspernatur est voluptatem
              perferendis possimus, eveniet soluta. Et impedit ut distinctio
              cupiditate cumque quis maxime error vero iure vitae, nostrum
              doloremque quaerat obcaecati eligendi praesentium nulla velit
              commodi harum temporibus. Sequi accusamus dolorem minus minima
              labore hic, ad odit expedita neque porro sed quis, saepe vel odio
              quos placeat consequatur dignissimos eligendi vero ea repellendus.
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img src={imgsrc} class="card-img-top" alt="Image goes here" />
              <div className="card-body">
                <h5 className="card-title text-white">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita ipsa enim nulla ut voluptate, aut totam hic velit
                  eaque provident, molestiae sequi exercitationem. Culpa
                  accusantium architecto modi voluptatibus ullam inventore.
                </p>
                <Link to="#" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoblock
