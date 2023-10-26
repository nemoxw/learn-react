
function Bio({name, url, profession, awardnumber, awards, discovery}) {

  return (
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={url}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardnumber} </b>
            ({awards})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>

  )
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Bio

        name = {"Maria Skłodowska-Curie"}
        url = {'https://i.imgur.com/szV5sdGs.jpg'}
        profession = {'physicist and chemist'}
        awardnumber= {4} 
        awards = {'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}
        discovery={'polonium (element)'}


      />
      <Bio

        name = {"MKatsuko Saruhashi"}
        url = {'https://i.imgur.com/YfeOqp2s.jpg'}
        profession = {'geochemist'}
        awardnumber= {2} 
        awards = {'Miyake Prize for geochemistry, Tanaka Prize'}
        discovery={'a method for measuring carbon dioxide in seawater'}


      />

    </div>
  )
}




/** 
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

*/
