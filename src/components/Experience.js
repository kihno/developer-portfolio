const Experience = () => {

  const Details = ({position, company, companyLink, time, address, work}) => {
    return(
      <li>
        <div>
          <h3>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
          <span>
            {time} | {address}
          </span>
          <p>
            {work}
          </p>
        </div>
      </li>
    )
  }

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 2-full text-center">
        Expreience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details
            position="Brand Web Developer"
            company="Pacific BMW"
            companyLink="www.pacificbmw.com"
            time="2021-Present"
            address="Glendale, CA"
            work="Developed web pages and mobile application."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
