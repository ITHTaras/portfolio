import data from "@/data";

export async function generateMetadata(params) {
  const currentHobby = data.hobbies.find(
    (hobby) => hobby.alias == params.params.hobby
  );
  return {
    title: currentHobby.name,
  };
}

function hobby(props) {
  const currentHobby = data.hobbies.find(
    (hobby) => hobby.alias == props.params.hobby
  );

  return (
    <div>
      <h2>{currentHobby.desc}</h2>
    </div>
  );
}

export default hobby;
