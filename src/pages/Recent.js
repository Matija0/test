import React from 'react';
import s3 from "./s3ultra.jpg"
import bank from "./skyscrapers.jpg"
import sport from "./sport.jpg"
import space from "./space1.jpg"
import SP500 from "./SP500.jpg"
import 'bootstrap/dist/css/bootstrap.css';

export default function Recent(){
    return(

        <div className="main">
            <Hero />
            <div className="main-right">
            <Ranking/>
            <Discussion />
            </div>
        </div>

    )

}

function Hero(){
  
    return(
      
      <div className="hero" > 
        <h1>Recent Posts</h1>
        <div className="row">
        <div class="container col-8">
          <img src={bank} className="w-100 shadow-1-strong rounded mb-4 mr-4" alt="Bank skyscraper"/>
          <div className="banner-text">
            <span>Big banks to get reprieve from crisis-era volcker rule</span>
          </div>
          <div className="banner-text2">
            <span>Is the S&P 500 All You Need <br></br>to Retire a Millionaire?</span>
          </div>
          <div class="row">
            <div class="col-6"><img src={SP500}  className="w-100 shadow-1-strong rounded mr-4" alt="SP500 logo"/></div>
            <div class="col-6"><img src={sport}  className="w-100 shadow-1-strong rounded" alt="Tom Brady headline"/></div>
          </div>
        </div>
        <div class=" container2 col-4">
          <img src={space}  className="w-100 h-50 shadow-1-strong rounded ml-4" alt="Space matter"/>
          <div className="banner-text3">
            <span>New map of the universe's matter reveals a possible hole in our understanding of the cosmos</span>
          </div>
          <div className="row">
            <div className=" container3 col"><img src={s3}  className="w-100 h-100 shadow-1-strong rounded mt-4" alt="Samsung Galaxy Book 3 Ultra"/>
            <div className="banner-text4">
              <span>Samsung Galaxy <br></br>Book 3 Ultra review</span>
            </div>
            </div>
          </div>        
        </div>
        </div>
      </div> 
    )
}

export function Ranking (){
  return(
      <div className="rank-el">
          <h3>Top ranking</h3>
          <Person
            img="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            name="Norman Guererro"
            percentage="100%"
          />
          <Person
            img="https://images.generated.photos/m5JtGzV66Cgpk4jELe4IeVIx6pKkP06JcpgsSjMW8EE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzc5NDkzLmpwZw.jpg"
            name="Darrel Rios"
            percentage="99.43%"
          />
          <Person
            img="https://images.generated.photos/YV7iBzNBSDNWEoFw0q4y4ETdQhZnA1ng4PRojkOGQWY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjExNTgxLmpwZw.jpg"
            name="Margaret Day"
            percentage="96.9%"
          />
          <Person
            img="https://images.generated.photos/dbukSP_vNOxjYf3j7dpJ_4544YIuR8AtiyRbGvurnKQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQxNTI2LmpwZw.jpg"
            name="Hellen Watts"
            percentage="88%"
          />
          <Person
            img="https://images.generated.photos/8IRZrc4SJadgh99-FaCsSO4X1IWJOFApwjNXL7ABLRQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUwNzI2LmpwZw.jpg"
            name="Billy Powell"
            percentage="87.45%"
          />

      </div>
  )


}

function Person(props){
  return(
    <div className="person-el">
      <img src={props.img}/>
      <div className="person-np">
        <p>{props.name}</p>
        <span>{props.percentage}</span>
      </div>
    </div>

  )


}


export function Discussion (){
  return(
    <div className="disc-el">
      <h3>Most discussed</h3>
      <Section 
        title="Bad Blood"
        text="Joe Bryan probably didn't kill his wife but he is behind bars for murder"
      />
      <Section 
        title="Trump against the tide"
        text="The presidents pushing to bring America's biggest project to a halt but it wont be easy"
      />
      <Section 
        title="Right about Roseanne"
        text="Roseanne Barr's tweet about Jarret wasnt the odd needle in the haystack it was the last straw"
      />

    </div>
  )


}

function Section(props){
  return(
    <div className="section-el">
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>

  )

}