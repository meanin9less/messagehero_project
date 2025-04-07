import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

export default function BlackListSearchResult(){
    const blackList = useSelector(state=>state.MH.blackList);
    const {searchedcontact} = useParams();
    const searchResult = blackList.find(b=>b.contact === searchedcontact);
    const result = searchResult ? <><p>{searchResult.contact}는 신고이력이 있는 번호입니다.</p>
        <p>{searchResult.fishingCount > 0 ? `보이스피싱 ${searchResult.fishingCount}회,` : "" }</p>
        <p>{searchResult.spamCount > 0 ? `스팸 및 광고성 ${searchResult.spamCount}회` : "" }</p></>
        : <p>{searchedcontact} 이 번호는 신고 이력이 없는 번호입니다.</p>;
    return(
        <>
            <div>
                {result}
            </div>
        </>
    )
}