import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

export default function BlackListSearchResult(){
    const blackList = useSelector(state=>state.MH.blackList);
    const {searchedcontact} = useParams();
    const searchResult = blackList.find(b=>b.contact === searchedcontact);
    const result = searchResult ? 
        <><p>{searchResult.contact.length < 8 ? searchResult.contact :
            searchResult.contact.length === 8 ? searchResult.contact.replace(/(\d{4})(\d{4})/, "$1-$2") :
            searchResult.contact.length === 9 ? searchResult.contact.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3") : 
            searchResult.contact.length === 10 && searchResult.contact.startsWith("02") ? searchResult.contact.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3") :
            searchResult.contact.length === 10 ? searchResult.contact.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") :
            searchResult.contact.length === 11 ? searchResult.contact.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") : searchResult.contact}는 신고이력이 있는 번호입니다.</p>
        
        
        <p>{searchResult.fishingCount > 0 ? `보이스피싱 ${searchResult.fishingCount}회` : "" }</p>
        <p>{searchResult.spamCount > 0 ? `스팸 및 광고성 ${searchResult.spamCount}회` : "" }</p></>
        : <p>{
            searchedcontact.length < 8 ? searchedcontact :
            searchedcontact.length === 8 ? searchedcontact.replace(/(\d{4})(\d{4})/, "$1-$2") :
            searchedcontact.length === 9 ? searchedcontact.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3") : 
            searchedcontact.length === 10 && searchedcontact.startsWith("02") ? searchedcontact.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3") :
            searchedcontact.length === 10 ? searchedcontact.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") :
            searchedcontact.length === 11 ? searchedcontact.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") : searchedcontact
            } 이 번호는 신고 이력이 없는 번호입니다.</p>;
    return(
        <>
            <div class="outlet">
                {result}
            </div>
        </>
    )
}