import logoImage from '../assets/422514224_756007119305795_454615554087881874_n.jpg';

export default function Logo({ width = 40, height = 40 }) {
  return (
    <img 
      src={logoImage}
      alt="FizioWell Logo"
      width={width}
      height={height}
      style={{
        borderRadius: '8px',
        objectFit: 'cover'
      }}
    />
  );
}
