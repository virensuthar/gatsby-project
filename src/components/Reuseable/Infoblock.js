import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function Infoblock({ heading }) {
  return (
    <section className="bg-theme py-4 my-4 text-center">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-white">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              maiores velit magnam et quae repellendus non nam, suscipit dolor
              omnis optio nostrum eligendi aliquid, dolores doloribus quidem sit
              temporibus blanditiis repudiandae fugiat officia quasi! Nemo,
              minus culpa! Magni eaque ratione modi perferendis laboriosam nobis
              porro corrupti pariatur, libero molestiae, magnam veritatis
              distinctio aliquam, quod mollitia inventore nemo? Ratione,
              eligendi consectetur.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infoblock
