import { ContentMain } from "./main"
import { ContentPeople } from "./people"

export const SelectContent = (selected_content) =>{
  switch(selected_content){
    case "":
      return(
        <ContentMain/>
      )
    case "people":
      return(
        <ContentPeople />
      )
    default:
      return(
        <ContentMain/>
    )
    
  }

}