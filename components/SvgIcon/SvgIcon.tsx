import Hacks from '../../public/svg/hacks.svg';
import SmartContract from '../../public/svg/smart_contract.svg';
import Algoritms from '../../public/svg/algorithms.svg';
import Bitcoin from '../../public/svg/bitcoin.svg';

export const SvgIcon = ({ name }: {name: string}) => {

    const getIcon = () => {
        switch (name) {
            case "Hacks":
                return <Hacks />
            case "Smart-Contract":
                return <SmartContract />
            case "Algorithms":
                return <Algoritms /> 
            case "Bitcoin":
                return <Bitcoin />
            default:
                return <></>
        }
    }

    return getIcon();
    
}