
import { OverflowMenu, OverflowMenuItem} from '@carbon/react';
import { UserAvatar } from '@carbon/icons-react';
export default function Overflow(){
    return (
        <OverflowMenu align="right"
        aria-label="overflow-menu"
        focusTrap
        iconDescription=""
        size="lg" flipped={document?.dir === 'rtl'} renderIcon={()=> <UserAvatar size={24} />}>
        <OverflowMenuItem 
      
        itemText="Student Portal" />
       
        <OverflowMenuItem itemText="Adara LMS" />
      </OverflowMenu>
    );
  }