import data from "@/data";

export async function generateMetadata(params) {
  const currentHobby = data.hobbies.find(
    (hobby) => hobby.alias == params.params.hobby
  );
  return {
    title: currentHobby.name,
  };
}

function tech(props) {
  const currentHobby = data.hobbies.find(
    (hobby) => hobby.alias == props.params.hobby
  );
  const currentTech = currentHobby.techs[props.params.tech];

  return (
    <div>
      <h2>{currentHobby.desc}</h2>
    </div>
  );
}

export default tech;
