import Skull from '../../public/svg/skull.svg';
import SmartContract from '../../public/svg/smart_contract.svg';


export const SvgIcon = ({ name }: {name: string}) => {

    const getIcon = () => {
        switch (name) {
            case "Hacks":
                return <Skull />
            case "Smart-Contract":
                return <SmartContract />
            default:
                return <></>
        }
    }

    return getIcon();
    
}