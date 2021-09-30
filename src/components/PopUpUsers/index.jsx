import { Box, UsersCards } from "./style";

export default function PopUpUsers({ usersCards }) {
  console.log(usersCards);
  return (
    <div>
      <div className="linearGradient">
        <Box>
          {usersCards?.map((item) => (
            <UsersCards key={item.id}>
              <h4>{item.name}</h4>
              <h6>{item.course_module}</h6>
              {item.techs && <h4>Tecnologias:</h4>}
              <div>
                {item.techs?.map((subItem) => (
                  <div className={subItem.title} key={subItem.id}>
                    <h4>{subItem.title}</h4> <p>{subItem.status}</p>
                  </div>
                ))}
              </div>
            </UsersCards>
          ))}
        </Box>
      </div>
    </div>
  );
}
