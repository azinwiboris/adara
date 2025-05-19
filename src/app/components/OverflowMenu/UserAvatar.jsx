import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { UserAvatar } from '@carbon/icons-react';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Overflow() {
  // State to hold the RTL status, default to false (or your preferred default)
  const [isRtl, setIsRtl] = useState(false);

  // useEffect will run only on the client-side after the component mounts
  useEffect(() => {
    // Check the document direction and update the state
    // The optional chaining document?.dir is good practice
    setIsRtl(document?.dir === 'rtl');
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <OverflowMenu
      align="right"
      aria-label="overflow-menu"
      focusTrap
      iconDescription="Open user menu" // It's good practice to provide a meaningful description
      size="lg"
      flipped={isRtl} // Use the state variable here
      renderIcon={() => <UserAvatar size={24} />}
    >
      <OverflowMenuItem itemText="Student Portal" />
      <OverflowMenuItem itemText="Adara LMS" />
    </OverflowMenu>
  );
}
