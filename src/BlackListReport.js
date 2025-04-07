import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlackList } from "./MHSlice";
import { useState } from "react";

export default function BlackListReport() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [inputContact, setInputContact] = useState("");
    const [fishing, setFishing] = useState(false);
    const [spam, setSpam] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!inputContact) {
            alert("번호를 입력해주세요.");
            return;
        }
        
        if (!(fishing || spam)) {
            alert("한 가지 이상 선택해주세요.");
            return;
        }
        
        alert("신고되었습니다.");
        dispatch(addBlackList({ inputContact, fishing, spam }));
        navigate("/main/blacklist");
    };

    return (
        <div class="outlet">
        <div className="blacklist-report-container">
            <form className="blacklist-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="inputContact">신고 번호</label>
                    <input 
                        className="input-contact"
                        type="text" 
                        name="inputContact" 
                        id="inputContact" 
                        value={inputContact} 
                        onChange={(e) => setInputContact(e.target.value)} 
                        placeholder="전화번호를 입력하세요"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <span className="report-type-title">신고 유형</span>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input 
                                className="checkbox-input"
                                type="checkbox" 
                                checked={fishing} 
                                onChange={(e) => setFishing(e.target.checked)} 
                            />
                            보이스 피싱
                        </label>
                        <label className="checkbox-label">
                            <input 
                                className="checkbox-input"
                                type="checkbox" 
                                checked={spam} 
                                onChange={(e) => setSpam(e.target.checked)} 
                            />
                            스팸 및 광고성
                        </label>
                    </div>
                </div>
                
                <div className="form-group">
                    <button className="submit-button" type="submit">신고</button>
                </div>
            </form>
        </div>
        </div>
    );
}
