import Button from '@mui/material/Button';
function Header(){
return (
    <div class="header">
        <div class="logo">
            Xenorsek!
        </div>
        <div class="navigation">
            <Button variant="text">O mnie</Button>
            <Button variant="text">Doświadczenie</Button>
            <Button variant="text">Umiejętności</Button>
            <Button variant="text">Projekty</Button>
            <Button variant="text">Kontakt</Button>
        </div>
    </div>
)
}
export default Header;