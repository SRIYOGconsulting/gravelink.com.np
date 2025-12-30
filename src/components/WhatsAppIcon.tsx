import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsAppIcon = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',          // Adjust size as needed
      height: '60px',         // Adjust size as needed
      backgroundColor: '#25D366',
      borderRadius: '50%',    // Makes it a circle
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', 
      cursor: 'pointer'
    }}>
      <IoLogoWhatsapp 
        style={{ 
          color: 'white', 
          fontSize: '38px',   // Size of the white logo inside
          marginLeft: '1px'   // Tiny adjustment to look perfectly centered
        }} 
      />
    </div>
  );
};

export default WhatsAppIcon;