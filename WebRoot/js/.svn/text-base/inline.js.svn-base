var L_UNDEFINED_TEXT="無法在說明中找到此內置定義";

function AppendPopup(oSource, sPopup)
{
	var sPopupText;
	if (oSource.tagName=="A" && oSource.getAttribute("State")!="On")
	{
	
		sPopupText= GetGlossaryTerms(sPopup);
	
		// Have we found a definition?
		if (sPopupText != L_UNDEFINED_TEXT)
		{
			oSource.insertAdjacentHTML("BeforeEnd", "<SPAN ID='Pop' class='GlossaryDef'>&nbsp;" + sPopupText + "</SPAN>");
			oSource.setAttribute("State", "On");
			window.event.returnValue=false;
		}
		else
		{
			alert(L_UNDEFINED_TEXT);
		}
	}
	else if (oSource.tagName=="A" && oSource.getAttribute("State")=="On" )
	{
		oSource.all("Pop").outerHTML="";
		oSource.setAttribute("State", "Off");
		window.event.returnValue=false;
	}
}


function GetGlossaryTerms(sPopup)
{
	var sTemp;
	switch (sPopup)

	{

			case 'AcAdeFile':
			L_AcAdeFile_TEXT='(ADE 檔案：其所有模組已編譯，且所有可編輯的原始程式碼都已移除的 Microsoft Access 專案 (.adp) 檔案。)';
sTemp=L_AcAdeFile_TEXT;
break;
			case 'AcAnsiSqlQueryMode':
			L_AcAnsiSqlQueryMode_TEXT='(ANSI SQL 查詢模式：兩種 SQL 語法類型中的一種：ANSI-89 SQL (也稱為 Microsoft Jet SQL 及 ANSI SQL)，是傳統 Jet SQL 語法；以及 ANSI-92 SQL，有不同的新保留字、語法規則及萬用字元。)';
sTemp=L_AcAnsiSqlQueryMode_TEXT;
break;
			case 'AcAutofiltering':
			L_AcAutofiltering_TEXT='(自動篩選：透過在允許篩選的欄位中選取一或多個項目，在樞紐分析表或樞紐分析圖檢視中篩選資料。)';
sTemp=L_AcAutofiltering_TEXT;
break;
			case 'AcBigintDataType':
			L_AcBigintDataType_TEXT='(bigint 資料類型：在 Access 專案中，資料類型為 8 個位元組 (64 個位元)，儲存從 -2^63 (-9,223,372,036,854,775,808) 到 2^63-1 (9,223,372,036,854,775,807) 範圍內的整數。)';
sTemp=L_AcBigintDataType_TEXT;
break;
			case 'AcCategoryField':
			L_AcCategoryField_TEXT='(類別欄位：在樞紐分析表檢視的類別區域中顯示的欄位。類別欄位中的項目在類別軸上顯示為標籤。)';
sTemp=L_AcCategoryField_TEXT;
break;
			case 'AcClassModule':
			L_AcClassModule_TEXT='(類別模組：可以包含對新物件定義的模組。類別的每一個實例都可建立一個新物件。模組中定義的程序會成為物件的屬性及方法。類別模組可以單獨存在也可以與表單及報表一起存在。)';
sTemp=L_AcClassModule_TEXT;
break;
			case 'AcColumnArea':
			L_AcColumnArea_TEXT='(欄區域：樞紐分析表檢視中包含欄欄位的部份。)';
sTemp=L_AcColumnArea_TEXT;
break;
			case 'AcColumnField':
			L_AcColumnField_TEXT='(欄欄位：樞紐分析表檢視之欄區域中的欄位。欄欄位中的項目列示在樞紐分析表清單的頂端。內層欄欄位離詳細資料區域最近；外層欄欄位在內層欄欄位的上方。)';
sTemp=L_AcColumnField_TEXT;
break;
			case 'AcConditionalFiltering':
			L_AcConditionalFiltering_TEXT='(條件篩選：依合計篩選欄位，以顯示最高或最底的 n 個項目。例如，您可以篩選銷售額位於前三位的城市，也可以篩選利潤最少的五種產品。)';
sTemp=L_AcConditionalFiltering_TEXT;
break;
			case 'AcConstraint':
			L_AcConstraint_TEXT='(限制：對可以輸入到欄或列中之值的限制。例如，「年齡」欄中的值不能小於 0 也不能大於 110。)';
sTemp=L_AcConstraint_TEXT;
break;
			case 'AcCustomGroup':
			L_AcCustomGroup_TEXT='(自訂群組：自訂群組欄位的項目。一個自訂群組包含一個列欄位或欄欄位中兩個或兩個以上的項目。)';
sTemp=L_AcCustomGroup_TEXT;
break;
			case 'AcCustomGroupField':
			L_AcCustomGroupField_TEXT='(自訂群組欄位：以自訂群組作為其項目的列區域或欄區域中的欄位。)';
sTemp=L_AcCustomGroupField_TEXT;
break;
			case 'AcCustomOrder':
			L_AcCustomOrder_TEXT='(自訂順序：使用者定義的排序順序。例如，您可以根據職稱資歷，定義自訂排序順序以顯示「員工職稱」欄中的值。)';
sTemp=L_AcCustomOrder_TEXT;
break;
			case 'AcDataArea':
			L_AcDataArea_TEXT='(資料區域：樞紐分析表或樞紐分析圖檢視中包含摘要資料的部份。資料區域中的值顯示為樞紐分析表檢視中的記錄及樞紐分析圖檢視中的資料點。)';
sTemp=L_AcDataArea_TEXT;
break;
			case 'AcDatabaseDiagram':
			L_AcDatabaseDiagram_TEXT='(資料庫圖表：資料庫結構描述之任何部份的圖形呈現方式。它可以是資料庫結構的整個或部份圖片。它包括資料表、資料表包含的欄，以及資料表之間的關係。)';
sTemp=L_AcDatabaseDiagram_TEXT;
break;
			case 'AcDataField':
			L_AcDataField_TEXT='(資料欄位：包含樞紐分析表或樞紐分析圖檢視中摘要資料的欄位。資料欄位通常包含數值資料。)';
sTemp=L_AcDataField_TEXT;
break;
			case 'AcDataLabel':
			L_AcDataLabel_TEXT='(資料標籤：提供有關資料標記 (代表單一資料點或值) 之其他資訊的標籤。)';
sTemp=L_AcDataLabel_TEXT;
break;
			case 'AcDataMarker':
			L_AcDataMarker_TEXT='(資料標記：圖表中的列、區域、點、扇區或其他符號，代表單一資料點或值。圖表中相關的資料標記組成資料數列。)';
sTemp=L_AcDataMarker_TEXT;
break;
			case 'AcDataOutline':
			L_AcDataOutline_TEXT='(資料大綱：[設計] 檢視中資料頁開啟時顯示的視窗。資料大綱提供頁面資料模型的樹狀檢視。您可以選取及設定視窗中顯示之元件的屬性。)';
sTemp=L_AcDataOutline_TEXT;
break;
			case 'AcDataSeries':
			L_AcDataSeries_TEXT='(資料數列：在圖表中描繪的相關資料點。圖表中的每一個資料數列都有唯一的色彩或圖樣。您可以在圖表中描繪一或多個資料數列。)';
sTemp=L_AcDataSeries_TEXT;
break;
			case 'AcDetailArea':
			L_AcDetailArea_TEXT='(詳細資料區域：樞紐分析表檢視中包含詳細資料及合計欄位的部份。)';
sTemp=L_AcDetailArea_TEXT;
break;
			case 'AcDetailField':
			L_AcDetailField_TEXT='(詳細資料欄位：顯示基礎記錄來源中所有列或記錄的欄位。)';
sTemp=L_AcDetailField_TEXT;
break;
			case 'AcDetailSection':
			L_AcDetailSection_TEXT='(詳細資料區段：用於包含表單或報表的主要內文。此區段通常包含結合至記錄來源中欄位的控制項，但是它也可以包含未結合控制項，如識別欄位內容的標籤。)';
sTemp=L_AcDetailSection_TEXT;
break;
			case 'AcDropArea':
			L_AcDropArea_TEXT='(拖放區：樞紐分析表或樞紐分析圖檢視中的區域，您可以在其中拖放欄位清單中的欄位，以顯示欄位中的資料。每一個拖放區上的標籤都指出您可以在檢視中建立的欄位類型。)';
sTemp=L_AcDropArea_TEXT;
break;
			case 'AcEditControl':
			L_AcEditControl_TEXT='(編輯控制項：也稱為文字方塊，編輯控制項是使用者可以在其中輸入及編輯文字的矩形視窗。)';
sTemp=L_AcEditControl_TEXT;
break;
			case 'AcFilterArea':
			L_AcFilterArea_TEXT='(篩選區域：樞紐分析表或樞紐分析圖檢視中包含篩選欄位的部份。)';
sTemp=L_AcFilterArea_TEXT;
break;
			case 'AcFilterField':
			L_AcFilterField_TEXT='(篩選欄位：篩選區域中的欄位，您可以使用它來篩選在樞紐分析表或樞紐分析圖檢視中顯示的資料。篩選欄位與 Microsoft Excel 樞紐分析表中的分頁欄位執行相同的功能。)';
sTemp=L_AcFilterField_TEXT;
break;
			case 'AcFormFooter':
			L_AcFormFooter_TEXT='(表單尾：用於顯示使用表單、指令按鈕或未結合控制項的指示，以接受輸入。顯示在 [表單] 檢視中的表單底部及列印成品的結尾。)';
sTemp=L_AcFormFooter_TEXT;
break;
			case 'AcFormHeader':
			L_AcFormHeader_TEXT='(表單首：用於顯示表單標題、使用它的指示，或者開啟相關表單或執行其他工作的指令按鈕。顯示在 [表單] 檢視中的表單頂端及列印成品的開頭。)';
sTemp=L_AcFormHeader_TEXT;
break;
			case 'AcFunction':
			L_AcFunction_TEXT='(函數：接收輸入參數及傳回類似預存程序之結果的查詢。類型：純量函數 (多陳述式；傳回一個值)、內嵌函數 (一個陳述式；可更新的資料表值)，以及資料表 (多陳述式；資料表值)。)';
sTemp=L_AcFunction_TEXT;
break;
			case 'AcGroupFooter':
			L_AcGroupFooter_TEXT='(群組尾：用於放置諸如群組名稱或群組合計的資訊，位於一組記錄的結尾。)';
sTemp=L_AcGroupFooter_TEXT;
break;
			case 'AcGroupHeader':
			L_AcGroupHeader_TEXT='(群組首：用於放置諸如群組名稱或群組合計的資訊，位於一組記錄的開頭。)';
sTemp=L_AcGroupHeader_TEXT;
break;
			case 'AcItem':
			L_AcItem_TEXT='(項目：欄位內資料的唯一元素。如果在樞紐分析表清單或欄位清單中有可以顯示的低階項目，則展開指示器 (+) 會出現在項目的旁邊。)';
sTemp=L_AcItem_TEXT;
break;
			case 'AcLayoutPreview':
			L_AcLayoutPreview_TEXT='(版面配置預覽：使用最少的資料來顯示一般報表版面配置的報表預覽。按一下 [預覽列印] 以顯示報表中的實際資料。)';
sTemp=L_AcLayoutPreview_TEXT;
break;
			case 'AcLegend':
			L_AcLegend_TEXT='(圖例：圖表中識別指定給資料數列或類別之圖樣或色彩的方塊。)';
sTemp=L_AcLegend_TEXT;
break;
			case 'AcMacro':
			L_AcMacro_TEXT='(巨集：您可以用來自動執行工作的一個或一組動作。)';
sTemp=L_AcMacro_TEXT;
break;
			case 'AcMdeFile':
			L_AcMdeFile_TEXT='(MDE 檔案：其所有模組已編譯，且所有可編輯的原始程式碼都已移除的 Microsoft Access 資料庫 (.mdb) 檔案。)';
sTemp=L_AcMdeFile_TEXT;
break;
			case 'AcMicrosoftAccessDatabase':
			L_AcMicrosoftAccessDatabase_TEXT='(Microsoft Access 資料庫：資料及物件 (如資料表、查詢或表單) 的集合，與特定主題或目的相關。Microsoft Jet 資料庫引擎管理資料。)';
sTemp=L_AcMicrosoftAccessDatabase_TEXT;
break;
			case 'AcMicrosoftSqlServerDatabase':
			L_AcMicrosoftSqlServerDatabase_TEXT='(Microsoft SQL Server 資料庫：Microsoft SQL Server 的資料庫，由資料表、檢視表、索引、預存程序、函數及引動程序組成。)';
sTemp=L_AcMicrosoftSqlServerDatabase_TEXT;
break;
			case 'acMoveHandle':
			L_acMoveHandle_TEXT='(移動控點：在 [設計] 檢視中選取的控制項左上角顯示的大方形。您可以按住並移動控點，將控制項移至其他位置。)';
sTemp=L_acMoveHandle_TEXT;
break;
			case 'AcPageFooter':
			L_AcPageFooter_TEXT='(頁尾：用於顯示頁摘要、日期或頁碼，位於表單或報表中每一頁的底部。在表單中，只有在您列印表單時，才會顯示頁尾。)';
sTemp=L_AcPageFooter_TEXT;
break;
			case 'AcPageHeader':
			L_AcPageHeader_TEXT='(頁首：用於顯示標題、欄名、日期或頁碼，位於表單或報表中每一頁的頂端。在表單中，只有在您列印表單時，才會顯示頁首。)';
sTemp=L_AcPageHeader_TEXT;
break;
			case 'AcPivotchartView':
			L_AcPivotchartView_TEXT='(樞紐分析圖檢視：顯示資料工作表或表單中資料之圖形分析的檢視。拖曳欄位及項目，或者顯示及隱藏下拉式清單中欄位的項目，您就可以看到不同層級的詳細資料或指定版面配置。)';
sTemp=L_AcPivotchartView_TEXT;
break;
			case 'AcPivottableView':
			L_AcPivottableView_TEXT='(樞紐分析表檢視：彙總及分析資料工作表或表單中資料的檢視。拖曳欄位及項目，或者顯示及隱藏下拉式清單中欄位的項目，您就可以使用不同層級的詳細資料或組織資料。)';
sTemp=L_AcPivottableView_TEXT;
break;
			case 'AcReplicaSetTopology':
			L_AcReplicaSetTopology_TEXT='(複本集拓撲：變更在複本之間傳播的順序。拓撲決定如何將其他複本中的變更快速顯示在您的複本中。)';
sTemp=L_AcReplicaSetTopology_TEXT;
break;
			case 'AcReportFooter':
			L_AcReportFooter_TEXT='(報表尾：用於放置通常顯示在頁面下方之資訊 (如頁碼、日期及合計) 的報表區段。)';
sTemp=L_AcReportFooter_TEXT;
break;
			case 'AcReportHeader':
			L_AcReportHeader_TEXT='(報表首：用於放置諸如標題、日期或報表簡介之資訊的報表區段，位於報表開頭。)';
sTemp=L_AcReportHeader_TEXT;
break;
			case 'AcRowArea':
			L_AcRowArea_TEXT='(列區域：樞紐分析表檢視中包含列欄位的部份。)';
sTemp=L_AcRowArea_TEXT;
break;
			case 'AcRowField':
			L_AcRowField_TEXT='(列欄位：樞紐分析表檢視的列區域中的欄位。列欄位中的項目列示在檢視的左下方。內層列欄位離詳細資料區域最近；外層列欄位在內層列欄位的左方。)';
sTemp=L_AcRowField_TEXT;
break;
			case 'AcSectionBar':
			L_AcSectionBar_TEXT='(區段列：[設計] 檢視中資料頁區段上方的水平列。區段列顯示區段的類型及名稱。用於存取區段的屬性工作表。)';
sTemp=L_AcSectionBar_TEXT;
break;
			case 'AcSeriesField':
			L_AcSeriesField_TEXT='(數列欄位：在圖表的數列區域中顯示且包含數列項目的欄位。數列是一組相關的資料點。)';
sTemp=L_AcSeriesField_TEXT;
break;
			case 'AcSeriesPoint':
			L_AcSeriesPoint_TEXT='(數列點：圖表中描繪的個別資料值，由欄、列、行、圓形圖或環圈圖切片，或其他資料標記類型表示。)';
sTemp=L_AcSeriesPoint_TEXT;
break;
			case 'AcSqlVariantDataType':
			L_AcSqlVariantDataType_TEXT='(sql_variant 資料類型：在 Access 專案中，儲存數種資料類型 (text、ntext、image、timestamp 及 sql_variant 類型除外) 值的資料類型。在欄、參數、變數或使用者定義之函數的傳回值中使用該類型。)';
sTemp=L_AcSqlVariantDataType_TEXT;
break;
			case 'AcTableDataType':
			L_AcTableDataType_TEXT='(table 資料類型：在 Access 專案中，用在本機變數或使用者定義之函數的傳回值中儲存結果集，以供稍後處理的特殊資料類型。可將它用於取代儲存在 tempdb 資料庫中的暫時資料表。)';
sTemp=L_AcTableDataType_TEXT;
break;
			case 'AcTotalField':
			L_AcTotalField_TEXT='(合計欄位：彙總基礎記錄來源中資料的欄位。合計欄位可以使用彙總函數 (如 Sum 或 Count)，或者使用運算式來計算摘要值。)';
sTemp=L_AcTotalField_TEXT;
break;
			case 'AcTrigger':
			L_AcTrigger_TEXT='(引動程序：當修改特定資料表中的資料時會自動執行之預存程序的特殊表單。引動程序常被建立用於強制不同資料表中邏輯相關資料之間的參考完整性或一致性。)';
sTemp=L_AcTrigger_TEXT;
break;
			case 'AcUserDefinedDataType':
			L_AcUserDefinedDataType_TEXT='(使用者定義的資料類型：Microsoft SQL Server 資料庫中欄可以包含的資料類型定義。它由使用者使用現存的系統資料類型來定義。規則及預設值只能與使用者定義的資料類型相結合。)';
sTemp=L_AcUserDefinedDataType_TEXT;
break;
			case 'AcViewobject':
			L_AcViewobject_TEXT='(檢視表 (物件)：在 Access 專案中，基於 SQL SELECT 陳述式產生的虛擬資料表的查詢類型。例如，為了限制存取某些資料，檢視表可能只包含在兩個聯結資料表中 10 個可用欄中的 3 個。)';
sTemp=L_AcViewobject_TEXT;
break;
			case 'AcXmlAttribute':
			L_AcXmlAttribute_TEXT='(XML 屬性：新增到標籤中的資訊，以提供該標籤的相關資訊，如 &lt;ingredient quantity="2"units="cups"&gt;flour&lt;/ingredient&gt;。)';
sTemp=L_AcXmlAttribute_TEXT;
break;
			case 'AcXmlElement':
			L_AcXmlElement_TEXT='(XML 元件：在「可延伸標記語言 (XML)」文件中由開始與結束標籤分隔的資訊。範例是 &lt;LastName&gt;Davalio&lt;/LastName&gt;。)';
sTemp=L_AcXmlElement_TEXT;
break;
			case 'AcXmlEntities':
			L_AcXmlEntities_TEXT='(XML 實體：在剖析 XML 文件時，取代其他字元之字元與符號的組合，通常是那些在 XML 中有其他意義的字元及符號。例如，&amp;lt; 代表 &lt; 符號，該符號也是標籤的左括弧。)';
sTemp=L_AcXmlEntities_TEXT;
break;
			case 'defAction':
			L_defAction_TEXT='(巨集指令：巨集的基本建置區塊；可以與其他巨集指令相結合以自動執行工作的獨立指令。在其他巨集語言中，有時也稱為命令。)';
sTemp=L_defAction_TEXT;
break;
			case 'defActionArgument':
			L_defActionArgument_TEXT='(巨集指令引數：部份巨集指令需要的其他資訊。例如，受巨集指令影響的物件或執行巨集指令的特定條件。)';
sTemp=L_defActionArgument_TEXT;
break;
			case 'defActionList':
			L_defActionList_TEXT='(巨集指令清單：按一下 [巨集] 視窗中 [巨集指令] 欄中的箭號時所顯示的清單。)';
sTemp=L_defActionList_TEXT;
break;
			case 'defActionQuery':
			L_defActionQuery_TEXT='(巨集指令查詢：複製或變更資料的查詢。巨集指令查詢包括新增、刪除、產生資料表以及更新查詢。它們由 [資料庫] 視窗中其名稱旁邊的驚嘆號 (!) 所識別。)';
sTemp=L_defActionQuery_TEXT;
break;
			case 'defActionRow':
			L_defActionRow_TEXT='(巨集指令列：[巨集] 視窗上半部中的列，您在其中輸入與特定巨集或巨集群組相關的巨集名稱、巨集指令、條件以及註解。)';
sTemp=L_defActionRow_TEXT;
break;
			case 'defAdminAccount':
			L_defAdminAccount_TEXT='(管理員帳號：預設使用者帳號。您安裝 Access 時，安裝程式會自動將管理員 (Admin) 使用者帳號併入其所建立的工作群組資訊檔案中。)';
sTemp=L_defAdminAccount_TEXT;
break;
			case 'defAdminsGroup':
			L_defAdminsGroup_TEXT='(Admins 群組：系統管理員群組帳號，它保留了工作群組使用之所有資料庫的完整權限。安裝程式會自動將預設管理員使用者帳號新增至 Admins 群組。)';
sTemp=L_defAdminsGroup_TEXT;
break;
			case 'defAdvancedFilterSort':
			L_defAdvancedFilterSort_TEXT='(進階篩選/排序視窗：您可以在其中建立篩選的視窗。您在篩選設計格線中輸入篩選條件運算式，以便將開啟表單或資料工作表中的記錄限制為符合篩選條件的記錄子集。)';
sTemp=L_defAdvancedFilterSort_TEXT;
break;
			case 'defAggregateFunction':
			L_defAggregateFunction_TEXT='(聚合函數：您用於計算合計的函數，如 Sum、Count、Avg 或 Var。)';
sTemp=L_defAggregateFunction_TEXT;
break;
			case 'defAppendQuery':
			L_defAppendQuery_TEXT='(新增查詢：將查詢結果集中的記錄新增到現存資料表結尾的動作查詢。)';
sTemp=L_defAppendQuery_TEXT;
break;
			case 'defApplicationBackground':
			L_defApplicationBackground_TEXT='(應用程式背景：應用程式視窗的背景區域。在 Access 中，這是 [資料庫] 視窗或任何其他開啟視窗後的螢幕範圍，但是它內含在 Access 應用程式視窗中。)';
sTemp=L_defApplicationBackground_TEXT;
break;
			case 'defAttachedTable':
			L_defAttachedTable_TEXT='(連結資料表：儲存在開放式資料庫外檔案中的資料表，Access 可以從中存取記錄。您可以新增、刪除及編輯連結資料表中的記錄，但是您無法變更其結構。)';
sTemp=L_defAttachedTable_TEXT;
break;
			case 'defAttachLink':
			L_defAttachLink_TEXT='(連結 (資料表)：與其他應用程式中的資料建立連接的動作，這樣您可以檢視及編輯原始應用程式及 Access 中的資料。)';
sTemp=L_defAttachLink_TEXT;
break;
			case 'defAutoformat':
			L_defAutoformat_TEXT='(自動格式設定：決定表單或報表中控制項及區段外觀的格式集合。)';
sTemp=L_defAutoformat_TEXT;
break;
			case 'defAutomaticLink':
			L_defAutomaticLink_TEXT='(自動連結：Access 中 OLE 物件到 OLE 伺服器的連結，當物件檔案中的資訊變更時，會自動更新 Access 中的物件。)';
sTemp=L_defAutomaticLink_TEXT;
break;
			case 'defAutoNumber':
			L_defAutoNumber_TEXT='(AutoNumber 資料類型：在 Microsoft Access 資料庫中，在資料表中新增記錄時，自動為每一筆記錄儲存唯一編號的欄位資料類型。可以產生三種數字類型：序號、隨機亂數及複製編號。)';
sTemp=L_defAutoNumber_TEXT;
break;
			case 'defBitMask':
			L_defBitMask_TEXT='(位元遮罩：與處理位元的運算子 (And、Eqv、Imp、Not、Or 及 Xor) 搭配使用的值，用來測試、設定或重設處理位元之欄位值中個別位元的狀態。)';
sTemp=L_defBitMask_TEXT;
break;
			case 'defBookmark':
			L_defBookmark_TEXT='(書籤：包含識別現行記錄之二進位字串的表單或 Recordset 物件的屬性。)';
sTemp=L_defBookmark_TEXT;
break;
			case 'defBoundColumn':
			L_defBoundColumn_TEXT='(結合欄：清單方塊、下拉式方塊或下拉式清單方塊中，結合至欄位的欄，其中欄位由控制項的 ControlSource 屬性所指定。)';
sTemp=L_defBoundColumn_TEXT;
break;
			case 'defBoundField':
			L_defBoundField_TEXT='(結合控制項：用於表單、報表、或者是用來顯示或修改表單資料的資料頁、查詢或 SQL 陳述式的控制項。控制項的 ControlSource 屬性會儲存與控制項相結合的欄位名稱。)';
sTemp=L_defBoundField_TEXT;
break;
			case 'defBoundObjectFrame':
			L_defBoundObjectFrame_TEXT='(結合物件框：表單或報表上用於顯示及處理儲存在資料表中 OLE 物件的控制項。)';
sTemp=L_defBoundObjectFrame_TEXT;
break;
			case 'defBuilder':
			L_defBuilder_TEXT='(建立幫手：簡化工作的 Access 工具。例如，您可以使用 [運算式建立幫手] 來快速建立複雜的運算式。)';
sTemp=L_defBuilder_TEXT;
break;
			case 'defBuildingApplications':
			L_defBuildingApplications_TEXT='(Microsoft Access: 使用表格及報告建立應用程式 包含有關 Visual Basic、安全性、ActiveX 控制項及傳送 Access 應用程式的其他資訊。相關資訊可在 www.microsoft.com 的 Microsoft 網站上找到。)';
sTemp=L_defBuildingApplications_TEXT;
break;
			case 'defBuiltInToolbar':
			L_defBuiltInToolbar_TEXT='(內建工具列：作為 Access 一部份安裝在電腦上的工具列。相對而言，自訂工具列是您為自己的應用程式而建立的工具列。)';
sTemp=L_defBuiltInToolbar_TEXT;
break;
			case 'defByteDataType':
			L_defByteDataType_TEXT='(Byte 資料類型：Access 資料庫資料類型，用於保留從 0 到 255 的小正整數。)';
sTemp=L_defByteDataType_TEXT;
break;
			case 'defCalculatedControl':
			L_defCalculatedControl_TEXT='(計算控制項：在表單、報表或資料頁上用於顯示運算式結果的控制項。每次運算式所使用的任意值發生變更時，都會重算結果。)';
sTemp=L_defCalculatedControl_TEXT;
break;
			case 'defCalculatedField':
			L_defCalculatedField_TEXT='(計算欄位：在查詢中定義的欄位，顯示運算式的結果而不是顯示儲存的資料。每次運算式中的值變更時都會重新計算值。)';
sTemp=L_defCalculatedField_TEXT;
break;
			case 'defCallTree':
			L_defCallTree_TEXT='(呼叫樹狀結構：可能由正在執行程式碼的模組中之任何程序所呼叫的所有模組。)';
sTemp=L_defCallTree_TEXT;
break;
			case 'defCascadeDelete':
			L_defCascadeDelete_TEXT='(串接刪除：由於資料表之間強制參考完整性的關係，在刪除主要資料表中的記錄時，會同時刪除相關資料表中的所有相關記錄。)';
sTemp=L_defCascadeDelete_TEXT;
break;
			case 'defCascadeUpdate':
			L_defCascadeUpdate_TEXT='(串接更新：由於資料表之間強制參考完整性的關係，在變更主要資料表中的記錄時，會同時更新相關資料表中的所有相關記錄。)';
sTemp=L_defCascadeUpdate_TEXT;
break;
			case 'defCascadingEvent':
			L_defCascadingEvent_TEXT='(串接事件：由呼叫自身的事件程序直接或間接導致的一連串事件；也稱為事件串接或遞迴。請謹慎使用串接事件，因為它們常導致堆疊溢出或其他執行階段錯誤。)';
sTemp=L_defCascadingEvent_TEXT;
break;
			case 'defChannelNumber':
			L_defChannelNumber_TEXT='(通道號碼：對應開放式「動態資料交換 (DDE)」通道的整數。通道號碼是由 Microsoft Windows 95 或更新版本指定，使用 DDEInitiate 函數建立，並由其他 DDE 函數及陳述式使用。)';
sTemp=L_defChannelNumber_TEXT;
break;
			case 'defCheckBox':
			L_defCheckBox_TEXT='(核取方塊：指示是否已選取選項的控制項。 如果選項已選取，則方塊中會出現核取符號。)';
sTemp=L_defCheckBox_TEXT;
break;
			case 'defClassName':
			L_defClassName_TEXT='(類別名稱：用來指代類別模組的名稱。如果類別模組為表單或報告模組，則類別名稱會以模組類型開頭，例如，Form_OrderForm。)';
sTemp=L_defClassName_TEXT;
break;
			case 'defClassNameOLE':
			L_defClassNameOLE_TEXT='(類別名稱 (OLE)：用來指代 Visual Basic 中 OLE 物件的預先定義名稱。它包括用來建立 OLE 物件的應用程式名稱、物件類型，以及應用程式的版本號碼 (視情況而定)。範例：Excel.Sheet。)';
sTemp=L_defClassNameOLE_TEXT;
break;
			case 'defCodeStub':
			L_defCodeStub_TEXT='(程式碼端：定義程序起點和終點的 Visual Basic 程式碼片段。)';
sTemp=L_defCodeStub_TEXT;
break;
			case 'defColumn':
			L_defColumn_TEXT='(欄：資料庫資料表中儲存特定類型資料的位置。它亦是資料工作表中欄位的視覺呈現方式，以及 Access 資料庫中查詢設計格線或篩選設計格線的視覺呈現方式。)';
sTemp=L_defColumn_TEXT;
break;
			case 'defcolumnselector':
			L_defcolumnselector_TEXT='(欄選取器：位於欄頂端的水平列。您可以按一下欄選取器，來選取查詢設計格線或篩選設計格線中的整個欄。)';
sTemp=L_defcolumnselector_TEXT;
break;
			case 'defComboBox':
			L_defComboBox_TEXT='(下拉式方塊：表單上使用的控制項，提供清單方塊及文字方塊的組合功能。您可以鍵入值，或按一下該控制項來顯示清單並從清單選取項目。)';
sTemp=L_defComboBox_TEXT;
break;
			case 'defCommandButton':
			L_defCommandButton_TEXT='(指令按鈕：執行巨集、呼叫 Visual Basic 函數，或執行事件程序的控制項。它在其他應用程式中有時稱為按鈕。)';
sTemp=L_defCommandButton_TEXT;
break;
			case 'defComparisonOperator':
			L_defComparisonOperator_TEXT='(比較運算子：用來比較兩個值或運算式的運算元，例如，(小於)、(大於) 及 = (等於)。)';
sTemp=L_defComparisonOperator_TEXT;
break;
			case 'defCompoundControl':
			L_defCompoundControl_TEXT='(複合控制項：控制項及附加標籤，如帶附加標籤的文字方塊。)';
sTemp=L_defCompoundControl_TEXT;
break;
			case 'defConnectionString':
			L_defConnectionString_TEXT='(連接字串：用來開啟外部資料庫的字串運算式。)';
sTemp=L_defConnectionString_TEXT;
break;
			case 'defContainerApplication':
			L_defContainerApplication_TEXT='(OLE 容器：包含其他應用程式之連結或內嵌 OLE 物件的應用程式。例如，如果 Access 資料庫中的 OLE 物件包含 Microsoft Excel 工作表，則 Access 為 OLE 容器。)';
sTemp=L_defContainerApplication_TEXT;
break;
			case 'defContinuousForm':
			L_defContinuousForm_TEXT='(連續表單：在螢幕上 [表單] 檢視中顯示多筆記錄的表單。)';
sTemp=L_defContinuousForm_TEXT;
break;
			case 'defControlContainingHyperlink':
			L_defControlContainingHyperlink_TEXT='(包含超連結的控制項：可讓使用者跳到文件、網頁或物件的控制項，例如，結合到包含超連結之欄位的文字方塊。)';
sTemp=L_defControlContainingHyperlink_TEXT;
break;
			case 'defCrosstabQuery':
			L_defCrosstabQuery_TEXT='(交叉資料表查詢：該查詢計算記錄總合、平均值、計數或其他類型合計，然後按兩種類型的資訊將結果分組，一組在資料工作表左側，另一組在頂端。)';
sTemp=L_defCrosstabQuery_TEXT;
break;
			case 'defCurrencyDataType':
			L_defCurrencyDataType_TEXT='(Currency 資料類型：在 Microsoft Access 資料庫中極講求精準的資料類型，有關金錢的計算或定點計算。)';
sTemp=L_defCurrencyDataType_TEXT;
break;
			case 'defCurrentRecord':
			L_defCurrentRecord_TEXT='(目前記錄：在記錄集中您可以修改或從中擷取資料的記錄。記錄集中僅有一筆現有的記錄，不過記錄集也可能沒有現有的記錄，例如，當記錄從動態資料表類型的記錄集中刪除後，就沒有現有的記錄。)';
sTemp=L_defCurrentRecord_TEXT;
break;
			case 'defCustomPropertiesDialog':
			L_defCustomPropertiesDialog_TEXT='(自訂屬性對話方塊：可讓使用者設定 ActiveX 控制項屬性的自訂屬性工作表。)';
sTemp=L_defCustomPropertiesDialog_TEXT;
break;
			case 'defCustomToolbar':
			L_defCustomToolbar_TEXT='(自訂工具列：您為應用程式建立的工具列。相反地，如果電腦上安裝了 Access，則內建工具列是 Access 的一部份。)';
sTemp=L_defCustomToolbar_TEXT;
break;
			case 'defDatabaseObjects':
			L_defDatabaseObjects_TEXT='(資料庫物件：Access 資料庫包含物件，如資料表、查詢、表單、報告、頁面、巨集及模組。Access 專案包含物件，如表單、報告、頁、巨集及模組。)';
sTemp=L_defDatabaseObjects_TEXT;
break;
			case 'defDatabaseWindow':
			L_defDatabaseWindow_TEXT='(資料庫視窗：當您開啟 Access 資料庫或 Access 專案時顯示的視窗。它會顯示建立新資料庫物件及開啟現有物件的捷徑。)';
sTemp=L_defDatabaseWindow_TEXT;
break;
			case 'defDataDefinitionQuery':
			L_defDataDefinitionQuery_TEXT='(資料定義查詢：包含資料定義語言 (DDL) 陳述式之 SQL 特定的查詢。這些陳述式可讓您建立或變更資料庫中的物件。)';
sTemp=L_defDataDefinitionQuery_TEXT;
break;
			case 'defDataItem':
			L_defDataItem_TEXT='(資料項目：可在 (動態資料交換) DDE 通道上傳輸之應用程式特定的資料片段。)';
sTemp=L_defDataItem_TEXT;
break;
			case 'defDatasheet':
			L_defDatasheet_TEXT='(資料工作表：以列和欄格式顯示之資料表、表單、查詢、檢視或預存程序中的資料。)';
sTemp=L_defDatasheet_TEXT;
break;
			case 'defDatasheetView':
			L_defDatasheetView_TEXT='(資料工作表檢視：以列和欄格式顯示資料表、表單、查詢、檢視或預存程序中資料的視窗。在 [資料工作表] 檢視中，您可以編輯欄位、新增和刪除資料，以及搜尋資料。)';
sTemp=L_defDatasheetView_TEXT;
break;
			case 'defDateDataType':
			L_defDateDataType_TEXT='(Date/Time 資料類型：用來保存日期及時間資訊的 Access 資料庫資料類型。)';
sTemp=L_defDateDataType_TEXT;
break;
			case 'defDeclarationsSection':
			L_defDeclarationsSection_TEXT='(宣告區段：包含套用到模組中每個程序之宣告的模組區段。它可以包含動態連結庫中變數、常數、使用者定義的資料類型及外部程序的宣告。)';
sTemp=L_defDeclarationsSection_TEXT;
break;
			case 'defDefaultProperty':
			L_defDefaultProperty_TEXT='(預設屬性：您可以為控制項設定的屬性，以便每次建立該類型的新控制項時，此屬性的值均相同。)';
sTemp=L_defDefaultProperty_TEXT;
break;
			case 'defDefaultValue':
			L_defDefaultValue_TEXT='(預設值：您新增新記錄時自動在欄位或控制項中輸入的值。您可以接受預設值，或鍵入值來覆寫。)';
sTemp=L_defDefaultValue_TEXT;
break;
			case 'defDeleteQuery':
			L_defDeleteQuery_TEXT='(刪除查詢：將符合您指定篩選條件的列從一或多個資料表移除的查詢 (SQL 陳述式)。)';
sTemp=L_defDeleteQuery_TEXT;
break;
			case 'defDesignView':
			L_defDesignView_TEXT='(設計檢視：顯示下列資料庫物件之設計的視窗：資料表、查詢、表單、報告、巨集及資料頁。在 [設計] 檢視中，您可以建立新資料庫物件，以及修改現有物件的設計。)';
sTemp=L_defDesignView_TEXT;
break;
			case 'defDisabledField':
			L_defDisabledField_TEXT='(停用的控制項：表單或資料頁上以暗色顯示的控制項。停用的控制項無法取得焦點，且不會回應滑鼠按鍵動作。)';
sTemp=L_defDisabledField_TEXT;
break;
			case 'defDLL':
			L_defDLL_TEXT='(動態連結庫：可以從 Visual Basic 程序呼叫、且在執行時間載入並連結到應用程式的一組常式。)';
sTemp=L_defDLL_TEXT;
break;
			case 'defDomain':
			L_defDomain_TEXT='(網域：資料表、查詢或 SQL 運算式定義的一組記錄。網域聚合函數會傳回特定網域或記錄集的相關統計資訊。)';
sTemp=L_defDomain_TEXT;
break;
			case 'defDomainFunction':
			L_defDomainFunction_TEXT='(網域聚合函數：計算記錄集 (網域) 的統計資料時使用的函數 (如 DAvg 或 DMax)。)';
sTemp=L_defDomainFunction_TEXT;
break;
			case 'defEcho':
			L_defEcho_TEXT='(回應：巨集執行時 Access 更新或重繪螢幕的程序。)';
sTemp=L_defEcho_TEXT;
break;
			case 'defEmbed':
			L_defEmbed_TEXT='(內嵌：插入其他應用程式之 OLE 物件的複本。物件的來源 (稱為 OLE 伺服器) 可以是支援物件連結及內嵌的任何應用程式。對內嵌物件的變更不會反映在原始物件中。)';
sTemp=L_defEmbed_TEXT;
break;
			case 'defEnabledDatabase':
			L_defEnabledDatabase_TEXT='(啟用的資料庫：在 Access 2000 或更新版本中開啟，但不轉換格式的舊版資料庫。若要變更資料庫的設計，您必須在建立它的 Access 版本中開啟之。)';
sTemp=L_defEnabledDatabase_TEXT;
break;
			case 'defExclusive':
			L_defExclusive_TEXT='(獨佔模式：對網路上共用資料庫中資料的存取類型。如果您以獨佔模式開啟資料庫，其他人就無法開啟該資料庫。)';
sTemp=L_defExclusive_TEXT;
break;
			case 'defExpressionBuilder':
			L_defExpressionBuilder_TEXT='(運算式建立幫手：可用來建立運算式的 Access 工具。它包含您可以選取的通用運算式清單。)';
sTemp=L_defExpressionBuilder_TEXT;
break;
			case 'defExternalDatabase':
			L_defExternalDatabase_TEXT='(外部資料庫：要連結或匯入到現用資料庫的資料表來源，或要匯出之資料表的目的地。)';
sTemp=L_defExternalDatabase_TEXT;
break;
			case 'defExternalTable':
			L_defExternalTable_TEXT='(外部資料表：開放式 Access 資料庫或 Access 專案外部的資料表。)';
sTemp=L_defExternalTable_TEXT;
break;
			case 'defFieldDataType':
			L_defFieldDataType_TEXT='(field data 資料類型：用來決定可以儲存之資料類型的欄位特性。例如，資料類型為 Text 的欄位可以儲存包含文字或數字字元的資料，但 Number 欄位僅能儲存數字資料。)';
sTemp=L_defFieldDataType_TEXT;
break;
			case 'defFieldList':
			L_defFieldList_TEXT='(欄位清單：列示基礎記錄來源或資料庫物件中所有欄位 (資料頁 [設計] 檢視中的除外) 的視窗。在資料頁 [設計] 檢視中，它會列示基礎資料庫中的所有記錄來源及其欄位。)';
sTemp=L_defFieldList_TEXT;
break;
			case 'defFieldSelector':
			L_defFieldSelector_TEXT='(欄位選取器：您可以按一下以選取資料工作表中整個欄的小方塊或列。)';
sTemp=L_defFieldSelector_TEXT;
break;
			case 'defFilter':
			L_defFilter_TEXT='(篩選：套用至資料以顯示資料的子集合或排序資料的一組篩選條件。在 Access 中，您可以使用篩選技術 (如「依選取範圍篩選」和「依表單篩選」) 來篩選資料。)';
sTemp=L_defFilter_TEXT;
break;
			case 'defFilterByForm':
			L_defFilterByForm_TEXT='(依表單篩選：一種篩選資料的技術，使用帶有空白欄位的目前表單或資料工作表版本，您可以在空白欄位中鍵入想要篩選記錄包含的值。)';
sTemp=L_defFilterByForm_TEXT;
break;
			case 'defFilterBySelection':
			L_defFilterBySelection_TEXT='(依選取範圍篩選：篩選表單、資料工作表或資料頁中記錄的技術，您可以使用此技術僅擷取包含所選值的記錄。)';
sTemp=L_defFilterBySelection_TEXT;
break;
			case 'defFilterForInput':
			L_defFilterForInput_TEXT='(輸入的篩選：一種篩選記錄的技術，使用您輸入的值或運算式來僅尋找包含該值或滿足運算式的記錄。)';
sTemp=L_defFilterForInput_TEXT;
break;
			case 'defFixedWidthText':
			L_defFixedWidthText_TEXT='(固定寬度的文字檔案：包含資料的檔案，其中每個欄位的寬度都是固定的。)';
sTemp=L_defFixedWidthText_TEXT;
break;
			case 'defFloatingToolbar':
			L_defFloatingToolbar_TEXT='(浮動：可以作為本身視窗以自由移動。浮動視窗總會位於頂端。工具列、功能表列、工具箱及調色盤都是浮動的。。)';
sTemp=L_defFloatingToolbar_TEXT;
break;
			case 'defForeignKey':
			L_defForeignKey_TEXT='(外部索引：參照其他資料表中主索引欄位的一或多個資料表欄位 (欄)。外部索引會指示資料表相關的方式。)';
sTemp=L_defForeignKey_TEXT;
break;
			case 'defForeignTable':
			L_defForeignTable_TEXT='(外部資料表：包含的外部索引欄位 (如「客戶編號」) 是資料庫中另一個資料表 (如「客戶」) 的主索引欄位，且通常處於一對多關係中「多」方的資料表 (如「客戶訂單」)。)';
sTemp=L_defForeignTable_TEXT;
break;
			case 'defForm':
			L_defForm_TEXT='(表單：一種 Access 資料庫物件，您在該物件上放置控制項來採取動作或輸入、顯示及編輯欄位中的資料。)';
sTemp=L_defForm_TEXT;
break;
			case 'defFormat':
			L_defFormat_TEXT='(格式：指定顯示及列印資料的方式。Access 資料庫會提供特定資料類型的標準格式，就像 Access 專案為對等的 SQL 資料類型提供標準格式一樣。您還可以建立自訂格式。)';
sTemp=L_defFormat_TEXT;
break;
			case 'defFormModule':
			L_defFormModule_TEXT='(表單模組：該模組包含特定表單或其控制項上發生的事件所觸發之所有事件程序的代碼。)';
sTemp=L_defFormModule_TEXT;
break;
			case 'defFormProperties':
			L_defFormProperties_TEXT='(表單屬性：影響表單外觀或行為的屬性。例如，DefaultView 屬性是確定表單是否會自動在 [表單] 檢視或 [資料工作表] 檢視中開啟的表單屬性。)';
sTemp=L_defFormProperties_TEXT;
break;
			case 'defFormSelector':
			L_defFormSelector_TEXT='(表單選取器：多個尺規相交所在的方塊 (在 [設計] 檢視中表單的左上角)。使用該方塊可以執行表單層級的作業，如選取表單。)';
sTemp=L_defFormSelector_TEXT;
break;
			case 'defFormView':
			L_defFormView_TEXT='([表單] 檢視：顯示表單以顯示或接受資料的視窗。[表單] 檢視是在資料表中新增及修改資料的主要方法。您也可以在此檢視中變更表單的設計。)';
sTemp=L_defFormView_TEXT;
break;
			case 'defFormWindow':
			L_defFormWindow_TEXT='([表單] 視窗：您使用 [設計] 檢視、[表單] 檢視、[資料工作表] 檢視或 [預覽列印] 中的表單時所在的視窗。)';
sTemp=L_defFormWindow_TEXT;
break;
			case 'defFrontBackEndApp':
			L_defFrontBackEndApp_TEXT='(前端/後端應用程式：一個應用程式，其組成部分為：包含資料表的「後端」資料庫檔案，以及所有其他包含「後端」資料表連結之資料庫物件的「前端」資料庫檔案複本。)';
sTemp=L_defFrontBackEndApp_TEXT;
break;
			case 'defFunctionProcedure':
			L_defFunctionProcedure_TEXT='(Function 程序：傳回值且可用於運算式的程序。您使用 Function 陳述式宣告函數，且使用 End Function 陳述式來結束它。)';
sTemp=L_defFunctionProcedure_TEXT;
break;
			case 'defGlobalMenuBar':
			L_defGlobalMenuBar_TEXT='(全域功能表列：一種特殊的自訂功能表列，它會取代應用程式所有視窗中的內建功能表列 (除非您已經為表單或報告指定自訂功能表列的位置)。)';
sTemp=L_defGlobalMenuBar_TEXT;
break;
			case 'defGlobalShortcutMenu':
			L_defGlobalShortcutMenu_TEXT='(全域快顯功能表：一種自訂快顯功能表，它會取代下列物件的內建快顯功能表：資料表及查詢資料工作表中的欄位；[表單] 檢視、[資料工作表] 檢視及 [預覽列印] 中的表單及表單控制項；以及 [預覽列印] 中的報告。)';
sTemp=L_defGlobalShortcutMenu_TEXT;
break;
			case 'defGlobalVariable':
			L_defGlobalVariable_TEXT='(公用變數：您在模組的「宣告」區段使用 Public 關鍵字宣告的變數。資料庫每個模組中的所有程序可以共用一個公用變數。)';
sTemp=L_defGlobalVariable_TEXT;
break;
			case 'defGraph':
			L_defGraph_TEXT='(圖表：表單、報告或資料頁中資料的圖形呈現方式。)';
sTemp=L_defGraph_TEXT;
break;
			case 'defGrid':
			L_defGrid_TEXT='(格線 ([設計] 檢視)：垂直及水平點虛線和實線的排列方式，幫助您在設計表單、報告或資料頁時準確放置控制項。)';
sTemp=L_defGrid_TEXT;
break;
			case 'defGroupAccount':
			L_defGroupAccount_TEXT='(群組帳號：工作群組中使用者帳號的集合，由群組名稱及個人識別碼 (PID) 識別。指派給群組的權限可套用到群組中的所有使用者。)';
sTemp=L_defGroupAccount_TEXT;
break;
			case 'defGroupLevel':
			L_defGroupLevel_TEXT='(群組層級：報告或資料頁中的群組在其他群組中的巢狀深度。當一組記錄按多個欄位、運算式或群組記錄來源分組時，群組就會形成巢狀結構。)';
sTemp=L_defGroupLevel_TEXT;
break;
			case 'defHandle':
			L_defHandle_TEXT='(控點：您用來識別及存取 [表單] 或 [報告] 視窗的唯一 Integer 值 (32 位元環境中的 Long)。使用 hWnd 屬性可以傳回控點。)';
sTemp=L_defHandle_TEXT;
break;
			case 'defHyperlinkAddress':
			L_defHyperlinkAddress_TEXT='(超連結位址：到目的地 (如物件、文件或網頁) 的路徑。超連結位址可以是 URL (到網際網路或內部網路網站的位址) 或 UNC 網路路徑 (區域網路上檔案的位址)。)';
sTemp=L_defHyperlinkAddress_TEXT;
break;
			case 'defHyperlinkDataType':
			L_defHyperlinkDataType_TEXT='(Hyperlink 資料類型：儲存超連結位址之 Access 資料庫欄位的資料類型。位址可以有多達 4 個部份，且使用下列格式撰寫：displaytext#address#subaddress#。)';
sTemp=L_defHyperlinkDataType_TEXT;
break;
			case 'defIDCHTXfiles':
			L_defIDCHTXfiles_TEXT='(IDC/HTX 檔案：Microsoft Internet Information Server 使用 IDC 檔案及 HTX 檔案從 ODBC 資料來源擷取資料，並將之格式化成 HTML 文件。)';
sTemp=L_defIDCHTXfiles_TEXT;
break;
			case 'defIdentifier':
			L_defIdentifier_TEXT='(識別元 (運算式)：參照欄位、控制項或屬性值的運算式元素。例如，Forms![Orders]![OrderID] 是參照 Orders 表單上 OrderID 控制項值的識別元。)';
sTemp=L_defIdentifier_TEXT;
break;
			case 'defImageFrame':
			L_defImageFrame_TEXT='(圖像控制項：用來顯示表單、報告或資料頁上圖片的控制項。)';
sTemp=L_defImageFrame_TEXT;
break;
			case 'defImport':
			L_defImport_TEXT='(匯入：將文字檔案、試算表或資料庫資料表的資料複製到 Access 資料表。您可以使用匯入的資料建立新資料表，或將之附加 (新增) 到具有相符資料結構的現有資料表中。)';
sTemp=L_defImport_TEXT;
break;
			case 'defImportExportSpec':
			L_defImportExportSpec_TEXT='(匯入/匯出規格：儲存 Access 匯入或匯出固定寬度或分隔文字檔案所需資訊的規格。)';
sTemp=L_defImportExportSpec_TEXT;
break;
			case 'defIndex':
			L_defIndex_TEXT='(索引：根據索引值加速資料表搜尋及排序，且可以強迫資料表中的列具有唯一性的功能。資料表的主索引會自動編排索引。部份欄位可能因資料類型而無法編排索引。)';
sTemp=L_defIndex_TEXT;
break;
			case 'defIndexesWindow':
			L_defIndexesWindow_TEXT='(索引視窗：在 Access 資料庫中，您可以檢視或編輯資料表的索引，或建立多欄位索引的視窗。)';
sTemp=L_defIndexesWindow_TEXT;
break;
			case 'defInPlaceActivation':
			L_defInPlaceActivation_TEXT='(就地啟動：從欄位或控制項中啟動 OLE 物件的 OLE 伺服器。例如，您可以藉由連按兩下控制項來播放控制項中的 waveform 音效 (.wav) 檔案。)';
sTemp=L_defInPlaceActivation_TEXT;
break;
			case 'defInputMask':
			L_defInputMask_TEXT='(輸入遮罩：一種格式，包含文字顯示字元 (如括弧、句點及連字號) 及遮罩字元 (指定輸入資料的位置、容許的資料類型及字元數)。)';
sTemp=L_defInputMask_TEXT;
break;
			case 'defInstance':
			L_defInstance_TEXT='(實例：從包含其定義的類別中建立的物件。例如，表單類別的多個實例會共用相同的代碼，且會使用設計表單類別時所用的控制項來載入。)';
sTemp=L_defInstance_TEXT;
break;
			case 'defIntegerDataType':
			L_defIntegerDataType_TEXT='(Integer 資料類型：保留整數的基本資料類型。Integer 變數儲存為 16 位元 (2 位元組) 數字，其值範圍從 -32,768 到 32,767。)';
sTemp=L_defIntegerDataType_TEXT;
break;
			case 'defIntrinsicConstant':
			L_defIntrinsicConstant_TEXT='(內部常數：由 Access、VBA、ADO 或 DAO 提供的常數。藉由按一下其中一個程式庫中的 &lt;globals&gt;，便可在 [物件瀏覽器] 中找到這些常數。)';
sTemp=L_defIntrinsicConstant_TEXT;
break;
			case 'defKeyboardHandler':
			L_defKeyboardHandler_TEXT='(鍵盤控制碼：確定及回應使用者所按之按鍵或組合鍵的代碼。)';
sTemp=L_defKeyboardHandler_TEXT;
break;
			case 'defLabel':
			L_defLabel_TEXT='(標籤：在表單、報告或資料頁上顯示敘述文字 (如標題、標號或指示) 的控制項。標籤可能或可能不連接其他控制項。)';
sTemp=L_defLabel_TEXT;
break;
			case 'defLeftOuterJoin':
			L_defLeftOuterJoin_TEXT='(左外部連接：一種外部連接，在這種結合中，查詢的 SQL 陳述式中 LEFT JOIN 作業左側的所有記錄，都會新增到查詢結果中，即使右側資料表中的連接欄位沒有符合的值也一樣。)';
sTemp=L_defLeftOuterJoin_TEXT;
break;
			case 'defLibraryDatabase':
			L_defLibraryDatabase_TEXT='(程式庫資料庫：您可以從任何應用程式呼叫之程序及資料庫物件的集合。若要使用程式庫中的項目，您必須先建立現用資料庫到程式庫資料庫的參照。)';
sTemp=L_defLibraryDatabase_TEXT;
break;
			case 'defLink':
			L_defLink_TEXT='(OLE/DDE 連結：OLE 物件與其 OLE 伺服器之間，或「動態資料交換 (DDE)」來源文件與目的文件之間的連接。)';
sTemp=L_defLink_TEXT;
break;
			case 'defListIndex':
			L_defListIndex_TEXT='(清單索引：清單中項目的序號，第一個項目以 0 開始，第二個項目為 1，依此類推。)';
sTemp=L_defListIndex_TEXT;
break;
			case 'defLocked':
			L_defLocked_TEXT='(鎖定：記錄、記錄集或資料庫的狀態，讓其對所有使用者都是唯讀的 (目前對其進行修改的使用者除外)。)';
sTemp=L_defLocked_TEXT;
break;
			case 'defLookupField':
			L_defLookupField_TEXT='(查閱欄位：在 Access 資料庫中的表單或報告上使用的欄位，顯示從資料表或查詢擷取的值清單，或儲存值的靜態集。)';
sTemp=L_defLookupField_TEXT;
break;
			case 'defMacroGroup':
			L_defMacroGroup_TEXT='(巨集群組：以單一巨集名稱儲存在一起的相關巨集集合。通常簡稱該集合為巨集。)';
sTemp=L_defMacroGroup_TEXT;
break;
			case 'defMainForm':
			L_defMainForm_TEXT='(主表單：包含一或多個子表單的表單。)';
sTemp=L_defMainForm_TEXT;
break;
			case 'defMakeTableQuery':
			L_defMakeTableQuery_TEXT='(產生資料表查詢：一項查詢 (SQL 陳述式)，它會建立新資料表，然後複製現有資料表的記錄以建立記錄 (列)。)';
sTemp=L_defMakeTableQuery_TEXT;
break;
			case 'defManualLink':
			L_defManualLink_TEXT='(手動連結：要求您在來源文件中的資料變更後更新資料的連結。)';
sTemp=L_defManualLink_TEXT;
break;
			case 'defManyToManyRelationship':
			L_defManyToManyRelationship_TEXT='(多對多關係：兩個資料表之間的關聯，其中一個資料表中的某筆記錄可能與另一個資料表中的多筆記錄相關。若要建立關聯，請建立第三個資料表，然後將另兩個資料表中的主索引欄位新增到此資料表。)';
sTemp=L_defManyToManyRelationship_TEXT;
break;
			case 'defMemoDataType':
			L_defMemoDataType_TEXT='(Memo 資料類型：在 Microsoft Access 資料庫中，此為一種欄位資料類型。Memo 欄位可包含多達 65,535 個字元。)';
sTemp=L_defMemoDataType_TEXT;
break;
			case 'defModuleLevel':
			L_defModuleLevel_TEXT='(模組層級：描述在程序外部或模組的「宣告」區段宣告的任何變數或常數。在模組層級宣告的變數或常數可供模組中的所有程序使用。)';
sTemp=L_defModuleLevel_TEXT;
break;
			case 'defModuleLevelVariable':
			L_defModuleLevelVariable_TEXT='(模組層級變數：使用 Private 關鍵字在模組的「宣告」區段宣告的變數。這些變數可供模組中的所有程序使用。)';
sTemp=L_defModuleLevelVariable_TEXT;
break;
			case 'defMoveMode':
			L_defMoveMode_TEXT='(移動模式：您可以使用左及右方向鍵在 [資料工作表] 檢視中移動欄的模式。)';
sTemp=L_defMoveMode_TEXT;
break;
			case 'defMSAccessObject':
			L_defMSAccessObject_TEXT='(Microsoft Access 物件：Access 定義的一種物件，該物件與 Access、其介面或應用程式表單、報告及資料頁相關，且您可以使用它來設計用於輸入及顯示資料的介面元素。)';
sTemp=L_defMSAccessObject_TEXT;
break;
			case 'defMSJetDatabaseEngine':
			L_defMSJetDatabaseEngine_TEXT='(Microsoft Jet 資料庫引擎：Access 資料庫系統中擷取及儲存使用者和系統資料庫中資料的部份。可以將它看作其上建立資料庫系統 (如 Access) 的資料管理程式。)';
sTemp=L_defMSJetDatabaseEngine_TEXT;
break;
			case 'defMultiUserDatabase':
			L_defMultiUserDatabase_TEXT='(多使用者 (共用) 資料庫：允許多個使用者同時存取及修改相同資料集的資料庫。)';
sTemp=L_defMultiUserDatabase_TEXT;
break;
			case 'defNavigationButtons':
			L_defNavigationButtons_TEXT='(導覽按鈕：您用來導覽記錄的按鈕。它們位於 [資料工作表] 檢視及 [表單] 檢視視窗的左下角。在預覽時，您也可以使用它們來導覽文件頁。)';
sTemp=L_defNavigationButtons_TEXT;
break;
			case 'defNormalize':
			L_defNormalize_TEXT='(標準化：透過有效的資料表設計將關聯式資料庫中的資訊重複減至最小。您可以使用 [資料表分析精靈] 來標準化資料庫。)';
sTemp=L_defNormalize_TEXT;
break;
			case 'defNull':
			L_defNull_TEXT='(Null：您可以在欄位中輸入，或在運算式或查詢中使用，以指示遺失或未知資料的值。在 Visual Basic 中，Null 關鍵字指示 Null 值。部份欄位 (如主索引欄位) 不可以包含 Null 值。)';
sTemp=L_defNull_TEXT;
break;
			case 'defNullField':
			L_defNullField_TEXT='(空值欄位：包含 Null 值的欄位。空值欄位不同於包含零長度字串 (" ") 的欄位或值為 0 的欄位。)';
sTemp=L_defNullField_TEXT;
break;
			case 'defNumberDataType':
			L_defNumberDataType_TEXT='(Number 資料類型：在 Microsoft Access 資料庫中，為用於數學計算的數字資料設計的欄位資料類型。使用 Currency 資料類型來顯示或計算貨幣值。)';
sTemp=L_defNumberDataType_TEXT;
break;
			case 'defObjectApplication':
			L_defObjectApplication_TEXT='(OLE 伺服器：提供到其他應用程式之連結或內嵌 OLE 物件的應用程式或 DLL。例如，如果 Access 資料庫中的 OLE 物件包含 Microsoft Excel 工作表，則 Excel 為 OLE 伺服器。)';
sTemp=L_defObjectApplication_TEXT;
break;
			case 'defObjectDataType':
			L_defObjectDataType_TEXT='(Object 資料類型：代表 Visual Basic 可以辨識之任何物件的基本資料類型。雖然您可以將任何物件變數宣告為類型 Object，但是最好是根據它們的特定類型來宣告物件變數。)';
sTemp=L_defObjectDataType_TEXT;
break;
			case 'defObjectLibrary':
			L_defObjectLibrary_TEXT='(物件程式庫：包含物件及其方法和屬性定義的檔案。包含物件程式庫的檔案通常具有副檔名 .olb。)';
sTemp=L_defObjectLibrary_TEXT;
break;
			case 'defODBCConnectStringBuilder':
			L_defODBCConnectStringBuilder_TEXT='(ODBC 連接字串建立幫手：當您建立通過查詢時，可用來連接到 SQL 資料庫的 Access 工具。如果您儲存該查詢，則連接字串會與查詢一起儲存。)';
sTemp=L_defODBCConnectStringBuilder_TEXT;
break;
			case 'defODBCDatabase':
			L_defODBCDatabase_TEXT='(ODBC 資料庫：提供您可用來匯入、連結或匯出資料之「開放式資料庫連接 (ODBC)」驅動程式的資料庫。)';
sTemp=L_defODBCDatabase_TEXT;
break;
			case 'defODBCDataSource':
			L_defODBCDataSource_TEXT='(ODBC 資料來源：支援「開放式資料庫連接 (ODBC)」通訊協定之程式及資料庫的資料及存取該資料所需的資訊。)';
sTemp=L_defODBCDataSource_TEXT;
break;
			case 'defODBCDirect':
			L_defODBCDirect_TEXT='(ODBCDirect：可讓您使用略過 Microsoft Jet 資料庫引擎的 DAO 功能直接存取 ODBC 資料來源的技術。)';
sTemp=L_defODBCDirect_TEXT;
break;
			case 'defOLEObject':
			L_defOLEObject_TEXT='(OLE 物件：支援用於物件連結及內嵌之 OLE 通訊協定的物件。OLE 伺服器的 OLE 物件 (例如，Windows Paint 圖片或 Microsoft Excel 試算表) 可以連結或內嵌在欄位、表單或報告中。)';
sTemp=L_defOLEObject_TEXT;
break;
			case 'defOLEObjectDataType':
			L_defOLEObjectDataType_TEXT='(OLE Object 資料類型：用在可以連結或內嵌 (插入) 到 Access 資料庫的其他應用程式中建立之物件的欄位資料類型。)';
sTemp=L_defOLEObjectDataType_TEXT;
break;
			case 'defOneToMany':
			L_defOneToMany_TEXT='(一對多關係：兩個資料表之間的關聯，其中主要資料表中每筆記錄的主索引值與相關資料表中多筆記錄的一或多個符合欄位值對應。)';
sTemp=L_defOneToMany_TEXT;
break;
			case 'defOneToOne':
			L_defOneToOne_TEXT='(一對一關係：兩個資料表之間的關聯，其中主要資料表中每筆記錄的主索引值與相關資料表中一筆 (且僅一筆) 記錄的一或多個符合欄位值對應。)';
sTemp=L_defOneToOne_TEXT;
break;
			case 'defOptionButton':
			L_defOptionButton_TEXT='(選項按鈕：一種控制項 (亦稱為選擇鈕)，通常用作選項群組的一部份，以顯示表單、報告或資料頁上的替代選項。使用者無法選取多個選項。)';
sTemp=L_defOptionButton_TEXT;
break;
			case 'defOptionGroup':
			L_defOptionGroup_TEXT='(選項群組：包含表單、報告或資料頁上核取方塊、切換按鈕及選項按鈕的框架。您使用選項群組來顯示使用者可以從中選取單一選項的替代選項。)';
sTemp=L_defOptionGroup_TEXT;
break;
			case 'defOuterJoin':
			L_defOuterJoin_TEXT='(外部連接：一種連接，兩個資料表中的每筆符合記錄組合成查詢結果中一筆記錄，且一個資料表提供所有記錄，即使連接欄位中的值與另一個資料表中的值不符也一樣。)';
sTemp=L_defOuterJoin_TEXT;
break;
			case 'defOwner':
			L_defOwner_TEXT='(擁有人：當使用安全性時，對資料庫或資料庫物件擁有控制權的使用者帳號。建立資料庫或資料庫物件的使用者帳號預設為擁有人。)';
sTemp=L_defOwner_TEXT;
break;
			case 'defPage':
			L_defPage_TEXT='(頁 (資料儲存區)：儲存記錄資料之資料庫 (.mdb) 檔案的一部份。根據記錄的大小，頁 (大小為 4 KB) 可能包含多筆記錄。)';
sTemp=L_defPage_TEXT;
break;
			case 'defParameterQuery':
			L_defParameterQuery_TEXT='(參數查詢：使用者互動式指定一或多個篩選條件值的查詢。參數查詢不是另一種查詢；而是擴展了查詢的靈活性。)';
sTemp=L_defParameterQuery_TEXT;
break;
			case 'defPassThroughQuery':
			L_defPassThroughQuery_TEXT='(通過查詢：您用來將指令直接傳送到 ODBC 資料庫伺服器的 SQL 特定查詢。藉由使用通過查詢，您可以直接使用伺服器上的資料表，而無需讓 Microsoft Jet 資料庫引擎處理資料。)';
sTemp=L_defPassThroughQuery_TEXT;
break;
			case 'defPermissions':
			L_defPermissions_TEXT='(權限：指定使用者對資料庫中資料或物件之存取權類型的一組屬性。)';
sTemp=L_defPermissions_TEXT;
break;
			case 'defPin':
			L_defPin_TEXT='(個人識別碼：一種區分大小寫的英數字串 (4 到 20 字元長)，Access 可以將其與帳號名稱組合使用來識別 Access 工作群組中的使用者或群組。)';
sTemp=L_defPin_TEXT;
break;
			case 'defPivotTable':
			L_defPivotTable_TEXT='(樞紐分析表表單：藉由使用您選擇的格式及計算方法摘要大量資料的互動式資料表。您可以旋轉它的列及欄名來以不同方式檢視資料，這與 Excel 樞紐分析表相似。)';
sTemp=L_defPivotTable_TEXT;
break;
			case 'defPlusPointer':
			L_defPlusPointer_TEXT='(加號指標：當您將指標移至資料工作表中欄位的左邊緣時顯示的指標。當加號指標顯示時，您可以按一下以選取整個欄位。)';
sTemp=L_defPlusPointer_TEXT;
break;
			case 'defPopup':
			L_defPopup_TEXT='(快顯表單：在其他視窗之上的表單。快顯表單可以是強制回應或非強制回應。)';
sTemp=L_defPopup_TEXT;
break;
			case 'defPrimaryKey':
			L_defPrimaryKey_TEXT='(主索引：其值唯一識別資料表中每筆記錄的一或多個欄位 (欄)。主索引不容許 Null 值，且必須恆有唯一索引。主索引用來將資料表與其他資料表中的外部索引產生關聯。)';
sTemp=L_defPrimaryKey_TEXT;
break;
			case 'defPrimaryTable':
			L_defPrimaryTable_TEXT='(主要資料表：一對多關係的兩個相關資料表中的一方。主要資料表應具有主索引，且每筆記錄都應是唯一的。)';
sTemp=L_defPrimaryTable_TEXT;
break;
			case 'defPrivateProcedure':
			L_defPrivateProcedure_TEXT='(私用程序：在 Declare 陳述式中使用 Private 關鍵字宣告為私用的 Sub 或 Function 程序。只有同一模組內的其他程序才可存取私用程序。)';
sTemp=L_defPrivateProcedure_TEXT;
break;
			case 'defProcedure':
			L_defProcedure_TEXT='(程序：作為一個單元執行之模組中的陳述式及宣告順序。Visual Basic 中的程序包括 Sub 和 Function 程序。)';
sTemp=L_defProcedure_TEXT;
break;
			case 'defProcedureLevel':
			L_defProcedureLevel_TEXT='(程序層級：描述程序中宣告的任何變數或常數。在程序中宣告的變數及常數僅可供該程序自己使用。)';
sTemp=L_defProcedureLevel_TEXT;
break;
			case 'defProcedureLevelVariable':
			L_defProcedureLevelVariable_TEXT='(程序層級變數：在程序中宣告的變數。程序層級變數對它們宣告所在程序始終是私用的。)';
sTemp=L_defProcedureLevelVariable_TEXT;
break;
			case 'defProject':
			L_defProject_TEXT='(專案：資料庫中所有代碼模組的集合，包含標準模組及類別模組。專案預設與資料庫同名。)';
sTemp=L_defProject_TEXT;
break;
			case 'defPropertySheet':
			L_defPropertySheet_TEXT='(屬性工作表：用來檢視或修改各種物件 (如資料表、查詢、欄位、表單、報告、資料頁及控制項) 屬性的視窗。)';
sTemp=L_defPropertySheet_TEXT;
break;
			case 'defPublish':
			L_defPublish_TEXT='(發佈：匯出資料工作表、表單或報告到靜態 HTML 或伺服器產生之 HTML 的程序，或建立資料頁，並將這些檔案及所有相關檔案設定為網頁伺服器 (如 Microsoft IIS) 上網頁應用程式的程序。)';
sTemp=L_defPublish_TEXT;
break;
			case 'defQBEGrid':
			L_defQBEGrid_TEXT='(設計格線：您用來在查詢 [設計] 檢視或 [進階篩選/排序] 視窗中設計查詢或篩選的格線。對於查詢，此格線以前稱為 QBE 格線。)';
sTemp=L_defQBEGrid_TEXT;
break;
			case 'defQuery':
			L_defQuery_TEXT='(查詢：有關儲存在資料表中之資料的問題，或對資料執行動作的要求。查詢可以將多個資料表中的資料匯合在一起作為表單、報告或資料頁的資料來源。)';
sTemp=L_defQuery_TEXT;
break;
			case 'defQueryWindow':
			L_defQueryWindow_TEXT='([查詢] 視窗：您在 [設計] 檢視、[資料工作表] 檢視、[SQL] 檢視或 [預覽列印] 中使用查詢時所在的視窗。)';
sTemp=L_defQueryWindow_TEXT;
break;
			case 'defRecordNumberBox':
			L_defRecordNumberBox_TEXT='(記錄數方塊：在 [資料工作表] 檢視及 [表單] 檢視的左下角顯示目前記錄編號的小方塊。若要移至特定記錄，您可以在方塊中鍵入記錄編號，然後按 ENTER 鍵。)';
sTemp=L_defRecordNumberBox_TEXT;
break;
			case 'defRecordSelector':
			L_defRecordSelector_TEXT='(記錄選取器：記錄左側的小方塊或列，您可以按一下以選取 [資料工作表] 檢視及 [表單] 檢視中的整筆記錄。)';
sTemp=L_defRecordSelector_TEXT;
break;
			case 'defRecordset':
			L_defRecordset_TEXT='(記錄集：資料表、動態資料表及快照類型 Recordset 物件的集合名稱，它們是具有物件行為的記錄集。)';
sTemp=L_defRecordset_TEXT;
break;
			case 'defRecordSource':
			L_defRecordSource_TEXT='(記錄來源：表單、報告或資料頁的基礎資料來源。在 Access 資料庫中，它可以是資料表、查詢或 SQL 陳述式。在 Access 專案中，它可以是資料表、檢視、SQL 陳述式或預存程序。)';
sTemp=L_defRecordSource_TEXT;
break;
			case 'defReferencedDatabase':
			L_defReferencedDatabase_TEXT='(參照的資料庫：使用者建立之現用資料庫參照的 Access 資料庫。使用者可以建立資料庫的參照，然後呼叫該資料庫標準模組中的程序。)';
sTemp=L_defReferencedDatabase_TEXT;
break;
			case 'defReferencingDatabase':
			L_defReferencingDatabase_TEXT='(參照資料庫：使用者從其建立到其他 Access 資料庫之參照的現有 Access 資料庫。使用者可以建立到資料庫的參照，然後呼叫該資料庫標準模組中的程序。)';
sTemp=L_defReferencingDatabase_TEXT;
break;
			case 'defReferentialIntegrity':
			L_defReferentialIntegrity_TEXT='(參考完整性：當您輸入或刪除記錄時，保留兩個資料表之間的定義關係所遵循的規則。)';
sTemp=L_defReferentialIntegrity_TEXT;
break;
			case 'defRefresh':
			L_defRefresh_TEXT='(重新整理：在 Access 資料庫中，重新顯示表單或資料工作表中的記錄以反映其他使用者所作的變更。在 Access 專案中，重新執行使用中表單或資料工作表的基礎查詢，以反映對記錄的變更。)';
sTemp=L_defRefresh_TEXT;
break;
			case 'defRelationship':
			L_defRelationship_TEXT='(關係：在兩個資料表中共用欄位 (欄) 之間建立的關聯。關係可以是一對一、一對多或多對多。)';
sTemp=L_defRelationship_TEXT;
break;
			case 'defRelationshipsWindow':
			L_defRelationshipsWindow_TEXT='([關係] 視窗：檢視、建立及修改資料表與查詢之間關係所在的視窗。)';
sTemp=L_defRelationshipsWindow_TEXT;
break;
			case 'defRepaint':
			L_defRepaint_TEXT='(重繪：重繪螢幕。Repaint 方法會完成指定表單的所有等待中螢幕更新。)';
sTemp=L_defRepaint_TEXT;
break;
			case 'defReport':
			L_defReport_TEXT='(報告：列印根據您的規格格式化及組織之資訊的 Access 資料庫物件。銷售摘要、電話清單及郵寄標籤都是報告的範例。)';
sTemp=L_defReport_TEXT;
break;
			case 'defReportModule':
			L_defReportModule_TEXT='(報告模組：該模組包含特定報告或其控制項上發生的事件所觸發之所有事件程序的代碼。)';
sTemp=L_defReportModule_TEXT;
break;
			case 'defReportSelector':
			L_defReportSelector_TEXT='(報告選取器：多個尺規相交所在的方塊 (在 [設計] 檢視中報告的左上角)。使用該方塊可以執行報告層級的作業，如選取報告。)';
sTemp=L_defReportSelector_TEXT;
break;
			case 'defReportWindow':
			L_defReportWindow_TEXT='([報告] 視窗：您在 [設計] 檢視、[版面配置預覽] 或 [列印預覽] 中使用報告時所在的視窗。)';
sTemp=L_defReportWindow_TEXT;
break;
			case 'defRequery':
			L_defRequery_TEXT='(重新查詢：重新執行使用中表單或資料工作表的基礎查詢，以便反映記錄變更、顯示新增記錄，以及除去刪除的記錄。)';
sTemp=L_defRequery_TEXT;
break;
			case 'defReservedWord':
			L_defReservedWord_TEXT='(關鍵字：屬於 Visual Basic for Applications 程式設計語言的一個字。關鍵字包括陳述式、資料類型、方法、運算子、物件，以及預先定義函數的名稱。請不要將關鍵字用於變數或物件名稱。)';
sTemp=L_defReservedWord_TEXT;
break;
			case 'defRightOuterJoin':
			L_defRightOuterJoin_TEXT='(右外部連接：一種外部連接，在這種連接中，查詢的 SQL 陳述式中 RIGHT JOIN 作業右側的所有記錄，都會新增到查詢結果中，即使左側資料表中的連接欄位沒有符合的值也一樣。)';
sTemp=L_defRightOuterJoin_TEXT;
break;
			case 'defRowSelector':
			L_defRowSelector_TEXT='(列選取器：一個小方塊或列，當按一下時，或當您將報告 [設計] 檢視中的記錄排序及分組時，會選取資料表或巨集 [設計] 檢視中的整個列。)';
sTemp=L_defRowSelector_TEXT;
break;
			case 'defScriptWindow':
			L_defScriptWindow_TEXT='([巨集] 視窗：您建立及修改巨集所在的視窗。)';
sTemp=L_defScriptWindow_TEXT;
break;
			case 'defSection':
			L_defSection_TEXT='(區段：表單、報告或資料頁的一部份，如頁首、頁尾或詳細資料區段。)';
sTemp=L_defSection_TEXT;
break;
			case 'defSectionSelector':
			L_defSectionSelector_TEXT='(區段選取器：當物件在 [設計] 檢視中開啟時，區段列左側的方塊。使用該方塊可以執行區段層級的作業，如選取區段。)';
sTemp=L_defSectionSelector_TEXT;
break;
			case 'defSecureSystem':
			L_defSecureSystem_TEXT='(啟用安全性工作群組：使用者使用使用者名稱及密碼登入的 Access 工作群組，根據授與特定使用者帳號及群組的權限限制對資料庫物件的存取權。)';
sTemp=L_defSecureSystem_TEXT;
break;
			case 'defSelectionRectangle':
			L_defSelectionRectangle_TEXT='(矩形範圍：由 [資料工作表] 檢視中目前選取的列 (記錄) 及欄 (欄位) 形成的矩形。)';
sTemp=L_defSelectionRectangle_TEXT;
break;
			case 'defSelectQuery':
			L_defSelectQuery_TEXT='(選取查詢：詢問有關儲存在資料表中之資料的問題，並以資料工作表的形式傳回結果集而不變更資料的查詢。)';
sTemp=L_defSelectQuery_TEXT;
break;
			case 'defSelfJoin':
			L_defSelfJoin_TEXT='(自我結合：資料表與自身結合的結合。當結合欄位中有符合的值時，資料表的某些記錄會與該資料表的其他記錄合併。)';
sTemp=L_defSelfJoin_TEXT;
break;
			case 'defSeparator':
			L_defSeparator_TEXT='(分隔符號：分隔文字或數字單元的字元。)';
sTemp=L_defSeparator_TEXT;
break;
			case 'defSession':
			L_defSession_TEXT='(作業階段：Microsoft Jet 資料庫引擎執行的作業順序，在使用者登入時開始，使用者登出後結束。作業階段中的所有作業形成一個交易範圍，且受使用者的登入權限的限制。)';
sTemp=L_defSession_TEXT;
break;
			case 'defSnapshot':
			L_defSnapshot_TEXT='(快照：資料集 (如顯示為查詢結果的記錄) 的靜態圖像。可以從基本資料表、查詢或其他記錄集建立快照類型 Recordset 物件。)';
sTemp=L_defSnapshot_TEXT;
break;
			case 'defSQLDatabaseODBC':
			L_defSQLDatabaseODBC_TEXT='(SQL 資料庫：使用「結構化查詢語言 (SQL)」建立的資料庫。)';
sTemp=L_defSQLDatabaseODBC_TEXT;
break;
			case 'defSQLSpecificQuery':
			L_defSQLSpecificQuery_TEXT='(SQL 特定的查詢：包含 SQL 陳述式的查詢。子查詢及通過、聯集及資料定義查詢為 SQL 特定的查詢。)';
sTemp=L_defSQLSpecificQuery_TEXT;
break;
			case 'defSQLString':
			L_defSQLString_TEXT='(SQL 字串/陳述式：定義 SQL 指令 (如 SELECT、UPDATE 或 DELETE) 的運算式，且包括子句，如 WHERE 及 ORDER BY。 SQL 字串/陳述式通常用於查詢及聚合函數。)';
sTemp=L_defSQLString_TEXT;
break;
			case 'defSQLView':
			L_defSQLView_TEXT='(SQL 檢視：顯示目前查詢的 SQL 陳述式，或用來建立 SQL 特定查詢 (聯集、通過或資料定義) 的視窗。當您在 [設計] 檢視中建立查詢時，Access 會在 SQL 檢視中建構 SQL 對等項。)';
sTemp=L_defSQLView_TEXT;
break;
			case 'defStandardModule':
			L_defStandardModule_TEXT='(標準模組：您可以在其中放置想要供整個資料庫中其他程序使用之 Sub 及 Function 程序的模組。)';
sTemp=L_defStandardModule_TEXT;
break;
			case 'defStoredProcedure':
			L_defStoredProcedure_TEXT='(預存程序：SQL 陳述式及選擇性控制流陳述式的預先編譯集合，以一個名稱儲存且作為一個單元進行處理。該集合儲存在 SQL 資料庫中，可以使用某應用程式的一個呼叫來執行。)';
sTemp=L_defStoredProcedure_TEXT;
break;
			case 'defStringDelimiter':
			L_defStringDelimiter_TEXT='(字串分隔符號：將內嵌在字串中的字串分隔開來的文字字元。單引號 (\') 及雙引號 (") 即為字串分隔符號。)';
sTemp=L_defStringDelimiter_TEXT;
break;
			case 'defSubform':
			L_defSubform_TEXT='(子表單：包含在其他表單或報告中的表單。)';
sTemp=L_defSubform_TEXT;
break;
			case 'defSubformSubreport':
			L_defSubformSubreport_TEXT='(子表單/子報告控制項：顯示表單中的子表單、子表單或報告中的子報告的控制項。)';
sTemp=L_defSubformSubreport_TEXT;
break;
			case 'defSubProcedure':
			L_defSubProcedure_TEXT='(Sub  程序：執行作業的程序。與 Function 程序不同，Sub  程序不會傳回值。您可以使用 Sub 陳述式來開始 Sub  程序，且使用 End Sub 陳述式將其結束。)';
sTemp=L_defSubProcedure_TEXT;
break;
			case 'defSubquery':
			L_defSubquery_TEXT='(子查詢：其他選取或動作查詢中的 SQL SELECT 陳述式。)';
sTemp=L_defSubquery_TEXT;
break;
			case 'defSubreport':
			L_defSubreport_TEXT='(子報告：其他報告中包含的報告。)';
sTemp=L_defSubreport_TEXT;
break;
			case 'defSystemObjects':
			L_defSystemObjects_TEXT='(系統物件：由系統 (如資料表 MSysIndexes)，或使用者定義的資料庫物件。您可以藉由使用 USys 作為物件名稱的前 4 個字元命名物件，來建立系統物件。)';
sTemp=L_defSystemObjects_TEXT;
break;
			case 'defTabControl':
			L_defTabControl_TEXT='(索引標籤控制項：您可用來建構單一表單或對話方塊的控制項，表單或對話方塊中包含多頁，每頁具有一個索引標籤且包含相似的控制項，如文字方塊或選項按鈕。當使用者按一下索引標籤時，該頁會變為使用中。)';
sTemp=L_defTabControl_TEXT;
break;
			case 'defTable':
			L_defTable_TEXT='(資料表：將資料儲存在記錄 (列) 及欄位 (欄) 中的資料庫物件。該資料通常是事物的特定類別，如雇員或訂單。)';
sTemp=L_defTable_TEXT;
break;
			case 'defTableProperties':
			L_defTableProperties_TEXT='(資料表屬性：在 Access 資料庫中，影響整體資料表外觀或行為的資料表屬性。資料表屬性在資料表 [設計] 檢視中設定，這與欄位屬性相同。)';
sTemp=L_defTableProperties_TEXT;
break;
			case 'defTableWindow':
			L_defTableWindow_TEXT='([資料表] 視窗：在 Access 資料庫中，您使用 [設計] 檢視或 [資料工作表] 檢視中的資料表時所在的視窗。)';
sTemp=L_defTableWindow_TEXT;
break;
			case 'defTextBox':
			L_defTextBox_TEXT='(文字方塊：用於在表單、報告或資料頁上顯示文字或接受資料輸入的控制項 (亦稱為編輯欄位)。它可以附加標籤。)';
sTemp=L_defTextBox_TEXT;
break;
			case 'defTextDataType':
			L_defTextDataType_TEXT='(Text 資料類型：在 Microsoft Access 資料庫中，此為欄位資料類型。文字欄位可以包含多達 255 個字元，FieldSize 屬性指定數目的字元 (取兩者中字元少的一方)。)';
sTemp=L_defTextDataType_TEXT;
break;
			case 'defToggleButton':
			L_defToggleButton_TEXT='(切換按鈕：用來在表單或報告上提供開/關選項的控制項。它可以顯示文字或圖片，且可以是獨立式或選項群組的一部份。)';
sTemp=L_defToggleButton_TEXT;
break;
			case 'defToolbox':
			L_defToolbox_TEXT='(工具箱：[設計] 檢視中用來向表單、報告或資料頁新增控制項的一組工具。頁面 [設計] 檢視中提供的工具集與表單及報告 [設計] 檢視中提供的工具集不同。)';
sTemp=L_defToolbox_TEXT;
break;
			case 'defToolProperties':
			L_defToolProperties_TEXT='(預設控制項樣式：控制項類型的預設屬性設定。您在建立兩個或兩個以上相似控制項之前自訂控制項類型，以防止個別自訂每個控制項。)';
sTemp=L_defToolProperties_TEXT;
break;
			case 'defToolTips':
			L_defToolTips_TEXT='(工具提示：工具列上及工具箱中按鈕及方塊名稱的簡要說明。當滑鼠指標停留在按鈕或下拉式方塊上時，便會顯示「工具提示」。)';
sTemp=L_defToolTips_TEXT;
break;
			case 'defTotalsQuery':
			L_defTotalsQuery_TEXT='(合計查詢：顯示一或多個資料表不同欄位值之摘要計算 (如平均值或總計) 的查詢。合計查詢不是另一種查詢；而是擴展了選取查詢的靈活性。)';
sTemp=L_defTotalsQuery_TEXT;
break;
			case 'defTransaction':
			L_defTransaction_TEXT='(異動：對資料庫資料及結構所作的一系列變更。)';
sTemp=L_defTransaction_TEXT;
break;
			case 'defUnboundField':
			L_defUnboundField_TEXT='(未結合控制項：未連接基礎資料表、查詢或 SQL 陳述式中欄位的控制項。未結合控制項通常用來顯示資訊文字或裝飾圖片。)';
sTemp=L_defUnboundField_TEXT;
break;
			case 'defUnboundFormReport':
			L_defUnboundFormReport_TEXT='(未結合表單或報表：未連接到記錄來源 (如資料表、查詢或 SQL 陳述式) 的表單或報表。(表單或報表的 RecordSource 屬性為空白。))';
sTemp=L_defUnboundFormReport_TEXT;
break;
			case 'defUnboundObjectFrame':
			L_defUnboundObjectFrame_TEXT='(未結合物件框：放置在表單或報表上，以包含未結合物件的控制項。未結合物件是一個物件 (如圖片)，它的值不是從資料表中儲存的資料所衍生的。)';
sTemp=L_defUnboundObjectFrame_TEXT;
break;
			case 'defUnionQuery':
			L_defUnionQuery_TEXT='(聯集查詢：使用 UNION 運算子來合併兩個或兩個以上選取查詢結果的查詢。)';
sTemp=L_defUnionQuery_TEXT;
break;
			case 'defUniqueIndex':
			L_defUniqueIndex_TEXT='(唯一索引：藉由將欄位 Indexed 屬性設為 是 (不可重複) 來定義的索引。唯一索引不容許索引欄位中有重複的項目。將欄位設為主索引會自動將該欄位定義為唯一。)';
sTemp=L_defUniqueIndex_TEXT;
break;
			case 'defUpdate':
			L_defUpdate_TEXT='(更新：接受對記錄中資料的變更。當您移至表單、資料工作表或資料頁上的其他記錄時，或明確儲存記錄時，變更會儲存在資料庫中。)';
sTemp=L_defUpdate_TEXT;
break;
			case 'defUpdateQuery':
			L_defUpdateQuery_TEXT='(更新查詢：根據您指定的篩選條件 (搜尋條件) 變更記錄集的動作查詢 (SQL 陳述式)。)';
sTemp=L_defUpdateQuery_TEXT;
break;
			case 'defUserAccount':
			L_defUserAccount_TEXT='(使用者帳戶：由使用者名稱及個人識別碼 (PID) 識別的帳戶，建立使用者名稱及個人識別碼的目的，是要對 Access 工作群組中資料庫物件的使用者存取權進行管理。)';
sTemp=L_defUserAccount_TEXT;
break;
			case 'defUserDefinedCollection':
			L_defUserDefinedCollection_TEXT='(使用者定義的集合：藉由將物件新增到 Collection 物件建立的集合。Collection 物件定義之集合中的項目從 1 開始進行索引。)';
sTemp=L_defUserDefinedCollection_TEXT;
break;
			case 'defUserDefinedFunction':
			L_defUserDefinedFunction_TEXT='(使用者定義的函數：接受輸入參數並傳回類似預存程序之結果的查詢。類型：數值 (多陳述式；傳回一個值)、內置 (一個陳述式；可以更新的資料表值) 及資料表 (多陳述式；資料表值)。)';
sTemp=L_defUserDefinedFunction_TEXT;
break;
			case 'defUserDefinedObject':
			L_defUserDefinedObject_TEXT='(使用者定義的物件：在表單或報表類別模組中定義的自訂物件。在類別模組中，您可以建立新物件的方法及屬性、建立此物件的新實例，並使用這些屬性及方法進行操作。)';
sTemp=L_defUserDefinedObject_TEXT;
break;
			case 'defUserLevelSecurity':
			L_defUserLevelSecurity_TEXT='(使用者層級安全性：當使用 Access 資料庫中的使用者層級安全性時，資料庫管理員或物件的擁有人，可以授與個別使用者或使用者群組對資料表、查詢、表單、報表及巨集的特定權限。)';
sTemp=L_defUserLevelSecurity_TEXT;
break;
			case 'defUsersGroup':
			L_defUsersGroup_TEXT='(Users 群組：包含所有使用者帳戶的群組帳戶。當您建立 Users 群組時，Access 會自動將使用者帳戶新增到 Users 群組。)';
sTemp=L_defUsersGroup_TEXT;
break;
			case 'defValidation':
			L_defValidation_TEXT='(驗證：檢查輸入的資料是否符合特定條件或限制的處理程序。)';
sTemp=L_defValidation_TEXT;
break;
			case 'defValidationRule':
			L_defValidationRule_TEXT='(驗證規則：為資料表中的欄位或記錄，或為表單上的控制項定義有效輸入值的屬性。當違反規則時，Access 會顯示 ValidationText 屬性中指定的訊息。)';
sTemp=L_defValidationRule_TEXT;
break;
			case 'defVBIdentifier':
			L_defVBIdentifier_TEXT='(識別碼 (Visual Basic)：Visual Basic 代碼模組中的資料成員。識別碼可以是 Sub、Function 或 Property 程序、變數、常數、DECLARE 陳述式，或使用者定義的資料類型。)';
sTemp=L_defVBIdentifier_TEXT;
break;
			case 'defWhereClause':
			L_defWhereClause_TEXT='(WHERE 子句：指定要擷取之記錄的 SQL 陳述式的一部份。)';
sTemp=L_defWhereClause_TEXT;
break;
			case 'defWorkGroup':
			L_defWorkGroup_TEXT='(工作群組：多使用者環境中共用資料及相同工作群組資訊檔案的使用者群組。)';
sTemp=L_defWorkGroup_TEXT;
break;
			case 'defWorkgroupID':
			L_defWorkgroupID_TEXT='(工作群組識別碼：使用「工作群組管理員」建立新工作群組資訊檔案時，輸入的 4 到 20 個字元長的區分大小寫的英數字元字串。其可將此工作群組檔案的 Admin 群組識別為唯一。)';
sTemp=L_defWorkgroupID_TEXT;
break;
			case 'defWorkgroupInformationFile':
			L_defWorkgroupInformationFile_TEXT='(工作群組資訊檔案：Access 啟動時讀取之包含工作群組中使用者相關資訊的檔案。此資訊包含使用者的帳戶名稱、密碼，以及所屬的群組。)';
sTemp=L_defWorkgroupInformationFile_TEXT;
break;
			case 'defYesNoDataType':
			L_defYesNoDataType_TEXT='(Yes/No 資料類型：一種欄位資料類型，適用的欄位僅包含兩個值中的一個 (如 Yes 或 No 及 True 或 False)。不允許空值。)';
sTemp=L_defYesNoDataType_TEXT;
break;
			case 'defZeroLengthString':
			L_defZeroLengthString_TEXT='(零長度字串：不包含字元的字串。您可以使用零長度字串指示您知道某個欄位沒有值。鍵入兩個中間沒有空格的雙引號 ("") 即可輸入零長度字串。)';
sTemp=L_defZeroLengthString_TEXT;
break;
			case 'IDH_acdefAbsolutePositioning':
			L_IDH_acdefAbsolutePositioning_TEXT='(絕對或固定位置：相對於元素的父項或本文 (若無父項) 放置元素。元素 Left 及 Top 屬性的值相對於元素父項的左上角。)';
sTemp=L_IDH_acdefAbsolutePositioning_TEXT;
break;
			case 'IDH_acdefAccessProject':
			L_IDH_acdefAccessProject_TEXT='(Microsoft Access 專案：連接 Microsoft SQL Server 資料庫，且用來建立主從架構應用程式的 Access 檔案。專案檔案不包含任何資料或基於資料定義的物件，如資料表及檢視。)';
sTemp=L_IDH_acdefAccessProject_TEXT;
break;
			case 'IDH_acdefAnonymousReplica':
			L_IDH_acdefAnonymousReplica_TEXT='(匿名複本：在 Access 資料庫中，您不追蹤個別使用者的特殊複本類型。匿名複本在預期有許多使用者下載複本的網際網路狀況中特別有用。)';
sTemp=L_IDH_acdefAnonymousReplica_TEXT;
break;
			case 'IDH_acdefBinaryDataType':
			L_IDH_acdefBinaryDataType_TEXT='(binary 資料類型：在 Access 專案中，二進位資料最多有 8,000 個位元組的固定長度資料類型。)';
sTemp=L_IDH_acdefBinaryDataType_TEXT;
break;
			case 'IDH_acdefBitDataType':
			L_IDH_acdefBitDataType_TEXT='(bit 資料類型：在 Access 專案中，儲存值 1 或 0 的資料類型。也接受 1 或 0 之外的整數值，但這些值永遠被解釋成 1。)';
sTemp=L_IDH_acdefBitDataType_TEXT;
break;
			case 'IDH_acdefBody':
			L_IDH_acdefBody_TEXT='(本文：資料頁的基本設計表面。它顯示資訊文字、結合到資料的控制項以及區段。)';
sTemp=L_IDH_acdefBody_TEXT;
break;
			case 'IDH_acdefBoundHTMLControl':
			L_IDH_acdefBoundHTMLControl_TEXT='(結合跨度控制項：用在資料頁上的控制項，將 HTML 程式碼結合到 Access 資料庫中的「文字」或「備忘」欄位，或結合到 Access 專案中的 text、ntext 或 varchar 欄。您無法編輯結合跨度控制項的內容。)';
sTemp=L_IDH_acdefBoundHTMLControl_TEXT;
break;
			case 'IDH_acdefBoundHyperlinkControl':
			L_IDH_acdefBoundHyperlinkControl_TEXT='(結合超連結控制項：用在資料頁上的控制項，將連結、內部網路位址或網際網路位址結合到基礎「文字」欄位。您可以按一下超連結導覽至目標位置。)';
sTemp=L_IDH_acdefBoundHyperlinkControl_TEXT;
break;
			case 'IDH_acdefBoundPicture':
			L_IDH_acdefBoundPicture_TEXT='(結合圖片：用在表單、報表或資料頁上的控制項，將圖像結合到 Access 資料庫中的「OLE 物件」欄位或 Access 專案中的圖像欄。)';
sTemp=L_IDH_acdefBoundPicture_TEXT;
break;
			case 'IDH_acdefCaptionSection':
			L_IDH_acdefCaptionSection_TEXT='(標題區段：群組資料頁上顯示資料欄標題的區段。它緊接在群組標題之前顯示。您無法將結合控制項新增到標題區段。)';
sTemp=L_IDH_acdefCaptionSection_TEXT;
break;
			case 'IDH_acdefCharDataType':
			L_IDH_acdefCharDataType_TEXT='(char 資料類型：在 Access 專案中，最多有 8,000 個 ANSI 字元的固定長度資料類型。)';
sTemp=L_IDH_acdefCharDataType_TEXT;
break;
			case 'IDH_acdefConditionalFormatting':
			L_IDH_acdefConditionalFormatting_TEXT='(條件格式設定：根據一或多個條件格式化表單或報表中的控制項內容。條件可以參照其他控制項、帶焦點的控制項，或使用者定義的 Visual Basic for Applications 函數。)';
sTemp=L_IDH_acdefConditionalFormatting_TEXT;
break;
			case 'IDH_acdefConflict':
			L_IDH_acdefConflict_TEXT='(衝突：如果兩個複本集成員之相同記錄中的資料變更，則可能會發生衝突。當衝突發生時，會選取勝出的變更，並在所有複本中套用，而失敗的變更將在所有複本中記錄為衝突。)';
sTemp=L_IDH_acdefConflict_TEXT;
break;
			case 'IDH_acdefCursorDataType':
			L_IDH_acdefCursorDataType_TEXT='(cursor 資料類型：在 Access 專案中，僅可用於建立游標變數的資料類型。此資料類型不能用於資料表中的欄。游標是在 SELECT 陳述式的結果集中一次使用一列的機制。)';
sTemp=L_IDH_acdefCursorDataType_TEXT;
break;
			case 'IDH_acdefDataAccessPageProperties':
			L_IDH_acdefDataAccessPageProperties_TEXT='(資料頁屬性：識別網頁連接的資料庫以及定義網頁外觀與行為的資料頁屬性。)';
sTemp=L_IDH_acdefDataAccessPageProperties_TEXT;
break;
			case 'IDH_acdefDataAccessPageWindow':
			L_IDH_acdefDataAccessPageWindow_TEXT='(資料頁視窗：以設計檢視及頁面檢視顯示資料頁的視窗。)';
sTemp=L_IDH_acdefDataAccessPageWindow_TEXT;
break;
			case 'IDH_acdefDataDefinition':
			L_IDH_acdefDataDefinition_TEXT='(資料定義：組成資料頁記錄來源之運算式以及基礎資料表與查詢中的欄位。)';
sTemp=L_IDH_acdefDataDefinition_TEXT;
break;
			case 'IDH_acdefDataFiles':
			L_IDH_acdefDataFiles_TEXT='(Microsoft Access 檔案：Access 資料庫或 Access 專案檔案。Access 資料庫將資料庫物件及資料儲存在 .mdb 檔案中。專案檔案不包含資料，而是用於連接到 Microsoft SQL Server 資料庫。)';
sTemp=L_IDH_acdefDataFiles_TEXT;
break;
			case 'IDH_acdefDataSourceControl':
			L_IDH_acdefDataSourceControl_TEXT='(資料來源控制項：資料頁及「Microsoft Office Web 元件」後的引擎，管理基礎資料來源的連線。資料來源控制項沒有視覺化的呈現方式。)';
sTemp=L_IDH_acdefDataSourceControl_TEXT;
break;
			case 'IDH_acdefDatetimeDataType':
			L_IDH_acdefDatetimeDataType_TEXT='(datetime 資料類型：在 Access 專案中，範圍從 1753 年 1 月 1 日到 9999 年 12 月 31 日的日期及時間資料類型，精確度為 1 秒的三百分之一，或 3.33 毫秒。)';
sTemp=L_IDH_acdefDatetimeDataType_TEXT;
break;
			case 'IDH_acdefDecimalDataType':
			L_IDH_acdefDecimalDataType_TEXT='(decimal 資料類型 (Access 專案)：精確的數值資料類型，保留從 -10^38 - 1 到 10^38 - 1 的值。您可以指定範圍 (總位數的最大值) 及精度 (小數點右側最多的位數)。)';
sTemp=L_IDH_acdefDecimalDataType_TEXT;
break;
			case 'IDH_acdefDecimalDataTypeMicrosoftAccessDatabase':
			L_IDH_acdefDecimalDataTypeMicrosoftAccessDatabase_TEXT='(decimal 資料類型 (Access 資料庫)：精確的數值資料類型，保留從 -10^28 - 1 到 10^28 - 1 的值。您可以指定範圍 (總位數的最大值) 及精度 (小數點右側最多的位數)。)';
sTemp=L_IDH_acdefDecimalDataTypeMicrosoftAccessDatabase_TEXT;
break;
			case 'IDH_acdefDesignMaster':
			L_IDH_acdefDesignMaster_TEXT='(設計主複本：複本集中您可以變更資料庫結構，並散佈到其他複本的唯一成員。)';
sTemp=L_IDH_acdefDesignMaster_TEXT;
break;
			case 'IDH_acdefDirectSynchronization':
			L_IDH_acdefDirectSynchronization_TEXT='(直接同步：用來在複本之間同步處理資料的方法，這些複本與區域網路直接連接，並可透過共用網路資料夾使用。)';
sTemp=L_IDH_acdefDirectSynchronization_TEXT;
break;
			case 'IDH_acdefDocumentProperties':
			L_IDH_acdefDocumentProperties_TEXT='(文件屬性：與每個資料頁儲存在一起的屬性，如標題、主題及作者。)';
sTemp=L_IDH_acdefDocumentProperties_TEXT;
break;
			case 'IDH_acdefDropdownListBox':
			L_IDH_acdefDropdownListBox_TEXT='(下拉式清單方塊：資料頁上的控制項，當按一下時，會顯示您可以從中選取值的清單。您無法在下拉式清單方塊中鍵入值。)';
sTemp=L_IDH_acdefDropdownListBox_TEXT;
break;
			case 'IDH_acdefExpandControl':
			L_IDH_acdefExpandControl_TEXT='(展開控制項：資料頁上的控制項，當按一下時，會展開或摺疊群組記錄，以顯示或隱藏其詳細記錄。)';
sTemp=L_IDH_acdefExpandControl_TEXT;
break;
			case 'IDH_acdefExpandIndicator':
			L_IDH_acdefExpandIndicator_TEXT='(展開指標：用來展開或摺疊記錄群組的按鈕；它會顯示加號 (+) 或減號 (-)。)';
sTemp=L_IDH_acdefExpandIndicator_TEXT;
break;
			case 'IDH_acdefExport':
			L_IDH_acdefExport_TEXT='(匯出：將資料及資料庫物件輸出到其他資料庫、試算表或檔案格式，以便其他資料庫或程式使用該資料或資料庫物件。您可以將資料匯出到各種受支援的資料庫、程式及檔案格式。)';
sTemp=L_IDH_acdefExport_TEXT;
break;
			case 'IDH_acdefFill':
			L_IDH_acdefFill_TEXT='(填滿：根據報表是縱向還是橫向來調整頁面的寬度或高度，從而填滿 [報表快照] 視窗的報表放大顯示。)';
sTemp=L_IDH_acdefFill_TEXT;
break;
			case 'IDH_acdefFilterExcludingSelection':
			L_IDH_acdefFilterExcludingSelection_TEXT='(排除選取範圍篩選：一種用在表單、資料工作表或資料頁中篩選記錄的技術，它僅擷取不含所選值的記錄。)';
sTemp=L_IDH_acdefFilterExcludingSelection_TEXT;
break;
			case 'IDH_acdefFloatDataType':
			L_IDH_acdefFloatDataType_TEXT='(float 資料類型：在 Access 專案中，精度為 15 位的近似數值資料類型。它可保留大約從 2.23E - 308 到 1.79E + 308 的正值、大約從 - 2.23E - 308 到 - 1.79E + 308 的負值，或零。)';
sTemp=L_IDH_acdefFloatDataType_TEXT;
break;
			case 'IDH_acdefGeneralSortOrder':
			L_IDH_acdefGeneralSortOrder_TEXT='(一般排序順序：決定字元在整個資料庫 (如資料表、查詢及報表) 中如何排序的預設排序順序。如果您計劃使用的資料庫是多種語言版本的 Access，請定義一般排序順序。)';
sTemp=L_IDH_acdefGeneralSortOrder_TEXT;
break;
			case 'IDH_acdefGlobalReplica':
			L_IDH_acdefGlobalReplica_TEXT='(共用複本：完全追蹤變更，且可以與複本集中任何共用複本進行交換的複本。共用複本還可以與任何本機或匿名複本 (它是這些複本的集中中心) 交換變更。)';
sTemp=L_IDH_acdefGlobalReplica_TEXT;
break;
			case 'IDH_acdefGridDatasheetView':
			L_IDH_acdefGridDatasheetView_TEXT='(格線 (資料工作表檢視)：視覺上將資料列及欄分割成資料格、查詢、表單、檢視或儲存程序中儲存格的垂直及水平規線。您可以顯示及隱藏這些格線。)';
sTemp=L_IDH_acdefGridDatasheetView_TEXT;
break;
			case 'IDH_acdefGroup':
			L_IDH_acdefGroup_TEXT='(群組控制項：設計表單或報表時，可以視為一個單元的兩個或兩個以上的控制項。排列控制項或指定屬性時，您可以選取群組，而不是選取每個個別的控制項。)';
sTemp=L_IDH_acdefGroup_TEXT;
break;
			case 'IDH_acdefGroupedDataAccessPage':
			L_IDH_acdefGroupedDataAccessPage_TEXT='(群組資料頁：具有兩個或兩個以上群組層級的資料頁。)';
sTemp=L_IDH_acdefGroupedDataAccessPage_TEXT;
break;
			case 'IDH_acdefGroupFilterControl':
			L_IDH_acdefGroupFilterControl_TEXT='(群組篩選控制項：資料頁上的下拉式清單方塊控制項，它根據您從清單中選取的值從基礎記錄集擷取記錄。在群組頁上，控制項擷取特定的記錄群組。)';
sTemp=L_IDH_acdefGroupFilterControl_TEXT;
break;
			case 'IDH_acdefHotspot':
			L_IDH_acdefHotspot_TEXT='(超連結圖像控制項：用在資料頁上的控制項，顯示代表檔案或網頁超連結的未結合圖像。在「瀏覽」模式中，您可以按一下該圖像導覽到目標位置。)';
sTemp=L_IDH_acdefHotspot_TEXT;
break;
			case 'IDH_acdefHub':
			L_IDH_acdefHub_TEXT='(集中中心：複本集當中的所有複本在該處進行變更同步化的共用複本。集中中心就像父複本。)';
sTemp=L_IDH_acdefHub_TEXT;
break;
			case 'IDH_acdefHyperlinkField':
			L_IDH_acdefHyperlinkField_TEXT='(超連結欄位：儲存超連結位址的欄位。在 Access 資料庫 (.mdb) 中，它是具有 Hyperlink 資料類型的欄位。在 Access 專案 (.adp) 中，它是 IsHyperlink 屬性設為 True 的欄位。)';
sTemp=L_IDH_acdefHyperlinkField_TEXT;
break;
			case 'IDH_acdefImageOLEObjectDataType':
			L_IDH_acdefImageOLEObjectDataType_TEXT='(image 資料類型：在 Access 專案中，最多可以保留 2^31 - 1 (2,147,483,647) 個位元組二進位資料的可變長度資料類型。它用來儲存「二進位大型物件 (BLOB)」，如圖片、文件、聲音及編譯的程式碼。)';
sTemp=L_IDH_acdefImageOLEObjectDataType_TEXT;
break;
			case 'IDH_acdefIndirectSynchronization':
			L_IDH_acdefIndirectSynchronization_TEXT='(間接同步：在中斷連線的環境中 (如攜帶可攜式電腦旅行時) 使用的同步處理方法。您必須使用「複製管理員」配置間接同步。)';
sTemp=L_IDH_acdefIndirectSynchronization_TEXT;
break;
			case 'IDH_acdefIntDataType':
			L_IDH_acdefIntDataType_TEXT='(int 資料類型：在 Access 專案中，儲存 -2^31 (-2,147,483,648) 到 2^31 - 1 (2,147,483,647) 範圍內整數的 4 位元組 (32 個位元) 資料類型。)';
sTemp=L_IDH_acdefIntDataType_TEXT;
break;
			case 'IDH_acdefInternetSynchronization':
			L_IDH_acdefInternetSynchronization_TEXT='(網際網路同步處理：用來同步處理配置了網際網路伺服器之中斷連線環境中的複本。您必須使用「複製管理員」配置網際網路同步處理。)';
sTemp=L_IDH_acdefInternetSynchronization_TEXT;
break;
			case 'IDH_acdefJROJetReplicationObjects':
			L_IDH_acdefJROJetReplicationObjects_TEXT='(JRO：可用來執行 Microsoft Jet 資料庫特定動作的一組自動化介面。使用 JRO，您可以壓縮資料庫、重新整理快取中的資料，以及建立和維護複製的資料庫。)';
sTemp=L_IDH_acdefJROJetReplicationObjects_TEXT;
break;
			case 'IDH_acdefLocalObject':
			L_IDH_acdefLocalObject_TEXT='(本機物件：保留在其建立所在之「設計主複本」或複本中的資料表、查詢、表單、報表、巨集或模組。物件及物件的變更都不會複製到複本集中的其他成員。)';
sTemp=L_IDH_acdefLocalObject_TEXT;
break;
			case 'IDH_acdefLocalReplica':
			L_IDH_acdefLocalReplica_TEXT='(本機複本：與集中中心或共用複本交換資料，但不與複本集中其他複本交換資料的複本。)';
sTemp=L_IDH_acdefLocalReplica_TEXT;
break;
			case 'IDH_acdefMarquee':
			L_IDH_acdefMarquee_TEXT='(跑馬燈：資料頁上的移動文字，用來引起使用者對特定網頁元素 (如標題或重要通知) 的注意。若要將跑馬燈放在頁面上，請建立跑馬燈文字控制項。)';
sTemp=L_IDH_acdefMarquee_TEXT;
break;
			case 'IDH_acdefMaximumRecordLimit':
			L_IDH_acdefMaximumRecordLimit_TEXT='(最大記錄限制：若要增進效能，您可以指定針對 Access 專案中的表單或資料工作表，將從 Microsoft SQL Server 資料庫擷取的最大記錄數。)';
sTemp=L_IDH_acdefMaximumRecordLimit_TEXT;
break;
			case 'IDH_acdefMicrosoftDataEngineMSDE':
			L_IDH_acdefMicrosoftDataEngineMSDE_TEXT='(MSDE 2000：在小型電腦系統 (如單一使用者電腦或小型工作群組伺服器) 上提供本機資料儲存，且與 Microsoft SQL Server 6.5、7.0 及 2000 相容的主從架構資料引擎。)';
sTemp=L_IDH_acdefMicrosoftDataEngineMSDE_TEXT;
break;
			case 'IDH_acdefMoneyDataType':
			L_IDH_acdefMoneyDataType_TEXT='(money 資料類型：在 Access 專案中，儲存範圍從 - 922,337,203,685,477.5707 到 922,337,203,685,477.5807 的貨幣值，且精確度為貨幣單位萬分之一的資料類型。)';
sTemp=L_IDH_acdefMoneyDataType_TEXT;
break;
			case 'IDH_acdefNameAutoCorrect':
			L_IDH_acdefNameAutoCorrect_TEXT='(名稱自動校正：一種自動更正功能，用於更正重新命名表單、報表、資料表、查詢、欄位，或表單及報表控制項時所發生的一般副作用。不過，「名稱自動校正」無法修復對重新命名物件的所有參照。)';
sTemp=L_IDH_acdefNameAutoCorrect_TEXT;
break;
			case 'IDH_acdefNcharDataType':
			L_IDH_acdefNcharDataType_TEXT='(nchar 資料類型：在 Access 專案中，最多有 4,000 個 Unicode 字元的固定長度資料類型。Unicode 字元每字元使用 2 個位元組，且支援所有國際字元。)';
sTemp=L_IDH_acdefNcharDataType_TEXT;
break;
			case 'IDH_acdefNtextDataType':
			L_IDH_acdefNtextDataType_TEXT='(ntext 資料類型：在 Access 專案中，最多可以保留 2^30 - 1 (1,073,741,823) 個字元的可變長度資料類型。資料類型為 ntext 的欄將 16 位元組指標儲存在資料列中，且資料是分別儲存的。)';
sTemp=L_IDH_acdefNtextDataType_TEXT;
break;
			case 'IDH_acdefNumericDataType':
			L_IDH_acdefNumericDataType_TEXT='(numeric 資料類型：在 Access 專案中，保留範圍從 -10^38 - 1 到 10^38 - 1 之值的精確數值資料類型。您可以指定範圍 (總位數的最大值) 及精度 (小數點右側最多的位數)。)';
sTemp=L_IDH_acdefNumericDataType_TEXT;
break;
			case 'IDH_acdefNvarchaDataType':
			L_IDH_acdefNvarchaDataType_TEXT='(nvarchar(n) 資料類型：在 Access 專案中，最多有 4,000 個 Unicode 字元的可變長度資料類型。Unicode 字元每字元使用 2 個位元組，且支援所有國際字元。)';
sTemp=L_IDH_acdefNvarchaDataType_TEXT;
break;
			case 'IDH_acdefOLEDB':
			L_IDH_acdefOLEDB_TEXT='(OLE DB：提供對多種類型資料來源 (包括相關的資料、郵件檔案、一般檔案及試算表) 之有效網路及網際網路存取的元件資料庫架構。)';
sTemp=L_IDH_acdefOLEDB_TEXT;
break;
			case 'IDH_acdefOLEDBProvider':
			L_IDH_acdefOLEDBProvider_TEXT='(OLE DB 提供者：OLE DB 架構中啟用對資料之本機存取的程式，而不是使用 ODBC 或 IISAM 驅動程式存取資料 (存取資料的外部方式)。)';
sTemp=L_IDH_acdefOLEDBProvider_TEXT;
break;
			case 'IDH_acdefPageView':
			L_IDH_acdefPageView_TEXT='(頁面檢視：您可以瀏覽資料頁內容的 Access 視窗。網頁在頁面檢視中具有的功能與在 Internet Explorer 5.0 或更新版本中相同。)';
sTemp=L_IDH_acdefPageView_TEXT;
break;
			case 'IDH_acdefPartialReplica':
			L_IDH_acdefPartialReplica_TEXT='(部份複本：僅包含完全複本中記錄子集的資料庫。使用部份複本，您可以設定篩選及識別關係，該關係定義完全複本中記錄的哪個子集應出現在資料庫中。)';
sTemp=L_IDH_acdefPartialReplica_TEXT;
break;
			case 'IDH_acdefPivotTableList':
			L_IDH_acdefPivotTableList_TEXT='(樞紐分析表清單：用來在網頁上互動分析資料的「Microsoft Office Web 元件」。以資料列及欄格式顯示的資料可以觀眾能夠了解的方式移動、篩選、排序及計算。)';
sTemp=L_IDH_acdefPivotTableList_TEXT;
break;
			case 'IDH_acdefPublication':
			L_IDH_acdefPublication_TEXT='(出版物：在 Access 專案中，出版物可以包含來自一個使用者資料庫之一或多個發佈的資料表或儲存程序文章。每個使用者資料庫都可以有一或多個出版物。文章是作為單元複製的資料群組。)';
sTemp=L_IDH_acdefPublication_TEXT;
break;
			case 'IDH_acdefRealDataType':
			L_IDH_acdefRealDataType_TEXT='(real 資料類型：在 Access 專案中，精確度為七位的近似數值資料類型。它可以保留大約從 1.18E - 38 到 3.40E + 38 的正值，大約從 1.18E - 38 到 - 3.40E + 38 的負值，或零。)';
sTemp=L_IDH_acdefRealDataType_TEXT;
break;
			case 'IDH_acdefRecordNavigationControl':
			L_IDH_acdefRecordNavigationControl_TEXT='(記錄導覽控制項：用來在資料頁上顯示記錄導覽工具列的控制項。在群組頁中，您可以向每個群組層級新增導覽工具列。可以藉由變更記錄導覽控制項的屬性對其進行自訂。)';
sTemp=L_IDH_acdefRecordNavigationControl_TEXT;
break;
			case 'IDH_acdefRecordNavigationSection':
			L_IDH_acdefRecordNavigationSection_TEXT='(記錄導覽區段：資料頁中顯示特定群組層級之記錄導覽控制項的區段。它顯示在對應的群組標題區段之後。您無法將結合控制項放在記錄導覽區段中。)';
sTemp=L_IDH_acdefRecordNavigationSection_TEXT;
break;
			case 'IDH_acdefRelativePositioning':
			L_IDH_acdefRelativePositioning_TEXT='(相對或內置位置：將元素放在文件的自然 HTML 流向中，但根據前導內容位移元素的位置。)';
sTemp=L_IDH_acdefRelativePositioning_TEXT;
break;
			case 'IDH_acdefReplicaSet':
			L_IDH_acdefReplicaSet_TEXT='(複本集：共用相同資料庫設計及唯一複本集識別碼的「設計主複本」及所有複本。)';
sTemp=L_IDH_acdefReplicaSet_TEXT;
break;
			case 'IDH_acdefReportSnapshot':
			L_IDH_acdefReportSnapshot_TEXT='(報表快照：包含每頁 Access 報告最佳畫質副本的檔案 (.snp 副檔名)。它保留平面版面配置、圖形及報表的其他內嵌物件。)';
sTemp=L_IDH_acdefReportSnapshot_TEXT;
break;
			case 'IDH_acdefScrollingTextControl':
			L_IDH_acdefScrollingTextControl_TEXT='(跑馬燈文字控制項：資料頁上用來顯示跑馬燈或移動文字的控制項。您可以設定方向及速度等選項來自訂文字的顯示。不支援跑馬燈文字的瀏覽器會顯示靜態文字。)';
sTemp=L_IDH_acdefScrollingTextControl_TEXT;
break;
			case 'IDH_acdefServerFilterByForm':
			L_IDH_acdefServerFilterByForm_TEXT='(依表單伺服器篩選：這種技術使用帶有空白欄位的目前表單或資料工作表版本，您可以在空白欄位中鍵入想要篩選記錄包含的值。資料先由伺服器篩選，然後才從資料庫擷取。)';
sTemp=L_IDH_acdefServerFilterByForm_TEXT;
break;
			case 'IDH_acdefServergeneratedHTML':
			L_IDH_acdefServergeneratedHTML_TEXT='(伺服器產生的 HTML：資料表、查詢或表單的輸出動態伺服器網頁 (ASP) 或 IDC/HTX 檔案，連接到 ODBC 資料來源，且由 Internet Information Server 處理，以動態建立唯讀 HTML 檔案。)';
sTemp=L_IDH_acdefServergeneratedHTML_TEXT;
break;
			case 'IDH_acdefSmalldatetimeDataType':
			L_IDH_acdefSmalldatetimeDataType_TEXT='(smalldatetime 資料類型：在 Access 專案中，精確度低於 datetime 資料類型的日期及時間資料類型。資料值的範圍從 1900 年 1 月 1 日到 2079 年 6 月 6 日，精確度為一分鐘。)';
sTemp=L_IDH_acdefSmalldatetimeDataType_TEXT;
break;
			case 'IDH_acdefSmallintDataType':
			L_IDH_acdefSmallintDataType_TEXT='(smallint 資料類型：在 Access 專案中，儲存 -2^15 (-32,768) 到 2^15 - 1 (32,767) 範圍內整數的 2 位元組 (16 個位元) 資料類型。)';
sTemp=L_IDH_acdefSmallintDataType_TEXT;
break;
			case 'IDH_acdefSmallmoneyDataType':
			L_IDH_acdefSmallmoneyDataType_TEXT='(smallmoney 資料類型：在 Access 專案中，儲存範圍從 - 214,748.3648 到 214,748.3647 的貨幣值，且精確度為貨幣單位萬分之一的資料類型。當顯示 smallmoney 值時，會將它們四捨五入至兩個小數位。)';
sTemp=L_IDH_acdefSmallmoneyDataType_TEXT;
break;
			case 'IDH_acdefSnapshotViewer':
			L_IDH_acdefSnapshotViewer_TEXT='(Snapshot Viewer：可用來檢視、列印或傳送快照郵件 (如報表快照) 的程式。Snapshot Viewer 11.0 包含獨立的可執行程式、Snapshot Viewer 控制項 (Snapview.ocx) 及其他相關檔案。)';
sTemp=L_IDH_acdefSnapshotViewer_TEXT;
break;
			case 'IDH_acdefSnapshotViewerControl':
			L_IDH_acdefSnapshotViewerControl_TEXT='(Snapshot Viewer 控制項：您用來從 Microsoft Internet Explorer 3.0 或更新版本，或從支援 ActiveX 控制項的任何應用程式 (如 Access 或 Microsoft Visual Basic) 檢視快照報表的 ActiveX 控制項 (Snapview.ocx)。)';
sTemp=L_IDH_acdefSnapshotViewerControl_TEXT;
break;
			case 'IDH_acdefSubdatasheet':
			L_IDH_acdefSubdatasheet_TEXT='(子資料工作表：巢狀在其他資料工作表中，且包含與第一個資料工作表相關或相結合之資料的資料工作表。)';
sTemp=L_IDH_acdefSubdatasheet_TEXT;
break;
			case 'IDH_acdefSubscribe':
			L_IDH_acdefSubscribe_TEXT='(訂閱：同意接收 Access 資料庫 (.mdb) 或 Access 專案 (.adp) 中的出版物。訂閱者資料庫訂閱發行者資料庫的複製資料。)';
sTemp=L_IDH_acdefSubscribe_TEXT;
break;
			case 'IDH_acdefSubscription':
			L_IDH_acdefSubscription_TEXT='(訂閱：接收從 Access 專案 (.adp) 中發行者資料庫複製之資料及資料表的資料庫。)';
sTemp=L_IDH_acdefSubscription_TEXT;
break;
			case 'IDH_acdefSysnameDataType':
			L_IDH_acdefSysnameDataType_TEXT='(sysname 資料類型：Access 專案中系統提供的特殊使用者定義資料類型，用於資料表欄、變數及儲存物件名稱的儲存程序參數。)';
sTemp=L_IDH_acdefSysnameDataType_TEXT;
break;
			case 'IDH_acdefTextmemoDataType':
			L_IDH_acdefTextmemoDataType_TEXT='(text 資料類型：在 Access 專案中，最多可以保留 2^31 - 1 (2,147,483,647) 個字元的可變長度資料類型；預設長度為 16。)';
sTemp=L_IDH_acdefTextmemoDataType_TEXT;
break;
			case 'IDH_acdefTheme':
			L_IDH_acdefTheme_TEXT='(主題：決定資料頁上控制項、區段、本文及文字外觀的格式集合。)';
sTemp=L_IDH_acdefTheme_TEXT;
break;
			case 'IDH_acdefTimestampDataType':
			L_IDH_acdefTimestampDataType_TEXT='(timestamp 資料類型：在 Access 專案中，每次插入或更新列時都會自動更新的資料類型。時間戳記欄中的值不是 datetime 資料，而是 binary(8) 或 varbinary(8)，指示資料修改的順序。)';
sTemp=L_IDH_acdefTimestampDataType_TEXT;
break;
			case 'IDH_acdefTinyintDataType':
			L_IDH_acdefTinyintDataType_TEXT='(tinyint 資料類型：在 Access 專案中，儲存 0 到 255 範圍內整數的 1 位元組 (8 個位元) 資料類型。)';
sTemp=L_IDH_acdefTinyintDataType_TEXT;
break;
			case 'IDH_acdefTopology':
			L_IDH_acdefTopology_TEXT='(拓撲：各個變更從複本散佈到複本的順序。拓撲很重要，因為它決定其他複本中的變更在您複本中顯示的速度。)';
sTemp=L_IDH_acdefTopology_TEXT;
break;
			case 'IDH_acdefUniqueidentifierDataType':
			L_IDH_acdefUniqueidentifierDataType_TEXT='(uniqueidentifier 資料類型：在 Access 專案中，16 位元的全域唯一識別碼 (GUID)。)';
sTemp=L_IDH_acdefUniqueidentifierDataType_TEXT;
break;
			case 'IDH_acdefUpdatableSnapshot':
			L_IDH_acdefUpdatableSnapshot_TEXT='(可更新快照：一種記錄集類型，藉由快取用戶端上的資料並將伺服器存取及更新資料的往返次數減至最少，在主從架構環境中有效地工作。)';
sTemp=L_IDH_acdefUpdatableSnapshot_TEXT;
break;
			case 'IDH_acdefVarbinaryDataType':
			L_IDH_acdefVarbinaryDataType_TEXT='(varbinary 資料類型：在 Access 專案中，最多有 8,000 個位元組二進位資料的可變長度資料類型。)';
sTemp=L_IDH_acdefVarbinaryDataType_TEXT;
break;
			case 'IDH_acdefVarchartextDataType':
			L_IDH_acdefVarchartextDataType_TEXT='(varchar (n) 資料類型：在 Access 專案中，最多有 8,000 個 ANSI 字元的可變長度資料類型。)';
sTemp=L_IDH_acdefVarchartextDataType_TEXT;
break;
			case 'IDH_acdefVisibility':
			L_IDH_acdefVisibility_TEXT='(可見度：複本屬性，指示可與其同步的複本集成員及可套用的衝突解決規則。複本的可見度類型有三種：共用、本機及匿名。)';
sTemp=L_IDH_acdefVisibility_TEXT;
break;
			case 'IDH_acdefWebPagePreview':
			L_IDH_acdefWebPagePreview_TEXT='(網頁預覽：在 Microsoft Internet Explorer 5 或更新版本中開啟資料頁進行預覽。)';
sTemp=L_IDH_acdefWebPagePreview_TEXT;
break;
			case 'rpldefDBReplication':
			L_rpldefDBReplication_TEXT='(資料庫複製：建立多個 Access 資料庫特殊副本 (複本) 的處理程序。複本可以同步處理，即對一個複本中的資料進行變更，或「設計主複本」中的設計變更會傳送到其他複本。)';
sTemp=L_rpldefDBReplication_TEXT;
break;
			case 'rpldefGUID':
			L_rpldefGUID_TEXT='(GUID：在 Access 資料庫中用來建立複製之唯一識別碼的 16 位元組欄位。GUID 用來識別複本、複本集、資料表、記錄及其他物件。在 Access 資料庫中，GUID 又稱為「複製編號」。)';
sTemp=L_rpldefGUID_TEXT;
break;
			case 'rpldefReplica':
			L_rpldefReplica_TEXT='(複本：為複本集的成員，且可以與複本集中的其他複本同步處理的資料庫副本。一個複本中已複製資料表資料的變更會傳送並套用到其他複本。)';
sTemp=L_rpldefReplica_TEXT;
break;
			case 'rpldefReplication':
			L_rpldefReplication_TEXT='(複製：複製資料庫，以便多個副本可以交換複製物件或資料更新的處理程序。此交換稱為同步處理。)';
sTemp=L_rpldefReplication_TEXT;
break;
			case 'rpldefSynchronization':
			L_rpldefSynchronization_TEXT='(同步處理：藉由交換每個成員中的所有更新記錄及物件，來更新複本集兩個成員的處理程序。當兩個複本集成員已相互套用變更時，這兩個複本集成員會同步。)';
sTemp=L_rpldefSynchronization_TEXT;
break;
			case 'defDDEConversation':
			L_defDDEConversation_TEXT='(DDE 交談：透過特殊函數及程式碼 (稱為動態資料交換 (DDE)) 通訊及交換資料之兩個應用程式之間的互動。)';
sTemp=L_defDDEConversation_TEXT;
break;
			case 'defQueryChannel':
			L_defQueryChannel_TEXT='(查詢通道：您可以在目的應用程式與 [查詢] 中特定查詢 (如「Query1」) 之間的 DDE 交談中使用查詢通道。若要使用查詢通道，您必須已經開啟使用系統通道的查詢視窗。)';
sTemp=L_defQueryChannel_TEXT;
break;
			case 'defSystemChannel':
			L_defSystemChannel_TEXT='(系統通道：用在應用程式之間的 DDE 交談中，以取得系統的相關資訊，如目前連接、開啟的查詢及目的應用程式的狀態。)';
sTemp=L_defSystemChannel_TEXT;
break;
			case 'dldefmovingBorder':
			L_dldefmovingBorder_TEXT='(移動框線：顯示在已剪下或複製之工作表範圍周圍的動畫效果框線。若要取消移動框線，請按 ESC 鍵。)';
sTemp=L_dldefmovingBorder_TEXT;
break;
			case 'grColumnHeading':
			L_grColumnHeading_TEXT='(欄名：每個 [資料] 窗格欄頂端包含欄位名稱的陰影區域。)';
sTemp=L_grColumnHeading_TEXT;
break;
			case 'grdefChartArea':
			L_grdefChartArea_TEXT='(圖表區：整個圖表及其所有元素。)';
sTemp=L_grdefChartArea_TEXT;
break;
			case 'grdefComparisonOperator':
			L_grdefComparisonOperator_TEXT='(比較運算子：比較篩選條件中用於比較兩個值的符號。這六個標準為 = 等於、&gt; 大於、&lt; 小於、&gt;=大於或等於、&lt;= 小於或等於及 &lt;&gt; 於。)';
sTemp=L_grdefComparisonOperator_TEXT;
break;
			case 'grdefDataLabel':
			L_grdefDataLabel_TEXT='(資料標籤：提供資料標記其餘資訊的標籤，代表源自資料工作表儲存格的單一資料點或值。)';
sTemp=L_grdefDataLabel_TEXT;
break;
			case 'grdefDataMarker':
			L_grdefDataMarker_TEXT='(資料標記：圖表中代表源自資料工作表儲存格之單一資料點或值的列、區域、點、扇區或其他符號。圖表中的相關資料標記組成一個資料數列。)';
sTemp=L_grdefDataMarker_TEXT;
break;
			case 'grdefDataPoints':
			L_grdefDataPoints_TEXT='(資料點：在圖表中繪製的個別值，由列、資料欄、線條、圓形或環圈圖扇區、點及其他各種圖案 (稱為資料標記) 表示。相同色彩的資料標記組成一個資料數列。)';
sTemp=L_grdefDataPoints_TEXT;
break;
			case 'grdefDataRegion':
			L_grdefDataRegion_TEXT='(資料區域：包含資料且周圍是空儲存格或資料工作表框線的儲存格範圍。)';
sTemp=L_grdefDataRegion_TEXT;
break;
			case 'grdefDataSeries':
			L_grdefDataSeries_TEXT='(資料數列：繪製在圖表中且源自資料工作表資料列或欄的相關資料點。圖表中的每個資料數列均具有唯一的色彩或圖樣。您可以在圖表中繪製一或多個資料數列。圓形圖僅有一個資料數列。)';
sTemp=L_grdefDataSeries_TEXT;
break;
			case 'grdefDataTableInCharts':
			L_grdefDataTableInCharts_TEXT='(圖表中的資料表：與圖表連接且顯示用於建立圖表之資料的格線。資料表通常連接到圖表的類別軸，並取代類別軸上的刻度標記標籤。)';
sTemp=L_grdefDataTableInCharts_TEXT;
break;
			case 'grdefErrorBars':
			L_grdefErrorBars_TEXT='(誤差線：通常用在統計或科學資料中，誤差線顯示相對於系列中每個資料標記的潛在錯誤或不確定程度。)';
sTemp=L_grdefErrorBars_TEXT;
break;
			case 'grdefPoint':
			L_grdefPoint_TEXT='(點：等於 1/72 英吋的度量單位。)';
sTemp=L_grdefPoint_TEXT;
break;
			case 'grdefSelect':
			L_grdefSelect_TEXT='(選取：醒目顯示資料工作表上的儲存格或儲存格範圍。所選儲存格將受到下一個指令或動作的影響。)';
sTemp=L_grdefSelect_TEXT;
break;
			case 'grdefTextBox':
			L_grdefTextBox_TEXT='(文字方塊：圖表上可以鍵入文字的矩形物件。)';
sTemp=L_grdefTextBox_TEXT;
break;
			case 'grdefToolbar':
			L_grdefToolbar_TEXT='(工具列：帶有可用來執行指令之按鈕及選項的列。若要顯示工具列，請指向 [檢視] 功能表上的 [工具列]，然後按一下您要的工具列。如果您要的按鈕未顯示，請按一下 [其他按鈕]。)';
sTemp=L_grdefToolbar_TEXT;
break;
			case 'grRowHeading':
			L_grRowHeading_TEXT='(列名：每列左側編號的灰色區域。按一下列名可以選取整列。)';
sTemp=L_grRowHeading_TEXT;
break;
			case 'grSelectAllButton':
			L_grSelectAllButton_TEXT='([全選] 按鈕：資料工作表左上角列名與欄名相交處的灰色矩形。按一下此按鈕可以選取資料工作表上的所有儲存格。)';
sTemp=L_grSelectAllButton_TEXT;
break;
			case 'IDH_grdefDropdownlist':
			L_IDH_grdefDropdownlist_TEXT='(下拉式清單方塊：功能表、工具列或對話方塊上的控制項，當您按一下清單方塊旁的小箭號時，會顯示選項清單。)';
sTemp=L_IDH_grdefDropdownlist_TEXT;
break;
			case 'IDH_grdefRsquaredValue':
			L_IDH_grdefRsquaredValue_TEXT='(R 平方值：顯示趨勢線估計值與實際資料接近程度之 0 到 1 的數字。當 R 平方值為 1 或接近 1 時，趨勢線最為可靠。亦稱為確定係數。)';
sTemp=L_IDH_grdefRsquaredValue_TEXT;
break;
			case 'IDH_grdefVertexes':
			L_IDH_grdefVertexes_TEXT='(端點：當您編輯快取圖案上的點時，顯示在特定快取圖案 (如手繪多邊形、徒手畫及曲線) 中線條或曲線端點及交集處的可拖曳方形黑點。)';
sTemp=L_IDH_grdefVertexes_TEXT;
break;
			case 'IDH_qudefAddress':
			L_IDH_qudefAddress_TEXT='(位址：到物件、文件、檔案、頁面或其他目的地的路徑。地址可以是 URL (網址) 或 UNC 路徑 (網路位址)，且可以包含檔案中的特定位置，如 Word 書籤或 Excel 儲存格範圍。)';
sTemp=L_IDH_qudefAddress_TEXT;
break;
			case 'IDH_qudefCalculatedField':
			L_IDH_qudefCalculatedField_TEXT='(計算欄位：查詢結果集中顯示運算式結果 (而不是資料庫資料) 的欄位。)';
sTemp=L_IDH_qudefCalculatedField_TEXT;
break;
			case 'IDH_qudefConstant':
			L_IDH_qudefConstant_TEXT='(常數：未計算的值。例如，數字 210 及文字「Quarterly Earnings」是常數。運算式或運算式產生的值不是常數。)';
sTemp=L_IDH_qudefConstant_TEXT;
break;
			case 'IDH_qudefCriteriaPane':
			L_IDH_qudefCriteriaPane_TEXT='(篩選條件窗格：顯示查詢篩選條件的視窗區域，該篩選條件用來限制包含在查詢結果集中的記錄。)';
sTemp=L_IDH_qudefCriteriaPane_TEXT;
break;
			case 'IDH_qudefDataPane':
			L_IDH_qudefDataPane_TEXT='(資料窗格：顯示查詢結果集的視窗區域。)';
sTemp=L_IDH_qudefDataPane_TEXT;
break;
			case 'IDH_qudefExternalData':
			L_IDH_qudefExternalData_TEXT='(外部資料：儲存在資料庫 (如 Access、dBASE 或 SQL Server) 中的資料，該資料庫與 Query 及啟動 Query 的程式是分開的。)';
sTemp=L_IDH_qudefExternalData_TEXT;
break;
			case 'IDH_qudefFunction':
			L_IDH_qudefFunction_TEXT='(函數：根據計算結果傳回值的運算式。查詢假設資料來源支援 Avg、Count、Max、Min 及 Sum 函數。部份資料來源可能不支援上述所有函數，或可能支援其他函數。)';
sTemp=L_IDH_qudefFunction_TEXT;
break;
			case 'IDH_qudefIndex':
			L_IDH_qudefIndex_TEXT='(索引：加速資料搜尋的資料庫元件。如果資料表有索引，則可以藉由在索引中查詢來找到資料表中的資料。)';
sTemp=L_IDH_qudefIndex_TEXT;
break;
			case 'IDH_qudefJoin':
			L_IDH_qudefJoin_TEXT='(連接：多個資料表之間的連接，符合之相關欄位的記錄合併在一起，並顯示為一筆記錄。不符合的記錄可以根據連接類型併入或排除。)';
sTemp=L_IDH_qudefJoin_TEXT;
break;
			case 'IDH_qudefName':
			L_IDH_qudefName_TEXT='(名稱：Excel 中代表儲存格、儲存格範圍、公式或常數值的文字或字元字串。)';
sTemp=L_IDH_qudefName_TEXT;
break;
			case 'IDH_qudefPassword':
			L_IDH_qudefPassword_TEXT='(密碼：文字、片語或字元字串，可用來防止未經授權而存取資料庫。若要取得資料庫的存取權，您必須正確輸入密碼。)';
sTemp=L_IDH_qudefPassword_TEXT;
break;
			case 'IDH_qudefPivotTable':
			L_IDH_qudefPivotTable_TEXT='(樞紐分析表：從不同來源 (包含 Excel 的外部來源) 摘要及分析資料 (如資料庫記錄) 的互動式、跨表格 Excel 報表。)';
sTemp=L_IDH_qudefPivotTable_TEXT;
break;
			case 'IDH_qudefQuerysDesign':
			L_IDH_qudefQuerysDesign_TEXT='(查詢設計：[查詢] 視窗中包含的所有元素，如資料表、篩選條件、排列欄位的順序等。該設計還指定「自動查詢」是否已開啟，以及您是否可以編輯來源資料。)';
sTemp=L_IDH_qudefQuerysDesign_TEXT;
break;
			case 'IDH_qudefReadonly':
			L_IDH_qudefReadonly_TEXT='(唯讀：一種設定，允許讀取或複製檔案，但不允許變更或儲存檔案。)';
sTemp=L_IDH_qudefReadonly_TEXT;
break;
			case 'IDH_qudefSortOrder':
			L_IDH_qudefSortOrder_TEXT='(排序順序：根據值或資料類型排列資料的方式。您可以按字母順序、編號順序，或按日期為資料排序。排序順序使用遞增 (1 到 9、A 到 Z) 或遞減 (9 到 1、Z 到 A) 順序。)';
sTemp=L_IDH_qudefSortOrder_TEXT;
break;
			case 'IDH_qudefStructuredQueryLanguageSQL':
			L_IDH_qudefStructuredQueryLanguageSQL_TEXT='(SQL：用來擷取、更新及管理資料的語言。當您建立查詢時，Query 會使用 SQL 來建立對應的 SQL SELECT 陳述式。如果您了解 SQL，則可以檢視或變更 SQL SELECT 陳述式。)';
sTemp=L_IDH_qudefStructuredQueryLanguageSQL_TEXT;
break;
			case 'IDH_qudefTablePane':
			L_IDH_qudefTablePane_TEXT='(資料表窗格：[查詢] 視窗中顯示查詢中之資料表的區域。每個資料表均會顯示您可以從中擷取資料的欄位。)';
sTemp=L_IDH_qudefTablePane_TEXT;
break;
			case 'IDH_qudefWorldWideWeb':
			L_IDH_qudefWorldWideWeb_TEXT='(全球資訊網：使用超連結導覽網際網路的系統。當您使用網頁瀏覽器時，網頁會顯示為文字、圖片、聲音及數位影片的集合。)';
sTemp=L_IDH_qudefWorldWideWeb_TEXT;
break;
			case 'IDH_xldef3DReference':
			L_IDH_xldef3DReference_TEXT='(立體參照：對跨活頁簿中兩個或兩個以上工作表之範圍的參照。)';
sTemp=L_IDH_xldef3DReference_TEXT;
break;
			case 'IDH_xldefArgument':
			L_IDH_xldefArgument_TEXT='(引數：函數用來執行作業或計算的值。函數使用的引數類型是函數特定的。函數中使用的一般引數包含數字、文字、儲存格參照及名稱。)';
sTemp=L_IDH_xldefArgument_TEXT;
break;
			case 'IDH_xldefArrayFormula':
			L_IDH_xldefArrayFormula_TEXT='(陣列公式：針對一或多組值執行多個計算，然後傳回單一結果或多個結果的公式。陣列公式括在大括弧 { } 中，且藉由按 CTRL+SHIFT+ENTER 輸入。)';
sTemp=L_IDH_xldefArrayFormula_TEXT;
break;
			case 'IDH_xldefBaseAddress':
			L_IDH_xldefBaseAddress_TEXT='(基本位址：當您插入超連結時，Excel 用於目的地址的相對路徑。這可以是網際網路位址 (URL)、硬碟上資料夾的路徑，或網路上資料夾的路徑。)';
sTemp=L_IDH_xldefBaseAddress_TEXT;
break;
			case 'IDH_xldefCalculatedField':
			L_IDH_xldefCalculatedField_TEXT='(計算欄位：樞紐分析表或樞紐分析圖中使用您建立之公式的欄位。計算欄位可藉由使用樞紐分析表或樞紐分析圖中其他欄位的內容來執行計算。)';
sTemp=L_IDH_xldefCalculatedField_TEXT;
break;
			case 'IDH_xldefCalculatedItem':
			L_IDH_xldefCalculatedItem_TEXT='(計算項目：樞紐分析表欄位或樞紐分析圖欄位中使用您建立之公式的項目。計算項目可藉由使用樞紐分析表或樞紐分析圖之相同欄位中的其他項目內容來執行計算。)';
sTemp=L_IDH_xldefCalculatedItem_TEXT;
break;
			case 'IDH_xldefCertifyingAuthority':
			L_IDH_xldefCertifyingAuthority_TEXT='(憑證授權單位：商業組織，或公司內部的群組，使用工具 (如 Microsoft Certificate Server) 提供軟體開發人員可以用來簽署巨集，使用者可以用來簽署文件的數位憑證。)';
sTemp=L_IDH_xldefCertifyingAuthority_TEXT;
break;
			case 'IDH_xldefColumnHeading':
			L_IDH_xldefColumnHeading_TEXT='(欄名：每欄頂端標有字母或編號的灰色區域。按一下欄名可以選取整欄。若要增加或減少欄寬，請拖曳欄名右側的線。)';
sTemp=L_IDH_xldefColumnHeading_TEXT;
break;
			case 'IDH_xldefConditionalFormat':
			L_IDH_xldefConditionalFormat_TEXT='(條件格式：指定條件為真時 Excel 自動套用到儲存格的格式 (如儲存格陰影或字型色彩)。)';
sTemp=L_IDH_xldefConditionalFormat_TEXT;
break;
			case 'IDH_xldefDataAccessPageDesignView':
			L_IDH_xldefDataAccessPageDesignView_TEXT='(資料頁設計檢視：Access 中可讓您設計資料頁 (連接到資料庫的網頁) 的視窗。)';
sTemp=L_IDH_xldefDataAccessPageDesignView_TEXT;
break;
			case 'IDH_xldefDataSourceDriver':
			L_IDH_xldefDataSourceDriver_TEXT='(資料來源驅動程式：用來連接到特定資料庫的程式檔。每個資料庫程式或管理系統都需要不同的驅動程式。)';
sTemp=L_IDH_xldefDataSourceDriver_TEXT;
break;
			case 'IDH_xldefDefaultWorkbookTemplate':
			L_IDH_xldefDefaultWorkbookTemplate_TEXT='(預設活頁簿範本：您建立以變更新活頁簿預設格式的 Book.xlt 範本。當您啟動 Excel，或建立新活頁簿而未指定範本時，Excel 會使用此範本來建立空白的活頁簿。)';
sTemp=L_IDH_xldefDefaultWorkbookTemplate_TEXT;
break;
			case 'IDH_xldefDropArea':
			L_IDH_xldefDropArea_TEXT='(拖放區：樞紐分析表或樞紐分析圖中的區域，在其中您可以拖放 [欄位清單] 對話方塊中的欄位，以顯示該欄位中的資料。每個拖放區上的標籤指示報表中可以建立的欄位類型。)';
sTemp=L_IDH_xldefDropArea_TEXT;
break;
			case 'IDH_xldefDropdownListBox':
			L_IDH_xldefDropdownListBox_TEXT='(下拉式清單方塊：功能表、工具列或對話方塊上的控制項，當您按一下清單方塊旁的小箭號時，會顯示選項清單。)';
sTemp=L_IDH_xldefDropdownListBox_TEXT;
break;
			case 'IDH_xldefExternalDataRange':
			L_IDH_xldefExternalDataRange_TEXT='(外部資料範圍：引入工作表、但來自 Excel 外部 (如資料庫或文字檔案) 的資料範圍。在 Excel 中，您可以格式化該資料，或將其用於計算，就像對其他資料所做的一樣。)';
sTemp=L_IDH_xldefExternalDataRange_TEXT;
break;
			case 'IDH_xldefExternalReference':
			L_IDH_xldefExternalReference_TEXT='(外部參照：對其他 Excel 活頁簿中某工作表上儲存格或範圍的參照，或對其他活頁簿中定義名稱的參照。)';
sTemp=L_IDH_xldefExternalReference_TEXT;
break;
			case 'IDH_xldefField':
			L_IDH_xldefField_TEXT='(欄位：儲存在資料表中的資訊類別，如姓氏或訂單數量。當 [查詢] 在 [資料] 窗格中顯示結果集時，欄位以欄表示。)';
sTemp=L_IDH_xldefField_TEXT;
break;
			case 'IDH_xldefFormulaPalette':
			L_IDH_xldefFormulaPalette_TEXT='(公式調色盤：幫助您建立或編輯公式，同時提供函數及其引數之相關資訊的工具。)';
sTemp=L_IDH_xldefFormulaPalette_TEXT;
break;
			case 'IDH_xldefFunction':
			L_IDH_xldefFunction_TEXT='(函數：接受值、執行作業並傳回值之預先撰寫的公式。使用函數可以簡化並縮短工作表上的公式，特別是執行冗長或複雜計算的公式。)';
sTemp=L_IDH_xldefFunction_TEXT;
break;
			case 'IDH_xldefHistoryWorksheet':
			L_IDH_xldefHistoryWorksheet_TEXT='(「歷程」工作表：在共用活頁簿中列示追蹤之變更的獨立工作表，包含進行變更的人員姓名、變更的時間及位置、刪除或取代的資料，以及如何解決衝突。)';
sTemp=L_IDH_xldefHistoryWorksheet_TEXT;
break;
			case 'IDH_xldefImplicitIntersection':
			L_IDH_xldefImplicitIntersection_TEXT='(隱含交集：參照儲存格範圍而非單一儲存格，如同計算單一儲存格一樣進行計算。如果儲存格 C10 包含公式 =B5:B15*5，Excel 會用 5 乘以儲存格 B10 中的值，因為儲存格 B10 及 C10 位於同一列。)';
sTemp=L_IDH_xldefImplicitIntersection_TEXT;
break;
			case 'IDH_xldefJoinLine':
			L_IDH_xldefJoinLine_TEXT='(連接線：在 Query 中，在兩個資料表之間連接欄位並顯示資料關聯方式的線。連接類型指示為查詢的結果集選取哪些記錄。)';
sTemp=L_IDH_xldefJoinLine_TEXT;
break;
			case 'IDH_xldefLockedFieldOrRecord':
			L_IDH_xldefLockedFieldOrRecord_TEXT='(鎖定欄位或記錄：在 Query 中，允許檢視但不允許變更 (唯讀) 之資料庫內記錄、欄位或其他物件的一種狀況。)';
sTemp=L_IDH_xldefLockedFieldOrRecord_TEXT;
break;
			case 'IDH_xldefMatrix':
			L_IDH_xldefMatrix_TEXT='(矩陣：值或儲存格範圍的矩形陣列，與其他陣列或範圍組合以產生多個總和或乘積。Excel 已預先定義了可以產生總和或乘積的矩陣函數。)';
sTemp=L_IDH_xldefMatrix_TEXT;
break;
			case 'IDH_xldefMergedCell':
			L_IDH_xldefMergedCell_TEXT='(合併儲存格：藉由組合兩個或多個所選儲存格而建立的單一儲存格。合併儲存格的儲存格參照是原始選取範圍中左上方的儲存格。)';
sTemp=L_IDH_xldefMergedCell_TEXT;
break;
			case 'IDH_xldefMultCategoryLabels':
			L_IDH_xldefMultCategoryLabels_TEXT='(多層次類別標籤：圖表中根據工作表資料，自動在階層中多行上顯示的類別標籤。例如，標題「產品」可能出現在標題為「豆腐」、「蘋果」及「梨」的列上方。)';
sTemp=L_IDH_xldefMultCategoryLabels_TEXT;
break;
			case 'IDH_xldefName':
			L_IDH_xldefName_TEXT='(名稱：代表儲存格、儲存格範圍、公式或常數值的字或字串。請使用容易理解的名稱。例如，用「產品」來指示難以理解的範圍，如 Sales!C20:C30。)';
sTemp=L_IDH_xldefName_TEXT;
break;
			case 'IDH_xldefNonOLAP':
			L_IDH_xldefNonOLAP_TEXT='(非 OLAP 來源資料：樞紐分析表或樞紐分析圖的基礎資料，來自 OLAP 資料庫以外的來源。這些來源包括關聯式資料庫、Excel 工作表上的清單及文字檔資料庫。)';
sTemp=L_IDH_xldefNonOLAP_TEXT;
break;
			case 'IDH_xldefOperand':
			L_IDH_xldefOperand_TEXT='(運算元：公式中位於運算子兩邊的項目。在 Excel 中，運算元可以是值、儲存格參照、名稱、標籤及函數。)';
sTemp=L_IDH_xldefOperand_TEXT;
break;
			case 'IDH_xldefOuterJoin':
			L_IDH_xldefOuterJoin_TEXT='(外部連接：選取一個資料表中所有記錄的一種連接，即使另一個資料表中沒有相符的記錄也一樣。相符的記錄會組合起來顯示為一筆記錄。在另一個資料表中沒有相符記錄的記錄則顯示為空。)';
sTemp=L_IDH_xldefOuterJoin_TEXT;
break;
			case 'IDH_xldefOutlineData':
			L_IDH_xldefOutlineData_TEXT='(大綱資料：工作表大綱中包含的資料。大綱資料包括大綱的摘要及詳細資料列或欄。)';
sTemp=L_IDH_xldefOutlineData_TEXT;
break;
			case 'IDH_xldefPageBreak':
			L_IDH_xldefPageBreak_TEXT='(分頁符號：將工作表分成單獨頁以進行列印的分隔符號。Excel 根據紙張大小、邊界設定、縮放比例選項，以及您插入手動分頁符號的位置，來插入自動分頁符號。)';
sTemp=L_IDH_xldefPageBreak_TEXT;
break;
			case 'IDH_xldefParameterQuery':
			L_IDH_xldefParameterQuery_TEXT='(參數查詢：一種查詢類型，在您執行此類查詢時，會提示您提供值 (篩選條件)，用於選取結果集的記錄，以便能夠使用同一查詢來擷取不同的結果集。)';
sTemp=L_IDH_xldefParameterQuery_TEXT;
break;
			case 'IDH_xldefPivotChart':
			L_IDH_xldefPivotChart_TEXT='(樞紐分析圖：提供資料互動式分析的圖表，與樞紐分析表類似。您可以變更資料的檢視，查看不同層次的細節，或是拖曳欄位及顯示或隱藏欄位中的項目，來重新組織圖表版面配置。)';
sTemp=L_IDH_xldefPivotChart_TEXT;
break;
			case 'IDH_xldefPivotChartCatField':
			L_IDH_xldefPivotChartCatField_TEXT='(樞紐分析圖類別欄位：樞紐分析圖中指定了類別方向的欄位。在圖表中，類別通常顯示在圖表的 x 軸 (或水平軸) 上。)';
sTemp=L_IDH_xldefPivotChartCatField_TEXT;
break;
			case 'IDH_xldefPivotChartSeriesField':
			L_IDH_xldefPivotChartSeriesField_TEXT='(樞紐分析圖數列欄位：樞紐分析圖中指定了數列方向的欄位。在圖表中，數列以圖例表示。)';
sTemp=L_IDH_xldefPivotChartSeriesField_TEXT;
break;
			case 'IDH_xldefPivotTableRefresh':
			L_IDH_xldefPivotTableRefresh_TEXT='(更新：更新樞紐分析表或樞紐分析圖的內容，以反映對基礎來源資料的變更。如果報表以外部資料為基礎，則更新操作會執行基本查詢，以擷取新的或變更的資料。)';
sTemp=L_IDH_xldefPivotTableRefresh_TEXT;
break;
			case 'IDH_xldefPrimaryKey':
			L_IDH_xldefPrimaryKey_TEXT='(主索引：唯一識別資料表中每一筆記錄的一或多個欄位。如同汽車牌照號碼可以識別車輛一樣，主索引可以唯一地識別記錄。)';
sTemp=L_IDH_xldefPrimaryKey_TEXT;
break;
			case 'IDH_xldefPrintTitles':
			L_IDH_xldefPrintTitles_TEXT='(列印標題：列印工作表上列印在每頁頂端或左側的列或欄標籤。)';
sTemp=L_IDH_xldefPrintTitles_TEXT;
break;
			case 'IDH_xldefQueryTemplate':
			L_IDH_xldefQueryTemplate_TEXT='(報表範本：包含基於外部資料之一或多個樞紐分析表或查詢的 Excel 範本 (.xlt 檔案)。儲存報表範本時，Excel 會儲存查詢定義，但不會在範本中儲存查詢的資料。)';
sTemp=L_IDH_xldefQueryTemplate_TEXT;
break;
			case 'IDH_xldefRefresh':
			L_IDH_xldefRefresh_TEXT='(更新：更新來自外部資料來源的資料。您每次更新資料時，都會看到資料庫中資訊的最新版本，包括對資料所作的任何變更。)';
sTemp=L_IDH_xldefRefresh_TEXT;
break;
			case 'IDH_xldefRemoteReference':
			L_IDH_xldefRemoteReference_TEXT='(遠端參照：其他程式文件中儲存之資料的參照。)';
sTemp=L_IDH_xldefRemoteReference_TEXT;
break;
			case 'IDH_xldefRevisionHistory':
			L_IDH_xldefRevisionHistory_TEXT='(變更歷程記錄：共用活頁簿中保存之過去編輯作業中所作變更的相關資訊。此類資訊包括進行變更的人員姓名、變更的時間，以及變更的資料內容。)';
sTemp=L_IDH_xldefRevisionHistory_TEXT;
break;
			case 'IDH_xldefRowHeading':
			L_IDH_xldefRowHeading_TEXT='(列名：每列左側編號的灰色區域。按一下列名可以選取整列。若要增加或減少列高，請拖曳列名下方的線。)';
sTemp=L_IDH_xldefRowHeading_TEXT;
break;
			case 'IDH_xldefSharedWorkbook':
			L_IDH_xldefSharedWorkbook_TEXT='(共用活頁簿：為允許網路上的多位使用者同時檢視及進行變更而設定的活頁簿。儲存活頁簿的每位使用者均可查看其他使用者所作的變更。若要修改共用活頁簿，必須安裝 Excel 97 或更新版本。)';
sTemp=L_IDH_xldefSharedWorkbook_TEXT;
break;
			case 'IDH_xldefTable':
			L_IDH_xldefTable_TEXT='(資料表：儲存在記錄 (資料列) 及欄位 (資料欄) 中之特定主題的相關資料集合。)';
sTemp=L_IDH_xldefTable_TEXT;
break;
			case 'IDH_xldefTotals':
			L_IDH_xldefTotals_TEXT='(總和：Query 為您定義的五種計算類型 (Sum、Avg、Count、Min 及 Max) 之一。)';
sTemp=L_IDH_xldefTotals_TEXT;
break;
			case 'IDH_xldefTracerArrows':
			L_IDH_xldefTracerArrows_TEXT='(追蹤箭號：顯示使用中儲存格與其相關儲存格之間關係的箭號。從提供資料的儲存格指向另一個儲存格時，追蹤箭號為藍色。如果儲存格包含錯誤值 (如 #DIV/0!)，則追蹤箭號為紅色。)';
sTemp=L_IDH_xldefTracerArrows_TEXT;
break;
			case 'IDH_xldefVertexes':
			L_IDH_xldefVertexes_TEXT='(端點：出現特定快取圖案 (如手繪多邊形、徒手畫及曲線) 中線條或曲線端點及交集處的可拖曳方形黑點。)';
sTemp=L_IDH_xldefVertexes_TEXT;
break;
			case 'IDH_xldefWeb':
			L_IDH_xldefWeb_TEXT='(網頁：用於瀏覽位於網路共用、企業內部網路及網際網路，並由超連結連接的活頁簿及其他 Office 文件集合的系統。)';
sTemp=L_IDH_xldefWeb_TEXT;
break;
			case 'IDH_xldefWebQuery':
			L_IDH_xldefWebQuery_TEXT='(網頁查詢：擷取儲存在內部網路或網際網路上資料的查詢。)';
sTemp=L_IDH_xldefWebQuery_TEXT;
break;
			case 'IDH_xldefWhatifAnalysis':
			L_IDH_xldefWhatifAnalysis_TEXT='(假設狀況分析：變更儲存格中的值，以查看變更如何影響工作表上公式結果的處理程序。例如，改變分期付款資料表中使用的利率可以判定支付金額。)';
sTemp=L_IDH_xldefWhatifAnalysis_TEXT;
break;
			case 'IDH_xldefWorkspaceFile':
			L_IDH_xldefWorkspaceFile_TEXT='(工作區檔案：儲存開啟活頁簿之相關顯示資訊的檔案，以便您稍後可以相同的視窗大小、列印範圍、螢幕放大比例及顯示設定來繼續工作。工作區檔案不包含活頁簿本身。)';
sTemp=L_IDH_xldefWorkspaceFile_TEXT;
break;
			case 'IxldefHighlowLines':
			L_IxldefHighlowLines_TEXT='(高低點連線：平面折線圖中從每個類別的最高值延伸到最低值的線。高低點連線常用於股票圖。)';
sTemp=L_IxldefHighlowLines_TEXT;
break;
			case 'qudecIdentifier':
			L_qudecIdentifier_TEXT='(識別碼：運算式中使用的欄位名稱。例如，「訂單數量」是包含訂單數量的欄位識別碼 (欄位名稱)。您可以使用運算式 (如 Price*Quantity) 替代識別碼。)';
sTemp=L_qudecIdentifier_TEXT;
break;
			case 'qudefCriteria':
			L_qudefCriteria_TEXT='(篩選條件：指定的條件，用來限制查詢的結果集中包含哪些記錄。例如，下列篩選條件選取「訂單數量」欄位值大於 30,000 的記錄：訂單數量  > 30000。)';
sTemp=L_qudefCriteria_TEXT;
break;
			case 'qudefDatabase':
			L_qudefDatabase_TEXT='(資料庫：與特定主旨或用途有關的資料集合。在資料庫中，特定實體的相關資訊 (如員工或訂單) 是用資料表、記錄及欄位來加以歸類。)';
sTemp=L_qudefDatabase_TEXT;
break;
			case 'qudefDataSource':
			L_qudefDataSource_TEXT='(資料來源：用來連接資料庫的一組儲存的「來源」資訊。資料來源可包括資料庫伺服器名稱及位置、資料庫驅動程式名稱，以及您登入時資料庫需要的資訊。)';
sTemp=L_qudefDataSource_TEXT;
break;
			case 'qudefExpression':
			L_qudefExpression_TEXT='(運算式：計算結果為單一值的運算子、欄位名稱、函數、文字及常數組合。運算式可以指定篩選條件 (如訂單數量 > 10000) 或執行欄位值的計算 (如 Price*Quantity)。)';
sTemp=L_qudefExpression_TEXT;
break;
			case 'qudefField':
			L_qudefField_TEXT='(欄位：儲存在資料表中的資訊類別，如姓氏或訂單數量。當 Query 在 [資料] 窗格中顯示結果集時，欄位以欄表示。)';
sTemp=L_qudefField_TEXT;
break;
			case 'qudefInnerJoin':
			L_qudefInnerJoin_TEXT='(內部連接：在 Query 中，兩個資料表之間的預設結合類型，其中只有連接欄位內值相同的記錄才會被選取。每個資料表的兩筆相符記錄會組合並在結果集中顯示為一筆記錄。)';
sTemp=L_qudefInnerJoin_TEXT;
break;
			case 'qudefJoinLine':
			L_qudefJoinLine_TEXT='(連接線：在 Query 中，在兩個資料表之間連接欄位並顯示資料關聯方式的線。連接類型指示為查詢的結果集選取哪些記錄。)';
sTemp=L_qudefJoinLine_TEXT;
break;
			case 'qudefOperator':
			L_qudefOperator_TEXT='(運算子：指定運算式中執行之計算類型的符號。有數學、比較、邏輯及參照四種運算子。)';
sTemp=L_qudefOperator_TEXT;
break;
			case 'qudefOuterJoin':
			L_qudefOuterJoin_TEXT='(外部連接：在 Query 中，選取一個資料表中所有記錄的一種連接，即使另一個資料表中沒有相符的記錄也一樣。相符的記錄會組合起來顯示為一筆記錄。在另一個資料表中沒有相符記錄的記錄則顯示為空。)';
sTemp=L_qudefOuterJoin_TEXT;
break;
			case 'qudefRecord':
			L_qudefRecord_TEXT='(記錄：特定人員、位置、事件或事項的相關資訊集合。當 Query 在 [資料] 窗格中顯示結果集時，記錄以列表示。)';
sTemp=L_qudefRecord_TEXT;
break;
			case 'qudefResultset':
			L_qudefResultset_TEXT='(結果集：執行查詢時傳回的一組記錄。您可以在 Query 中查看查詢的結果集，或將結果集傳回 Excel 工作表，以供未來分析之用。)';
sTemp=L_qudefResultset_TEXT;
break;
			case 'qudefTable':
			L_qudefTable_TEXT='(資料表：儲存在記錄 (資料列) 及欄位 (資料欄) 中之特定主題的相關資料集合。)';
sTemp=L_qudefTable_TEXT;
break;
			case 'quRowHeading':
			L_quRowHeading_TEXT='(列名：Query 中每列左側的編號灰色區域。按一下列名可選取整列。)';
sTemp=L_quRowHeading_TEXT;
break;
			case 'XlCategoryField':
			L_XlCategoryField_TEXT='(類別欄位：顯示在樞紐分析圖類別區域中的欄位。類別欄位中的項目顯示為類別軸上的標籤。)';
sTemp=L_XlCategoryField_TEXT;
break;
			case 'xlCurrentRegion':
			L_xlCurrentRegion_TEXT='(目前範圍：包含目前選取之儲存格的填入儲存格區塊。此範圍延伸至其四周的第一個空列或欄。)';
sTemp=L_xlCurrentRegion_TEXT;
break;
			case 'XlDataTable':
			L_XlDataTable_TEXT='(資料表：顯示一或多個公式中取代不同值的結果的儲存格範圍。有兩種類型的資料表：單輸入表與雙輸入表。)';
sTemp=L_XlDataTable_TEXT;
break;
			case 'xldecIdentifier':
			L_xldecIdentifier_TEXT='(識別碼：Query 運算式中使用的欄位名稱。例如，「訂單數量」是包含訂單數量之欄位的識別碼 (欄位名稱)。您可以使用運算式 (如 Price*Quantity) 來替代識別碼。)';
sTemp=L_xldecIdentifier_TEXT;
break;
			case 'xldef3DWallsAndFloor':
			L_xldef3DWallsAndFloor_TEXT='(3D 背景牆及底板：圍繞許多 3D 圖表類型的區域，用來指定圖表的維度及邊界。繪圖區內會顯示兩面背景牆及一張底板。)';
sTemp=L_xldef3DWallsAndFloor_TEXT;
break;
			case 'xldefActivate':
			L_xldefActivate_TEXT='(啟動：讓圖表工作表或工作表成為使用中或選定工作表。啟動的工作表決定了會顯示哪些功能表列及工具列。若要啟動工作表，請按一下活頁簿中該工作表的索引標籤。)';
sTemp=L_xldefActivate_TEXT;
break;
			case 'xldefActiveCell':
			L_xldefActiveCell_TEXT='(使用中儲存格：您開始鍵入資料時在其中輸入資料的選定儲存格。一次僅一個儲存格處於使用中。使用中儲存格的四周有粗框線包圍。)';
sTemp=L_xldefActiveCell_TEXT;
break;
			case 'xldefActiveSheet':
			L_xldefActiveSheet_TEXT='(使用中工作表：活頁簿中您正在使用的工作表。使用中工作表在索引標籤上的名稱是粗體。)';
sTemp=L_xldefActiveSheet_TEXT;
break;
			case 'xldefAddin':
			L_xldefAddin_TEXT='(Excel 增益集：可安裝在電腦上以新增命令及函數至 Excel 的元件。這些增益集程式是 Excel 特有的。Excel 或 Office 可用的其他增益集程式是「元件物件模型 (COM)」增益集。)';
sTemp=L_xldefAddin_TEXT;
break;
			case 'xldefAlternateStartupFolder':
			L_xldefAlternateStartupFolder_TEXT='(替代的啟動資料夾：XLStart 資料夾以外的一種資料夾，它包含您想要在啟動 Excel 時自動開啟的活頁簿或其他檔案，以及想要在建立新活頁簿時可用的範本。)';
sTemp=L_xldefAlternateStartupFolder_TEXT;
break;
			case 'xldefArray':
			L_xldefArray_TEXT='(陣列：用來建立產生多個結果或運算一組以列及欄排列之引數的單一公式。陣列範圍共用一個公式；一個陣列常數是用作一個引數的一組常數。)';
sTemp=L_xldefArray_TEXT;
break;
			case 'xldefAssocPT':
			L_xldefAssocPT_TEXT='(相關樞紐分析表：為樞紐分析圖提供來源資料的樞紐分析表。它在您建立新樞紐分析圖時自動建立。當您變更其中一個報表的版面配置時，另一個表的版面配置也會變更。)';
sTemp=L_xldefAssocPT_TEXT;
break;
			case 'XlDefaultWorksheetTemplate':
			L_XlDefaultWorksheetTemplate_TEXT='(預設工作表範本：為變更新工作表的預設格式而建立的 Sheet.xlt 範本。當您新增工作表至活頁簿時，Excel 會使用該範本來建立空白工作表。)';
sTemp=L_XlDefaultWorksheetTemplate_TEXT;
break;
			case 'xldefAutoformat':
			L_xldefAutoformat_TEXT='(自動格式設定：您可以套用至資料範圍的內建儲存格格式集合 (如字型大小、圖樣及對齊方式)。Excel 會判定所選範圍的摘要及詳細程度並套用對應的格式。)';
sTemp=L_xldefAutoformat_TEXT;
break;
			case 'xldefAxis':
			L_xldefAxis_TEXT='(座標軸：用作度量參照框之圖表繪圖區周圍的框線。y 軸通常是垂直軸，包含資料。x 軸通常是水平軸，包含類別。)';
sTemp=L_xldefAxis_TEXT;
break;
			case 'xldefCellReference':
			L_xldefCellReference_TEXT='(儲存格參照：儲存格在工作表上佔據的一組座標。例如，出現在欄 B 與列 3 交叉處儲存格的參照是 B3。)';
sTemp=L_xldefCellReference_TEXT;
break;
			case 'xldefChartArea':
			L_xldefChartArea_TEXT='(圖表區：整個圖表及其所有元素。)';
sTemp=L_xldefChartArea_TEXT;
break;
			case 'xldefChartSheet':
			L_xldefChartSheet_TEXT='(圖表工作表：活頁簿中僅包含一個圖表的工作表。當您想要與工作表資料或樞紐分析表分開，單獨檢視圖表或樞紐分析圖時，圖表工作表很有用。)';
sTemp=L_xldefChartSheet_TEXT;
break;
			case 'xldefComparisonCriteria':
			L_xldefComparisonCriteria_TEXT='(比較篩選條件：用來尋找資料的一組搜尋條件。比較篩選條件可以是一系列想要符合的字元 (如 Northwind Traders) 或一個運算式 (如 ">300.")。)';
sTemp=L_xldefComparisonCriteria_TEXT;
break;
			case 'xldefComparisonOperator':
			L_xldefComparisonOperator_TEXT='(比較運算子：用於比較篩選條件中以比較兩個值的符號。運算子包括：= 等於、&gt; 大於、&gt;= 大於或等於、&lt;= 小於或等於，以及 &lt;&gt; 不等於。)';
sTemp=L_xldefComparisonOperator_TEXT;
break;
			case 'xldefConsolidationTable':
			L_xldefConsolidationTable_TEXT='(彙總表格：顯示在目的區域內的合併結果表格。Excel 將您選取的彙總函數套用至您指定的來源區域值，以建立彙總表格。)';
sTemp=L_xldefConsolidationTable_TEXT;
break;
			case 'xldefConstraints':
			L_xldefConstraints_TEXT='(限制：對「規劃求解」問題的限制。您可以將限制套用至可調整的儲存格、目標儲存格，或與目標儲存格直接或間接相關的其他儲存格。)';
sTemp=L_xldefConstraints_TEXT;
break;
			case 'xldefcopyArea':
			L_xldefcopyArea_TEXT='(複製區：您想要將資料貼到其他位置時複製的儲存格。複製儲存格後，其周圍會出現移動框線，指示它們已複製。)';
sTemp=L_xldefcopyArea_TEXT;
break;
			case 'xldefCubeDef':
			L_xldefCubeDef_TEXT='(cube 定義：「OLAP Cube 精靈」在 .oqy 檔案中儲存的資訊，這些資訊定義了如何使用從關聯式資料庫擷取的資料，在記憶體中建立 OLAP Cube。)';
sTemp=L_xldefCubeDef_TEXT;
break;
			case 'xldefCustomCalculation':
			L_xldefCustomCalculation_TEXT='(自訂計算：這種方法使用資料區域中其他儲存格內的值，來彙總樞紐分析表資料區域中的值。使用資料欄位的 [樞紐分析表欄位] 對話方塊上的 [資料顯示方式] 清單，來建立自訂計算。)';
sTemp=L_xldefCustomCalculation_TEXT;
break;
			case 'xldefDataForm':
			L_xldefDataForm_TEXT='(資料表單：一次顯示一筆完整記錄的對話方塊。可使用資料表單來新增、變更、找出及刪除記錄。)';
sTemp=L_xldefDataForm_TEXT;
break;
			case 'xldefDataLabel':
			L_xldefDataLabel_TEXT='(資料標籤：提供有關資料標記之其他資訊的標籤，資料標記代表了源於某工作表儲存格的單一資料點或值。)';
sTemp=L_xldefDataLabel_TEXT;
break;
			case 'xldefDataMarker':
			L_xldefDataMarker_TEXT='(資料標記：圖表中的橫條、區域、點、扇區或其他符號，代表源於某工作表儲存格的單一資料點或值。圖表中的相關資料標記組成資料數列。)';
sTemp=L_xldefDataMarker_TEXT;
break;
			case 'xldefDataPoints':
			L_xldefDataPoints_TEXT='(資料點：繪製在圖表上的個別值。相關資料點組成資料數列。資料點由橫條、欄、線、扇區、點及其他圖案來表示。這些圖案稱作資料標記。)';
sTemp=L_xldefDataPoints_TEXT;
break;
			case 'xldefDataRegion':
			L_xldefDataRegion_TEXT='(資料區域：包含資料的儲存格範圍，其周圍是空的儲存格或工作表框線。)';
sTemp=L_xldefDataRegion_TEXT;
break;
			case 'xldefDataSeries':
			L_xldefDataSeries_TEXT='(資料數列：圖表中繪製的相關資料點。圖表中的每個資料數列都有唯一的色彩或圖樣，並以圖表圖例表示。您可以在圖表中繪製一或多個資料數列。圓形圖只有一個資料數列。)';
sTemp=L_xldefDataSeries_TEXT;
break;
			case 'xldefDataSource':
			L_xldefDataSource_TEXT='(資料來源：用來連接資料庫的一組儲存的「來源」資訊。資料來源可包括資料庫伺服器名稱及位置、資料庫驅動程式名稱，以及您登入時資料庫需要的資訊。)';
sTemp=L_xldefDataSource_TEXT;
break;
			case 'xldefDataTable':
			L_xldefDataTable_TEXT='(資料表：顯示一或多個公式中取代不同值的結果的儲存格範圍。有兩種類型的資料表：單輸入表與雙輸入表。)';
sTemp=L_xldefDataTable_TEXT;
break;
			case 'xldefDataTableInCharts':
			L_xldefDataTableInCharts_TEXT='(圖表中的資料表：可新增至部份圖表並包含用來建立圖表之數值資料的格線。資料表通常附加至圖表的類別軸，用來取代類別軸上的刻度標記標籤。)';
sTemp=L_xldefDataTableInCharts_TEXT;
break;
			case 'xldefDataValidation':
			L_xldefDataValidation_TEXT='(資料驗證：Excel 的一種功能，可用來定義對能夠或應該在儲存格中輸入哪些資料的限制；顯示提示使用者進行正確輸入的訊息；以及通知使用者不正確的輸入。)';
sTemp=L_xldefDataValidation_TEXT;
break;
			case 'xldefDefaultStartupWorkbook':
			L_xldefDefaultStartupWorkbook_TEXT='(預設啟動活頁簿：在您啟動 Excel 時顯示的未儲存新活頁簿。只有當您尚未在 XLStart 資料夾中包含其他活頁簿時，才會顯示預設的啟動活頁簿。)';
sTemp=L_xldefDefaultStartupWorkbook_TEXT;
break;
			case 'xldefDependents':
			L_xldefDependents_TEXT='(從屬參照：包含參照其他儲存格之公式的儲存格。例如，如果儲存格 D10 包含公式 =B5，則儲存格 D10 是儲存格 B5 的從屬參照。)';
sTemp=L_xldefDependents_TEXT;
break;
			case 'xldefDestinationArea':
			L_xldefDestinationArea_TEXT='(目的區域：選取用來保留彙總中的合計資料的儲存格範圍。目的區域與來源資料可位於相同或不同的工作表上。一個工作表只能包含一次彙總。)';
sTemp=L_xldefDestinationArea_TEXT;
break;
			case 'xldefDetailData':
			L_xldefDetailData_TEXT='(詳細資料：對於自動小計及工作表大綱而言，詳細資料是依摘要資料合計的小計列或欄。詳細資料通常與摘要資料相鄰，位於其上方或左側。)';
sTemp=L_xldefDetailData_TEXT;
break;
			case 'xldefDropLines':
			L_xldefDropLines_TEXT='(線條延伸至類別軸：折線及區域圖中，從資料點延伸至類別軸 (x) 的線。在區域圖中可用它來定義一個資料標記結束的位置及下一個資料標記開始的位置。)';
sTemp=L_xldefDropLines_TEXT;
break;
			case 'xldefEmbeddedChart':
			L_xldefEmbeddedChart_TEXT='(嵌入圖表：位於工作表而非單獨的圖表工作表上的圖表。當您想要檢視或列印工作表中的圖表或樞紐分析圖及其來源資料或其他資訊時，嵌入圖表很有用。)';
sTemp=L_xldefEmbeddedChart_TEXT;
break;
			case 'xldefErrorBars':
			L_xldefErrorBars_TEXT='(誤差線：通常用在統計或科學資料中，誤差線顯示相對於系列中每個資料標記的潛在錯誤或不確定程度。)';
sTemp=L_xldefErrorBars_TEXT;
break;
			case 'xldefFieldButton':
			L_xldefFieldButton_TEXT='(欄位按鈕：識別樞紐分析表或樞紐分析圖中欄位的按鈕。可拖曳欄位按鈕來變更報表的版面配置，或按一下按鈕旁邊的箭號來變更報表中顯示的詳細程度。)';
sTemp=L_xldefFieldButton_TEXT;
break;
			case 'XldefFillHandle':
			L_XldefFillHandle_TEXT='(填滿控點：選取範圍右下角處的黑色小方塊。當您指向填滿控點時，指標會變成黑色十字形。)';
sTemp=L_XldefFillHandle_TEXT;
break;
			case 'xldefFilter':
			L_xldefFilter_TEXT='(篩選：僅顯示清單中滿足您指定之條件的列。使用 [自動篩選] 指令，可顯示符合一或多個特定值、計算的值或條件的列。)';
sTemp=L_xldefFilter_TEXT;
break;
			case 'xldefFormula':
			L_xldefFormula_TEXT='(公式：儲存格中共同產生新值的一系列值、儲存格參照、名稱、函數或運算子。公式必定以等號 (=) 開頭。)';
sTemp=L_xldefFormula_TEXT;
break;
			case 'xldefFormulaBar':
			L_xldefFormulaBar_TEXT='(資料編輯列：Excel 視窗頂端的列，可用來在儲存格或圖表中輸入或編輯值或公式。顯示使用中儲存格內儲存的常數值或公式。)';
sTemp=L_xldefFormulaBar_TEXT;
break;
			case 'xldefGoalSeeking':
			L_xldefGoalSeeking_TEXT='(目標搜尋：藉由調整另一個儲存格的值來尋找一個儲存格特定值的方法。進行目標搜尋時，Excel 會變更您指定之儲存格中的值，直到依據該儲存格的公式傳回您想要的結果。)';
sTemp=L_xldefGoalSeeking_TEXT;
break;
			case 'xldefGridlines':
			L_xldefGridlines_TEXT='(圖表中的格線：可新增至圖表的線條，使檢視及估計資料更容易。格線延伸自貫穿繪圖區之軸上的刻度標記。)';
sTemp=L_xldefGridlines_TEXT;
break;
			case 'xldefGroup':
			L_xldefGroup_TEXT='(群組：大綱或樞紐分析表中，鄰近及附屬於摘要列或欄的一或多個詳細資料列或欄。)';
sTemp=L_xldefGroup_TEXT;
break;
			case 'xldefInputCell':
			L_xldefInputCell_TEXT='(變數儲存格：其中資料表的每個輸入值均被替代的儲存格。工作表上的任何儲存格都可以是變數儲存格。儘管變數儲存格不必是資料表的一部份，資料表中的公式仍必須參照變數儲存格。)';
sTemp=L_xldefInputCell_TEXT;
break;
			case 'xldefIteration':
			L_xldefIteration_TEXT='(反覆運算：重複計算工作表，直到符合特定數值條件。)';
sTemp=L_xldefIteration_TEXT;
break;
			case 'xldefLegend':
			L_xldefLegend_TEXT='(圖例：識別指定給圖表中資料數列或類別的圖樣或色彩的方塊。)';
sTemp=L_xldefLegend_TEXT;
break;
			case 'xldefLegendKey':
			L_xldefLegendKey_TEXT='(圖例符號：圖例中的符號，顯示指定給圖表中資料數列 (或類別) 的圖樣及色彩。圖例符號顯示在圖例項目的左側。格式化圖例符號時亦會格式化與之關聯的資料標記。)';
sTemp=L_xldefLegendKey_TEXT;
break;
			case 'xldefList':
			L_xldefList_TEXT='(清單：一系列包含相關資料的列，或一系列使用建立清單指令指定用作資料工作表的列。)';
sTemp=L_xldefList_TEXT;
break;
			case 'xldefMovingAverage':
			L_xldefMovingAverage_TEXT='(移動平均：根據部份資料數列計算的一系列平均值。在圖表中，移動平均可使資料的波動變平滑，從而更清晰地顯示出模式或趨勢。)';
sTemp=L_xldefMovingAverage_TEXT;
break;
			case 'xldefNetscapeNot':
			L_xldefNetscapeNot_TEXT='(Internet Explorer：網頁瀏覽器，可解釋 HTML 檔案，將其格式化成網頁並顯示給使用者。您可以從 Microsoft 網站 (http://www.microsoft.com) 下載 Internet Explorer。)';
sTemp=L_xldefNetscapeNot_TEXT;
break;
			case 'xldefNonadjacentSelections':
			L_xldefNonadjacentSelections_TEXT='(不相鄰選取範圍：所選取的互不接觸的兩個以上儲存格或範圍。在圖表中繪製不相鄰的選取範圍時，請確定合併選取範圍形成了矩形圖案。)';
sTemp=L_xldefNonadjacentSelections_TEXT;
break;
			case 'xldefOfflineCubeFile':
			L_xldefOfflineCubeFile_TEXT='(離線 cube 檔案：在硬碟或網路共用上建立，以儲存樞紐分析表或樞紐分析圖之 OLAP 來源資料的檔案。離線 cube 檔案可讓您在未連接 OLAP 伺服器時仍能繼續工作。)';
sTemp=L_xldefOfflineCubeFile_TEXT;
break;
			case 'xldefOLAP':
			L_xldefOLAP_TEXT='(OLAP：已最佳化以進行查詢及報告 (而非處理交易) 的資料庫技術。OLAP 資料是以階層方式加以組織並儲存在 cube 而不是資料表中。)';
sTemp=L_xldefOLAP_TEXT;
break;
			case 'xldefOLAPProvider':
			L_xldefOLAPProvider_TEXT='(OLAP 提供者：提供對特定 OLAP 資料庫類型存取權的一組軟體。此軟體可包含資料來源驅動程式及連接資料庫所需的其他用戶端軟體。)';
sTemp=L_xldefOLAPProvider_TEXT;
break;
			case 'xldefOutline':
			L_xldefOutline_TEXT='(大綱：對其詳細資料列或欄分組以便您建立摘要報表的工作表資料。大綱可彙總整個工作表或工作表的選取部份。)';
sTemp=L_xldefOutline_TEXT;
break;
			case 'xldefOutlineSymbols':
			L_xldefOutlineSymbols_TEXT='(大綱符號：可用來變更已建立大綱之工作表檢視的符號。按加號、減號及表示大綱層級的數字 1、2、3 或 4，即可顯示或隱藏詳細資料。)';
sTemp=L_xldefOutlineSymbols_TEXT;
break;
			case 'XldefPassword':
			L_XldefPassword_TEXT='(密碼：一種可限制對活頁簿、工作表或部份工作表存取權的方法。Excel 密碼最多可有 255 個字母、數字、空格及符號。設定及輸入密碼時，必須正確鍵入大寫及小寫字母。)';
sTemp=L_XldefPassword_TEXT;
break;
			case 'xldefPasteArea':
			L_xldefPasteArea_TEXT='(貼上區：已使用 Office 剪貼簿剪下或複製之資料的目標目的地。)';
sTemp=L_xldefPasteArea_TEXT;
break;
			case 'xldefPivotArea':
			L_xldefPivotArea_TEXT='(樞紐分析區：為變更報表版面配置而拖曳樞紐分析表或樞紐分析圖欄位所至的工作表區域。在新報表上，藍色虛線外框表示工作表上的樞紐分析區。)';
sTemp=L_xldefPivotArea_TEXT;
break;
			case 'xldefPivotList':
			L_xldefPivotList_TEXT='(樞紐分析表清單：可讓您建立類似 Excel 樞紐分析表之結構的「Microsoft Office Web 元件」。使用者可在網頁瀏覽器中檢視樞紐分析表清單，並以類似 Excel 樞紐分析表的方式變更其版面配置。)';
sTemp=L_xldefPivotList_TEXT;
break;
			case 'xldefPivotTable':
			L_xldefPivotTable_TEXT='(樞紐分析表：從不同來源 (包含 Excel 的外部來源) 摘要及分析資料 (如資料庫記錄) 的互動式、跨表格的 Excel 報表。)';
sTemp=L_xldefPivotTable_TEXT;
break;
			case 'xldefPivotTableColumnField':
			L_xldefPivotTableColumnField_TEXT='(欄欄位：樞紐分析表中指定了欄方向的欄位。與欄欄位關聯的項目會顯示為欄標籤。)';
sTemp=L_xldefPivotTableColumnField_TEXT;
break;
			case 'xldefPivotTableData':
			L_xldefPivotTableData_TEXT='(樞紐分析表資料：樞紐分析表中，依據來源清單或資料表之資料欄位計算的彙總資料。)';
sTemp=L_xldefPivotTableData_TEXT;
break;
			case 'xldefPivotTableDataArea':
			L_xldefPivotTableDataArea_TEXT='(資料區：包含摘要資料的部份樞紐分析表。資料區每個儲存格中的值代表來源記錄或列的資料摘要。)';
sTemp=L_xldefPivotTableDataArea_TEXT;
break;
			case 'xldefPivotTableDataField':
			L_xldefPivotTableDataField_TEXT='(資料欄位：包含樞紐分析表或樞紐分析圖中所彙總之資料的來源清單、資料表或資料庫內的欄位。資料欄位通常包含統計資料或銷售量之類的數值資料。)';
sTemp=L_xldefPivotTableDataField_TEXT;
break;
			case 'xldefPivotTableField':
			L_xldefPivotTableField_TEXT='(欄位：樞紐分析表或樞紐分析圖中，源於來源資料中欄位的資料類別。樞紐分析表具有列、欄、頁及資料欄位。樞紐分析圖具有數列、類別、頁及資料欄位。)';
sTemp=L_xldefPivotTableField_TEXT;
break;
			case 'xldefPivotTableGrandTotals':
			L_xldefPivotTableGrandTotals_TEXT='(樞紐分析表總計：樞紐分析表的一列中所有儲存格或一欄中所有儲存格的總計值。總計列或欄中的值是使用樞紐分析表資料區中所用的彙總函數來計算。)';
sTemp=L_xldefPivotTableGrandTotals_TEXT;
break;
			case 'xldefPivotTableItem':
			L_xldefPivotTableItem_TEXT='(項目：樞紐分析表及樞紐分析圖中欄位的子類別。例如，欄位「月」可能具有下列項目：「一月」、「二月」等等。)';
sTemp=L_xldefPivotTableItem_TEXT;
break;
			case 'xldefPivotTablePageField':
			L_xldefPivotTablePageField_TEXT='(分頁欄位：樞紐分析表或樞紐分析圖中指定給分頁方向的欄位。您可以在分頁欄位中顯示所有項目的摘要，或一次顯示一個項目，這樣就會篩選出所有其他項目的資料。)';
sTemp=L_xldefPivotTablePageField_TEXT;
break;
			case 'xldefPivotTableRowField':
			L_xldefPivotTableRowField_TEXT='(列欄位：樞紐分析表中指定了列方向的欄位。與列欄位關聯的項目會顯示為列標籤。)';
sTemp=L_xldefPivotTableRowField_TEXT;
break;
			case 'xldefPivotTableSubtotal':
			L_xldefPivotTableSubtotal_TEXT='(樞紐分析表小計：使用彙總函數來顯示樞紐分析表欄位中詳細資料項目總計的列或欄。)';
sTemp=L_xldefPivotTableSubtotal_TEXT;
break;
			case 'xldefPlotArea':
			L_xldefPlotArea_TEXT='(繪圖區：在 2D 圖中，繪圖區是包括所有資料數列的座標軸包圍的區域。在 3D 圖中，繪圖區是包括資料數列、類別名稱、刻度標記標籤及座標軸標題的座標軸包圍的區域。)';
sTemp=L_xldefPlotArea_TEXT;
break;
			case 'xldefPrecedents':
			L_xldefPrecedents_TEXT='(前導參照：由其他儲存格中公式參照的儲存格。例如，如果儲存格 D10 包含公式 =B5，則儲存格 B5 是儲存格 D10 的前導參照。)';
sTemp=L_xldefPrecedents_TEXT;
break;
			case 'xldefPrintArea':
			L_xldefPrintArea_TEXT='(列印範圍：您不想列印整個工作表時指定列印的一或多個儲存格範圍。如果工作表包含列印範圍，則僅列印該列印範圍。)';
sTemp=L_xldefPrintArea_TEXT;
break;
			case 'xldefProtect':
			L_xldefProtect_TEXT='(保護：對工作表或活頁簿進行設定，以防止使用者檢視或取得對指定工作表或活頁簿元素的存取權。)';
sTemp=L_xldefProtect_TEXT;
break;
			case 'xldefQuery':
			L_xldefQuery_TEXT='(查詢：Query 或 Access 中一種尋找記錄的方法，這些記錄可以回答您有關資料庫中儲存之資料的特定問題。)';
sTemp=L_xldefQuery_TEXT;
break;
			case 'xldefRange':
			L_xldefRange_TEXT='(範圍：工作表上的兩個或多個儲存格。範圍中的儲存格可以相鄰或不相鄰。)';
sTemp=L_xldefRange_TEXT;
break;
			case 'xldefRegressionAnalysis':
			L_xldefRegressionAnalysis_TEXT='(迴歸分析：用於預測的一種統計分析形式。迴歸分析可消除變數之間的關係，以便能夠依據一或多個其他變數來預測給定變數。)';
sTemp=L_xldefRegressionAnalysis_TEXT;
break;
			case 'xldefRelativeReference':
			L_xldefRelativeReference_TEXT='(相對參照：公式中，依據包含該公式之儲存格與所參照之儲存格的相對位置而確定的儲存格位址。如果複製公式，參照會自動調整。相對參照的形式為 A1。)';
sTemp=L_xldefRelativeReference_TEXT;
break;
			case 'xldefRsquaredValue':
			L_xldefRsquaredValue_TEXT='(R 平方值：顯示趨勢線估計值與實際資料接近程度之 0 到 1 的數字。當 R 平方值為 1 或接近 1 時，趨勢線最為可靠。亦稱為確定係數。)';
sTemp=L_xldefRsquaredValue_TEXT;
break;
			case 'xldefScenario':
			L_xldefScenario_TEXT='(分析藍本：工作表模型中可取代的一組已命名的輸入值。)';
sTemp=L_xldefScenario_TEXT;
break;
			case 'xldefScrollLock':
			L_xldefScrollLock_TEXT='(捲動鎖定：開啟捲動鎖定後，方向鍵會捲動使用中工作表而不是讓另一個儲存格成為使用中。若要開啟或關閉捲動鎖定，請按 SCROLL LOCK 鍵。)';
sTemp=L_xldefScrollLock_TEXT;
break;
			case 'xldefSection':
			L_xldefSection_TEXT='(區段：建立報表時選擇的任何工作表、檢視及分析藍本組合。一個報表可包含數個區段。)';
sTemp=L_xldefSection_TEXT;
break;
			case 'xldefSelect':
			L_xldefSelect_TEXT='(選取：反白提示工作表上的儲存格或儲存格範圍。選取的儲存格將受下一個命令或動作的影響。)';
sTemp=L_xldefSelect_TEXT;
break;
			case 'xldefSeriesLines':
			L_xldefSeriesLines_TEXT='(數列線：2D 堆疊橫條及直條圖中，連接每個資料數列中資料標記的線，用來強調每個數列之間的度量差異。)';
sTemp=L_xldefSeriesLines_TEXT;
break;
			case 'xldefSourceAreas':
			L_xldefSourceAreas_TEXT='(來源區域：您在指定目的區域合併的儲存格範圍。來源區域可位於活頁簿的任一工作表、其他開啟或關閉的活頁簿，或 Lotus 1-2-3 工作表上。)';
sTemp=L_xldefSourceAreas_TEXT;
break;
			case 'xldefSourceDataForPivotTables':
			L_xldefSourceDataForPivotTables_TEXT='(來源資料：用來建立樞紐分析表或樞紐分析圖報表的清單或表格。來源資料可取自 Excel 清單或範圍、外部資料庫或 Cube，或其他樞紐分析表。)';
sTemp=L_xldefSourceDataForPivotTables_TEXT;
break;
			case 'xldefStandardFont':
			L_xldefStandardFont_TEXT='(標準字型：工作表的預設文字字型。標準字型決定了「一般」儲存格樣式的預設字型。)';
sTemp=L_xldefStandardFont_TEXT;
break;
			case 'xldefSummaryData':
			L_xldefSummaryData_TEXT='(摘要資料：對於自動小計及工作表大綱而言，摘要詳細資料的所有列或欄。摘要資料通常與詳細資料相鄰並位於其下方。)';
sTemp=L_xldefSummaryData_TEXT;
break;
			case 'xldefSummaryFunction':
			L_xldefSummaryFunction_TEXT='(彙總函數：一種計算，可合併一個樞紐分析表或一個合併資料表中的來源資料，或在清單或資料庫中插入自動小計時進行的計算。彙總函數的範例包括 Sum、Count 及 Average。)';
sTemp=L_xldefSummaryFunction_TEXT;
break;
			case 'xldefTemplate':
			L_xldefTemplate_TEXT='(範本：您建立並用作其他類似活頁簿基礎的活頁簿。您可以建立活頁簿及工作表的範本。活頁簿的預設範本為 Book.xlt。工作表的預設範本為 Sheet.xlt。)';
sTemp=L_xldefTemplate_TEXT;
break;
			case 'xldefTextBox':
			L_xldefTextBox_TEXT='(文字方塊：工作表或圖表中可鍵入文字的矩形物件。)';
sTemp=L_xldefTextBox_TEXT;
break;
			case 'xldefTickMarksAndTickMarkLabels':
			L_xldefTickMarksAndTickMarkLabels_TEXT='(刻度標記及刻度標記標籤：刻度標記是與座標軸相交的小度量線，與尺規上的分割線類似。刻度標記標籤識別圖表中的類別、值或數列。)';
sTemp=L_xldefTickMarksAndTickMarkLabels_TEXT;
break;
			case 'xldefTitlesInCharts':
			L_xldefTitlesInCharts_TEXT='(圖表中標題：自動對齊座標軸或在圖表頂端置中的描述文字。)';
sTemp=L_xldefTitlesInCharts_TEXT;
break;
			case 'xldefTrendline':
			L_xldefTrendline_TEXT='(趨勢線：資料數列中趨勢的圖形呈現方式，例如，向上傾斜的線表示數月內增加的銷售量。趨勢線可用於研究預測問題，它又稱作迴歸分析。)';
sTemp=L_xldefTrendline_TEXT;
break;
			case 'xldefTrendlineLabel':
			L_xldefTrendlineLabel_TEXT='(趨勢線標籤：趨勢線的選擇性文字，包括迴歸方程式或 R 平方值，或兩者。可格式化及移動趨勢線標籤，但不能調整其大小。)';
sTemp=L_xldefTrendlineLabel_TEXT;
break;
			case 'xldefUpdownBars':
			L_xldefUpdownBars_TEXT='(上下橫條：含多個資料數列的折線圖中，指示第一個及最後一個數列中資料點之間差異的橫條。)';
sTemp=L_xldefUpdownBars_TEXT;
break;
			case 'xldefView':
			L_xldefView_TEXT='(檢視表：可命名及套用至活頁簿的一組顯示及列印設定。您可以建立一個活頁簿的多個檢視表，而無需儲存活頁簿的個別複本。)';
sTemp=L_xldefView_TEXT;
break;
			case 'xldefVisualPrint':
			L_xldefVisualPrint_TEXT='(分頁預覽：顯示要列印的範圍及分頁符號位置的工作表檢視。要列印的範圍顯示為白色，自動分頁符號顯示為虛線；手動分頁符號顯示為實線。)';
sTemp=L_xldefVisualPrint_TEXT;
break;
			case 'xldefWorksheet':
			L_xldefWorksheet_TEXT='(工作表：Excel 中用來儲存及處理資料的主要文件。亦稱作試算表。工作表包括組成欄及列的儲存格，通常儲存在活頁簿中。)';
sTemp=L_xldefWorksheet_TEXT;
break;
			case 'xldefXLControl':
			L_xldefXLControl_TEXT='(Microsoft Excel 控制項：Excel 特有的控制項而非 ActiveX 控制項。)';
sTemp=L_xldefXLControl_TEXT;
break;
			case 'xlhowExternalData':
			L_xlhowExternalData_TEXT='(外部資料：儲存在 Excel 外部的資料。例如，在 Access、dBASE、SQL Server 或網頁伺服器建立的資料庫。)';
sTemp=L_xlhowExternalData_TEXT;
break;
			case 'xlinsertrow':
			L_xlinsertrow_TEXT='(「插入」列：清單中，便於資料輸入的特殊列。「插入」列以星號表示。)';
sTemp=L_xlinsertrow_TEXT;
break;
			case 'XlItemProperties':
			L_XlItemProperties_TEXT='(屬性欄位：OLAP cube 中與項目或成員關聯的獨立屬性。例如，如果縣市項目在伺服器 cube 中儲存有大小及人口屬性，則樞紐分析表可顯示每個縣市的大小及人口。)';
sTemp=L_XlItemProperties_TEXT;
break;
			case 'xlmappedrange':
			L_xlmappedrange_TEXT='(對應範圍：XML 清單中已連結至 XML 對應中某個元素的範圍。)';
sTemp=L_xlmappedrange_TEXT;
break;
			case 'XlNameBox':
			L_XlNameBox_TEXT='([名稱] 方塊：識別選定儲存格、圖表項目或繪圖物件之資料編輯列左端的方塊。若要命名儲存格或範圍，請在 [名稱] 方塊中鍵入名稱並按 ENTER 鍵。若要移動並選取已命名儲存格，請按一下 [名稱] 方塊中的名稱。)';
sTemp=L_XlNameBox_TEXT;
break;
			case 'XlObjectlink':
			L_XlObjectlink_TEXT='(ObjectLink：說明已連結物件的 OLE 資料格式，可識別類別、文件名稱及物件名稱。每個這樣的資料項目都是一個以空值結尾的字串。)';
sTemp=L_XlObjectlink_TEXT;
break;
			case 'XlOwnerlink':
			L_XlOwnerlink_TEXT='(OwnerLink：說明嵌入物件的 OLE 資料格式，可識別類別、文件名稱及物件名稱。每個這樣的資料項目都是一個以空值結尾的字串。)';
sTemp=L_XlOwnerlink_TEXT;
break;
			case 'XlSeriesField':
			L_XlSeriesField_TEXT='(數列欄位：顯示在樞紐分析圖數列區域的欄位。數列欄位中的項目在圖例中列出，並提供個別資料數列的名稱。)';
sTemp=L_XlSeriesField_TEXT;
break;
			case 'xlsinglemappedcell':
			L_xlsinglemappedcell_TEXT='(單一對應儲存格：已連結至 XML 對應中非重複元素的儲存格。)';
sTemp=L_xlsinglemappedcell_TEXT;
break;
			case 'xltotalrow':
			L_xltotalrow_TEXT='(總和列：清單中的特殊列，其提供選取項目的聚合函數，對於數值資料而言十分有用。)';
sTemp=L_xltotalrow_TEXT;
break;
			case 'XlVisualBasicHelp':
			L_XlVisualBasicHelp_TEXT='(Microsoft Visual Basic 說明：若要取得 Excel 中 Visual Basic 的「說明」，請指向 [工具] 功能表上的 [巨集]，再按一下 [Visual Basic 編輯器]。在 [說明] 功能表上按一下 [Microsoft Visual Basic 說明]。)';
sTemp=L_XlVisualBasicHelp_TEXT;
break;
			case 'acdefbidiAlefHamza':
			L_acdefbidiAlefHamza_TEXT='(Alef Hamza：單一阿拉伯文字元，代表兩個字元的組合 Alef 加 Hamza。)';
sTemp=L_acdefbidiAlefHamza_TEXT;
break;
			case 'acdefbidiBidirectional':
			L_acdefbidiBidirectional_TEXT='(雙向：說明同時使用從右至左及從左至右行為屬性的環境，例如，出現在同一句子中的阿拉伯文及英文。)';
sTemp=L_acdefbidiBidirectional_TEXT;
break;
			case 'acdefbidiContext':
			L_acdefbidiContext_TEXT='(上下文：顯示文字之控制項中常用的讀取順序及對齊設定。選取 [上下文] 設定時，讀取順序取決於鍵入的第一個加強字元 (不是數字或特殊字元)。)';
sTemp=L_acdefbidiContext_TEXT;
break;
			case 'acdefbidiControlChars':
			L_acdefbidiControlChars_TEXT='(控制字元：當從右至左及混合文字固有的方向性不足以顯示預期結果時所插入之文字的字元，這些字元可以指定文字的格式設定。)';
sTemp=L_acdefbidiControlChars_TEXT;
break;
			case 'acdefbidiDiacritics':
			L_acdefbidiDiacritics_TEXT='(讀音符號：標示在字元上方、下方或旁邊的標記，指示該字元的發音。)';
sTemp=L_acdefbidiDiacritics_TEXT;
break;
			case 'acdefbidiDirection':
			L_acdefbidiDirection_TEXT='(方向：不論鍵盤語言，指定從右至左文字及文件的讀取順序、對齊方式及 (或) 視覺外觀。方向亦說明使用者介面、控制項及其他螢幕物件所處的方向。)';
sTemp=L_acdefbidiDirection_TEXT;
break;
			case 'acdefbidiEnabledLanguage':
			L_acdefbidiEnabledLanguage_TEXT='(可用的語系：可新增至 Microsoft Office 程式中用於文字編輯的語言。這些語言是對該產品所安裝語言版本的補充，並提供可在混合語言環境工作的額外功能。)';
sTemp=L_acdefbidiEnabledLanguage_TEXT;
break;
			case 'acdefbidiGeneral':
			L_acdefbidiGeneral_TEXT='(「一般」對齊：通常將文字靠左對齊並將數字靠右對齊的格式。啟動從右至左功能時，「一般」對齊還包括「文字」模式 (始終可用) 及「介面」模式 (有時可用)。)';
sTemp=L_acdefbidiGeneral_TEXT;
break;
			case 'acdefbidiGregorian':
			L_acdefbidiGregorian_TEXT='(西曆：在西方國家通用的曆法。它是於西元 1582 年作為對凱撒曆的修訂而引進的。)';
sTemp=L_acdefbidiGregorian_TEXT;
break;
			case 'acdefbidiHijri':
			L_acdefbidiHijri_TEXT='(回曆：伊斯蘭地區使用的陰曆。)';
sTemp=L_acdefbidiHijri_TEXT;
break;
			case 'acdefbidiHindi':
			L_acdefbidiHindi_TEXT='(印地文數字：數個阿拉伯地區使用的數字集。亦稱作印度語數字。)';
sTemp=L_acdefbidiHindi_TEXT;
break;
			case 'acdefbidiKashida':
			L_acdefbidiKashida_TEXT='(kashida：用來延伸兩個阿拉伯文字元之間連字符的特殊字元。可延長單字而不是增加單字間的距離，以改善調整過的文字的外觀。這些字元還能夠起到類似連字號的作用。)';
sTemp=L_acdefbidiKashida_TEXT;
break;
			case 'acdefbidiKeyboardLanguage':
			L_acdefbidiKeyboardLanguage_TEXT='(鍵盤語言：為輸入文字所選取的語言。)';
sTemp=L_acdefbidiKeyboardLanguage_TEXT;
break;
			case 'acdefbidiLeftToRight':
			L_acdefbidiLeftToRight_TEXT='(從左至右：指鍵盤設定、文件檢視、使用者介面物件及文字的顯示方向。英文及其他大部份歐洲語言都是從左至右的語言。)';
sTemp=L_acdefbidiLeftToRight_TEXT;
break;
			case 'acdefbidiLogical':
			L_acdefbidiLogical_TEXT='(邏輯：用來說明處理雙向文字時的插入點移動及文字選取。在雙向文字中的移動是根據所遇到語言的方向而進行的。)';
sTemp=L_acdefbidiLogical_TEXT;
break;
			case 'acdefbidiNeutrals':
			L_acdefbidiNeutrals_TEXT='(中性字元：沒有從右至左或從左至右強調語言屬性的字元。例如，數字就是中性字元。)';
sTemp=L_acdefbidiNeutrals_TEXT;
break;
			case 'acdefbidiReadingOrder':
			L_acdefbidiReadingOrder_TEXT='(讀取順序：顯示字元、單字及單字群組的視覺順序。英文及其他大部份歐洲語言以從左至右的順序顯示；希伯來文、阿拉伯文、波斯文及烏都文以從右至左的順序顯示。)';
sTemp=L_acdefbidiReadingOrder_TEXT;
break;
			case 'defNavigationMode':
			L_defNavigationMode_TEXT='(「導覽」模式：Microsoft Access 中的一種模式，在此模式下，會選取整個欄位且不顯示插入點。在「導覽」模式下，使用方向鍵可在欄位間移動。)';
sTemp=L_defNavigationMode_TEXT;
break;
			case 'IDH_ofdefActiveXAddin':
			L_IDH_ofdefActiveXAddin_TEXT='(COM 增益集：透過新增自訂命令及專用特性來延伸 Microsoft Office 程式功能的附加程式。COM 增益集可在一或多個 Office 程式中執行。COM 增益集使用副檔名 .dll 或 .exe。)';
sTemp=L_IDH_ofdefActiveXAddin_TEXT;
break;
			case 'IDH_ofdefApplicationNote':
			L_IDH_ofdefApplicationNote_TEXT='(應用說明：由 Microsoft 撰寫並發行的技術文件，提供有關 Microsoft 產品或已知問題修正的額外資訊。其中可能有含新軟體、文件或範例檔案的磁碟片。)';
sTemp=L_IDH_ofdefApplicationNote_TEXT;
break;
			case 'IDH_ofdefAutoshapes':
			L_IDH_ofdefAutoshapes_TEXT='(快取圖案：一組現成的圖案，包括基本圖案 (如矩形及圓形)，加上各種線條及連接線、箭號圖案、流程圖符號、星星及綵帶，以及圖說文字。)';
sTemp=L_IDH_ofdefAutoshapes_TEXT;
break;
			case 'IDH_ofdefBrowser':
			L_IDH_ofdefBrowser_TEXT='(瀏覽器：解釋 HTML 檔案，將其格式化成網頁並加以顯示的軟體。網頁瀏覽器 (如 Microsoft Internet Explorer) 可追蹤超連結、轉送檔案、播放嵌入網頁的聲音或視訊檔。)';
sTemp=L_IDH_ofdefBrowser_TEXT;
break;
			case 'IDH_ofdefCache':
			L_IDH_ofdefCache_TEXT='(快取：一種特殊的記憶體子系統，其中常用的資料值 (如能夠離線使用的檔案) 會有複本以便快速存取。檔案快取複本的變更將不會反映在檔案來源副本中。)';
sTemp=L_IDH_ofdefCache_TEXT;
break;
			case 'IDH_ofdefCascadingStyleSheets':
			L_IDH_ofdefCascadingStyleSheets_TEXT='(階層式樣式表 (CSS)：嵌入網頁或儲存在連結至網頁之個別 .css 檔案中的宣告，可指定特定 HTML 元素的外觀。)';
sTemp=L_IDH_ofdefCascadingStyleSheets_TEXT;
break;
			case 'IDH_ofdefCondition':
			L_IDH_ofdefCondition_TEXT='(條件：搜尋或篩選時欄位必須符合的部份篩選條件。一些條件必須與值搭配使用，例如，「作者」欄位的條件是等於，值為 Jane。)';
sTemp=L_IDH_ofdefCondition_TEXT;
break;
			case 'IDH_ofdefDataAccessPage':
			L_IDH_ofdefDataAccessPage_TEXT='(資料頁：Access 發佈的連接資料庫的網頁。在資料頁中，可以檢視、新增、編輯及操作資料庫中儲存的資料。資料頁中還可以包括其他來源 (如 Excel) 的資料。)';
sTemp=L_IDH_ofdefDataAccessPage_TEXT;
break;
			case 'IDH_ofdefDigitalCertificate':
			L_IDH_ofdefDigitalCertificate_TEXT='(數位憑證：證實真實性的檔案、巨集專案、電子郵件訊息附件，它提供安全加密或可驗證的簽章。若要數位簽章巨集專案，必須安裝數位憑證。)';
sTemp=L_IDH_ofdefDigitalCertificate_TEXT;
break;
			case 'IDH_ofdefDigitalSignature':
			L_IDH_ofdefDigitalSignature_TEXT='(數位簽章：巨集或文件上以加密為基礎、安全的電子驗證戳記。此簽章可確認巨集或文件來自簽名者且未經更改。)';
sTemp=L_IDH_ofdefDigitalSignature_TEXT;
break;
			case 'IDH_ofdefDirectoryServer':
			L_IDH_ofdefDirectoryServer_TEXT='(目錄伺服器：亦稱為 Internet Locator Service (ILS) 伺服器。列出執行 NetMeeting 及登入伺服器之人員姓名及電子郵件地址的電腦。可使用此資訊連線到他們的電腦。)';
sTemp=L_IDH_ofdefDirectoryServer_TEXT;
break;
			case 'IDH_ofdefDynamicHTML':
			L_IDH_ofdefDynamicHTML_TEXT='(DHTML：「超文字標記語言 (HTML)」的延伸，可新增多媒體、資料庫存取及物件模型，程式可用它來變更頁面元素 (物件) 的樣式及屬性，並以新元素取代現有元素 (物件)。)';
sTemp=L_IDH_ofdefDynamicHTML_TEXT;
break;
			case 'IDH_ofdefEncoding':
			L_IDH_ofdefEncoding_TEXT='(編碼：代表 HTML 或純文字檔中每個字元的位元組 (或位元組序列)。Unicode 編碼支援所有語言中的所有字元，可在 Microsoft Internet Explorer 4.0 或更新版本，或 Netscape Navigator 4.0 或更新版本中讀取。)';
sTemp=L_IDH_ofdefEncoding_TEXT;
break;
			case 'IDH_ofdefExpression':
			L_IDH_ofdefExpression_TEXT='(運算式：計算結果為單一值的數學或邏輯運算子、常數、函數、欄位名稱、控制項及屬性的任一組合。運算式可執行計算，操作字元或測試資料。)';
sTemp=L_IDH_ofdefExpression_TEXT;
break;
			case 'IDH_ofdefFileServer':
			L_IDH_ofdefFileServer_TEXT='(檔案伺服器：區域網路上可供網路上使用者存取的檔案儲存裝置。檔案伺服器不僅儲存檔案，還管理檔案並維護網路使用者要求檔案時的順序，並對檔案做變更。)';
sTemp=L_IDH_ofdefFileServer_TEXT;
break;
			case 'IDH_ofdefFixedFileLocation':
			L_IDH_ofdefFixedFileLocation_TEXT='(固定檔案位置：檔案的完整或絕對位址，例如，www.microsoft.com/location/sublocation/filename.htm。相反地，相對檔案位置是相對於使用中文件或超連結基底的位址。)';
sTemp=L_IDH_ofdefFixedFileLocation_TEXT;
break;
			case 'IDH_ofdefGlobalTextDirection':
			L_IDH_ofdefGlobalTextDirection_TEXT='(全體文字方向：定義文字輸入項方塊及編輯控制項中的文字流向。可選擇從左至右或從右至左方向，或根據偵測到的第一個加強字元上下文來確定方向。)';
sTemp=L_IDH_ofdefGlobalTextDirection_TEXT;
break;
			case 'IDH_ofdefGraphicsInterchangeFormatGIF':
			L_IDH_ofdefGraphicsInterchangeFormatGIF_TEXT='(GIF：用來顯示全球資訊網上索引色彩圖形的圖形檔案格式 (在 Windows 中其副檔名為 .gif )。它支援最多 256 種色彩並使用無損失的壓縮，這意味著壓縮檔案時不會遺失圖像資料。)';
sTemp=L_IDH_ofdefGraphicsInterchangeFormatGIF_TEXT;
break;
			case 'IDH_ofdefHTMLExtensions':
			L_IDH_ofdefHTMLExtensions_TEXT='(HTML 延伸：對正式 HTML 規格延伸的功能或設定。這些延伸可能不受所有網頁瀏覽器支援，但可由大多數網頁作者使用。例如，跑馬燈文字即是一種延伸。)';
sTemp=L_IDH_ofdefHTMLExtensions_TEXT;
break;
			case 'IDH_ofdefIndexingTasks':
			L_IDH_ofdefIndexingTasks_TEXT='(索引編製工作：Find Fast 在索引上執行的動作，如建立索引、或者刪除或更新現有索引。)';
sTemp=L_IDH_ofdefIndexingTasks_TEXT;
break;
			case 'IDH_ofdefJavaApplet':
			L_IDH_ofdefJavaApplet_TEXT='(Java Applet：使用 Java 語言 (全球資訊網上主要使用的程式設計語言) 撰寫的小軟體程式。Java Applet 位於 HTML 文件內，可用來新增至動畫、音樂、網頁更新等。)';
sTemp=L_IDH_ofdefJavaApplet_TEXT;
break;
			case 'IDH_ofdefJPEG':
			L_IDH_ofdefJPEG_TEXT='(JPEG：許多網頁瀏覽器皆支援的圖形檔案格式 (在 Microsoft Windows 中其副檔名為 .jpg )，這種格式是為壓縮及儲存圖像而開發的。對於含許多色彩的圖形 (如掃描的相片) 最為適用。)';
sTemp=L_IDH_ofdefJPEG_TEXT;
break;
			case 'IDH_ofdefKeywords':
			L_IDH_ofdefKeywords_TEXT='(關鍵字：識別活頁簿、簡報或其他 Microsoft Office 文件中重要主題的單字或片語。可使用關鍵字來編製於 Microsoft Excel、Word、PowerPoint 及 Outlook 中建立之檔案的索引。)';
sTemp=L_IDH_ofdefKeywords_TEXT;
break;
			case 'IDH_ofdefLanguageFolder':
			L_IDH_ofdefLanguageFolder_TEXT='(語言資料夾：儲存各種翻譯的檔案的資料夾。每一種語言都有不同的子資料夾與其地區識別碼 (LCID) 對應。例如，在美式英文的安裝中，其 LCID 是 1033。)';
sTemp=L_IDH_ofdefLanguageFolder_TEXT;
break;
			case 'IDH_ofdefMacroProject':
			L_IDH_ofdefMacroProject_TEXT='(巨集專案：組成巨集的元件 (包括表單、程式碼及類別模組) 集合。在 Microsoft Visual Basic for Applications 中建立的巨集專案可併入增益集及大部份 Microsoft Office 程式。)';
sTemp=L_IDH_ofdefMacroProject_TEXT;
break;
			case 'IDH_ofdefMicrosoftDownloadService':
			L_IDH_ofdefMicrosoftDownloadService_TEXT='(MSDL：標準公佈欄系統。它包括 Microsoft Software Library (MSL)、技術文件、裝置驅動程式、說明檔及其他可從 Microsoft 下載的支援檔案。)';
sTemp=L_IDH_ofdefMicrosoftDownloadService_TEXT;
break;
			case 'IDH_ofdefMicrosoftFrontPage':
			L_IDH_ofdefMicrosoftFrontPage_TEXT='(Microsoft FrontPage：無需進行程式設計，即可用來建立及管理網際網路網站及內部網路網站的程式。它可隨 Microsoft Office 提供或作為獨立產品。)';
sTemp=L_IDH_ofdefMicrosoftFrontPage_TEXT;
break;
			case 'IDH_ofdefMicrosoftKnowledgeBase':
			L_IDH_ofdefMicrosoftKnowledgeBase_TEXT='(Microsoft Knowledge Base (KB)：Microsoft 支援工程師及客戶所需產品資訊的主要來源。這是各種文章的完整集合，包括詳細使用說明資訊，以及技術支援問題及已知問題的答案。)';
sTemp=L_IDH_ofdefMicrosoftKnowledgeBase_TEXT;
break;
			case 'IDH_ofdefMicrosoftOfficeServerExtensionsOSE':
			L_IDH_ofdefMicrosoftOfficeServerExtensionsOSE_TEXT='(Microsoft Office Server Extensions：延伸網頁伺服器功能以提供發佈、共同作業及文件管理能力的軟體，可增強 Microsoft Office 2002 及網頁瀏覽器的功能。)';
sTemp=L_IDH_ofdefMicrosoftOfficeServerExtensionsOSE_TEXT;
break;
			case 'IDH_ofdefMicrosoftSoftwareLibrary':
			L_IDH_ofdefMicrosoftSoftwareLibrary_TEXT='(MSL：網際網路上所有 Microsoft 產品的免費二進位 (非文字) 檔案集合。MSL 包括裝置驅動程式、公用程式、說明檔案及技術文件。)';
sTemp=L_IDH_ofdefMicrosoftSoftwareLibrary_TEXT;
break;
			case 'IDH_ofdefMultipurposeInternetMailExtensionsMIME':
			L_IDH_ofdefMultipurposeInternetMailExtensionsMIME_TEXT='(MIME：透過網際網路連線傳遞多媒體資源的標準清單。MIME 類型會通知程式物件所包含的內容 (例如，圖形、聲音或視訊)。)';
sTemp=L_IDH_ofdefMultipurposeInternetMailExtensionsMIME_TEXT;
break;
			case 'IDH_ofdefNavigationPane':
			L_IDH_ofdefNavigationPane_TEXT='(功能窗格：[說明] 視窗中包含 [目錄]、[解答精靈] 及 [索引] 的區域。)';
sTemp=L_IDH_ofdefNavigationPane_TEXT;
break;
			case 'IDH_ofdefOffline':
			L_IDH_ofdefOffline_TEXT='(離線：指的是未連接網路的一或多部電腦。)';
sTemp=L_IDH_ofdefOffline_TEXT;
break;
			case 'IDH_ofdefOLE':
			L_IDH_ofdefOLE_TEXT='(OLE：可用來在程式間共用資訊的程式整合技術。所有 Office 程式均支援 OLE，所以可透過已連結及嵌入的物件共用資訊。)';
sTemp=L_IDH_ofdefOLE_TEXT;
break;
			case 'IDH_ofdefOperatingSystem':
			L_IDH_ofdefOperatingSystem_TEXT='(作業系統：控制硬體資源 (如記憶體、中央處理器 (CPU) 時間、磁碟空間及週邊設備) 分派及使用的軟體。作業系統是建立程式的基礎。)';
sTemp=L_IDH_ofdefOperatingSystem_TEXT;
break;
			case 'IDH_ofdefPath':
			L_IDH_ofdefPath_TEXT='(路徑：作業系統用來定位資料夾或檔案的路徑；例如，C:\House finances\March.doc。)';
sTemp=L_IDH_ofdefPath_TEXT;
break;
			case 'IDH_ofdefPortalNetworkGraphicsPNG':
			L_IDH_ofdefPortalNetworkGraphicsPNG_TEXT='(PNG：部份全球資訊網瀏覽器支援的圖形檔案格式。PNG 支援圖像的各種透明度 (alpha 通道) 及不同電腦上圖像亮度的控制 (gamma 校正)。PNG 檔案是壓縮的點陣圖。)';
sTemp=L_IDH_ofdefPortalNetworkGraphicsPNG_TEXT;
break;
			case 'IDH_ofdefPublish':
			L_IDH_ofdefPublish_TEXT='(發佈：將「超文字標記語言 (HTML)」格式的檔案複本儲存到網頁伺服器。)';
sTemp=L_IDH_ofdefPublish_TEXT;
break;
			case 'IDH_ofdefRealtime':
			L_IDH_ofdefRealtime_TEXT='(即時：事件發生的實際時間。以即時共用文件時，共用文件的每個人都可立即看到對文件進行的任何變更。)';
sTemp=L_IDH_ofdefRealtime_TEXT;
break;
			case 'IDH_ofdefRelationalDatabase':
			L_IDH_ofdefRelationalDatabase_TEXT='(關聯式資料庫：在資料表中儲存資訊的資料庫類型。使用兩個資料表中相符的值，將一個資料表中的資料與另一個資料表中的資料關聯。在關聯式資料庫中，通常特定類型的資料只可以儲存一次。)';
sTemp=L_IDH_ofdefRelationalDatabase_TEXT;
break;
			case 'IDH_ofdefRelativeLink':
			L_IDH_ofdefRelativeLink_TEXT='(相對連結：當超連結使用相對連結的路徑時，您可以移動含超連結的檔案及超連結目的地，而無需中斷超連結。請同時移動含超連結的檔案及其目的地。)';
sTemp=L_IDH_ofdefRelativeLink_TEXT;
break;
			case 'IDH_ofdefReplication':
			L_IDH_ofdefReplication_TEXT='(複製：同步功能所使用的處理程序，它將選取的檔案從網頁伺服器複製到硬碟。此處理程序可讓您在未連接網頁伺服器時檢視及修改這些檔案。)';
sTemp=L_IDH_ofdefReplication_TEXT;
break;
			case 'IDH_ofdefRichText':
			L_IDH_ofdefRichText_TEXT='(RTF 文字欄位：可顯示格式設定及圖形 (如嵌入物件) 而不僅僅是文字的欄位。)';
sTemp=L_IDH_ofdefRichText_TEXT;
break;
			case 'IDH_ofdefRoamingUserProfile':
			L_IDH_ofdefRoamingUserProfile_TEXT='(漫遊使用者設定檔：定義特定使用者自訂喜好設定及選項，以及個人化檔案 (如自訂字典及範本) 的一組設定。)';
sTemp=L_IDH_ofdefRoamingUserProfile_TEXT;
break;
			case 'IDH_ofdefScreenTips':
			L_IDH_ofdefScreenTips_TEXT='(工具提示：顯示在螢幕上的附註，可提供工具列按鈕、追蹤修訂或註解的相關資訊，或顯示註腳或章節附註。工具提示亦顯示您選擇插入日期或自動圖文集項目時將顯示的文字。)';
sTemp=L_IDH_ofdefScreenTips_TEXT;
break;
			case 'IDH_ofdefScriptAnchor':
			L_IDH_ofdefScriptAnchor_TEXT='(指令碼錨點：您在 Microsoft Office 程式中開啟之網頁上指令碼的視覺呈現方式。預設不顯示指令碼錨點。不同指令碼錨點代表用不同指令碼語言撰寫的指令碼。)';
sTemp=L_IDH_ofdefScriptAnchor_TEXT;
break;
			case 'IDH_ofdefSecureSocketsLayerSSL':
			L_IDH_ofdefSecureSocketsLayerSSL_TEXT='(安全通訊端層 (SSL)：由 Netscape Communications 開發的建議開放式標準，用於建立安全的通訊通道，以防止信用卡號碼之類的重要資訊遭攔截。)';
sTemp=L_IDH_ofdefSecureSocketsLayerSSL_TEXT;
break;
			case 'IDH_ofdefSecurityFile':
			L_IDH_ofdefSecurityFile_TEXT='(安全性檔案：包含可密封郵件或在郵件中新增數位簽章之數位碼的檔案。此檔案可儲存在 3.5 英吋磁片或電腦硬碟上。)';
sTemp=L_IDH_ofdefSecurityFile_TEXT;
break;
			case 'IDH_ofdefServer':
			L_IDH_ofdefServer_TEXT='(伺服器：區域網路上控制對所有或部份網路及其資源 (如印表機) 存取權的電腦。全球資訊網上，執行回應 HTTP 通訊協定請求之網頁伺服器軟體的電腦，亦稱作主機。)';
sTemp=L_IDH_ofdefServer_TEXT;
break;
			case 'IDH_ofdefShortcut':
			L_IDH_ofdefShortcut_TEXT='(捷徑：指向儲存在另一個位置之程式或檔案的圖示。)';
sTemp=L_IDH_ofdefShortcut_TEXT;
break;
			case 'IDH_ofdefSynchronization':
			L_IDH_ofdefSynchronization_TEXT='(同步處理：將從網頁伺服器複製到另一部電腦之檔案進行比較的處理程序，目的是保持檔案更新。)';
sTemp=L_IDH_ofdefSynchronization_TEXT;
break;
			case 'IDH_ofdefTextQuery':
			L_IDH_ofdefTextQuery_TEXT='(文字查詢：一或多個片語，可包含運算子、問號、萬用字元 (如 * 或 ?) 及括號。)';
sTemp=L_IDH_ofdefTextQuery_TEXT;
break;
			case 'IDH_ofdefTheMicrosoftNetwork':
			L_IDH_ofdefTheMicrosoftNetwork_TEXT='(MSN：網際網路連線服務，您可用它來與世界各地的人交換訊息；閱讀新聞、體育、天氣及財經資訊；尋找技術問題的答案；以及下載成千上萬的程式。)';
sTemp=L_IDH_ofdefTheMicrosoftNetwork_TEXT;
break;
			case 'IDH_ofdefThreadedDiscussion':
			L_IDH_ofdefThreadedDiscussion_TEXT='(往來討論：線上論壇 (如新聞群組) 中的一系列訊息或文章，對訊息的回覆直接位於訊息之下，而不是以時間順序或字母順序排列。)';
sTemp=L_IDH_ofdefThreadedDiscussion_TEXT;
break;
			case 'IDH_ofdefTopicPane':
			L_IDH_ofdefTopicPane_TEXT='(主題窗格：包含「說明」主題的 [說明] 視窗區域。)';
sTemp=L_IDH_ofdefTopicPane_TEXT;
break;
			case 'IDH_ofdefUserProfile':
			L_IDH_ofdefUserProfile_TEXT='(使用者設定檔：定義特定使用者的自訂喜好設定，以及自訂字典及自動校正清單之類的個人化檔案的設定。在您登入時，作業系統使用這些設定來設定您的電腦。)';
sTemp=L_IDH_ofdefUserProfile_TEXT;
break;
			case 'IDH_ofdefValue':
			L_IDH_ofdefValue_TEXT='(值：組成搜尋或篩選時欄位必須符合之條件的文字、日期、數字或邏輯輸入。例如，「作者」欄位在條件為等於時必須包含值 (如 John)，如此才完整。)';
sTemp=L_IDH_ofdefValue_TEXT;
break;
			case 'IDH_ofdefVectorGraphics':
			L_IDH_ofdefVectorGraphics_TEXT='(向量圖形：使用幾何公式來表現線條、弧形及方形之類圖形物件的方式。相反地，點陣圖形 (亦稱作點陣圖形 (raster graphics)) 是儲存為像素集合。)';
sTemp=L_IDH_ofdefVectorGraphics_TEXT;
break;
			case 'IDH_ofdefVectorMarkupLanguageVML':
			L_IDH_ofdefVectorMarkupLanguageVML_TEXT='(Vector Markup Language (VML)：標記 2D 向量圖形以在全球資訊網上進行發佈的系統。可調整且可編輯 VML 圖形，通常下載此類圖形花費的時間較少，它們也不需要佔用很多磁碟空間。)';
sTemp=L_IDH_ofdefVectorMarkupLanguageVML_TEXT;
break;
			case 'IDH_ofdefWAV':
			L_IDH_ofdefWAV_TEXT='(WAV：Windows 將聲音儲存為波形時所用的檔案格式。此類檔案的副檔名是 .wav。根據各種因素，一分鐘的聲音可能佔用的儲存區少則 644 KB，多則 27 MB。)';
sTemp=L_IDH_ofdefWAV_TEXT;
break;
			case 'IDH_ofdefWhiteboard':
			L_IDH_ofdefWhiteboard_TEXT='(白板：Microsoft NetMeeting 功能，可開啟個別視窗，以便線上會議參與者鍵入文字、繪製圖形、複製、貼上及刪除物件，以及反白提示或指向文字及圖形。)';
sTemp=L_IDH_ofdefWhiteboard_TEXT;
break;
			case 'IDH_ofdefWorldWideWeb':
			L_IDH_ofdefWorldWideWeb_TEXT='(全球資訊網 (WWW)：網際網路的多媒體分支，不僅可呈現文字，還可以呈現圖形、聲音及視訊。在網路上，使用者可以使用超連結輕鬆地在各項目、網頁或網站之間跳換。)';
sTemp=L_IDH_ofdefWorldWideWeb_TEXT;
break;
			case 'IDH_oftipServer':
			L_IDH_oftipServer_TEXT='(網頁伺服器：主控網頁並回應瀏覽器請求的電腦。亦稱作 HTTP 伺服器，網頁伺服器可儲存其 URL 以 http:// 開頭的檔案。)';
sTemp=L_IDH_oftipServer_TEXT;
break;
			case 'IDH_oftipToolbar':
			L_IDH_oftipToolbar_TEXT='(工具列：含有按鈕及選項的列，可用來執行指令。若要顯示工具列，請按一下 [工具] 功能表上的 [自訂]，再按 [工具列] 索引標籤。)';
sTemp=L_IDH_oftipToolbar_TEXT;
break;
			case 'IDH_ppdefJavaScript':
			L_IDH_ppdefJavaScript_TEXT='(JavaScript：一種指令碼語言，可用於新增網頁或網站功能，或增強其外觀。JavaScript 指令碼可在任何類型的用戶端或伺服器電腦上執行。)';
sTemp=L_IDH_ppdefJavaScript_TEXT;
break;
			case 'IDH_redefPublicFolder':
			L_IDH_redefPublicFolder_TEXT='(公用資料夾：公用伺服器上的資料夾，使用者可用來共用資訊 (如工作資訊、討論、連絡人、工作及分類廣告)。權限決定了何人能夠檢視及變更該資料夾，以及其權限的大小。)';
sTemp=L_IDH_redefPublicFolder_TEXT;
break;
			case 'ofAbsoluteCellReference':
			L_ofAbsoluteCellReference_TEXT='(絕對儲存格參照：公式中儲存格的準確位址，不管包含公式的儲存格位置在何處。絕對儲存格參照的形式是 $A$1。)';
sTemp=L_ofAbsoluteCellReference_TEXT;
break;
			case 'OfAbsoluteLink':
			L_OfAbsoluteLink_TEXT='(絕對連結：至檔案伺服器、全球資訊網或企業內部網路上檔案準確位置的超連結。絕對連結使用準確路徑；如果您移動了包含超連結的檔案或超連結目的地，則連結會中斷。)';
sTemp=L_OfAbsoluteLink_TEXT;
break;
			case 'ofAbsoluteURL':
			L_ofAbsoluteURL_TEXT='(絕對 URL：網頁或其他全球資訊網資源的完整網際網路位址。絕對 URL 包括通訊協定 (如"http")、網路位置及選擇性路徑及檔名。例如，http://example.microsoft.com/。)';
sTemp=L_ofAbsoluteURL_TEXT;
break;
			case 'ofAccessibility':
			L_ofAccessibility_TEXT='(協助工具：給予硬體或軟體系統的品質保證，可讓具有一或多種身體行動不便 (如行動上、視障或聽障) 的人士使用該系統。)';
sTemp=L_ofAccessibility_TEXT;
break;
			case 'OfAccessibilityAids':
			L_OfAccessibilityAids_TEXT='(輔助工具：讓行動不便人士能輕鬆使用電腦的公用程式。輔助工具的範例包括螢幕助讀程式、語音辨識程式及螢幕小鍵盤。)';
sTemp=L_OfAccessibilityAids_TEXT;
break;
			case 'ofAccessKey':
			L_ofAccessKey_TEXT='(便捷鍵：組合鍵，如 ALT+F，可將焦點移至功能表、指令或控制項，而無需使用滑鼠。)';
sTemp=L_ofAccessKey_TEXT;
break;
			case 'OfActions':
			L_OfActions_TEXT='(動作：使用智慧標籤可執行的工作。例如，新增名稱至 Microsoft Outlook 連絡人資料夾的動作，可透過人員名稱智慧標籤來完成。)';
sTemp=L_OfActions_TEXT;
break;
			case 'ofActiveHyperlink':
			L_ofActiveHyperlink_TEXT='(使用中的超連結：網頁瀏覽器中目前選取的超連結。部份網頁瀏覽器透過變更色彩來指示使用中的超連結。)';
sTemp=L_ofActiveHyperlink_TEXT;
break;
			case 'ofActiveServerPage':
			L_ofActiveServerPage_TEXT='(動態伺服器網頁 (ASP)：包含嵌入伺服器端指令碼的檔案，該指令碼在伺服器上執行、傳送至用戶端網頁瀏覽器並在其上顯示為標準 HTML 檔案。)';
sTemp=L_ofActiveServerPage_TEXT;
break;
			case 'ofActiveX':
			L_ofActiveX_TEXT='(ActiveX：一組技術，可讓網路環境中各軟體元件之間進行互動，不管建立元件所用的語言為何。)';
sTemp=L_ofActiveX_TEXT;
break;
			case 'ofActiveXComponent':
			L_ofActiveXComponent_TEXT='(元件/ActiveX 元件：可使用其他應用程式提供的物件的應用程式，或呈現其自己的物件以供其他應用程式使用的應用程式。)';
sTemp=L_ofActiveXComponent_TEXT;
break;
			case 'ofActiveXControl':
			L_ofActiveXControl_TEXT='(ActiveX 控制項：核取方塊或按鈕之類的控制項，它為使用者提供選項或執行可自動化工作的巨集或指令碼。您可以在 Microsoft Visual Basic for Applications 中撰寫控制項的巨集，或在 Microsoft Script Editor 中撰寫指令碼。)';
sTemp=L_ofActiveXControl_TEXT;
break;
			case 'ofAddIn':
			L_ofAddIn_TEXT='(增益集：將自訂指令或自訂功能新增至 Microsoft Office 的補充程式。)';
sTemp=L_ofAddIn_TEXT;
break;
			case 'ofAdjustmentHandle':
			L_ofAdjustmentHandle_TEXT='(調整控點：用來調整大部份快取圖案外觀而不是大小的菱形控點。例如，您可以將圓角矩形調整得更圓或更方。)';
sTemp=L_ofAdjustmentHandle_TEXT;
break;
			case 'ofADO':
			L_ofADO_TEXT='(ActiveX 資料物件 (ADO)：與 OLE DB 相容資料來源通訊，以連接、擷取、操作和更新資料的資料存取介面。)';
sTemp=L_ofADO_TEXT;
break;
			case 'ofAliasSQL':
			L_ofAliasSQL_TEXT='(別名 (SQL)：運算式中資料表或欄位的替代名稱。常用來縮短資料表或欄位名稱，以便稍後在程式碼中參照、防止可能的模稜兩可的參照，或提供查詢輸出中更具描述性的名稱。)';
sTemp=L_ofAliasSQL_TEXT;
break;
			case 'ofAliasVBA':
			L_ofAliasVBA_TEXT='(別名 (VBA)：提供給外部程序的替代名稱，以避免與 Visual Basic 關鍵字、公用變數、常數，或使用 Visual Basic 命名慣例所不允許的名稱之間的衝突。)';
sTemp=L_ofAliasVBA_TEXT;
break;
			case 'ofAlignment':
			L_ofAlignment_TEXT='(對齊方式：文字、圖形及其他物件的一致定位。對齊方式類型包括靠左對齊、靠右對齊及左右對齊。)';
sTemp=L_ofAlignment_TEXT;
break;
			case 'ofAlternativeText':
			L_ofAlternativeText_TEXT='(替代文字：網頁瀏覽器在下載圖像時所顯示的文字，適用於關閉圖形顯示的使用者，以及依賴螢幕助讀軟體使螢幕上的圖形轉換為有聲文字的使用者。)';
sTemp=L_ofAlternativeText_TEXT;
break;
			case 'ofAnonymousNamedBinding':
			L_ofAnonymousNamedBinding_TEXT='(匿名及具名繫結：繫結至目錄的方式。匿名使用者可存取有限的目錄區域。如果得到系統管理員許可，指定的使用者就能夠設定屬性，以及存取更多的目錄區域。)';
sTemp=L_ofAnonymousNamedBinding_TEXT;
break;
			case 'ofANSICharacterSet':
			L_ofANSICharacterSet_TEXT='(ANSI 字元集：Microsoft Windows 使用的 8 位元字元集，可讓您使用鍵盤來代表最多 256 個字元 (0 到 255)。ASCII 字元集是 ANSI 集的子集。)';
sTemp=L_ofANSICharacterSet_TEXT;
break;
			case 'ofantialiasing':
			L_ofantialiasing_TEXT='(消除鋸齒：將圖形元素及文字中參差不齊的邊緣修平滑。消除鋸齒可以使參差不齊的線條或曲線變得平滑，方法是為鄰近的像素加上陰影。)';
sTemp=L_ofantialiasing_TEXT;
break;
			case 'ofApplet':
			L_ofApplet_TEXT='(Applet：由已執行 Java 應用程式 (任何能夠解釋 Java 的網頁瀏覽器) 載入及執行的 Java 類別。Java Applet 常用來將多媒體效果及互動功能 (如視訊及動畫) 新增至網頁。)';
sTemp=L_ofApplet_TEXT;
break;
			case 'ofArgument':
			L_ofArgument_TEXT='(引數：將資訊提供給動作、事件、方法、屬性、函數或程序的值。)';
sTemp=L_ofArgument_TEXT;
break;
			case 'ofArray':
			L_ofArray_TEXT='(陣列：包含具一般名稱及資料類型的有限數目的元素的變數。陣列的每個元素均由唯一索引號碼來識別。對陣列中一個元素的變更不會影響其他元素。)';
sTemp=L_ofArray_TEXT;
break;
			case 'ofASCII':
			L_ofASCII_TEXT='(ASCII：以數字來表示英文中字元的代碼。為每個字元指定從 0 到 127 之間的數字。大部份電腦使用 ASCII 來代表文字，以及在電腦間轉送資料。)';
sTemp=L_ofASCII_TEXT;
break;
			case 'ofAssistantOb':
			L_ofAssistantOb_TEXT='(Assistant 物件：Assistant 是共用的「Microsoft Office 小幫手」物件。它是完全可程式化的物件。)';
sTemp=L_ofAssistantOb_TEXT;
break;
			case 'OfAssistantShape':
			L_OfAssistantShape_TEXT='(助理圖案：組織圖中，位於下方，且使用折線接點與其他圖案連接的圖案。此圖案的位置在其特定上司圖案的其他助理圖案上方。)';
sTemp=L_OfAssistantShape_TEXT;
break;
			case 'ofAttribute':
			L_ofAttribute_TEXT='(屬性：可使用繪圖工具及功能表命令來操作的物件或文字功能 (如填滿線或文字色彩)。)';
sTemp=L_ofAttribute_TEXT;
break;
			case 'OfAuthenticate':
			L_OfAuthenticate_TEXT='(驗證：用來驗證網站所傳送的憑證來源或用來簽署巨集的處理程序。如果電腦上啟用的安全性層級無法驗證數位簽章，則會忽略憑證或提示使用者。)';
sTemp=L_OfAuthenticate_TEXT;
break;
			case 'ofAuthentication':
			L_ofAuthentication_TEXT='(驗證：多使用者或網路環境中，驗證使用者登入資訊的處理程序。將名稱及密碼與授權清單相比較，如果相符則以指定的權限層級來授與存取權。)';
sTemp=L_ofAuthentication_TEXT;
break;
			case 'ofAuthenticationdatabase':
			L_ofAuthenticationdatabase_TEXT='(驗證資料庫：伺服器上將使用者名稱與密碼對應的資料庫。)';
sTemp=L_ofAuthenticationdatabase_TEXT;
break;
			case 'ofAutomation':
			L_ofAutomation_TEXT='(自動化：透過另一個應用程式或開發工具使用某應用程式的物件的方法。以前稱為 OLE 自動化，自動化是工業標準，並且是「元件物件模型 (COM)」的一項功能。)';
sTemp=L_ofAutomation_TEXT;
break;
			case 'ofAutomationObject':
			L_ofAutomationObject_TEXT='(Automation 物件：由支援 Automation 之元件所提供的物件。亦可稱作 ActiveX 物件或簡單稱作物件。)';
sTemp=L_ofAutomationObject_TEXT;
break;
			case 'ofBevel':
			L_ofBevel_TEXT='(斜角：套用至物件框線的 3D 邊緣效果。)';
sTemp=L_ofBevel_TEXT;
break;
			case 'ofbidiDecoTypeNaskh':
			L_ofbidiDecoTypeNaskh_TEXT='(DecoType Ruq\'ah：使用 Ruq\'ah 指令碼來豐富阿拉伯文的顯示。此指令碼使用物件連結及內嵌 (OLE) 來建立物件並將物件新增至文件。)';
sTemp=L_ofbidiDecoTypeNaskh_TEXT;
break;
			case 'ofbidiDecoTypeRuqah':
			L_ofbidiDecoTypeRuqah_TEXT='(DecoType Naskh：使用 Naskh 指令碼來豐富阿拉伯文的顯示。此指令碼使用物件連結及內嵌 (OLE) 來建立物件並將其新增至文件。)';
sTemp=L_ofbidiDecoTypeRuqah_TEXT;
break;
			case 'ofBinary':
			L_ofBinary_TEXT='(二進位：包含編碼資訊的檔案，這些資訊是依據建立資訊的應用程式來解譯。一般而言，二進位檔案只能用建立該檔案的應用程式來編輯。)';
sTemp=L_ofBinary_TEXT;
break;
			case 'ofBinder':
			L_ofBinder_TEXT='(文件夾：可用來組織相關文件的 Microsoft Office 程式。可在文件夾中檢查拼字、為文件夾中的所有文件的頁面編排連續的頁碼，以及列印文件。)';
sTemp=L_ofBinder_TEXT;
break;
			case 'ofBitmap':
			L_ofBitmap_TEXT='(點陣圖 (BMP)：由一系列的小點組成的圖片，很像由一些方形填滿形成圖案及線條的一張圖紙。將點陣圖儲存為檔案時，其副檔名通常是 .bmp。)';
sTemp=L_ofBitmap_TEXT;
break;
			case 'ofBleed':
			L_ofBleed_TEXT='(出血：圖片超出列印頁的程度。)';
sTemp=L_ofBleed_TEXT;
break;
			case 'ofBookmark':
			L_ofBookmark_TEXT='(書籤：您為了參照而命名之檔案文字的位置或選取範圍。書籤可識別檔案中您稍後可參照或連結的位置。)';
sTemp=L_ofBookmark_TEXT;
break;
			case 'ofBoolean':
			L_ofBoolean_TEXT='(布林值：可求得 True (非零) 或 False (0) 的運算式。您可以使用關鍵字 True 與 False 來分別提供值 -1 與 0。欄位資料類型 Yes/No 是布林值，Yes 的值為 - 1。)';
sTemp=L_ofBoolean_TEXT;
break;
			case 'ofBreakMode':
			L_ofBreakMode_TEXT='(中斷模式：處於開發環境時，程式執行暫停。在中斷模式下，您可以檢查、偵錯、重設、逐步執行或繼續執行程式。)';
sTemp=L_ofBreakMode_TEXT;
break;
			case 'ofBreakPoint':
			L_ofBreakPoint_TEXT='(中斷點：Function 或 Sub 程序中的一行程式碼。在這兩種程序中 Microsoft Visual Basic 會自動暫停執行。)';
sTemp=L_ofBreakPoint_TEXT;
break;
			case 'ofBrokenHyperlink':
			L_ofBrokenHyperlink_TEXT='(中斷的超連結：指向錯誤的 URL 或遺失的網頁或檔案的超連結。)';
sTemp=L_ofBrokenHyperlink_TEXT;
break;
			case 'ofBrowserSafe':
			L_ofBrowserSafe_TEXT='(瀏覽器安全：設計用在部分網頁瀏覽器。例如，瀏覽器安全調色盤可防止色彩閃爍或不準確的色彩對應，對於調色盤與某些瀏覽器不相容的圖片，這是常見的問題。)';
sTemp=L_ofBrowserSafe_TEXT;
break;
			case 'ofBrowsersafepalette':
			L_ofBrowsersafepalette_TEXT='(瀏覽器安全調色盤：設計用來在網頁上顯示圖片的調色盤，而不管使用哪種瀏覽器或作業系統。瀏覽器安全調色盤可防止色彩閃爍或不準確的色彩對應。)';
sTemp=L_ofBrowsersafepalette_TEXT;
break;
			case 'OfBuiltinMenu':
			L_OfBuiltinMenu_TEXT='(內建功能表：隨 Microsoft Office 提供的功能表，不是由使用者建立。)';
sTemp=L_OfBuiltinMenu_TEXT;
break;
			case 'OfBuiltinToolbar':
			L_OfBuiltinToolbar_TEXT='(內建工具列：Microsoft Office 程式中所包含的工具列，而不是由使用者所建立。)';
sTemp=L_OfBuiltinToolbar_TEXT;
break;
			case 'ofBullet':
			L_ofBullet_TEXT='(項目符號：置於文字 (如清單中的項目) 之前的點或其他符號，以示強調。)';
sTemp=L_ofBullet_TEXT;
break;
			case 'ofCaseSensitive':
			L_ofCaseSensitive_TEXT='(區分大小寫：區分大寫與小寫字母的能力。區分大小寫搜尋僅尋找完全符合大寫及小寫字母的文字。)';
sTemp=L_ofCaseSensitive_TEXT;
break;
			case 'ofCell':
			L_ofCell_TEXT='(儲存格：工作表或表格中列及欄交叉形成的方塊，您可以在其中輸入資訊。)';
sTemp=L_ofCell_TEXT;
break;
			case 'ofCharacter':
			L_ofCharacter_TEXT='(字元：字母、數字、標點符號或符號。)';
sTemp=L_ofCharacter_TEXT;
break;
			case 'ofCharacterEntity':
			L_ofCharacterEntity_TEXT='(字元實體：HTML 中用來說明符號、國際字母及其他特殊字元的代碼。字元實體是由 International Standards Organization (ISO) 維護。)';
sTemp=L_ofCharacterEntity_TEXT;
break;
			case 'ofCharacterFormatting':
			L_ofCharacterFormatting_TEXT='(字元格式設定：可套用至所選文字字元的格式設定。)';
sTemp=L_ofCharacterFormatting_TEXT;
break;
			case 'OfCharacterSet':
			L_OfCharacterSet_TEXT='(字元集：具有一些共同關係的字母、數值及其他字元群組。例如，標準 ASCII 字元集包括組成 ASCII 編碼配置的字母、數字、符號及控制碼。)';
sTemp=L_OfCharacterSet_TEXT;
break;
			case 'ofCharacterspacing':
			L_ofCharacterspacing_TEXT='(字元間距：一行文字中字元間的距離。字距調整、字距壓縮微調及縮放比例可用來調整字元間的距離。)';
sTemp=L_ofCharacterspacing_TEXT;
break;
			case 'OfChartComponent':
			L_OfChartComponent_TEXT='(圖表元件：Microsoft Office Web 元件，可在網頁上提供互動式圖表功能。您可以用圖表來說明資料，讓使用者能夠變更資料、變更圖表選項並查看圖表中反映出的變更。)';
sTemp=L_OfChartComponent_TEXT;
break;
			case 'ofCitation':
			L_ofCitation_TEXT='(引文：對特定法律案件、法令或其他法律文件的參照。)';
sTemp=L_ofCitation_TEXT;
break;
			case 'ofClass':
			L_ofClass_TEXT='(類別：物件的定義，包括其名稱、屬性及方法及其具有的所有事件。在您建立類別實例時，就建立了具有該類別所定義之所有特性的新物件。)';
sTemp=L_ofClass_TEXT;
break;
			case 'ofClassModule':
			L_ofClassModule_TEXT='(類別模組：可包含新物件之定義的模組。在您建立新的類別實例時，就建立了新物件。模組中定義的程序成為物件的屬性及方法。)';
sTemp=L_ofClassModule_TEXT;
break;
			case 'ofClear':
			L_ofClear_TEXT='(清除：將一個設定變為「關閉」狀態，或移除一個值。)';
sTemp=L_ofClear_TEXT;
break;
			case 'ofClip':
			L_ofClip_TEXT='(多媒體項目：單一媒體檔案，包括圖片、聲音、動畫或電影。)';
sTemp=L_ofClip_TEXT;
break;
			case 'ofclipart':
			L_ofclipart_TEXT='(美工圖案：一張現成的圖片，常顯示為點陣圖或繪製的一組圖案。)';
sTemp=L_ofclipart_TEXT;
break;
			case 'OfClipCollection':
			L_OfClipCollection_TEXT='(剪輯集合：以階層方式組織的媒體短片。您可以建立自己的剪輯集合、匯入剪輯集合，或新增、移動剪輯，或在剪輯集合之間複製剪輯。)';
sTemp=L_OfClipCollection_TEXT;
break;
			case 'OfClipGallery':
			L_OfClipGallery_TEXT='(多媒體藝廊：含繪圖、相片、聲音、視訊及其他媒體檔案的 Microsoft Office 程式，您可以在簡報、出版物及其他 Office 文件中插入使用。)';
sTemp=L_OfClipGallery_TEXT;
break;
			case 'OfCodePage':
			L_OfCodePage_TEXT='(字碼頁：將程式使用的二進位字元碼，與鍵盤上的鍵或顯示的字元外觀關聯的表格。字碼頁可以提供對不同國家所用之語言的支援。)';
sTemp=L_OfCodePage_TEXT;
break;
			case 'ofCodeWindow':
			L_ofCodeWindow_TEXT='([程式碼] 視窗：「Microsoft Visual Basic 編輯器」中的視窗，您可以在其中撰寫、顯示及編輯 Visual Basic 程式碼。可開啟與您具有的模組同樣多的 [程式碼] 視窗。)';
sTemp=L_ofCodeWindow_TEXT;
break;
			case 'ofCollection':
			L_ofCollection_TEXT='(集合：含一組相關物件的物件。每當集合中發生變更時，集合中物件的位置會變更；所以，集合中任一特定物件的位置都可能改變。)';
sTemp=L_ofCollection_TEXT;
break;
			case 'ofColumn':
			L_ofColumn_TEXT='(欄：一或多個並排區段中文字的垂直排列方式，或表格中儲存格的垂直排列方式。)';
sTemp=L_ofColumn_TEXT;
break;
			case 'ofCommandLine':
			L_ofCommandLine_TEXT='(命令列：用來啟動應用程式的字元字串。)';
sTemp=L_ofCommandLine_TEXT;
break;
			case 'ofCompileTime':
			L_ofCompileTime_TEXT='(編譯時間：Visual Basic 準備程式碼以執行的時間。模組在執行前會自動編譯。)';
sTemp=L_ofCompileTime_TEXT;
break;
			case 'ofcomponentobjectmodelcom':
			L_ofcomponentobjectmodelcom_TEXT='(元件物件模型 (COM)：Microsoft 開發的規格，用來建立軟體元件，這些元件可組成程式或新增功能至 Microsoft Windows 作業系統上執行的現有程式。)';
sTemp=L_ofcomponentobjectmodelcom_TEXT;
break;
			case 'ofCompressionutility':
			L_ofCompressionutility_TEXT='(壓縮公用程式：減少檔案在磁片上的儲存大小的軟體程式。如果壓縮的檔案太大而無法放入單張磁片，壓縮公用程式可將它複製到多張磁片。)';
sTemp=L_ofCompressionutility_TEXT;
break;
			case 'ofConcordance':
			L_ofConcordance_TEXT='(辭彙索引檔：有兩欄的索引檔：第一欄列出您想要編製索引的文件中文字；第二欄列出從第一欄中文字產生的索引項目。)';
sTemp=L_ofConcordance_TEXT;
break;
			case 'ofConditionalCompilerConstant':
			L_ofConditionalCompilerConstant_TEXT='(條件編譯器常數：在主應用程式中或使用 #Const 編譯器指令定義的 Visual Basic 識別碼，其他編譯器指令使用它來決定何時或是否編譯某些特定的程式碼區塊。)';
sTemp=L_ofConditionalCompilerConstant_TEXT;
break;
			case 'ofConditionalExpression':
			L_ofConditionalExpression_TEXT='(條件運算式：計算和比較值的運算式；例如，If...Then 及 Select Case 陳述式。如果符合條件，則執行一或多個操作。如果不符合，則跳過該操作。)';
sTemp=L_ofConditionalExpression_TEXT;
break;
			case 'ofConstant':
			L_ofConstant_TEXT='(常數：不計算因而不變更的值。例如，數字 210 及文字 "Quarterly Earnings" 是常數。運算式或運算式得出的結果值不是常數。)';
sTemp=L_ofConstant_TEXT;
break;
			case 'ofControl':
			L_ofControl_TEXT='(控制項：圖形使用者介面物件，如文字方塊、核取方塊、捲軸或指令按鈕，可讓使用者控制程式。可使用控制項來顯示資料或選項，執行動作或讓使用者介面更方便閱讀。)';
sTemp=L_ofControl_TEXT;
break;
			case 'ofCoordinatePair':
			L_ofCoordinatePair_TEXT='(座標組：代表一個點的 x 及 y 座標的一對值，儲存在可包含許多點的座標的 2D 陣列。)';
sTemp=L_ofCoordinatePair_TEXT;
break;
			case 'ofCounter':
			L_ofCounter_TEXT='(計數器：網頁上用來計算瀏覽該網站的人數的程式。)';
sTemp=L_ofCounter_TEXT;
break;
			case 'OfCoworkerShape':
			L_OfCoworkerShape_TEXT='(同事圖案：組織圖中，連接同一上司 (或經理) 圖案的圖案旁的圖案。)';
sTemp=L_OfCoworkerShape_TEXT;
break;
			case 'ofCriteria':
			L_ofCriteria_TEXT='(篩選條件：指定用來限制哪些記錄包含在查詢或篩選之結果集中的條件。)';
sTemp=L_ofCriteria_TEXT;
break;
			case 'ofCrop':
			L_ofCrop_TEXT='(裁剪：修剪物件的垂直或水平邊緣。常將圖片裁剪以專注於特定區域。)';
sTemp=L_ofCrop_TEXT;
break;
			case 'ofCube':
			L_ofCube_TEXT='(Cube：OLAP 資料結構。Cube 包含維度 (如國家/地區/縣市) 及資料欄位 (如銷售量)。維度將資料類型組織成具有不同詳細程度的階層；由資料欄位來度量數量。)';
sTemp=L_ofCube_TEXT;
break;
			case 'ofCustomDialogBox':
			L_ofCustomDialogBox_TEXT='(自訂對話方塊：建立以要求使用者輸入額外資訊或顯示訊息的強制回應快顯方式。)';
sTemp=L_ofCustomDialogBox_TEXT;
break;
			case 'ofCustomdictionary':
			L_ofCustomdictionary_TEXT='(自訂字典：不在標準字典中的單字清單，且作者想要拼字檢查程式將其視為正確單字。)';
sTemp=L_ofCustomdictionary_TEXT;
break;
			case 'OfCycleDiagram':
			L_OfCycleDiagram_TEXT='(「循環」圖表：用來顯示連續循環之處理程序的圖表。)';
sTemp=L_OfCycleDiagram_TEXT;
break;
			case 'ofDAO':
			L_ofDAO_TEXT='(資料存取物件 (DAO)：與 Microsoft Jet 及 ODBC 相容資料來源通訊，以連接、擷取、操作及更新資料及資料庫結構的資料存取介面。)';
sTemp=L_ofDAO_TEXT;
break;
			case 'ofDatabase':
			L_ofDatabase_TEXT='(資料庫：與特定主旨或用途有關的資料集合。在資料庫中，特定實體的相關資訊 (如員工或訂單) 是用資料表、記錄及欄位來加以歸類。)';
sTemp=L_ofDatabase_TEXT;
break;
			case 'ofDataSource':
			L_ofDataSource_TEXT='(資料來源：含要併入文件之資訊的檔案。例如，您要用於合併列印的名稱及地址清單。您必須先連接資料來源，才能使用其中的資訊。)';
sTemp=L_ofDataSource_TEXT;
break;
			case 'ofDataType':
			L_ofDataType_TEXT='(資料類型：決定欄位可存放之資料類型的欄位特性。資料類型包括 Boolean、Integer、Long、Currency、Single、Double、Date、String 及 Variant (預設值)。)';
sTemp=L_ofDataType_TEXT;
break;
			case 'ofDDEchannel':
			L_ofDDEchannel_TEXT='(「動態資料交換 (DDE)」通道：Microsoft Windows 程式間的使用中連結，資料可透過它來進行交換。)';
sTemp=L_ofDDEchannel_TEXT;
break;
			case 'ofDebugging':
			L_ofDebugging_TEXT='(偵錯：尋找並修正 Visual Basic 程序或巨集中錯誤的處理程序。偵錯通常包括執行程序或巨集的特定部份並在各點進行分析。)';
sTemp=L_ofDebugging_TEXT;
break;
			case 'ofdefAnimatedGIF':
			L_ofdefAnimatedGIF_TEXT='(動畫 GIF：包含一系列「圖形交換格式 (GIF)」圖像的檔案，這些圖像在一些網頁瀏覽器中快速地依序顯示，以產生動畫效果。)';
sTemp=L_ofdefAnimatedGIF_TEXT;
break;
			case 'ofDefault':
			L_ofDefault_TEXT='(預設值：預先定義的設定。您可以接受預設的選項設定，或變更預設值以符合您的喜好。)';
sTemp=L_ofDefault_TEXT;
break;
			case 'ofDefaultProperty':
			L_ofDefaultProperty_TEXT='(預設屬性及方法：Visual Basic 將預設屬性或方法套用至給定物件，以解析運算式 (否則，該運算式不會有效)。可省略程式碼中預設屬性或方法的關鍵字。)';
sTemp=L_ofDefaultProperty_TEXT;
break;
			case 'ofdefBinding':
			L_ofdefBinding_TEXT='(早期及晚期繫結：在編譯時間 (早期) 或執行階段 (晚期) 確認參照另一個應用程式之物件的物件變數。晚期繫結的程式碼比早期繫結的程式碼慢。)';
sTemp=L_ofdefBinding_TEXT;
break;
			case 'ofdefButtonControl':
			L_ofdefButtonControl_TEXT='(按鈕控制項：工具列上的按鈕或功能表、子功能表、快顯功能表上的功能表項目，按一下即會執行命令。工具列按鈕及功能表項目共用相同的屬性及方法。)';
sTemp=L_ofdefButtonControl_TEXT;
break;
			case 'ofdefComboBoxControl':
			L_ofdefComboBoxControl_TEXT='(下拉式方塊控制項：功能表列、工具列、功能表、子功能表或快顯功能表上的自訂編輯方塊、下拉式清單方塊或下拉式方塊。當垂直固定工具列時，均不會顯示其包含的所有自訂下拉式方塊控制項。)';
sTemp=L_ofdefComboBoxControl_TEXT;
break;
			case 'ofdefCommandBar':
			L_ofdefCommandBar_TEXT='(命令列：工具列、功能表列及快顯 (按一下右鍵) 功能表可合併成單一功能，在使用者介面中稱作「工具列」；在 VBA 中稱作「命令列」。命令列有三種類型：功能表列、工具列或快顯功能表。)';
sTemp=L_ofdefCommandBar_TEXT;
break;
			case 'ofdefCommandBarControl':
			L_ofdefCommandBarControl_TEXT='(命令列控制項：功能表列、工具列、功能表、子功能表或快顯功能表上的內建或自訂控制項。可新增至命令列的自訂控制項包括按鈕、編輯方塊、下拉式清單方塊及快顯控制項，可顯示功能表或子功能表。)';
sTemp=L_ofdefCommandBarControl_TEXT;
break;
			case 'ofdefInputMethodEditor':
			L_ofdefInputMethodEditor_TEXT='(IME：將按鍵轉換成複雜的東亞字元，以在程式中輸入東亞文字 (繁體中文、簡體中文、日文或韓文) 的程式。IME 被視為鍵盤配置的替代類型。)';
sTemp=L_ofdefInputMethodEditor_TEXT;
break;
			case 'ofdefListBox':
			L_ofdefListBox_TEXT='(清單方塊：提供選項清單的控制項。清單方塊由清單及選擇性標籤組成。)';
sTemp=L_ofdefListBox_TEXT;
break;
			case 'ofdefLiteral':
			L_ofdefLiteral_TEXT='(文字：一種所用即所見的值。例如，數字 25 及字串「Hello」均為文字。在運算式中可以使用文字，也可以在 Visual Basic 中將文字指定給常數或變數。)';
sTemp=L_ofdefLiteral_TEXT;
break;
			case 'ofdefLocalizedVersion':
			L_ofdefLocalizedVersion_TEXT='(當地語系化版本：已翻譯成另一種語言的程式版本，亦稱作國際版本。例如，法國、匈牙利及美國均使用不同的 Microsoft Word 當地語系化版本。)';
sTemp=L_ofdefLocalizedVersion_TEXT;
break;
			case 'ofdefLocalsWindow':
			L_ofdefLocalsWindow_TEXT='([區域] 視窗：「Visual Basic 編輯器」中的視窗，可自動在目前程序中顯示所有宣告的變數及其值。)';
sTemp=L_ofdefLocalsWindow_TEXT;
break;
			case 'ofdefLogo':
			L_ofdefLogo_TEXT='(商標：可識別您、您的公司或您的組織的特殊符號。它可以合併名稱、座右銘及圖形。)';
sTemp=L_ofdefLogo_TEXT;
break;
			case 'ofdefLongDataType':
			L_ofdefLongDataType_TEXT='(Long 資料類型：包含大型整數的基本資料類型。Long 變數會儲存為 32 位元數字，其值介於 -2,147,483,648 到 2,147,483,647 之間。)';
sTemp=L_ofdefLongDataType_TEXT;
break;
			case 'ofdefMacro':
			L_ofdefMacro_TEXT='(巨集：可用來自動化工作的動作或一組動作。巨集以 Visual Basic for Applications 程式設計語言記錄。)';
sTemp=L_ofdefMacro_TEXT;
break;
			case 'ofdefMailto':
			L_ofdefMailto_TEXT='(mailto：用來傳送電子郵件的網際網路通訊協定。)';
sTemp=L_ofdefMailto_TEXT;
break;
			case 'ofdefMainDocument':
			L_ofdefMainDocument_TEXT='(主文件：在 Word 中操作合併列印時，其中的文字及圖形與每個版本的合併文件相同 (如套印信件中的寄件者地址或問候語) 的文件。)';
sTemp=L_ofdefMainDocument_TEXT;
break;
			case 'ofdefMAPI':
			L_ofdefMAPI_TEXT='(MAPI：Microsoft 介面規格，可讓不同的訊息及工作群組應用程式 (如電子郵件、語音郵件及傳真) 透過單一用戶端來運作。)';
sTemp=L_ofdefMAPI_TEXT;
break;
			case 'ofdefMargin':
			L_ofdefMargin_TEXT='(邊界：頁面上列印範圍以外的空白空間。)';
sTemp=L_ofdefMargin_TEXT;
break;
			case 'ofdefMenu':
			L_ofdefMenu_TEXT='(功能表：在您按一下功能表列或其他工具列上的功能表名稱時會出現的指令清單。)';
sTemp=L_ofdefMenu_TEXT;
break;
			case 'ofdefMenuBar':
			L_ofdefMenuBar_TEXT='(功能表列：標題列下方的水平列，它包含功能表名稱。功能表列可以是內建功能表列或自訂功能表列。)';
sTemp=L_ofdefMenuBar_TEXT;
break;
			case 'ofdefMenuBarMacro':
			L_ofdefMenuBarMacro_TEXT='(功能表列巨集：含 AddMenu 動作的巨集，可用來建立自訂功能表列或快顯功能表。)';
sTemp=L_ofdefMenuBarMacro_TEXT;
break;
			case 'ofdefMergeField':
			L_ofdefMergeField_TEXT='(合併欄位：插入主文件的預留位置。例如，可插入合併欄位 A?CityA?，讓 Word 插入儲存在「城市」資料欄位中的城市名稱 (如「巴黎」)。)';
sTemp=L_ofdefMergeField_TEXT;
break;
			case 'ofdefMetafile':
			L_ofdefMetafile_TEXT='(中繼檔：以向量為基礎的圖形。中繼檔的呈現方式是線條集合而不是像素集合，所以操作時不會發生點陣圖形中常見的失真。)';
sTemp=L_ofdefMetafile_TEXT;
break;
			case 'ofdefMETAtag':
			L_ofdefMETAtag_TEXT='(中繼標記：出現在網頁 HEAD 部份的 HTML 標籤。中繼標記提供網頁相關資訊，但不影響其外觀。標準中繼標記「generator」可用來指示網頁內容。)';
sTemp=L_ofdefMETAtag_TEXT;
break;
			case 'ofdefMethod':
			L_ofdefMethod_TEXT='(方法：在特定物件上操作的類似陳述式或函數的程序。例如，可將 Print 方法套用至 Debug 物件，以轉送列印輸出至 [立即] 視窗。)';
sTemp=L_ofdefMethod_TEXT;
break;
			case 'ofdefMicrosoftVisualBasic':
			L_ofdefMicrosoftVisualBasic_TEXT='(Microsoft Visual Basic：Basic 的高階視覺程式設計版本。Visual Basic 是 Microsoft 為建立 Windows 應用程式而開發的。)';
sTemp=L_ofdefMicrosoftVisualBasic_TEXT;
break;
			case 'ofdefMicrosoftVisualBasicforApplications':
			L_ofdefMicrosoftVisualBasicforApplications_TEXT='(Visual Basic for Applications (VBA)：Microsoft Visual Basic 的巨集語言版本，用來設計 Windows 應用程式，並隨數個 Microsoft 應用程式提供。)';
sTemp=L_ofdefMicrosoftVisualBasicforApplications_TEXT;
break;
			case 'ofdefMicrosoftVisualBasicScriptingEdition':
			L_ofdefMicrosoftVisualBasicScriptingEdition_TEXT='(Visual Basic Scripting Edition (VBScript)：Microsoft Visual Basic 程式設計系統的子集。Microsoft Internet Explorer 版本 3.0 或更新版本及其他網頁瀏覽器可讀取嵌入 HTML 網頁的 VBScript 程式。)';
sTemp=L_ofdefMicrosoftVisualBasicScriptingEdition_TEXT;
break;
			case 'ofdefMicrosoftVisualScriptEditor':
			L_ofdefMicrosoftVisualScriptEditor_TEXT='(Microsoft Script Editor：用來在資料頁中新增文字、編輯 HTML 標籤及編輯任意 Microsoft Visual Basic Scripting Edition (VBScript) 程式碼。您還可以在 Script Editor 中檢視頁面在網頁瀏覽器中顯示的樣式。)';
sTemp=L_ofdefMicrosoftVisualScriptEditor_TEXT;
break;
			case 'ofdefMicrosoftVisualSourceSafe':
			L_ofdefMicrosoftVisualSourceSafe_TEXT='(Microsoft Visual SourceSafe： 由 Microsoft 開發的專業文件原始檔控制系統。FrontPage 可與 Visual SourceSafe 整合 (條件是兩個應用程式都安裝在同一電腦上)。)';
sTemp=L_ofdefMicrosoftVisualSourceSafe_TEXT;
break;
			case 'ofdefModal':
			L_ofdefModal_TEXT='(強制回應：一種視窗或對話方塊，需要使用者採取某種動作，才能將焦點切換到其他表單或對話方塊。對話方塊及信息通常是強制回應的。)';
sTemp=L_ofdefModal_TEXT;
break;
			case 'ofdefModule':
			L_ofdefModule_TEXT='(模組：儲存為一個命名單位的宣告、陳述式及程序集合。模組的類型有兩種：標準模組及類別模組。)';
sTemp=L_ofdefModule_TEXT;
break;
			case 'ofdefMultipleSelection':
			L_ofdefMultipleSelection_TEXT='(多重選取：選取不相鄰及相鄰檔案及物件的程序。)';
sTemp=L_ofdefMultipleSelection_TEXT;
break;
			case 'ofdefNetworklocation':
			L_ofdefNetworklocation_TEXT='(網路位置：在 URL 中可識別網際網路伺服器的唯一名稱。網路位置具有由句點分隔的兩個或多個部份 (例如，microsoft.com)。也稱為主機名稱及網際網路位址。)';
sTemp=L_ofdefNetworklocation_TEXT;
break;
			case 'ofdefNonbreakingspace':
			L_ofdefNonbreakingspace_TEXT='(不分行空格：用來防止多個單字在行尾被分開的空格。例如，您可以防止 "Microsoft Office" 被分開；相反地，整個項目會移至下一行的開頭。)';
sTemp=L_ofdefNonbreakingspace_TEXT;
break;
			case 'ofdefNonprintingregion':
			L_ofdefNonprintingregion_TEXT='(非列印區域：頁面邊界附近的區域，無法在其上進行列印。不同的印表機具有不同的非列印區域。)';
sTemp=L_ofdefNonprintingregion_TEXT;
break;
			case 'ofdefNumericExpression':
			L_ofdefNumericExpression_TEXT='(數值運算式：計算出數字的任意運算式。運算式可以是變數、常數、函數及運算子的任意組合。)';
sTemp=L_ofdefNumericExpression_TEXT;
break;
			case 'ofdefObject':
			L_ofdefObject_TEXT='(物件：表格、圖表、圖形、方程式或其他形式的資訊。在一個應用程式中所建立的物件 (例如試算表) 及連結或內嵌於其他應用程式的物件是 OLE 物件。)';
sTemp=L_ofdefObject_TEXT;
break;
			case 'ofdefObjectBrowser':
			L_ofdefObjectBrowser_TEXT='(物件瀏覽器：一種對話方塊，可顯示目前專案及所參照物件程式庫中物件、屬性、方法及常數的相關資訊，也可以用來搜尋元素、取得元素的相關說明或將元素貼入到模組。)';
sTemp=L_ofdefObjectBrowser_TEXT;
break;
			case 'ofdefODBCDriver':
			L_ofdefODBCDriver_TEXT='(開放式資料庫連結 (ODBC) 驅動程式：用來連接特定資料庫的程式檔案。每個資料庫程式 (如 Access 或 dBASE) 或資料庫管理系統 (如 SQL Server) 都需要不同的驅動程式。)';
sTemp=L_ofdefODBCDriver_TEXT;
break;
			case 'ofdefOpenDatabaseConnectivity':
			L_ofdefOpenDatabaseConnectivity_TEXT='(開放式資料庫連結 (ODBC)：在資料庫與程式之間共用資料的標準方法。ODBC 驅動程式使用標準「結構化查詢語言 (SQL)」來存取外部資料。)';
sTemp=L_ofdefOpenDatabaseConnectivity_TEXT;
break;
			case 'ofdefOperator':
			L_ofdefOperator_TEXT='(運算子：指定運算式中執行之計算類型的符號。有數學、比較、邏輯及參照四種運算子。)';
sTemp=L_ofdefOperator_TEXT;
break;
			case 'ofdefPane':
			L_ofdefPane_TEXT='(窗格：文件視窗的一部份，由垂直軸或水平軸與其他部份分隔及結合。)';
sTemp=L_ofdefPane_TEXT;
break;
			case 'ofdefParagraphStyle':
			L_ofdefParagraphStyle_TEXT='(段落樣式：字元及段落格式設定字元的組合，將會以集合的形式儲存及命名這些字元。您可以選取某一段落，並使用樣式將所有格式設定特性一次套用到該段落中。)';
sTemp=L_ofdefParagraphStyle_TEXT;
break;
			case 'ofdefPassword':
			L_ofdefPassword_TEXT='(密碼：一種安全性方法，用於限制對電腦系統及機密性檔案的存取。在全球資訊網上，密碼是允許訪客存取網際網路服務的字元字串 (如果需要驗證的話)。)';
sTemp=L_ofdefPassword_TEXT;
break;
			case 'ofdefPixel':
			L_ofdefPixel_TEXT='(像素：單一測量單位，電腦的顯示硬體使用它在螢幕上繪製圖像。這些單位 (通常顯示為小點) 構成了螢幕所顯示的圖片。';
sTemp=L_ofdefPixel_TEXT;
break;
			case 'ofdefPoint':
			L_ofdefPoint_TEXT='(點：參照列印字元高度的測量單位。一點等於一英吋的 1/72，或者大約等於一公分的 1/28。)';
sTemp=L_ofdefPoint_TEXT;
break;
			case 'ofdefPopupControl':
			L_ofdefPopupControl_TEXT='(快顯控制項：功能表列或工具列上的內建或自訂控制項，在其上按一下即可顯示功能表；或者功能表、子功能表或捷徑功能表上的內建或自訂功能表項目，將指標置於其上即可顯示子功能表。)';
sTemp=L_ofdefPopupControl_TEXT;
break;
			case 'ofdefpProtocol':
			L_ofdefpProtocol_TEXT='(通訊協定：透過網際網路存取文件或服務的方法，例如「檔案傳輸通訊協定 (FTP)」或「超文字傳輸協定 (HTTP)」。)';
sTemp=L_ofdefpProtocol_TEXT;
break;
			case 'ofdefPrintPreview':
			L_ofdefPrintPreview_TEXT='(預覽列印：文件列印樣式的檢視。)';
sTemp=L_ofdefPrintPreview_TEXT;
break;
			case 'ofdefProgID':
			L_ofdefProgID_TEXT='(程式設計識別元 (ProgID)：形式為 OLEServerName.ObjectName 的識別項 (例如，Excel.Sheet 或 PowerPoint.Slide)，Windows 登錄使用它來唯一地識別物件。)';
sTemp=L_ofdefProgID_TEXT;
break;
			case 'ofdefProperty':
			L_ofdefProperty_TEXT='(屬性：控制項、欄位或物件的具名屬性，設定它可定義物件的某一個特性 (如大小、色彩或螢幕位置)，或定義物件行為的某一方面 (如物件是否為隱藏)。)';
sTemp=L_ofdefProperty_TEXT;
break;
			case 'ofdefQuestionMarkPointer':
			L_ofdefQuestionMarkPointer_TEXT='(問號指標：使用問號指標，可以獲得與工具列按鈕、對話方塊選項、工具箱中的工具及該視窗其他部份的即時線上說明。)';
sTemp=L_ofdefQuestionMarkPointer_TEXT;
break;
			case 'ofdefReadonly':
			L_ofdefReadonly_TEXT='(唯讀：一種設定，允許讀取或複製檔案，但不允許變更或儲存檔案。如果要變更唯讀檔案，則只有給予文件新名稱，才能儲存變更。)';
sTemp=L_ofdefReadonly_TEXT;
break;
			case 'ofdefRecord':
			L_ofdefRecord_TEXT='(記錄：人員、地點、事件或其他某項目的相關資料集合。記錄在邏輯上相當於資料表中的列。)';
sTemp=L_ofdefRecord_TEXT;
break;
			case 'ofdefTWAIN':
			L_ofdefTWAIN_TEXT='(TWAIN：一種跨平台介面，用於取得掃描器、數位相機以及靜態畫面視訊擷取卡所捕捉的電子影像。)';
sTemp=L_ofdefTWAIN_TEXT;
break;
			case 'ofdefVisualBasicEditor':
			L_ofdefVisualBasicEditor_TEXT='(Microsoft Visual Basic 編輯器：一種環境，您可以在其中編輯已錄製的巨集，以及撰寫新的巨集及 Visual Basic for Applications 程式。)';
sTemp=L_ofdefVisualBasicEditor_TEXT;
break;
			case 'ofdefWebComponent':
			L_ofdefWebComponent_TEXT='(Microsoft Office Web 元件：有助於資料分析的互動式元件 (如網頁上的工作表、圖表及樞紐分析表清單)。若要使用這些元件，您必須具有 Microsoft Office 授權。)';
sTemp=L_ofdefWebComponent_TEXT;
break;
			case 'ofDelimitedText':
			L_ofDelimitedText_TEXT='(分隔文字檔案：包含資料的檔案，其中的個別欄位值由字元 (如逗號或定位點) 分隔。)';
sTemp=L_ofDelimitedText_TEXT;
break;
			case 'ofDesignTime':
			L_ofDesignTime_TEXT='(設計階段：建立及修改應用程式中物件及程式碼設計的時間。例如，設計自訂對話方塊及控制項。相反地，在執行階段，您將像使用者那樣與程式互動。)';
sTemp=L_ofDesignTime_TEXT;
break;
			case 'ofDestination':
			L_ofDestination_TEXT='(目的：您從超連結所跳至之元素名稱的一般術語。)';
sTemp=L_ofDestination_TEXT;
break;
			case 'ofDestinationFile':
			L_ofDestinationFile_TEXT='(目的檔案：在其中插入連結或內嵌物件的檔案。來源檔案包含用於建立物件的資訊。變更目的檔案中的資訊，不會更新來源檔案中的資訊。)';
sTemp=L_ofDestinationFile_TEXT;
break;
			case 'OfDigitalDashboard':
			L_OfDigitalDashboard_TEXT='(數位儀表板：可由使用者設定的網頁，充當資訊入口。數位儀表板合併彙算個人、小組、公司及外部資訊，並允許按一下即可存取資料庫、分析及工作群組工具。)';
sTemp=L_OfDigitalDashboard_TEXT;
break;
			case 'ofdimension':
			L_ofdimension_TEXT='(維度：將資料按照層次進行組織的 OLAP 結構，如「國家/地區/城市」是「地理」維度。在樞紐分析表或樞紐分析圖報告中，每個維度都是可以展開及折疊詳細資料的欄位集。)';
sTemp=L_ofdimension_TEXT;
break;
			case 'ofdiscussion':
			L_ofdiscussion_TEXT='(討論區：網站所提供的一種功能，可讓網站訪客貼上內容及回覆會話主題。訪客可以張貼獨立討論，或會話主題可與文件內容相關。)';
sTemp=L_ofdiscussion_TEXT;
break;
			case 'OfDiscussionBoard':
			L_OfDiscussionBoard_TEXT='(討論區：網站元件，可讓使用者藉由張貼及回覆註解，來加入討論主題。它需要網頁伺服器執行 Microsoft 的 SharePoint Team Services。)';
sTemp=L_OfDiscussionBoard_TEXT;
break;
			case 'OfDiscussionComment':
			L_OfDiscussionComment_TEXT='(討論意見：討論的評語或主題，與網頁或 Microsoft Office 檔案相關，儲存在討論區伺服器上。)';
sTemp=L_OfDiscussionComment_TEXT;
break;
			case 'ofdiscussiongroup':
			L_ofdiscussiongroup_TEXT='(討論區群組：在網際網路上的位置，在這裡，人們可以張貼和閱讀他們和社群中的其他人感到興趣的主題之訊息。)';
sTemp=L_ofdiscussiongroup_TEXT;
break;
			case 'OfDiscussionRights':
			L_OfDiscussionRights_TEXT='(討論區權限：允許使用者檢視、新增、修改及關閉附加至網頁或文件之討論註解的權限。)';
sTemp=L_OfDiscussionRights_TEXT;
break;
			case 'OfDiscussionServer':
			L_OfDiscussionServer_TEXT='(討論區伺服器：一台電腦，用來儲存討論文字及所討論檔案位置的相關資訊。)';
sTemp=L_OfDiscussionServer_TEXT;
break;
			case 'ofdistributedannotationsystemdas':
			L_ofdistributedannotationsystemdas_TEXT='(分散式註釋系統 (DAS)：授權伺服器，單一用戶端從多台 DAS 伺服器整合/收集資訊)';
sTemp=L_ofdistributedannotationsystemdas_TEXT;
break;
			case 'ofdistributedauthoringandversioningdav':
			L_ofdistributedauthoringandversioningdav_TEXT='(Distributed Authoring and Versioning (DAV)：允許協同編輯及管理檔案的伺服器。)';
sTemp=L_ofdistributedauthoringandversioningdav_TEXT;
break;
			case 'ofdocked':
			L_ofdocked_TEXT='(固定：固定至視窗旁邊、頂端或底端。您可以固定工作窗格、工具箱、功能表列及所有工具列。)';
sTemp=L_ofdocked_TEXT;
break;
			case 'OfDocumentLibrary':
			L_OfDocumentLibrary_TEXT='(文件庫：在其中共用檔案集合 (這些檔案通常使用同一範本) 的資料夾。文件庫中的每個檔案都與使用者定義的資訊 (這些資訊顯示在該文件庫的內容清單中) 相關。)';
sTemp=L_OfDocumentLibrary_TEXT;
break;
			case 'ofdocumentobjectmodeldom':
			L_ofdocumentobjectmodeldom_TEXT='(文件物件模型 (DOM)：「全球資訊網協會」規格，描述動態 HTML 及 XML 文件的結構，描述時允許透過網頁瀏覽器來對這些文件進行操作。)';
sTemp=L_ofdocumentobjectmodeldom_TEXT;
break;
			case 'ofdocumentworkspace':
			L_ofdocumentworkspace_TEXT='(文件工作區：Microsoft Windows SharePoint Services 網站，建立用來在一或多個文件上共同作業。)';
sTemp=L_ofdocumentworkspace_TEXT;
break;
			case 'ofDoubleDataType':
			L_ofDoubleDataType_TEXT='(Double 資料類型：具有雙精度浮點數值的基本資料類型。儲存為 64 位元數值，值的範圍大約是從 -1.797E308 到 -4.940E-324 (負數)，從 4.94E-324 到 1.797E308 (正數)，以及零。)';
sTemp=L_ofDoubleDataType_TEXT;
break;
			case 'ofdrawing':
			L_ofdrawing_TEXT='(繪圖：新增到檔案而非手寫的任意筆跡。)';
sTemp=L_ofdrawing_TEXT;
break;
			case 'OfDrawingCanvas':
			L_OfDrawingCanvas_TEXT='(繪圖畫布：可在其上繪製多個圖案的區域。因為所有圖案都包含在繪圖畫布內，所以可以將這些圖案作為一個單元進行移動及調整大小。)';
sTemp=L_OfDrawingCanvas_TEXT;
break;
			case 'ofdrawingobject':
			L_ofdrawingobject_TEXT='(繪圖物件：您所繪製或插入的任意圖形，可對其進行變更及增強。繪圖物件包括快取圖案、曲線、直線及文字藝術師。)';
sTemp=L_ofdrawingobject_TEXT;
break;
			case 'ofDynamicDataExchangedde':
			L_ofDynamicDataExchangedde_TEXT='(動態資料交換 (DDE)：已建立的通訊協定，用來在 Microsoft Windows 程式之間交換資料。)';
sTemp=L_ofDynamicDataExchangedde_TEXT;
break;
			case 'ofembeddedobject':
			L_ofembeddedobject_TEXT='(內嵌物件：包含在來源檔案中並插入到目的檔案的資訊 (物件)。一旦內嵌，物件即成為目的檔案的一部份。您對內嵌物件所作的變更會反映在目的檔案中。)';
sTemp=L_ofembeddedobject_TEXT;
break;
			case 'ofEmbeddedstylesheet':
			L_ofEmbeddedstylesheet_TEXT='(內嵌樣式表：內嵌於網頁上的階層式樣式表。內嵌樣式表中的樣式僅能套用到包含樣式表的網頁，並會延伸或覆寫連結到該頁之所有外部樣式表中的樣式。)';
sTemp=L_ofEmbeddedstylesheet_TEXT;
break;
			case 'ofempty':
			L_ofempty_TEXT='(空：未起始的 Variant 變數 (傳回 VarType 為 0) 狀態。請不要與 Null (指示無效資料的變數狀態)、具有零長度字串的變數 (" ") 或等於零的數值變數相混淆。)';
sTemp=L_ofempty_TEXT;
break;
			case 'ofenumerateddatatype':
			L_ofenumerateddatatype_TEXT='(列舉資料類型：一種資料類型，包含以特定順序指定的連續名稱值。)';
sTemp=L_ofenumerateddatatype_TEXT;
break;
			case 'OfErrorBars':
			L_OfErrorBars_TEXT='(誤差線：通常用在統計或科學資料中，誤差線會顯示相對於系列中每個資料標記的潛在錯誤或不確定程度。)';
sTemp=L_OfErrorBars_TEXT;
break;
			case 'ofEvent':
			L_ofEvent_TEXT='(事件：由物件 (如按一下滑鼠或按鍵) 所識別的動作，您可以為該動作定義回應。事件可以是由使用者動作或 Visual Basic 陳述式引起的，也可以是由系統觸發的。)';
sTemp=L_ofEvent_TEXT;
break;
			case 'ofEventProcedure':
			L_ofEventProcedure_TEXT='(事件程序：自動執行的程序，是對由使用者或程式碼所起始 (或者由系統所觸發) 之事件的回應。)';
sTemp=L_ofEventProcedure_TEXT;
break;
			case 'ofEventProperty':
			L_ofEventProperty_TEXT='(事件內容：用來回應相關事件之控制項、表單、報告、資料頁或區段的具名屬性。您可藉由設定相關的事件內容，在事件發生時執行程序或巨集。)';
sTemp=L_ofEventProperty_TEXT;
break;
			case 'ofexefile':
			L_ofexefile_TEXT='(.exe 檔案：其中包含可執行程式的檔案，該程式在檔名被連按兩下時會在電腦上執行。)';
sTemp=L_ofexefile_TEXT;
break;
			case 'OfExtensibleMarkupLanguage':
			L_OfExtensibleMarkupLanguage_TEXT='(可延伸標記語言 (XML)：「標準通用標記語言 (SGML)」的緊縮形式，可讓開發者建立用於在組織及呈現資訊時提供彈性的自訂標籤。)';
sTemp=L_OfExtensibleMarkupLanguage_TEXT;
break;
			case 'OfExtensibleStyleLanguage':
			L_OfExtensibleStyleLanguage_TEXT='(可延伸樣式表語言 (XSL)：一種 XML 詞彙，用於透過定義版面規則的樣式表來將 XML 資料轉換為其他格式 (如 HTML)。)';
sTemp=L_OfExtensibleStyleLanguage_TEXT;
break;
			case 'ofextensiblestylesheetlanguagexsl':
			L_ofextensiblestylesheetlanguagexsl_TEXT='(可延伸樣式表語言 (XSL)：一種 XML 詞彙，用於透過定義版面規則的樣式表來將 XML 資料轉換為其他格式 (如 HTML)。)';
sTemp=L_ofextensiblestylesheetlanguagexsl_TEXT;
break;
			case 'ofextensivestylesheetlanguagetransformation':
			L_ofextensivestylesheetlanguagetransformation_TEXT='(XSL 轉換 (XSLT)：用於將 XML 文件轉換成其他類型文件 (如 HTML 或 XML) 的檔案。其設計目的是為了作為 XSL 的一部份來使用。)';
sTemp=L_ofextensivestylesheetlanguagetransformation_TEXT;
break;
			case 'offield':
			L_offield_TEXT='(欄位：資料表的元素，包含特定的資訊項目 (如姓氏)。「職稱」欄位可能會包含「先生」或「小姐」。資料庫 (如 Microsoft SQL Server) 將欄位稱為欄。)';
sTemp=L_offield_TEXT;
break;
			case 'offieldcode':
			L_offieldcode_TEXT='(功能變數代碼：預留位置文字，顯示來自您資料來源的指定資訊將顯示在何處；產生功能變數結果之功能變數中的元素。功能變數代碼包括功能變數字元、功能變數類型及指示。)';
sTemp=L_offieldcode_TEXT;
break;
			case 'offileformat':
			L_offileformat_TEXT='(檔案格式：資訊儲存在檔案中的方式，以便程式能夠開啟及儲存該檔案。檔案的結構會定義檔案的儲存及顯示方式。檔案格式由檔名之後的副檔名 (三個字母，如 .doc) 指明。)';
sTemp=L_offileformat_TEXT;
break;
			case 'offloatingtoolbar':
			L_offloatingtoolbar_TEXT='(浮動工具列：未附加到程式視窗邊緣的工具列。您可以變更部份浮動工具列的形狀。)';
sTemp=L_offloatingtoolbar_TEXT;
break;
			case 'offocus':
			L_offocus_TEXT='(焦點：透過滑鼠或鍵盤動作或 SetFocus 方法接收使用者輸入的能力。焦點可以由使用者或由應用程式設定。具有焦點的物件通常由反白提示的標號或標題列指示。)';
sTemp=L_offocus_TEXT;
break;
			case 'offollowedhyperlink':
			L_offollowedhyperlink_TEXT='(已瀏覽過的超連結：您已造訪過的目的地超連結。您瀏覽超連結至其目的地後，該超連結色彩即會改變。)';
sTemp=L_offollowedhyperlink_TEXT;
break;
			case 'offont':
			L_offont_TEXT='(字型：套用到所有數字、符號及字母字元的圖形設計。也稱為「類型」或「字體」。例如，Arial 及 Courier New 字型。字型的區別通常在於不同大小 (如 10 點) 及各種樣式 (如粗體)。)';
sTemp=L_offont_TEXT;
break;
			case 'offormattingtoolbar':
			L_offormattingtoolbar_TEXT='(格式設定工具列：含有用來套用文字格式設定組之按鈕及選項的工具列。若要顯示工具列，請指向 [檢視] 功能表上 [工具列] 後，再按一下 [格式設定]。)';
sTemp=L_offormattingtoolbar_TEXT;
break;
			case 'offramespage':
			L_offramespage_TEXT='(框架頁：一種網頁，其網頁瀏覽器視窗被分成不同的可捲動區域，其中可獨立顯示數個網頁。一個視窗可以保持不變，而其他視窗則依據使用者所選取的超連結進行變更。)';
sTemp=L_offramespage_TEXT;
break;
			case 'OfFreeform':
			L_OfFreeform_TEXT='(手繪多邊形：使用「曲線」、「手繪多邊形」及「徒手畫」工具所繪製的任意圖案。手繪多邊形圖案可能包括直線及手繪曲線。可以將它們繪製成開放式或關閉式，也可進行編輯。)';
sTemp=L_OfFreeform_TEXT;
break;
			case 'offtp':
			L_offtp_TEXT='(FTP：一種通訊協定，讓使用者可在網路上的遠端位置之間傳輸檔案。此通訊協定也允許使用者使用 FTP 指令 (如列出檔案及資料夾)，以使用遠端位置上的檔案。)';
sTemp=L_offtp_TEXT;
break;
			case 'ofFunctionProcedure':
			L_ofFunctionProcedure_TEXT='(Function 程序：傳回值且能夠用於運算式的程序。使用 Function 陳述式可以宣告函數，使用 End Function 陳述式可以結束函數。)';
sTemp=L_ofFunctionProcedure_TEXT;
break;
			case 'OfGainAdjustment':
			L_OfGainAdjustment_TEXT='(增益調整：麥克風功能，允許放大您的輸入，讓聲音更大，從而便於系統使用。)';
sTemp=L_OfGainAdjustment_TEXT;
break;
			case 'OfGeneralDiscussion':
			L_OfGeneralDiscussion_TEXT='(一般討論區：與整個文件 (而不是文件的特定部份) 相關的討論註解。一般討論區顯示在討論區窗格中。)';
sTemp=L_OfGeneralDiscussion_TEXT;
break;
			case 'ofglobal':
			L_ofglobal_TEXT='(通用：關於整個文件、檔案或程式，而不是僅關於其有限的片段。)';
sTemp=L_ofglobal_TEXT;
break;
			case 'ofgopher':
			L_ofgopher_TEXT='(Gopher：一種介面，您可以透過該介面來存取網際網路上的資源。Gopher 伺服器包含具有資訊類別的功能表；功能表的作用與全球資訊網文件中的超連結相同。Gopher 伺服器 URL 開始於 gopher:/。)';
sTemp=L_ofgopher_TEXT;
break;
			case 'ofgradient':
			L_ofgradient_TEXT='(漸層：色彩及網底的逐漸過渡，通常從一種色彩過渡到另一種色彩，或從同一色彩的一個網底過渡到另一個網底。)';
sTemp=L_ofgradient_TEXT;
break;
			case 'ofgrid':
			L_ofgrid_TEXT='(格線：用於對齊物件的一組交叉線。)';
sTemp=L_ofgrid_TEXT;
break;
			case 'OfGridlines':
			L_OfGridlines_TEXT='(格線：您新增到圖表的線條，使用它更加易於檢視及評估資料。格線延伸自貫穿繪圖區之座標軸上的刻度標記。)';
sTemp=L_OfGridlines_TEXT;
break;
			case 'ofgroup':
			L_ofgroup_TEXT='(群組：物件集合但以一個整體方式運作，以進行移動、調整大小或旋轉。一個群組可由多個群組集組成。)';
sTemp=L_ofgroup_TEXT;
break;
			case 'ofhandwriting':
			L_ofhandwriting_TEXT='(手寫：您以筆跡書寫的文字。這些文字不會轉換為鍵入的文字。)';
sTemp=L_ofhandwriting_TEXT;
break;
			case 'ofhangingindent':
			L_ofhangingindent_TEXT='(首行凸排：一種段落格式設定，在以此格式設定的段落中，第二行及隨後各行較第一行內縮。首行凸排一般使用在項目符號清單及編號清單。)';
sTemp=L_ofhangingindent_TEXT;
break;
			case 'ofheaderandfooter':
			L_ofheaderandfooter_TEXT='(頁首和頁尾：頁首 (可包含文字或圖形) 顯示在區段各頁的頂端。頁尾顯示在各頁的底端。頁首和頁尾通常包含頁碼、章節標題、日期及作者姓名。)';
sTemp=L_ofheaderandfooter_TEXT;
break;
			case 'ofhomepage':
			L_ofhomepage_TEXT='(首頁：網站的主要網頁。通常包含跳到其他網頁 (既包括該網站之內的網頁，亦包括該網站之外的網頁) 的超連結。一個網站可以包含許多首頁。例如，Microsoft 首頁包含「產品」首頁，也包含其他首頁。)';
sTemp=L_ofhomepage_TEXT;
break;
			case 'ofhotspot':
			L_ofhotspot_TEXT='(作用點：物件上的區域，其中包含超連結。整個物件可以是單一作用點，也可以在一個物件中包含多個作用點。帶有作用點的圖片稱為影像對應。)';
sTemp=L_ofhotspot_TEXT;
break;
			case 'ofhowFileTransferProtocolFTP':
			L_ofhowFileTransferProtocolFTP_TEXT='(FTP：一種通訊協定，讓使用者有可能在網路上的遠端位置之間傳輸檔案。此通訊協定也允許使用者使用 FTP 命令 (如列出檔案及資料夾)，以使用遠端位置上的檔案。)';
sTemp=L_ofhowFileTransferProtocolFTP_TEXT;
break;
			case 'ofhowRootDirectory':
			L_ofhowRootDirectory_TEXT='(根資料夾：磁碟機上的資料夾，其下伸展所有其他資料夾。根資料夾的名稱包含單一反斜線字元 (\)。例如，在磁碟機 C 上，此資料夾將在檔案系統中顯示為 C:\。)';
sTemp=L_ofhowRootDirectory_TEXT;
break;
			case 'ofhtml':
			L_ofhtml_TEXT='(HTML：用於全球資訊網上文件的標準標記語言。HTML 使用標籤來指示網頁瀏覽器應如何顯示網頁元素 (如文字及圖形)，以及如何回應使用者動作。)';
sTemp=L_ofhtml_TEXT;
break;
			case 'ofhtmltag':
			L_ofhtmltag_TEXT='(HTML 標籤：HTML 中使用的文字字串，用來識別網頁元素的類型、格式及外觀。FrontPage 會自動建立 HTML 標籤，以在網頁上顯示每個元素。)';
sTemp=L_ofhtmltag_TEXT;
break;
			case 'ofHTTP':
			L_ofHTTP_TEXT='(HTTP：在全球資訊網上傳遞資訊的網際網路通訊協定。讓具有用戶端程式的使用者可以輸入 URL (或者按一下超連結)，並從網頁伺服器擷取文字、圖形、聲音及其他數位資訊。)';
sTemp=L_ofHTTP_TEXT;
break;
			case 'ofHyperlink':
			L_ofHyperlink_TEXT='(超連結：帶有底線的有色文字或圖形，按一下即可跳至檔案、檔案中的位置、全球資訊網上的網頁，或者內部網路上的網頁。超連結也可以跳至新聞群組、Gopher、Telnet 及 FTP 網站。)';
sTemp=L_ofHyperlink_TEXT;
break;
			case 'ofHyperlinkAddress':
			L_ofHyperlinkAddress_TEXT='(地址：到物件、文件、檔案、頁面或其他目的地的路徑。地址可以是 URL (網址) 或 UNC 路徑 (網路位址)，且可以包含檔案中的特定位置，如 Word 書籤或 Excel 儲存格範圍。)';
sTemp=L_ofHyperlinkAddress_TEXT;
break;
			case 'ofHyperlinkBase':
			L_ofHyperlinkBase_TEXT='(超連結基底：如果相對連結基於您所指定的路徑 (包含超連結的檔案與目的檔案所共用之路徑的第一部份)，則該路徑是超連結基底。)';
sTemp=L_ofHyperlinkBase_TEXT;
break;
			case 'ofhypertextreferencehref':
			L_ofhypertextreferencehref_TEXT='(超文字參考 (HREF)：HTML 文件中的屬性，用來定義跳到文件內其他位置、網頁上文件或電子郵件地址的連結。)';
sTemp=L_ofhypertextreferencehref_TEXT;
break;
			case 'ofImagemap':
			L_ofImagemap_TEXT='(影像對應：包含一或多個不顯示區域 (稱為作用點，與超連結相關) 的圖形。例如，可以將地理地圖做成影像對應，方法是將作用點指定給地圖上每個出現的地區。)';
sTemp=L_ofImagemap_TEXT;
break;
			case 'ofImmediateWindow':
			L_ofImmediateWindow_TEXT='([立即] 視窗：「Visual Basic 編輯器」中的視窗，您可以在其中執行 Visual Basic 程式碼的個別行，通常用於除錯。在 [立即] 視窗中，會立即計算運算式。)';
sTemp=L_ofImmediateWindow_TEXT;
break;
			case 'OfInk':
			L_OfInk_TEXT='(筆跡：使用 Tablet 畫筆或滑鼠繪製出的手寫文字或繪圖。)';
sTemp=L_OfInk_TEXT;
break;
			case 'OfInlineDiscussion':
			L_OfInlineDiscussion_TEXT='(內置討論區：與特定段落、圖像或表格相關的討論註解。在網頁瀏覽器中，內置討論區顯示在文件的本文中；在 Microsoft Word 文件中，則顯示在討論區中。)';
sTemp=L_OfInlineDiscussion_TEXT;
break;
			case 'ofInnerJoin':
			L_ofInnerJoin_TEXT='(內部連結：一種連結，查詢結果將兩個資料表中的記錄進行組合 (僅當所連結欄位中的值符合指定的條件時)。在查詢中，預設連結是內部連結，僅當所連結欄位中的值符合時才選取記錄。)';
sTemp=L_ofInnerJoin_TEXT;
break;
			case 'ofintegrateddevelopmentenvironmentide':
			L_ofintegrateddevelopmentenvironmentide_TEXT='(整合式開發環境 (IDE)：用於開發軟體的整合工具集。通常可從一個使用者介面執行這些工具，其包含編譯器、編輯器及除錯器等等。)';
sTemp=L_ofintegrateddevelopmentenvironmentide_TEXT;
break;
			case 'ofInternet':
			L_ofInternet_TEXT='(網際網路：成千上萬個小型電腦網路及數以百萬計的商業、教育、政府及個人電腦的全球網路。網際網路好比是具有虛擬圖書館、商店、藝廊等的電子城市。)';
sTemp=L_ofInternet_TEXT;
break;
			case 'ofInternetServiceProvider':
			L_ofInternetServiceProvider_TEXT='(ISP：一種商務行為，提供對網際網路的存取，以使用諸如電子郵件、聊天室或全球資訊網等服務。部份 ISP 是跨國性的，提供在許多位置的存取：而其他 ISP 僅限指定地區使用。)';
sTemp=L_ofInternetServiceProvider_TEXT;
break;
			case 'ofIntranet':
			L_ofIntranet_TEXT='(內部網路：使用網際網路技術 (如 HTTP 或 FTP 通訊協定) 之組織內的網路。藉由使用超連結，您可以瀏覽物件、文件、網頁及內部網路上的其他目的地。)';
sTemp=L_ofIntranet_TEXT;
break;
			case 'ofjoin':
			L_ofjoin_TEXT='(連結：資料表或查詢中的欄位與另一個資料表或查詢中欄位間的關聯 (資料類型相同)。連結會告訴程式資料的關聯性。根據連結的類型，可能會併入或排除不符的記錄。)';
sTemp=L_ofjoin_TEXT;
break;
			case 'ofjscript':
			L_ofjscript_TEXT='(JScript：解譯的物件型 Script 語言，源自 C、C++ 及 Java。它是 Microsoft 的 ECMA 262 語言規格的實作。)';
sTemp=L_ofjscript_TEXT;
break;
			case 'ofkerning':
			L_ofkerning_TEXT='(字距壓縮微調：兩個字元間距的調整，用來建立等距外觀、調整文字以適合指定空間，以及調整分行符號。)';
sTemp=L_ofkerning_TEXT;
break;
			case 'ofKnowledgeBase':
			L_ofKnowledgeBase_TEXT='(KB：Microsoft 支援工程師及客戶的主要產品資訊來源。文章的範圍廣泛且每日都會進行更新，包含詳細的使用說明資訊、對技術支援問題的回答，以及已知問題。)';
sTemp=L_ofKnowledgeBase_TEXT;
break;
			case 'OfLan':
			L_OfLan_TEXT='(LAN：電腦網路技術，設計用來連接分隔距離較短的電腦。區域網路 (LAN) 可連接到網際網路，也可設定成內部網路。)';
sTemp=L_OfLan_TEXT;
break;
			case 'oflevel':
			L_oflevel_TEXT='層級：OLAP 維度的一部份。在維度內，資料的組織形式是高低不同的詳細層級 (如「時間」維度中包含「年」、「季度」、「月」及「天」層級)。';
sTemp=L_oflevel_TEXT;
break;
			case 'OfLinkBar':
			L_OfLinkBar_TEXT='(連結列：圖形或文字按鈕的集合，其所代表的超連結會跳至您網站內及外部網站的網頁。)';
sTemp=L_OfLinkBar_TEXT;
break;
			case 'oflinkedobject':
			L_oflinkedobject_TEXT='(連結物件：在來源檔案中建立並插入到目的檔案中的物件，其可保持兩個檔案之間的連結。在更新來源檔案時也會更新目的檔案中的連結物件。)';
sTemp=L_oflinkedobject_TEXT;
break;
			case 'OfListInteractiveList':
			L_OfListInteractiveList_TEXT='(清單，互動式清單：網站元件，用來儲存及顯示使用者可藉由其瀏覽器新增的資訊。網頁伺服器必須要執行 Microsoft Windows SharePoint Services。)';
sTemp=L_OfListInteractiveList_TEXT;
break;
			case 'OfMappedDataField':
			L_OfMappedDataField_TEXT='(對應資料欄位：代表常用資訊的欄位，如「名字」。如果資料來源包含「名字」(First Name) 欄位或變化形式 (如「FName」)，則資料來源欄位會自動對應到相應的對應資料欄位。)';
sTemp=L_OfMappedDataField_TEXT;
break;
			case 'ofmetadata':
			L_ofmetadata_TEXT='(中繼資料：描述其他資料的資料。例如，文件中的文字是資料；而字數統計則是中繼資料。)';
sTemp=L_ofmetadata_TEXT;
break;
			case 'ofmicrosoftdevelopernetworkmsdn':
			L_ofmicrosoftdevelopernetworkmsdn_TEXT='(MSDN：Microsoft 網站 (及訂閱程式)，它為開發者提供最新的工具，以及 Microsoft 開發工具的資訊、程式碼範例及訓練資料 (http://msdn.microsoft.com)。)';
sTemp=L_ofmicrosoftdevelopernetworkmsdn_TEXT;
break;
			case 'ofmicrosoftofficedocumentimagingformatmdi':
			L_ofmicrosoftofficedocumentimagingformatmdi_TEXT='(Microsoft Office Document Imaging 格式 (MDI)：使用標籤格式的高解析度圖形，主要為用於數位圖形「Tagged Image 檔案格式 (TIFF)」。)';
sTemp=L_ofmicrosoftofficedocumentimagingformatmdi_TEXT;
break;
			case 'OfMicrosoftSqlServerDatabase':
			L_OfMicrosoftSqlServerDatabase_TEXT='(Microsoft SQL Server 資料庫：Microsoft SQL Server 的資料庫，由資料表、檢視表、索引、預存程序、函數及引動程序組成。)';
sTemp=L_OfMicrosoftSqlServerDatabase_TEXT;
break;
			case 'OfMIDI':
			L_OfMIDI_TEXT='(樂器數位介面 (MIDI)：一種通訊協定，允許電子樂器使用數位符號進行互動。)';
sTemp=L_OfMIDI_TEXT;
break;
			case 'OfMPEG':
			L_OfMPEG_TEXT='(動畫專家小組 (MPEG)：具有兩種壓縮格式的失真壓縮系統。MPEG 1 有 240 行水平解析度的限制；MPEG 2 可以提供足夠寬的頻寬供「高解析度電視 (HDTV)」使用。)';
sTemp=L_OfMPEG_TEXT;
break;
			case 'OfMultipurposeInternetMailExtensionsHtml':
			L_OfMultipurposeInternetMailExtensionsHtml_TEXT='(單一檔案網頁 (MHTML)：以 MHTML 格式儲存的 HTML 文件，其整合了內置圖形、Applet、連結文件及文件中參照的其他支援項目。)';
sTemp=L_OfMultipurposeInternetMailExtensionsHtml_TEXT;
break;
			case 'OfNaturalLanguageSearching':
			L_OfNaturalLanguageSearching_TEXT='(自然語言搜尋：一種搜尋方法，讓您能夠使用會話語言進行搜尋。這可讓你提供像「尋找今天所有的約會」等搜尋指示。)';
sTemp=L_OfNaturalLanguageSearching_TEXT;
break;
			case 'OfNetworkPlaces':
			L_OfNetworkPlaces_TEXT='(網路上的芳鄰：網路檔案伺服器、網頁伺服器或 Exchange 2000 伺服器上的資料夾。您可以建立到「網路上的芳鄰」的捷徑，以便在那裡使用檔案。部份「網路上的芳鄰」(如文件庫) 具有不適用於本機資料夾的功能。)';
sTemp=L_OfNetworkPlaces_TEXT;
break;
			case 'OfNewFileTaskPane':
			L_OfNewFileTaskPane_TEXT='(檔案開新檔案工作窗格：Office 應用程式中的窗格，用來提供開啟及建立檔案常用的命令。工作窗格標題在每個 Office 應用程式中都不相同。例如，您在 Word 中看到的是「新文件」。)';
sTemp=L_OfNewFileTaskPane_TEXT;
break;
			case 'ofobjectmodel':
			L_ofobjectmodel_TEXT='(物件模型：物件及集合的階層式程式庫，代表應用程式的內容及功能。物件及集合具有屬性、方法及事件，可用來操作應用程式及與應用程式互動。)';
sTemp=L_ofobjectmodel_TEXT;
break;
			case 'ofobjectmodeldiagram':
			L_ofobjectmodeldiagram_TEXT='(物件模型圖表：包含在指定物件模型內之物件及集合的圖形呈現方式。)';
sTemp=L_ofobjectmodeldiagram_TEXT;
break;
			case 'ofocr':
			L_ofocr_TEXT='(OCR：將文字圖像 (如掃描的文件) 轉換成實際的文字字元。亦稱為文字辨識。)';
sTemp=L_ofocr_TEXT;
break;
			case 'OfOfficeDataConnectionFile':
			L_OfOfficeDataConnectionFile_TEXT='(Office 資料連結 (ODC) 檔案：一種檔案，用於儲存到資料來源 (如 OLE DB 資料來源) 連線的相關資訊，以及與該連線相關的資料。)';
sTemp=L_OfOfficeDataConnectionFile_TEXT;
break;
			case 'OfOfficeDesigner':
			L_OfOfficeDesigner_TEXT='(Microsoft Solution Designer：一種開發環境，用於建立及自訂小組網站及其他 Web 型工作群組程式 (執行於 Microsoft Exchange 2000 及 Microsoft 的 SharePoint Portal Server)。)';
sTemp=L_OfOfficeDesigner_TEXT;
break;
			case 'OfOleDb':
			L_OfOleDb_TEXT='(OLE DB：一種元件資料庫架構，可以實現對多種資料來源 (包括相關的資料、郵件檔、一般檔案及試算表) 的有效網路及網際網路存取。)';
sTemp=L_OfOleDb_TEXT;
break;
			case 'OfOrganizationChart':
			L_OfOrganizationChart_TEXT='(組織圖：用來顯示階層關係的圖表；例如，公司管理及員工結構。)';
sTemp=L_OfOrganizationChart_TEXT;
break;
			case 'ofparameter':
			L_ofparameter_TEXT='(參數：在運算開始時或在程式計算運算式之前指定給變數的值。參數可以是文字、數字或指定給其他值的引數名稱。)';
sTemp=L_ofparameter_TEXT;
break;
			case 'ofpermissionpolicy':
			L_ofpermissionpolicy_TEXT='(權限原則：一種限制對於指定文件、活頁簿、簡報或訊息之權限的方式。該原則定義可使用哪些 Office 功能、可以存取哪些資訊，以及所允許的編輯層級。)';
sTemp=L_ofpermissionpolicy_TEXT;
break;
			case 'OfPicture':
			L_OfPicture_TEXT='(圖片：一種檔案 (如中繼檔)，取消群組後可作為兩個或多個物件來進行操作；或者是保持為單一物件的檔案 (如點陣圖)。)';
sTemp=L_OfPicture_TEXT;
break;
			case 'OfPivottableList':
			L_OfPivottableList_TEXT='(樞紐分析表清單：Microsoft Office Web 元件，用於建立從各種來源摘要及分析資料 (如資料庫記錄) 的互動清單。使用者可以在網頁瀏覽器中檢視清單及變更清單配置。)';
sTemp=L_OfPivottableList_TEXT;
break;
			case 'OfPlaceholders':
			L_OfPlaceholders_TEXT='(預留位置：大部份投影片版面配置所包含之帶有點狀框線的方塊。這些方塊中包含標題及本文文字，或者諸如圖表、表格及圖片的物件。)';
sTemp=L_OfPlaceholders_TEXT;
break;
			case 'OfPlacesBar':
			L_OfPlacesBar_TEXT='(放置列：某些對話方塊 (如 [開啟舊檔]、[另存新檔] 或 [插入圖片]) 左邊的列，它包含到 [我最近的文件]、[桌面]、[我的文件]、[我的電腦] 及 [網路上的芳鄰] 資料夾的捷徑。)';
sTemp=L_OfPlacesBar_TEXT;
break;
			case 'OfPlotArea':
			L_OfPlotArea_TEXT='(繪圖區：在 2D 圖中，繪圖區是包括所有資料數列的座標軸包圍的區域。在 3D 圖中繪圖區是座標軸包圍的區域，包括資料數列、類別名稱、刻度標記標籤及座標軸標題。)';
sTemp=L_OfPlotArea_TEXT;
break;
			case 'OfPrintLayoutView':
			L_OfPrintLayoutView_TEXT='(整頁模式：文件或其他物件列印樣式的檢視。例如，諸如頁首、頁尾、欄及文字方塊的項目會顯示在其實際位置。)';
sTemp=L_OfPrintLayoutView_TEXT;
break;
			case 'OfPyramidDiagram':
			L_OfPyramidDiagram_TEXT='(金字塔圖表：用來顯示以基礎關聯的圖表。)';
sTemp=L_OfPyramidDiagram_TEXT;
break;
			case 'OfRadialDiagram':
			L_OfRadialDiagram_TEXT='(星形圖表：用來顯示元素對核心元素之關聯的圖表。)';
sTemp=L_OfRadialDiagram_TEXT;
break;
			case 'ofrefAVI':
			L_ofrefAVI_TEXT='(AVI：用於聲音及視訊的 Microsoft Windows 多媒體檔案格式，它使用 Microsoft Resource Interchange File Format (RIFF) 規格。)';
sTemp=L_ofrefAVI_TEXT;
break;
			case 'ofrefChat':
			L_ofrefChat_TEXT='(聊天：一種 Microsoft NetMeeting 功能，可開啟個別的視窗，讓線上會議參與者在其中鍵入及互相傳送文字訊息。)';
sTemp=L_ofrefChat_TEXT;
break;
			case 'ofrelativeurl':
			L_ofrelativeurl_TEXT='(相對 URL：URL 的一種格式，其中省略網域及部份或全部目錄名稱，僅保留文件名稱及副檔名 (也許還保留目錄名稱的部份清單)。)';
sTemp=L_ofrelativeurl_TEXT;
break;
			case 'ofResolution':
			L_ofResolution_TEXT='(解析度：監視器或印表機所產生之圖像或文字的細緻程度。)';
sTemp=L_ofResolution_TEXT;
break;
			case 'ofResultSet':
			L_ofResultSet_TEXT='(結果集：執行查詢或套用篩選而產生的記錄集。)';
sTemp=L_ofResultSet_TEXT;
break;
			case 'ofRGB':
			L_ofRGB_TEXT='(RGB：一種系統，它將色彩描述為紅色 (R)、綠色 (G) 及藍色 (B) 的混合物。色彩定義為一組三個值 (R、G、B)。每種色彩使用 0 (零) 百分比比例會產生黑色；此三種色彩都使用百分之百比例則會產生白色。)';
sTemp=L_ofRGB_TEXT;
break;
			case 'ofRGBColor':
			L_ofRGBColor_TEXT='(RGB 色彩：HTML 中的色碼，由其紅、綠及藍值代表。這些色碼決定字型、表格框線、背景及超連結的色彩。)';
sTemp=L_ofRGBColor_TEXT;
break;
			case 'ofRGBValue':
			L_ofRGBValue_TEXT='(RGB 值：RGB 函數所傳回的值；將色彩指定為紅、綠及藍值 (從 0 (零) 到 255 的整數) 的組合。)';
sTemp=L_ofRGBValue_TEXT;
break;
			case 'ofRichTextFormat':
			L_ofRichTextFormat_TEXT='(RTF 格式：一種檔案類型，用於在應用程式 (即使應用程式執行於不同的平台，如 IBM 及 Macintosh) 之間傳輸格式化文字文件。)';
sTemp=L_ofRichTextFormat_TEXT;
break;
			case 'ofRightToLeft':
			L_ofRightToLeft_TEXT='(從右至左：指鍵盤設定、文件檢視、使用者介面物件及文字顯示的方向。阿拉伯文及希伯來文是從右至左的語言。)';
sTemp=L_ofRightToLeft_TEXT;
break;
			case 'ofRow':
			L_ofRow_TEXT='(列：表格中儲存格的水平排列。)';
sTemp=L_ofRow_TEXT;
break;
			case 'ofRun':
			L_ofRun_TEXT='(run：共用相同屬性的連續文字或字元字串。run 中的所有字元都具有相同的方向屬性。)';
sTemp=L_ofRun_TEXT;
break;
			case 'ofRunTime':
			L_ofRunTime_TEXT='(執行時間：應用程式執行的時間期間。在執行階段，您可以與應用程式進行互動。而在設計階段，您可以建立及修改應用程式中的物件及程式碼設計。)';
sTemp=L_ofRunTime_TEXT;
break;
			case 'ofRunTimeError':
			L_ofRunTimeError_TEXT='(執行階段錯誤：僅當應用程式執行時才能偵測出的錯誤。)';
sTemp=L_ofRunTimeError_TEXT;
break;
			case 'ofSaturation':
			L_ofSaturation_TEXT='(飽和度：指定色調中的色彩量。)';
sTemp=L_ofSaturation_TEXT;
break;
			case 'OfSchema':
			L_OfSchema_TEXT='(結構描述：資料庫的描述，用於定義資料庫的屬性 (如資料表、欄位 (欄) 及內容)。)';
sTemp=L_OfSchema_TEXT;
break;
			case 'ofScratchArea':
			L_ofScratchArea_TEXT='(草稿區：顯示在 Publisher 出版物頁面或 PhotoDraw 背景外的灰色區域。如果您不確定想要將某物移至何處，就可將其拖到草稿區。)';
sTemp=L_ofScratchArea_TEXT;
break;
			case 'OfScreenReviewUtilities':
			L_OfScreenReviewUtilities_TEXT='(螢幕檢閱公用程式：輔助工具，用於幫助盲人或有學習障礙 (如誦讀困難) 的人。這些輔助可讓螢幕上的資訊成為合成語音或可更新的布拉耶點字法顯示。)';
sTemp=L_OfScreenReviewUtilities_TEXT;
break;
			case 'ofScript':
			L_ofScript_TEXT='(指令碼：用來在網頁執行工作的一種電腦程式碼，如每次有新訪客時即遞增「訪客數」記數器。網頁指令碼可使用數種指令碼語言進行撰寫。指令碼無需進行編譯即可執行。)';
sTemp=L_ofScript_TEXT;
break;
			case 'ofscriptinglanguage':
			L_ofscriptinglanguage_TEXT='(Script 語言：一種簡單的程式設計語言，設計用於執行特殊或有限的工作，有時與特定的應用程式或函數相關。)';
sTemp=L_ofscriptinglanguage_TEXT;
break;
			case 'ofSearchEngine':
			L_ofSearchEngine_TEXT='(搜尋引擎：網際網路中的一種程式，它使用使用者所提供的關鍵字，來搜尋全球資訊網上的檔案及文件以及其他資源，從而取得特定主題的相關資訊。搜尋引擎也可以專用於特定網站。)';
sTemp=L_ofSearchEngine_TEXT;
break;
			case 'ofSearchPage':
			L_ofSearchPage_TEXT='(搜尋網頁：一種網頁，您可從其中尋找並跳至其他網際網路站台或內部網路上的文件。許多搜尋網頁提供各種方式來進行搜尋，如依主題、依關鍵字或依對使用者查詢的符合。)';
sTemp=L_ofSearchPage_TEXT;
break;
			case 'OfSelected':
			L_OfSelected_TEXT='(選取：如果選取了工具列的按鈕，它的周圍就一直會顯示框線，即使指標目前並未置於按鈕之上也一樣。)';
sTemp=L_OfSelected_TEXT;
break;
			case 'ofSelectionRectangle':
			L_ofSelectionRectangle_TEXT='(矩形選取區：帶有縮放控點的矩形，其中包圍選取的一或多個物件。)';
sTemp=L_ofSelectionRectangle_TEXT;
break;
			case 'ofSelector':
			L_ofSelector_TEXT='(選取器：在樣式表的樣式定義 (或樣式規則) 中，連結到一組特定樣式屬性及值的 HTML 元素。)';
sTemp=L_ofSelector_TEXT;
break;
			case 'ofSelfExtractingFile':
			L_ofSelfExtractingFile_TEXT='(自我解壓縮檔：其中包含幾個較小檔案的可執行檔案 (.exe)。當您連按兩下來執行這種檔案時，它會從自身將其所包含的其他檔案進行解壓縮，並將這些檔案複製到 .exe 所在的資料夾。)';
sTemp=L_ofSelfExtractingFile_TEXT;
break;
			case 'ofServerSideImageMap':
			L_ofServerSideImageMap_TEXT='(伺服器端的影像對應：包含敏感區域或「作用點」(使用者可按一下來追蹤超連結) 的圖形。伺服器端的影像對應需要網頁伺服器上有能夠識別敏感區的指令碼，還需要其相對應的超連結。)';
sTemp=L_ofServerSideImageMap_TEXT;
break;
			case 'ofShortcutKey':
			L_ofShortcutKey_TEXT='(快速鍵：功能鍵或組合鍵，如 F5 或 CTRL+A，您可使用它來執行功能表指令。相反地，便捷鍵是組合鍵 (如 ALT+F)，可將焦點移至功能表、指令或控制項。)';
sTemp=L_ofShortcutKey_TEXT;
break;
			case 'ofShortcutMenu':
			L_ofShortcutMenu_TEXT='(快顯功能表：顯示與特定項目相關之命令清單的功能表。若要顯示快顯功能表，請在項目上按一下滑鼠右鍵，或按 SHIFT+F10。)';
sTemp=L_ofShortcutMenu_TEXT;
break;
			case 'ofSideBar':
			L_ofSideBar_TEXT='(提要欄位：主要文字旁的附註，包含有趣或有用的資訊。提要欄位與主要文字相關，但並不一定是了解主要文字所必需的。)';
sTemp=L_ofSideBar_TEXT;
break;
			case 'ofSingleDataType':
			L_ofSingleDataType_TEXT='(Single 資料類型：一種資料類型，可將單精度浮點變數儲存為 32 位元 (4 位元組) 浮點數值 (負數值的範圍從 -3.402823E38 到 -1.401298E-45，正數值的範圍從 1.401298E-45 到 3.402823E38)。)';
sTemp=L_ofSingleDataType_TEXT;
break;
			case 'ofSingleStepping':
			L_ofSingleStepping_TEXT='(逐步執行：一種除錯技術，可讓您一次執行一個巨集，或一次執行一行 Visual Basic 程式碼。)';
sTemp=L_ofSingleStepping_TEXT;
break;
			case 'ofSizingHandle':
			L_ofSizingHandle_TEXT='(縮放控點：小圓形或小方塊之一，顯示在已選取物件的角落及旁邊。您可以拖拽這些控點來變更物件的大小。)';
sTemp=L_ofSizingHandle_TEXT;
break;
			case 'ofSLIP':
			L_ofSLIP_TEXT='(序列線路網際網路通訊協定 (SLIP)：一種網際網路標準，用於透過序列連結在電腦之間傳送資料。)';
sTemp=L_ofSLIP_TEXT;
break;
			case 'OfSmartTags':
			L_OfSmartTags_TEXT='(智慧標籤：辨識及標記為特定類型的資料。例如，人員的姓名或最近 Microsoft Outlook 電子郵件訊息收件者的姓名，就是可使用智慧標籤進行辨識及標記的資料類型。)';
sTemp=L_OfSmartTags_TEXT;
break;
			case 'ofSortOrder':
			L_ofSortOrder_TEXT='(排序順序：根據值或資料類型排列資料的方式。您可以按字母順序、編號順序，或按日期為資料排序。排序順序使用遞增 (0 到 100、A 到 Z) 或遞減 (100 到 0、Z 到 A) 順序。)';
sTemp=L_ofSortOrder_TEXT;
break;
			case 'ofSourceFile':
			L_ofSourceFile_TEXT='(來源檔案：一種其中包含用於建立連結或內嵌物件之資訊的檔案。當您更新來源檔案中的資訊時，您也可以更新目的檔案中的連結物件。)';
sTemp=L_ofSourceFile_TEXT;
break;
			case 'ofSourceProgram':
			L_ofSourceProgram_TEXT='(來源程式：用於建立連結物件或內嵌物件的程式。若要編輯物件，您必需在電腦上安裝來源程式。)';
sTemp=L_ofSourceProgram_TEXT;
break;
			case 'ofSpreadsheetComponent':
			L_ofSpreadsheetComponent_TEXT='(工作表元件：Microsoft Office Web 元件，可提供工作表在網頁上的互動功能。您可以輸入資料、新增公式及函數、套用篩選、變更格式設定，以及重新計算。)';
sTemp=L_ofSpreadsheetComponent_TEXT;
break;
			case 'ofSQL':
			L_ofSQL_TEXT='(結構化查詢語言 (SQL)：一種資料庫查詢及程式設計語言，廣泛應用於在關聯式資料庫系統中存取、查詢、更新及管理資料。)';
sTemp=L_ofSQL_TEXT;
break;
			case 'ofStandardToolbar':
			L_ofStandardToolbar_TEXT='([一般] 工具列：在 Microsoft Office 應用程式中執行部份最常見工作的工具列，如開啟、儲存及列印檔案。)';
sTemp=L_ofStandardToolbar_TEXT;
break;
			case 'ofStartPage':
			L_ofStartPage_TEXT='(起始頁面：啟動網頁瀏覽器時所顯示的第一頁。您可以將此頁設為網站或電腦硬碟上的文件。起始頁面可以包含某些指向電腦、網路或網頁上其他文件的超連結。)';
sTemp=L_ofStartPage_TEXT;
break;
			case 'ofStatement':
			L_ofStatement_TEXT='(陳述式：一種按語法完成的單位，表示一種特定運算、宣告或定義。通常一個陳述式佔據程序或「宣告」區段中的一行，但兩個或多個陳述式也可在一行上由冒號 (:) 分隔。)';
sTemp=L_ofStatement_TEXT;
break;
			case 'ofStatusBar':
			L_ofStatusBar_TEXT='(狀態列：在螢幕底端的水平列，顯示程式目前狀態的相關資訊，如視窗中項目的狀態、目前工作的進度或已選取項目的相關資訊。)';
sTemp=L_ofStatusBar_TEXT;
break;
			case 'ofStory':
			L_ofStory_TEXT='(本文：包含在單一文字方塊或連結文字方塊鏈內的文字。)';
sTemp=L_ofStory_TEXT;
break;
			case 'ofStreaming':
			L_ofStreaming_TEXT='(資料流：透過網際網路邊下載邊即時播放聲音或視訊，而不是先將其儲存在電腦中。)';
sTemp=L_ofStreaming_TEXT;
break;
			case 'ofString':
			L_ofString_TEXT='(字串：字元集合，可包括數字及文字。)';
sTemp=L_ofString_TEXT;
break;
			case 'ofStringComparison':
			L_ofStringComparison_TEXT='(字串比較：使用運算子來判定一個字串是大於還是等於其他字串。使用 Option Compare 陳述式，可以指定二進制 (區分大小寫) 或文字 (不區分大小寫) 比較。)';
sTemp=L_ofStringComparison_TEXT;
break;
			case 'ofStringDataType':
			L_ofStringDataType_TEXT='(String 資料類型：一種基本資料類型，其中包含字元 (兩個位元組一個字元)。固定長度的字串可以包含 1 到 64K 字元；可變長度字串可以包含 10 億到 20 億。)';
sTemp=L_ofStringDataType_TEXT;
break;
			case 'ofStringExpression':
			L_ofStringExpression_TEXT='(字串運算式：算出一系列連續字元的運算式。運算式的元素可以是：傳回字串或字串 Variant (VarType 8) 的函數；字串文字、常數、變數或 Variant。)';
sTemp=L_ofStringExpression_TEXT;
break;
			case 'ofStrongCharacters':
			L_ofStrongCharacters_TEXT='(加強字元：組成特定語言的字元集，如元音及輔音。不將標點及特殊字元視為加強字元。)';
sTemp=L_ofStrongCharacters_TEXT;
break;
			case 'ofstructuralediting':
			L_ofstructuralediting_TEXT='(結構編輯：在結構文件 (如格式正確的 XML 文件) 內進行的編輯。)';
sTemp=L_ofstructuralediting_TEXT;
break;
			case 'ofStyle':
			L_ofStyle_TEXT='(樣式：式設定特性的組合，例如以集合命名及儲存的字型、字型大小及縮排。。當您套用樣式時，會同時套用該樣式中的所有格式設定指示。)';
sTemp=L_ofStyle_TEXT;
break;
			case 'ofSubmenu':
			L_ofSubmenu_TEXT='(子功能表：使用者指向高層功能表上的命令時所顯示的功能表。)';
sTemp=L_ofSubmenu_TEXT;
break;
			case 'OfSubordinateShape':
			L_OfSubordinateShape_TEXT='(部屬圖案：在組織圖中，位於上司 (或經理) 圖案之下並與其連接的圖案。)';
sTemp=L_OfSubordinateShape_TEXT;
break;
			case 'ofSubscript':
			L_ofSubscript_TEXT='(下標：描述文字，其稍微低於同行的其他文字。下標通常用於科學公式。)';
sTemp=L_ofSubscript_TEXT;
break;
			case 'OfSuperiorShape':
			L_OfSuperiorShape_TEXT='(上司圖案：在組織圖中，位於諸如員工 (部屬圖案或同事圖案) 或助理圖案之上並與其連接的圖案。)';
sTemp=L_OfSuperiorShape_TEXT;
break;
			case 'ofSuperscript':
			L_ofSuperscript_TEXT='(上標：描述文字，其稍微高於同行的其他文字，如註腳參照標記。)';
sTemp=L_ofSuperscript_TEXT;
break;
			case 'ofSVGA':
			L_ofSVGA_TEXT='(超級視訊圖形介面卡 (SVGA)：此標準可以顯示 800 x 600 像素或以上的螢幕大小。)';
sTemp=L_ofSVGA_TEXT;
break;
			case 'ofSwapFile':
			L_ofSwapFile_TEXT='(交換檔：Windows 所使用的暫時儲存空間。如果您時常接收到「記憶體不足」訊息，則您可以嘗試設定交換檔。交換檔允許 Windows 將您電腦硬碟上的空間當作記憶體使用。)';
sTemp=L_ofSwapFile_TEXT;
break;
			case 'ofSyntaxError':
			L_ofSyntaxError_TEXT='(語法錯誤：程式碼或運算式的語法結構錯誤。如果語法檢查已啟用，則會在您鍵入一行並按 ENTER 鍵之後將錯誤反白提示。)';
sTemp=L_ofSyntaxError_TEXT;
break;
			case 'ofSystem':
			L_ofSystem_TEXT='(系統：控制項及其他選項的設定，它從 Microsoft Windows 作業系統取得其值。)';
sTemp=L_ofSystem_TEXT;
break;
			case 'ofSystemColors':
			L_ofSystemColors_TEXT='(系統色彩：作業系統針對特定類型監視器及視訊介面卡而定義的色彩。每種色彩都是與使用者介面特定部份 (如視窗標題或功能表) 相關的色彩。)';
sTemp=L_ofSystemColors_TEXT;
break;
			case 'ofTableOfContents':
			L_ofTableOfContents_TEXT='(目錄：文件中特定標題的清單，其上也會顯示標題與頁碼。)';
sTemp=L_ofTableOfContents_TEXT;
break;
			case 'oftabletcomputer':
			L_oftabletcomputer_TEXT='(Tablet PC：執行 Microsoft Windows XP Tablet PC Edition 的電腦。在 Tablet PC 中，您可以使用 Tablet 畫筆直接在螢幕上進行書寫，也可以使用畫筆來執行滑鼠功能。它也稱為 Tablet 電腦。)';
sTemp=L_oftabletcomputer_TEXT;
break;
			case 'oftabletpen':
			L_oftabletpen_TEXT='(Tablet 畫筆：Tablet PC 附帶的畫筆，用於與 Tablet 螢幕互動。)';
sTemp=L_oftabletpen_TEXT;
break;
			case 'ofTabOrder':
			L_ofTabOrder_TEXT='(Tab 鍵順序：當您按 TAB 鍵或 SHIFT+TAB 時，焦點在表單中從一個欄位或物件移至下一個欄位或物件的順序。)';
sTemp=L_ofTabOrder_TEXT;
break;
			case 'ofTabStop':
			L_ofTabStop_TEXT='(定位點：水平尺規上的位置，指示縮排文字的程度或一欄文字的開始位置。)';
sTemp=L_ofTabStop_TEXT;
break;
			case 'ofTag':
			L_ofTag_TEXT='(標籤：文字字串，用於在 HTML 中識別網頁元素的類型、格式及外觀。許多元素具有定義元素的起始位置的開始及結束標籤。)';
sTemp=L_ofTag_TEXT;
break;
			case 'OfTargetDiagram':
			L_OfTargetDiagram_TEXT='(目標圖表：用來顯示實現目標之步驟的圖表。)';
sTemp=L_OfTargetDiagram_TEXT;
break;
			case 'ofTargetFrame':
			L_ofTargetFrame_TEXT='(目標框架：框架名稱，其中顯示超連結的目標網頁。一般來說，框架頁 (或框架組) 中一個框架的超連結會將該框架頁的另一個框架作為目標框架。)';
sTemp=L_ofTargetFrame_TEXT;
break;
			case 'OfTaskPane':
			L_OfTaskPane_TEXT='(工作窗格：Office 應用程式內的視窗，可提供常用的指令。其位置及小型尺寸可讓您即使仍在使用檔案也可使用這些命令。)';
sTemp=L_OfTaskPane_TEXT;
break;
			case 'ofTCP':
			L_ofTCP_TEXT='(TCP：一種網際網路軟體，可控制資料封包透過網際網路的傳輸。電腦必須執行 TCP 才能與網頁伺服器進行通訊。)';
sTemp=L_ofTCP_TEXT;
break;
			case 'OfTeamSites':
			L_OfTeamSites_TEXT='(小組網站：一種可自訂的網站，其所具有的功能有助於小組一同工作。預設網站具有文件庫、宣告及小組事件的網頁。只有網站建立者所指定的成員才能使用該網站。)';
sTemp=L_OfTeamSites_TEXT;
break;
			case 'ofTemplate':
			L_ofTemplate_TEXT='(範本：一或多個檔案，其中包含的結構及工具能夠組合各元素，形成已完成檔案的樣式及版面配置。例如，Word 範本可以形成單一文件，FrontPage 範本可以形成整個網站。)';
sTemp=L_ofTemplate_TEXT;
break;
			case 'ofTextBox':
			L_ofTextBox_TEXT='(文字方塊：既可移動又可調整大小的文字或圖形容器。使用文字方塊，可以在網頁上定位數個區塊，或者讓文字的方向與文件中的其他文字不同。)';
sTemp=L_ofTextBox_TEXT;
break;
			case 'ofTextFrame':
			L_ofTextFrame_TEXT='(文字框：圖案中可以包含文字的區域。)';
sTemp=L_ofTextFrame_TEXT;
break;
			case 'ofTextQueryKB':
			L_ofTextQueryKB_TEXT='(文字查詢 (Microsoft Knowledge Base)：一或多個片語，用來告訴「知識庫」(Knowledge Base) 搜尋的內容。查詢可包含運算子、問號、萬用字元及括號，以便協助搜尋。)';
sTemp=L_ofTextQueryKB_TEXT;
break;
			case 'ofTGA':
			L_ofTGA_TEXT='(TGA：似真實相片般的圖形檔案格式，設計用於具有 TARGA Truevision 顯示卡的系統。)';
sTemp=L_ofTGA_TEXT;
break;
			case 'ofTheme':
			L_ofTheme_TEXT='(主題：統一設計元素集，藉由使用色彩、字型及圖形，來提供您文件的外觀。)';
sTemp=L_ofTheme_TEXT;
break;
			case 'ofThread':
			L_ofThread_TEXT='(往來書信：在電子郵件及網際網路新聞群組會話中，與特定主題相關的一系列訊息及回覆。)';
sTemp=L_ofThread_TEXT;
break;
			case 'ofThumbnail':
			L_ofThumbnail_TEXT='(縮圖：圖片在網頁上的縮圖呈現方式，通常包含到完整大小圖形的超連結。縮圖用於在網頁瀏覽器中快速載入包含較多圖形或圖片的網頁。)';
sTemp=L_ofThumbnail_TEXT;
break;
			case 'OfThumbnailGeneric':
			L_OfThumbnailGeneric_TEXT='(縮圖：圖片的縮圖呈現方式。)';
sTemp=L_OfThumbnailGeneric_TEXT;
break;
			case 'ofTIFF':
			L_ofTIFF_TEXT='(Tagged Image 檔案格式 (TIFF)：使用標籤格式的高解析度圖形。TIFF 用在數位圖形的通用交換。)';
sTemp=L_ofTIFF_TEXT;
break;
			case 'ofTint':
			L_ofTint_TEXT='(濃淡：與白色混合的色彩。百分之十的濃淡表示原來的色彩佔十分之一，白色佔十分之九。)';
sTemp=L_ofTint_TEXT;
break;
			case 'ofTitleBar':
			L_ofTitleBar_TEXT='(標題列：視窗、對話方塊或工具列頂端上，顯示文件、程式或工具列名稱的水平列。)';
sTemp=L_ofTitleBar_TEXT;
break;
			case 'ofTopic':
			L_ofTopic_TEXT='(主題：兩個應用程式之間動態資料交換 (DDE) 會話的主旨。對於大部份使用檔案的應用程式，主題即是檔案名稱。)';
sTemp=L_ofTopic_TEXT;
break;
			case 'ofTransition':
			L_ofTransition_TEXT='(轉換：在部份 Microsoft Office 應用程式中可用的其中一組轉換顯示效果。轉換會指定當使用者從一個項目 (如投影片或網頁) 移至另一個項目時，如何顯示變更 (如逐漸淡出為黑色)。)';
sTemp=L_ofTransition_TEXT;
break;
			case 'ofTransparency':
			L_ofTransparency_TEXT='(透明度：一種品質，定義有多少光線可以透過物件的像素。如果物件是百分之百透明的，則光線完全透過該物件，且無法看見該物件；亦即，您可以看穿物件。)';
sTemp=L_ofTransparency_TEXT;
break;
			case 'ofTrueTypeFont':
			L_ofTrueTypeFont_TEXT='TrueType 字型：一種字型 (字體)，在列印的文件上與在螢幕上的顯示方式完全相同。TrueType 字型可以調整為任何字型大小。這些字型中的數種字型是在您安裝 Windows 時自動安裝的。)';
sTemp=L_ofTrueTypeFont_TEXT;
break;
			case 'ofTwip':
			L_ofTwip_TEXT='(twip：一種測量單位，等於一點的 1/20，或一英吋的 1/1,440。一公分中含有 567 個 twip。)';
sTemp=L_ofTwip_TEXT;
break;
			case 'oftypedtext':
			L_oftypedtext_TEXT='(鍵入的文字：藉由使用鍵盤或從手寫文字或語音的轉換所輸入的文字。)';
sTemp=L_oftypedtext_TEXT;
break;
			case 'ofTypeLibrary':
			L_ofTypeLibrary_TEXT='(類型程式庫：一種檔案 (或另一個檔案內的元件)，其中包含公開物件、屬性及方法的 Automation 標準描述。物件程式庫 (.olb) 檔案包含作為獨立檔案隨附的類型程式庫 (.tlb)。)';
sTemp=L_ofTypeLibrary_TEXT;
break;
			case 'ofUNC':
			L_ofUNC_TEXT='(通用命名慣例 (UNC)：檔案的命名慣例，提供與機器無關的檔案尋找方法。與指定磁碟機代號及路徑的命名方法不同，UNC 名稱使用語法 \\server\share\path\filename。)';
sTemp=L_ofUNC_TEXT;
break;
			case 'ofUnicode':
			L_ofUnicode_TEXT='(Unicode: Unicode Consortium 所開發的字元編碼標準。藉由使用一個以上的字元組來代表每個字元，Unicode 允許世界上幾乎所有的文字語言都可以使用單一字元設定來表示。)';
sTemp=L_ofUnicode_TEXT;
break;
			case 'ofuniformresourceidentifieruri':
			L_ofuniformresourceidentifieruri_TEXT='(Uniform Resource Identifier (URI)：一種字元字串，用於依類型及位置來識別網際網路上的資源。)';
sTemp=L_ofuniformresourceidentifieruri_TEXT;
break;
			case 'ofuniformresourcenameurn':
			L_ofuniformresourcenameurn_TEXT='(Uniform Resource Name (URN)：依名稱唯一識別可在網際網路上使用之資源的配置 (不考慮資源的位置)。)';
sTemp=L_ofuniformresourcenameurn_TEXT;
break;
			case 'ofUNIX':
			L_ofUNIX_TEXT='(UNIX：多使用者的多工作業系統，具有各種各樣的存在形式及實作方式，通常用於專屬電腦工作站。許多網頁伺服器都在 UNIX 系統上執行。)';
sTemp=L_ofUNIX_TEXT;
break;
			case 'ofURL':
			L_ofURL_TEXT='(Uniform Resource Locator (URL)：一種位址，用於指定通訊協定 (如 HTTP 或 FTP)，以及物件、文件、全球資訊網網頁，或者網際網路或內部網路上其他目的地的位置，例如：http://www.microsoft.com/。)';
sTemp=L_ofURL_TEXT;
break;
			case 'ofUserInterfaceLanguage':
			L_ofUserInterfaceLanguage_TEXT='(使用者介面語言：用於功能表、工具列、對話方塊及訊息的語言。如果您擁有 Microsoft Office MultiLanguage Pack，則可在檢視使用者介面時使用您 Office 版本之安裝語言以外的語言。)';
sTemp=L_ofUserInterfaceLanguage_TEXT;
break;
			case 'ofVariable':
			L_ofVariable_TEXT='(變數：命名的儲存位置，能夠包含可在程式執行期間修改的資料。每個變數具有在其領域層級內對其進行唯一識別的名稱。可以指定資料類型，也可以不指定。)';
sTemp=L_ofVariable_TEXT;
break;
			case 'ofVariantDataType':
			L_ofVariantDataType_TEXT='(Variant 資料類型：變數的預設資料類型，如果 Def類型; 陳述式沒有作用，則變數不具有類型宣告字元。Variant 可以儲存數字、字串、日期/時間、Null 或 Empty 資料。)';
sTemp=L_ofVariantDataType_TEXT;
break;
			case 'ofVBA':
			L_ofVBA_TEXT='(VBA：Microsoft Visual Basic 的巨集語言版本，用於設計 Windows 應用程式，且包含在數個 Microsoft 應用程式中。)';
sTemp=L_ofVBA_TEXT;
break;
			case 'ofVBScript':
			L_ofVBScript_TEXT='(Visual Basic Scripting Edition (VBScript)：一種解譯的物件型 Script 語言，是 Microsoft Visual Basic 程式設計語言的子集。)';
sTemp=L_ofVBScript_TEXT;
break;
			case 'OfVennDiagram':
			L_OfVennDiagram_TEXT='(卞氏圖表：一種圖表，用於顯示元素之間的重疊區域。)';
sTemp=L_OfVennDiagram_TEXT;
break;
			case 'ofVerb':
			L_ofVerb_TEXT='(動詞：「編輯」、「開啟」或「播放」三種操作之一，您可以藉由連按兩下內嵌於物件框中的 OLE 物件來啟動操作。)';
sTemp=L_ofVerb_TEXT;
break;
			case 'ofVertex':
			L_ofVertex_TEXT='(端點：曲線的最高點、曲線的結束點，或者多邊形或手繪多邊形中兩條線段相交的點。)';
sTemp=L_ofVertex_TEXT;
break;
			case 'ofVGA':
			L_ofVGA_TEXT='(視訊圖形介面卡 (VGA)：一種電腦視訊標準，顯示的螢幕大小為 640 (水平像素) x 480 (垂直像素)。)';
sTemp=L_ofVGA_TEXT;
break;
			case 'ofVideoCaptureDevice':
			L_ofVideoCaptureDevice_TEXT='(視訊擷取裝置：一種裝置，可將類比圖像 (例如來自電視或 VCR 的圖像) 轉換成數位圖像。)';
sTemp=L_ofVideoCaptureDevice_TEXT;
break;
			case 'OfView':
			L_OfView_TEXT='(檢視：網頁上的一組欄位，顯示清單或文件庫中的項目。檢視可顯示已排序或篩選的項目、選取的欄位或自訂版面配置。它要求網頁伺服器執行 Microsoft 的 SharePoint Team Services。)';
sTemp=L_OfView_TEXT;
break;
			case 'ofVirus':
			L_ofVirus_TEXT='(病毒：一種電腦程式或巨集，能夠藉由將其自身的複本插入電腦檔案來「感染」電腦檔案。如果「受感染」的檔案載入到記憶體中，則該病毒就會傳染給其他檔案。病毒通常是有害的。)';
sTemp=L_ofVirus_TEXT;
break;
			case 'ofVisual':
			L_ofVisual_TEXT='(視覺：用於描述當使用雙向文字時的插入點移動及文字選取。在雙向文字中的移動是移動到視覺上鄰近的下一個字元。)';
sTemp=L_ofVisual_TEXT;
break;
			case 'ofVisualBasic':
			L_ofVisualBasic_TEXT='(Visual Basic：Basic 的高階視覺程式設計版本。Visual Basic 是由 Microsoft 開發用來建置 Windows 應用程式。)';
sTemp=L_ofVisualBasic_TEXT;
break;
			case 'ofVisualBasicEditor':
			L_ofVisualBasicEditor_TEXT='(Visual Basic 編輯器：一種環境，您可在其中撰寫新的並編輯現有的 Visual Basic for Applications 程式碼及程序。「Visual Basic 編輯器」包含用於在程式碼中尋找語法、執行階段及邏輯問題的完整除錯工具組。)';
sTemp=L_ofVisualBasicEditor_TEXT;
break;
			case 'OfVisualBasicHelp':
			L_OfVisualBasicHelp_TEXT='(Visual Basic 說明：若要取得 Visual Basic 的「說明」，請指向 [工具] 功能表上的 [巨集]，再按一下 [Visual Basic 編輯器]。在 [說明] 功能表上按一下 [Microsoft Visual Basic 說明]。)';
sTemp=L_OfVisualBasicHelp_TEXT;
break;
			case 'ofWAIS':
			L_ofWAIS_TEXT='(廣域資訊伺服器 (WAIS)：網際網路上以 UNIX 為基礎的文件搜尋及擷取系統，可以用來透過 400 個 WAIS 程式庫搜尋符合一系列關鍵字的索引檔案。)';
sTemp=L_ofWAIS_TEXT;
break;
			case 'ofWAN':
			L_ofWAN_TEXT='(廣域網路 (WAN)：一種電腦網路，它跨越較長的距離，使用特殊的電腦來連接小型網路。)';
sTemp=L_ofWAN_TEXT;
break;
			case 'ofWatchExpression':
			L_ofWatchExpression_TEXT='(監看運算式：在對 Visual Basic 程式碼進行除錯時，在 [立即] 視窗的 [監看] 窗格中定義的運算式。當程式碼的執行暫停時，您可以邊逐步執行程式碼邊監看運算式的值。)';
sTemp=L_ofWatchExpression_TEXT;
break;
			case 'ofWatchWindow':
			L_ofWatchWindow_TEXT='([監看] 視窗：「Visual Basic 編輯器」中用來除錯 Visual Basic 程序的視窗。您可以從程序指定要檢查的變數，[監看] 視窗會隨程序的執行來顯示該變數的值。)';
sTemp=L_ofWatchWindow_TEXT;
break;
			case 'ofWatermark':
			L_ofWatermark_TEXT='(浮水印：一種半透明的圖像，通常用於信件及名片。在貨幣中，當您舉起紙幣朝向光線時，即會看到浮水印。)';
sTemp=L_ofWatermark_TEXT;
break;
			case 'ofWebBrowser':
			L_ofWebBrowser_TEXT='(網頁瀏覽器：一種軟體，用於解譯 HTML 檔案、將其格式設定為網頁，並加以顯示。網頁瀏覽器 (如 Microsoft Internet Explorer) 可追蹤超連結、傳輸檔案，及播放內嵌於網頁中的聲音或視訊檔案。)';
sTemp=L_ofWebBrowser_TEXT;
break;
			case 'OfWebDiscussion':
			L_OfWebDiscussion_TEXT='(網頁討論區：使用者附加到網頁及文件的註解。也稱為「網頁文件討論區」，以便與討論區佈告欄相互區別。它要求網頁伺服器執行 Microsoft 的 SharePoint Team Services。)';
sTemp=L_OfWebDiscussion_TEXT;
break;
			case 'OfWebFolder':
			L_OfWebFolder_TEXT='(網頁資料夾：用來儲存、開啟、複製或刪除網頁伺服器或 FTP 伺服器上檔案的捷徑。部份網頁資料夾 (如文件庫) 具有本機資料夾所沒有的功能。您會在 [網路上的芳鄰] 或 [網頁資料夾] 中找到網頁資料夾。)';
sTemp=L_OfWebFolder_TEXT;
break;
			case 'OfWebPresenceProvider':
			L_OfWebPresenceProvider_TEXT='(Web Presence Provider (WPP)：網頁主控者及「網際網路服務提供者」，其管理在網際網路上使用網站所必需的網頁伺服器硬體及軟體。)';
sTemp=L_OfWebPresenceProvider_TEXT;
break;
			case 'ofWebSite':
			L_ofWebSite_TEXT='(網站：一組相關網頁，由全球資訊網上的 HTTP 伺服器主控。網站中的網頁通常包括一或多個主題，並透過超連結互連。大部份網站將首頁作為起點。)';
sTemp=L_ofWebSite_TEXT;
break;
			case 'OfWebStorageSystem':
			L_OfWebStorageSystem_TEXT='(WSS：SharePoint Team Services 及 Exchange 2000 伺服器的儲存元件，它整合網頁伺服器、資料庫、檔案系統及工作群組功能。WSS 可讓您在單一整合系統中儲存及共用多種資料。)';
sTemp=L_OfWebStorageSystem_TEXT;
break;
			case 'ofwellformedxmldocument':
			L_ofwellformedxmldocument_TEXT='(格式正確的 XML 文件：XML 檔案，其中只有一個根元素，所有元素都由開始及結束標籤分隔，形成正確的巢狀。)';
sTemp=L_ofwellformedxmldocument_TEXT;
break;
			case 'ofWestern':
			L_ofWestern_TEXT='(西方行事曆：用來描述主要用於歐洲及英語國家的西曆。)';
sTemp=L_ofWestern_TEXT;
break;
			case 'ofWhatsThisTip':
			L_ofWhatsThisTip_TEXT='([這是什麼] 提示：顯示在控制項、螢幕區域、功能表指令或工具列按鈕旁的秘訣。)';
sTemp=L_ofWhatsThisTip_TEXT;
break;
			case 'ofWhiteSpace':
			L_ofWhiteSpace_TEXT='(空白區域：頁面上的空白區域，可用於設計平衡、對比及視覺要求。)';
sTemp=L_ofWhiteSpace_TEXT;
break;
			case 'ofWindowsAPI':
			L_ofWindowsAPI_TEXT='(Windows API：函數、訊息、資料結構、資料類型及陳述式，可用於建立在 Microsoft Windows 95 或更新版本下執行的應用程式，包括程序宣告、使用者定義的類型定義及常數宣告。)';
sTemp=L_ofWindowsAPI_TEXT;
break;
			case 'OfWindowsImageAcquisition':
			L_OfWindowsImageAcquisition_TEXT='(Windows 影像擷取 (WIA)：一種裝置驅動程式介面，支援靜態數位照相機及高低階掃描器，並允許從 IEEE 1394 型 DV 攝錄像機及 USB 型網路攝影機擷取靜態影像。)';
sTemp=L_OfWindowsImageAcquisition_TEXT;
break;
			case 'ofWizard':
			L_ofWizard_TEXT='(精靈：一種功能，它先詢問問題，再根據您的回答建立項目 (如表單或網頁)。)';
sTemp=L_ofWizard_TEXT;
break;
			case 'ofWMF':
			L_ofWMF_TEXT='(Windows 中繼檔格式 (WMF)：Windows 相容電腦的向量圖形格式，常用於文字處理美工圖案。)';
sTemp=L_ofWMF_TEXT;
break;
			case 'OfWordart':
			L_OfWordart_TEXT='(文字藝術師：使用現成效果建立的文字物件，您可以在其上套用其他格式選項。)';
sTemp=L_OfWordart_TEXT;
break;
			case 'ofWordArtWithRightToLeft':
			L_ofWordArtWithRightToLeft_TEXT='(具有從右至左功能的文字文字藝術師：當 Office 啟用從右至左語言時，文字藝術師會提供從右至左語言支援。文字藝術師物件一次僅接受一種語言，但您可以準備各種語言的文字藝術師物件。)';
sTemp=L_ofWordArtWithRightToLeft_TEXT;
break;
			case 'ofWorkingFolder':
			L_ofWorkingFolder_TEXT='(工作資料夾：您開啟或儲存文件時文件所在的資料夾。如果您在開啟或儲存時選取其他資料夾，則該資料夾即會成為工作資料夾。您可在大部份 Office 應用程式中設定此資料夾的啟動位置。)';
sTemp=L_ofWorkingFolder_TEXT;
break;
			case 'ofWorkpane':
			L_ofWorkpane_TEXT='(工作窗格：工作區區域，其中包含您針對指定工作所選取的選項。工作窗格會在某些時候顯示，如當文件開啟時，或當您在功能表及工具列上按一下某些項目時。)';
sTemp=L_ofWorkpane_TEXT;
break;
			case 'ofWorldWideWebConsortium':
			L_ofWorldWideWebConsortium_TEXT='(全球資訊網協會 (W3C)：商業及教育機構的協會，在與全球資訊網相關的所有區域中，它負責監督研究並提昇標準。)';
sTemp=L_ofWorldWideWebConsortium_TEXT;
break;
			case 'ofxmlexpansionpack':
			L_ofxmlexpansionpack_TEXT='(XML Expansion Pack：檔案的集合，由 manifest.xml 檔案管理，會透過指定自訂顯示或巨集指令，將功能新增到 Microsoft Word 或 Microsoft Excel 文件。)';
sTemp=L_ofxmlexpansionpack_TEXT;
break;
			case 'OfXmlSchemas':
			L_OfXmlSchemas_TEXT='(XML 結構描述：使用 XML 撰寫的正式規格，定義 XML 文件的結構，包括元素名稱及豐富資料類型、哪些元素可以組合形式顯示，以及每個元素可以使用哪些屬性。)';
sTemp=L_OfXmlSchemas_TEXT;
break;
			case 'OfXmlStylesheet':
			L_OfXmlStylesheet_TEXT='(XML 樣式表：包含套用到參照樣式表之 XML 檔案的格式設定規則。XML 樣式表的標準規則集是「可延伸樣式語言 (XSL)」。)';
sTemp=L_OfXmlStylesheet_TEXT;
break;
			case 'wddefbidiAlefLam':
			L_wddefbidiAlefLam_TEXT='(Alef Lam：類似於英文文字「the」。在若干個 Microsoft Office 程式中，如果啟用從右至左功能，則排序表格中的文字時可將其忽略。)';
sTemp=L_wddefbidiAlefLam_TEXT;
break;
			case 'wddefbidiComplexScript':
			L_wddefbidiComplexScript_TEXT='(中東文字：需要縮短或美化字元的語言，如從右至左的語言 (阿拉伯文、波斯文、希伯來文及烏都文) 及數種南亞語言。)';
sTemp=L_wddefbidiComplexScript_TEXT;
break;
			case 'wddefbidiInstalledLanguage':
			L_wddefbidiInstalledLanguage_TEXT='(安裝語言：所使用的基本語言，它控制數種語言特性的行為方式，如主要字典的語言，以及文字 (從左至右或從右至左) 的方向及對齊方式。)';
sTemp=L_wddefbidiInstalledLanguage_TEXT;
break;
			case 'wddefbidiLunar':
			L_wddefbidiLunar_TEXT='(陰曆：以色列希伯來文使用者主要使用的行事曆。)';
sTemp=L_wddefbidiLunar_TEXT;
break;
			case 'xldefToolbarDock':
			L_xldefToolbarDock_TEXT='(固定工具列：附加到程式視窗的一邊的工具列。當您將工具列拖曳到程式標題列之下，或者拖曳到程式視窗的左邊、右邊或底端時，工具列會貼齊到程式視窗的邊緣。)';
sTemp=L_xldefToolbarDock_TEXT;
break;
			case 'IDH_ofdefHistoryList':
			L_IDH_ofdefHistoryList_TEXT='(歷程清單：您在目前程式作業階段中使用超連結所跳至的最近 10 個檔案清單。)';
sTemp=L_IDH_ofdefHistoryList_TEXT;
break;
			case 'IDH_oldefAttribute':
			L_IDH_oldefAttribute_TEXT='(屬性：單則資訊 (如人員的姓氏) 保留項目。「網際網路目錄」中的每個項目都是由屬性清單組成的。您的「網際網路目錄」網站管理員會判定與您相關的屬性。)';
sTemp=L_IDH_oldefAttribute_TEXT;
break;
			case 'IDH_oldefDistinguishedName':
			L_IDH_oldefDistinguishedName_TEXT='(辨別名稱：透過所有網際網路目錄唯一識別人員或群組。它包含數個描述性屬性，如「一般名稱」、「組織」及「國家」。辨別名稱的範例：cn=Jeff Hay、o=Microsoft、c=US。)';
sTemp=L_IDH_oldefDistinguishedName_TEXT;
break;
			case 'IDH_oldefFolderList':
			L_IDH_oldefFolderList_TEXT='(資料夾清單：可顯示您信箱中可用的資料夾。若要檢視子資料夾，請按一下資料夾旁的加號 (+)。如果資料夾清單未顯示，則在 [移至] 功能表上按一下 [資料夾清單]。)';
sTemp=L_IDH_oldefFolderList_TEXT;
break;
			case 'IDH_oldefInternetDirectory':
			L_IDH_oldefInternetDirectory_TEXT='(網際網路目錄：資訊 (如姓名、組織、部門、國家及位置) 的儲存位置。通常，「網際網路目錄」用於尋找本機通訊錄或公司範圍目錄中沒有的電子郵件地址。)';
sTemp=L_IDH_oldefInternetDirectory_TEXT;
break;
			case 'IDH_oldefLDAP':
			L_IDH_oldefLDAP_TEXT='(輕量型目錄存取通訊協定 (LDAP)：提供對「網際網路目錄」之存取的通訊協定。)';
sTemp=L_IDH_oldefLDAP_TEXT;
break;
			case 'IDH_oldefOrganizationalUnit':
			L_IDH_oldefOrganizationalUnit_TEXT='(組織單位：一種項目，特別用於儲存與組織區段相關的資訊。它可以代表部門人員或群組人員，如 ou = Accounting Dept。)';
sTemp=L_IDH_oldefOrganizationalUnit_TEXT;
break;
			case 'IDH_oltipFolderHomePage':
			L_IDH_oltipFolderHomePage_TEXT='(資料夾首頁：與 Outlook 資料夾相關的網際網路網頁或內部網路網頁。如果網頁已經與資料夾相關且已設定選項，則每當選取該資料夾，該網頁即會顯示在 Outlook 視窗中。)';
sTemp=L_IDH_oltipFolderHomePage_TEXT;
break;
			case 'IDH_redefAcceleratorKey':
			L_IDH_redefAcceleratorKey_TEXT='(快速鍵：用作選取物件捷徑的單一字元。也稱為鍵盤快速鍵、捷徑鍵及鍵盤捷徑。)';
sTemp=L_IDH_redefAcceleratorKey_TEXT;
break;
			case 'IDH_redefAddressBook':
			L_IDH_redefAddressBook_TEXT='(通訊錄：通訊錄的集合，可用來儲存姓名、電子郵件地址、傳真號碼及通訊群組清單。「通訊錄」可包含「全域通訊清單」、「Outlook 通訊錄」及「個人通訊錄」。)';
sTemp=L_IDH_redefAddressBook_TEXT;
break;
			case 'IDH_redefArchiving':
			L_IDH_redefArchiving_TEXT='(封存：將選取的項目移至其他位置儲存，以便在將來需要時進行存取。)';
sTemp=L_IDH_redefArchiving_TEXT;
break;
			case 'IDH_redefArgument':
			L_IDH_redefArgument_TEXT='(引數：用於函數之欄位或運算式的值。)';
sTemp=L_IDH_redefArgument_TEXT;
break;
			case 'IDH_redefAssignedTask':
			L_IDH_redefAssignedTask_TEXT='(指定工作：已在電子郵件訊息中作為工作要求傳送給某人的工作。當您指定工作時，您即放棄該工作的擁有權 (除非被指定者拒絕該工作)。指定者可以接收該工作的狀態報告。)';
sTemp=L_IDH_redefAssignedTask_TEXT;
break;
			case 'IDH_redefAutoArchiving':
			L_IDH_redefAutoArchiving_TEXT='(自動封存：根據項目存在於資料夾中的時間量，來定期地自動將項目移至其他資料夾，或將項目刪除。)';
sTemp=L_IDH_redefAutoArchiving_TEXT;
break;
			case 'IDH_redefBackgroundColor':
			L_IDH_redefBackgroundColor_TEXT='(背景色彩：空視窗或空顯示螢幕的用戶端區域色彩，所有繪製及色彩顯示都在其上進行。)';
sTemp=L_IDH_redefBackgroundColor_TEXT;
break;
			case 'IDH_redefBind':
			L_IDH_redefBind_TEXT='(繫結：需要繫結到欄位的控制項只是您需要儲存其資訊的控制項。當控制項連結到欄位時，該控制項的資訊即儲存到欄位。)';
sTemp=L_IDH_redefBind_TEXT;
break;
			case 'IDH_redefBitwiseComparison':
			L_IDH_redefBitwiseComparison_TEXT='(逐位元比較：兩個數值運算式中位置相同之位元的逐個位元比較。)';
sTemp=L_IDH_redefBitwiseComparison_TEXT;
break;
			case 'IDH_redefBoldDates':
			L_IDH_redefBoldDates_TEXT='(以粗體顯示的日期：小行事曆 (稱為「日期導覽」) 中包含項目的天數以粗體顯示。)';
sTemp=L_IDH_redefBoldDates_TEXT;
break;
			case 'IDH_redefBound':
			L_IDH_redefBound_TEXT='(結合：一種控制項，其內容與特定資料來源 (如 [連絡人] 資料夾中的欄位) 相關。)';
sTemp=L_IDH_redefBound_TEXT;
break;
			case 'IDH_redefCaption':
			L_IDH_redefCaption_TEXT='(標號：直接顯示在控制項上或控制項周圍的描述文字。)';
sTemp=L_IDH_redefCaption_TEXT;
break;
			case 'IDH_redefCategory':
			L_IDH_redefCategory_TEXT='(類別：有助於您追蹤項目的關鍵字或片語，以便輕而易舉地進行尋找、排序、篩選項目或建立項目的群組。)';
sTemp=L_IDH_redefCategory_TEXT;
break;
			case 'IDH_redefCharacter':
			L_IDH_redefCharacter_TEXT='(字元碼：代表集合 (如 ANSI 字元集) 中特定字元的號碼。)';
sTemp=L_IDH_redefCharacter_TEXT;
break;
			case 'IDH_redefClassIdentifierCLSID':
			L_IDH_redefClassIdentifierCLSID_TEXT='(類別識別元 (CLSID)：識別物件的唯一識別元 (UUID)。物件將其 CLSID 註冊於系統註冊資料庫中，以便其他應用程式可以載入該文件及對其進行程式設計。)';
sTemp=L_IDH_redefClassIdentifierCLSID_TEXT;
break;
			case 'IDH_redefClientRegion':
			L_IDH_redefClientRegion_TEXT='(用戶端區域：應用程式顯示輸出 (如文字或圖形) 的視窗部份。)';
sTemp=L_IDH_redefClientRegion_TEXT;
break;
			case 'IDH_redefClientScripts':
			L_IDH_redefClientScripts_TEXT='(用戶端指令碼：顯示在 HTML 網頁上的陳述式。指令碼是在載入文件或回應事件 (如按一下按鈕) 時執行。)';
sTemp=L_IDH_redefClientScripts_TEXT;
break;
			case 'IDH_redefColumnHeading':
			L_IDH_redefColumnHeading_TEXT='(欄名：資料表中一欄頂端的水平列。欄名列中有多個欄名。)';
sTemp=L_IDH_redefColumnHeading_TEXT;
break;
			case 'IDH_redefComparisonOperators':
			L_IDH_redefComparisonOperators_TEXT='(比較運算子：一種字元或符號，用於指示兩個或多個值或運算式之間的關係 (如 &lt;、&gt;, 及 =)。)';
sTemp=L_IDH_redefComparisonOperators_TEXT;
break;
			case 'IDH_redefContactAddressBook':
			L_IDH_redefContactAddressBook_TEXT='(Outlook 通訊錄：從 [連絡人] 資料夾中的連絡人自動建立的通訊錄。連絡人可以是您組織內外的人員。當您更新您的連絡人時，「Outlook 通訊錄」也會隨之更新。)';
sTemp=L_IDH_redefContactAddressBook_TEXT;
break;
			case 'IDH_redefContactList':
			L_IDH_redefContactList_TEXT='(連絡人清單：在 [連絡人] 資料夾中，您與其通信的人員及組織清單。)';
sTemp=L_IDH_redefContactList_TEXT;
break;
			case 'IDH_redefContainer':
			L_IDH_redefContainer_TEXT='(容器：可包含其他物件的物件。)';
sTemp=L_IDH_redefContainer_TEXT;
break;
			case 'IDH_redefContextID':
			L_IDH_redefContextID_TEXT='(內容識別碼：對應應用程式中特定物件的唯一數字或字串。「內容識別碼」用於建立應用程式與相對應「說明」主題之間的連結。)';
sTemp=L_IDH_redefContextID_TEXT;
break;
			case 'IDH_redefControlGroup':
			L_IDH_redefControlGroup_TEXT='(控制項群組：在理論上或邏輯上相關的控制項集。在理論上相關的控制項通常會在一起進行檢視，但不一定互相影響。在邏輯上相關的控制項則會互相影響。)';
sTemp=L_IDH_redefControlGroup_TEXT;
break;
			case 'IDH_redefControlTip':
			L_IDH_redefControlTip_TEXT='(控制項秘訣：描述控制項、網頁或索引標籤的簡單片語。使用者僅將滑鼠指標置於控制項上，即可顯示控制項秘訣。)';
sTemp=L_IDH_redefControlTip_TEXT;
break;
			case 'IDH_redefCursor':
			L_IDH_redefCursor_TEXT='(游標：將資料列傳回應用程式的軟體裝置。結果集上的游標會指示結果集中的目前位置。)';
sTemp=L_IDH_redefCursor_TEXT;
break;
			case 'IDH_redefCustomField':
			L_IDH_redefCustomField_TEXT='(自訂欄位：您可以建立的欄位。自訂欄位可以為空白、組合或公式欄位。)';
sTemp=L_IDH_redefCustomField_TEXT;
break;
			case 'IDH_redefCycle':
			L_IDH_redefCycle_TEXT='(循環：以定義的順序在一組物件間移動。)';
sTemp=L_IDH_redefCycle_TEXT;
break;
			case 'IDH_redefDataSource':
			L_IDH_redefDataSource_TEXT='(資料來源：連結控制項的資料位置。例如 [連絡人] 資料夾中的欄位。)';
sTemp=L_IDH_redefDataSource_TEXT;
break;
			case 'IDH_redefDateExpression':
			L_IDH_redefDateExpression_TEXT='(日期運算式：可以解譯為日期的運算式。這包括看似日期的數字、看似日期的字串、從函數傳回的日期以及日期文字的任意組合。)';
sTemp=L_IDH_redefDateExpression_TEXT;
break;
			case 'IDH_redefDateLiteral':
			L_IDH_redefDateLiteral_TEXT='(日期文字：具有有效格式的連續字元，由數字記號 (#) 包圍。有效的格式包括由您程式碼之地區設定所指定的日期格式，或通用日期格式。)';
sTemp=L_IDH_redefDateLiteral_TEXT;
break;
			case 'IDH_redefDateSeperators':
			L_IDH_redefDateSeperators_TEXT='(日期分隔字元：對日期值進行格式設定時用來分隔日、月及年的字元。這些字元由系統設定或由 Format 函數決定。)';
sTemp=L_IDH_redefDateSeperators_TEXT;
break;
			case 'IDH_redefDayNumber':
			L_IDH_redefDayNumber_TEXT='(天數：小行事曆 (稱為「日期導覽」) 中工作日欄下的數字。包含項目的天以粗體顯示。)';
sTemp=L_IDH_redefDayNumber_TEXT;
break;
			case 'IDH_redefDelegate':
			L_IDH_redefDelegate_TEXT='(代理人：被授與權限可開啟他人資料夾、建立項目及回應他人要求的某人。授與代理人權限的人員決定代理人可以存取的資料夾，以及代理人可以進行的變更。)';
sTemp=L_IDH_redefDelegate_TEXT;
break;
			case 'IDH_redefDialableFormat':
			L_IDH_redefDialableFormat_TEXT='(撥號格式：一種電話號碼格式，用於撥接公司內部分機 (例如 2414)、接線生或緊急服務，或目錄輔助。電話卡無法使用此格式。)';
sTemp=L_IDH_redefDialableFormat_TEXT;
break;
			case 'IDH_redefDomainNameSystemDNS':
			L_IDH_redefDomainNameSystemDNS_TEXT='(DNS：一種網際網路服務，它將代表電腦群組的網域名稱 (例如 microsoft.com) 翻譯成數字位址。網際網路是以數字位址為基礎的，使用網域名稱的原因是因為它們較容易記住。)';
sTemp=L_IDH_redefDomainNameSystemDNS_TEXT;
break;
			case 'IDH_redefDominantControl':
			L_IDH_redefDominantControl_TEXT='(主控項：一種控制項，其他選取的控制項根據此控制項來對齊或調整大小。對齊控制項時，選取的控制項根據主控項對齊。調整控制項的大小時，將會把主控項的維度指派給選取的控制項。)';
sTemp=L_IDH_redefDominantControl_TEXT;
break;
			case 'IDH_redefDragHandles':
			L_IDH_redefDragHandles_TEXT='(移動控點：約會的左框線，按一下即可移動約會。檢視 「行事曆」中的某一天時，請按一下左移動控點並拖曳來移動約會；按一下頂端或底端框線，可以調整約會的大小。)';
sTemp=L_IDH_redefDragHandles_TEXT;
break;
			case 'IDH_redefEmailSendBoxes':
			L_IDH_redefEmailSendBoxes_TEXT='([收件者]、[副本] 及 [密件副本] 方塊：郵件會傳送到 [收件者] 方塊中的收件者。[副本] 及 [密件副本] 方塊中的收件者也會得到該郵件，但其他收件者看不到 [密件副本] 方塊中的收件者名稱。)';
sTemp=L_IDH_redefEmailSendBoxes_TEXT;
break;
			case 'IDH_redefEmailServer':
			L_IDH_redefEmailServer_TEXT='(電子郵件伺服器：儲存電子郵件的電腦。)';
sTemp=L_IDH_redefEmailServer_TEXT;
break;
			case 'IDH_redefFavoriteWebPage':
			L_IDH_redefFavoriteWebPage_TEXT='(我的最愛網頁：移到儲存在 [我的最愛] 資料夾中網頁的捷徑。)';
sTemp=L_IDH_redefFavoriteWebPage_TEXT;
break;
			case 'IDH_redefFolderBar':
			L_IDH_redefFolderBar_TEXT='(資料夾列表：緊接在工具列下面的水平列，在左邊顯示目前資料夾的名稱，在右邊顯示其圖示。若要快速檢視暫存 [資料夾清單]，請在 [資料夾列表] 上按一下目前資料夾的名稱。)';
sTemp=L_IDH_redefFolderBar_TEXT;
break;
			case 'IDH_redefForegroundColor':
			L_IDH_redefForegroundColor_TEXT='(前景色彩：目前選取用於在螢幕上繪製或顯示文字的色彩。在單色顯示中，前景色彩是點陣圖或其他圖形的色彩。)';
sTemp=L_IDH_redefForegroundColor_TEXT;
break;
			case 'IDH_redefForm':
			L_IDH_redefForm_TEXT='(表單：以電子方式分送及收集資訊的方式。例如，任何人都可以使用表單來訂購用品，或在公用資料夾張貼資訊。所有 Outlook 項目 (如郵件及約會) 都是以表單為基礎的。)';
sTemp=L_IDH_redefForm_TEXT;
break;
			case 'IDH_redefFormat':
			L_IDH_redefFormat_TEXT='(資料格式：資料單位 (如欄位，或者郵件本文中的文字) 的結構或外觀。)';
sTemp=L_IDH_redefFormat_TEXT;
break;
			case 'IDH_redefFormsCache':
			L_IDH_redefFormsCache_TEXT='(表單快取：位於 C:\Windows\Forms 的資料夾，用作表單的儲存位置。)';
sTemp=L_IDH_redefFormsCache_TEXT;
break;
			case 'IDH_redefFree':
			L_IDH_redefFree_TEXT='(空閒：空閒時間與明確的可用性指標一同顯示，且當他人檢視您的「行事曆」時會顯示讓您使用。當檢視天數時，如果持續期間為零的約會出現在選取的時段中，則對於其他人，該約會即顯示為空閒時間。)';
sTemp=L_IDH_redefFree_TEXT;
break;
			case 'IDH_redefFreeBusyBar':
			L_IDH_redefFreeBusyBar_TEXT='(空閒/忙碌時間︰在「行事曆」中，時間狀態及使用者定義的標籤是由色彩及圖樣指示的。)';
sTemp=L_IDH_redefFreeBusyBar_TEXT;
break;
			case 'IDH_redefFullName':
			L_IDH_redefFullName_TEXT='全名：連絡人的名字及姓氏，或者名字及姓氏加上任何中間名、職稱及稱謂 (例如，Jr. 或 Dr.)。';
sTemp=L_IDH_redefFullName_TEXT;
break;
			case 'IDH_redefGateway':
			L_IDH_redefGateway_TEXT='(閘道：連接不同電子郵件系統並在系統之間傳輸郵件的裝置。)';
sTemp=L_IDH_redefGateway_TEXT;
break;
			case 'IDH_redefGlobalAddressList':
			L_IDH_redefGlobalAddressList_TEXT='(全域通訊清單：包含您組織中所有使用者、群組及通訊群組清單電子郵件地址的通訊錄。管理員建立並維護此通訊錄。它也包含公用資料夾電子郵件地址。)';
sTemp=L_IDH_redefGlobalAddressList_TEXT;
break;
			case 'IDH_redefGridBlock':
			L_IDH_redefGridBlock_TEXT='(格線區塊：兩個相鄰格線點之間的空間。)';
sTemp=L_IDH_redefGridBlock_TEXT;
break;
			case 'IDH_redefGroup':
			L_IDH_redefGroup_TEXT='(群組：具有一個相同屬性的項目集；例如，優先順序或狀態。此外，群組是將時刻表上或表格中共用標題下具有相同屬性的項目進行組合。)';
sTemp=L_IDH_redefGroup_TEXT;
break;
			case 'IDH_redefInformationService':
			L_IDH_redefInformationService_TEXT='(資訊服務：一種設定，可讓您傳送、儲存及接收電子郵件，並定義如何儲存及使用地址。您在一個使用者設定檔中可以擁有多個資訊服務。)';
sTemp=L_IDH_redefInformationService_TEXT;
break;
			case 'IDH_redefInternationalFormat':
			L_IDH_redefInternationalFormat_TEXT='(國際格式：一種電話號碼格式，用於從任何位置撥接或使用電話卡撥接。該格式應以此方式顯示：國家/地區碼 + 區碼。請勿併入其他標點符號、字元或英數字元。)';
sTemp=L_IDH_redefInternationalFormat_TEXT;
break;
			case 'IDH_redefItem':
			L_IDH_redefItem_TEXT='(項目：項目是包含 Outlook 中資訊的基本元素 (類似於其他程式中的檔案)。項目包括電子郵件、約會、連絡人、工作、日誌項目、備忘錄、張貼的項目及文件。)';
sTemp=L_IDH_redefItem_TEXT;
break;
			case 'IDH_redefJournalEntry':
			L_IDH_redefJournalEntry_TEXT='(日誌項目：[日誌] 資料夾中的項目，作為已記錄之活動的捷徑。您可以透過顯示在圖示左下角中的時鐘來區分日誌項目與其他項目。)';
sTemp=L_IDH_redefJournalEntry_TEXT;
break;
			case 'IDH_redefKeyManagementServer':
			L_IDH_redefKeyManagementServer_TEXT='(金鑰管理伺服器：分配並追蹤私密金鑰的 Microsoft Exchange Server。)';
sTemp=L_IDH_redefKeyManagementServer_TEXT;
break;
			case 'IDH_redefLocale':
			L_IDH_redefLocale_TEXT='(地區設定：與給定語言及國家相對應的資訊集。地區設定碼的設定會影響詞彙 (如關鍵字) 的語言，它還定義地區特定的設定 (如日期格式及字元排序順序)。)';
sTemp=L_IDH_redefLocale_TEXT;
break;
			case 'IDH_redefMailbox':
			L_IDH_redefMailbox_TEXT='(信箱：Microsoft Exchange 伺服器上傳遞您電子郵件的位置。您的管理員為每個使用者都設定一個信箱。如果您將個人資料夾檔案指定為您的電子郵件傳遞位置，則郵件會從您的信箱傳遞到此位置。)';
sTemp=L_IDH_redefMailbox_TEXT;
break;
			case 'IDH_redefMailDeliveryService':
			L_IDH_redefMailDeliveryService_TEXT='(郵件傳遞服務：一種資訊服務，用於設定 Outlook (及其他郵件傳送程式) 來傳送及接收電子郵件。例如使用網際網路郵件傳遞服務，您可以在 Outlook 中透過網際網路傳送及接收郵件。)';
sTemp=L_IDH_redefMailDeliveryService_TEXT;
break;
			case 'IDH_redefMailingAddress':
			L_IDH_redefMailingAddress_TEXT='(郵寄地址：當您建立連絡人時，您最多可以為其輸入三個地址。您選取一個地址作為郵寄地址，該地址即成為主要地址，它會顯示在大部份檢視中，並用於 Microsoft Word 中的合併列印。)';
sTemp=L_IDH_redefMailingAddress_TEXT;
break;
			case 'IDH_redefMasterCategoryList':
			L_IDH_redefMasterCategoryList_TEXT='(主要類別清單：一種類別清單，您使用它來群組項目或尋找項目。此清單包含一般類別 (如「商務」、「個人」及「電話」)。您可以向此清單新增類別，及從此清單刪除類別。)';
sTemp=L_IDH_redefMasterCategoryList_TEXT;
break;
			case 'IDH_redefMessageClass':
			L_IDH_redefMessageClass_TEXT='(郵件類別：Microsoft Exchange 使用它來識別、尋找及開啟表單。)';
sTemp=L_IDH_redefMessageClass_TEXT;
break;
			case 'IDH_redefMessageHeader':
			L_IDH_redefMessageHeader_TEXT='(郵件標題：摘要資訊，您將其下載到您的電腦，以判定是否要從伺服器下載、複製或刪除整個郵件。標題包括這些欄位：[主旨]、[寄件者]、[收到日期]、[重要性]、[附件] 及 [大小]。)';
sTemp=L_IDH_redefMessageHeader_TEXT;
break;
			case 'IDH_redefMessageList':
			L_IDH_redefMessageList_TEXT='(郵件清單：主要 Outlook 視窗的中間部份，顯示所選取資料夾的內容。)';
sTemp=L_IDH_redefMessageList_TEXT;
break;
			case 'IDH_redefMessageTag':
			L_IDH_redefMessageTag_TEXT='(標幟：指示需要您或其他人進行待處理動作的符號。)';
sTemp=L_IDH_redefMessageTag_TEXT;
break;
			case 'IDH_redefModeless':
			L_IDH_redefModeless_TEXT='(非強制回應：一種視窗或對話方塊，不需要使用者執行動作，即可將焦點切換到其他表單或對話方塊。)';
sTemp=L_IDH_redefModeless_TEXT;
break;
			case 'IDH_redefNamedExpression':
			L_IDH_redefNamedExpression_TEXT='(具名引數：一種引數，它具有在欄位中預先定義的名稱。您可以使用具名引數來以任意順序指定值，而不是按照語法要求的順序來為引數提供值。)';
sTemp=L_IDH_redefNamedExpression_TEXT;
break;
			case 'IDH_redefNetMeeting':
			L_IDH_redefNetMeeting_TEXT='(NetMeeting：用於透過音訊及視訊進行通訊的 Microsoft 會議軟體，它在 Windows 程式中以群組方式運作、在電子白板上交換圖形、轉換檔案或使用文字進行聊天。)';
sTemp=L_IDH_redefNetMeeting_TEXT;
break;
			case 'IDH_redefNewGroup':
			L_IDH_redefNewGroup_TEXT='(新群組：具有相同屬性的名稱集合。例如您可建立可一起討論電影一組人，以及可一起討論釣魚的一組人。)';
sTemp=L_IDH_redefNewGroup_TEXT;
break;
			case 'IDH_redefNewsgroup':
			L_IDH_redefNewsgroup_TEXT='(新聞群組：由個人張貼到新聞伺服器 (由公司、群組或個人所維護的電腦) 的郵件集合。部份新聞群組受到監控，但大部份不受監控；能夠存取該群組的所有人都可張貼及讀取郵件。)';
sTemp=L_IDH_redefNewsgroup_TEXT;
break;
			case 'IDH_redefNewsServer':
			L_IDH_redefNewsServer_TEXT='(新聞伺服器：由公司、群組或個人所維護的電腦，可儲存郵件用於線上討論群組 (如新聞群組或論壇)。)';
sTemp=L_IDH_redefNewsServer_TEXT;
break;
			case 'IDH_redefNNTP':
			L_IDH_redefNNTP_TEXT='(NNTP：一種通訊協定，它可使用新聞的可靠資料流型傳輸，來分送、查詢、擷取及張貼新聞文章。設計用於在中央資料庫中儲存文章，允許訂閱者僅選取他們想要擷取的內容。)';
sTemp=L_IDH_redefNNTP_TEXT;
break;
			case 'IDH_redefNull':
			L_IDH_redefNull_TEXT='(Null：指示變數未包含有效資料的一種值。Null 是將 Null 明確指定給變數的結果，或是包含 Null 之運算式間任意運算的結果。)';
sTemp=L_IDH_redefNull_TEXT;
break;
			case 'IDH_redefOfflineFolderFile':
			L_IDH_redefOfflineFolderFile_TEXT='(離線資料夾檔案：您硬碟上包含離線資料夾的檔案。離線資料夾檔案的副檔名為 .ost。您可在設定 Outlook 時或在首次離線使用資料夾時自動建立。)';
sTemp=L_IDH_redefOfflineFolderFile_TEXT;
break;
			case 'IDH_redefOLEContainerControls':
			L_IDH_redefOLEContainerControls_TEXT='(OLE 容器控制項：Visual Basic 控制項，在 Visual Basic 應用程式中，可用來從其他應用程式連結及內嵌物件。)';
sTemp=L_IDH_redefOLEContainerControls_TEXT;
break;
			case 'IDH_redefOptional':
			L_IDH_redefOptional_TEXT='(選擇性：當將與會者標示為選擇性時，則對該人的會議要求會傳遞該約會是 FYI (參考資訊)。該人可在「行事曆」中刪除 FYI 約會或對其進行檢視，但無法接受或拒絕。)';
sTemp=L_IDH_redefOptional_TEXT;
break;
			case 'IDH_redefOutlookWebAccess':
			L_IDH_redefOutlookWebAccess_TEXT='(Outlook Web Access：如果您離開電腦，或者如果您與其他人共用電腦，則您可以使用 Outlook Web Access，從任意瀏覽器安全地存取您的 Microsoft Exchange 伺服器資訊。)';
sTemp=L_IDH_redefOutlookWebAccess_TEXT;
break;
			case 'IDH_redefOutOfOffice':
			L_IDH_redefOutOfOffice_TEXT='(不在辦公室：標示為不在辦公室的時段，會與實心可用性指標及有陰影的約會背景一同顯示，且當其他人檢視您的「行事曆」時，它們顯示為不可使用。)';
sTemp=L_IDH_redefOutOfOffice_TEXT;
break;
			case 'IDH_redefPersonalAddressBook':
			L_IDH_redefPersonalAddressBook_TEXT='(個人通訊錄：自訂的通訊錄，用於儲存您經常使用的個人電子郵件地址。不過，「連絡人」提供的功能更加進階。「個人通訊錄」檔案的副檔名為 .pab，可以將該檔案複製到磁碟。)';
sTemp=L_IDH_redefPersonalAddressBook_TEXT;
break;
			case 'IDH_redefPersonalDistributionList':
			L_IDH_redefPersonalDistributionList_TEXT='(個人通訊群組清單：您建立的電子郵件別名立並將其新增到「Outlook 通訊錄」的電子郵件地址集合。當您將郵件傳送至通訊群組清單時，該郵件會傳送到清單中的每個電子郵件地址。)';
sTemp=L_IDH_redefPersonalDistributionList_TEXT;
break;
			case 'IDH_redefPi':
			L_IDH_redefPi_TEXT='(Pi：一個數學常數，大約等於 3.1415926535897932。)';
sTemp=L_IDH_redefPi_TEXT;
break;
			case 'IDH_redefPlaceholder':
			L_IDH_redefPlaceholder_TEXT='(預留位置：出於安全性考量而遮罩或隱藏其他字元的一種字元。例如，當使用者鍵入密碼時，螢幕上會顯示星號來代替所鍵入的每個字元。)';
sTemp=L_IDH_redefPlaceholder_TEXT;
break;
			case 'IDH_redefPost':
			L_IDH_redefPost_TEXT='(張貼：您傳送到資料夾 (而不是人員) 的資訊。通常，您向公用資料夾張貼資訊，以參與線上討論。)';
sTemp=L_IDH_redefPost_TEXT;
break;
			case 'IDH_redefPostOfficeProtocolVersion3POP3':
			L_IDH_redefPostOfficeProtocolVersion3POP3_TEXT='(POP3：用於從網際網路電子郵件伺服器擷取電子郵件的一般通訊協定。)';
sTemp=L_IDH_redefPostOfficeProtocolVersion3POP3_TEXT;
break;
			case 'IDH_redefPreviewPane':
			L_IDH_redefPreviewPane_TEXT='(預覽窗格：「收件匣」右下方的區域，如果您已開啟預覽窗格，則無需開啟項目即可在其中檢視所選取項目的內容。)';
sTemp=L_IDH_redefPreviewPane_TEXT;
break;
			case 'IDH_redefPrintStyle':
			L_IDH_redefPrintStyle_TEXT='(列印樣式：決定項目之列印方式的紙張及頁面設定組合。Outlook 提供內建的列印樣式，您也可以建立您自己的列印樣式。)';
sTemp=L_IDH_redefPrintStyle_TEXT;
break;
			case 'IDH_redefPrivate':
			L_IDH_redefPrivate_TEXT='(私人：其他人員無法看到標示為私人的項目 (即使他們有權存取您的資料夾)。)';
sTemp=L_IDH_redefPrivate_TEXT;
break;
			case 'IDH_redefPropertyPage':
			L_IDH_redefPropertyPage_TEXT='(屬性頁：屬性群組，顯示為屬性工作表的索引頁。)';
sTemp=L_IDH_redefPropertyPage_TEXT;
break;
			case 'IDH_redefRecurring':
			L_IDH_redefRecurring_TEXT='(週期性：重複發生的項目。例如，定期發生的約會或工作 (如每週狀態會議或每月理髮) 可以指定為週期性。)';
sTemp=L_IDH_redefRecurring_TEXT;
break;
			case 'IDH_redefReminders':
			L_IDH_redefReminders_TEXT='(提醒：在約會、會議或工作之前定期顯示的郵件，宣告活動定於何時發生。Outlook 每次執行時都會顯示提醒，即使它不是使用中的程式也一樣。)';
sTemp=L_IDH_redefReminders_TEXT;
break;
			case 'IDH_redefResource':
			L_IDH_redefResource_TEXT='(資源：會議所需的房間、電腦或任何設備。您可以查詢資源的可用性、比較排程，以及在其「行事曆」中圈定時間。您將資源引入到會議的方式與您邀請人員的方式相同。)';
sTemp=L_IDH_redefResource_TEXT;
break;
			case 'IDH_redefRule':
			L_IDH_redefRule_TEXT='(規則：一或多個自動動作，動作的對象是符合特定條件及任何例外條件的電子郵件及會議邀請。規則也稱為篩選。)';
sTemp=L_IDH_redefRule_TEXT;
break;
			case 'IDH_redefRuntimeError':
			L_IDH_redefRuntimeError_TEXT='(執行階段錯誤：在欄位中顯示為 #ERROR 的錯誤。當函數嘗試的運算無效時，即會導致執行階段錯誤。)';
sTemp=L_IDH_redefRuntimeError_TEXT;
break;
			case 'IDH_redefSecurePasswordAuthentication':
			L_IDH_redefSecurePasswordAuthentication_TEXT='(安全密碼驗證 (SPA)：一種功能，可讓伺服器確認登入人員的身份。)';
sTemp=L_IDH_redefSecurePasswordAuthentication_TEXT;
break;
			case 'IDH_redefSeed':
			L_IDH_redefSeed_TEXT='(種子：用於產生虛擬亂數的起始值。)';
sTemp=L_IDH_redefSeed_TEXT;
break;
			case 'IDH_redefServerScripts':
			L_IDH_redefServerScripts_TEXT='(伺服器指令碼：內嵌於 .asp 檔案 (動態伺服器網頁) 的陳述式。當瀏覽器要求網頁時 (但在內容傳送到瀏覽器之前)，Microsoft Internet Information Server (IIS) 會執行指令碼。)';
sTemp=L_IDH_redefServerScripts_TEXT;
break;
			case 'IDH_redefSession':
			L_IDH_redefSession_TEXT='(作業階段：用戶端使用郵件傳送系統的一段時間。)';
sTemp=L_IDH_redefSession_TEXT;
break;
			case 'IDH_redefShortcut':
			L_IDH_redefShortcut_TEXT='(捷徑：主要 Outlook 視窗左邊 [功能窗格] 中 [捷徑] 窗格中的圖示及相關名稱，可提供對資料夾快速存取。您可以建立您自己的捷徑，也可以移除每個群組中的現有捷徑。)';
sTemp=L_IDH_redefShortcut_TEXT;
break;
			case 'IDH_redefShortcutBar':
			L_IDH_redefShortcutBar_TEXT='(Outlook 功能區：Outlook 視窗左邊的欄，包括群組 (如「其他」或「其他捷徑」) 及每個群組內的捷徑。按一下群組可顯示群組中的捷徑。按一下捷徑即可快速存取資料夾。)';
sTemp=L_IDH_redefShortcutBar_TEXT;
break;
			case 'IDH_redefSimpleMailTransferProtocolSMTP':
			L_IDH_redefSimpleMailTransferProtocolSMTP_TEXT='(簡易郵件傳送通訊協定 (SMTP)：用於透過網際網路傳送電子郵件的一般通訊協定。)';
sTemp=L_IDH_redefSimpleMailTransferProtocolSMTP_TEXT;
break;
			case 'IDH_redefsRecurrence':
			L_IDH_redefsRecurrence_TEXT='(週期：在您指定的間隔時間重複約會或工作。)';
sTemp=L_IDH_redefsRecurrence_TEXT;
break;
			case 'IDH_redefSubmitted':
			L_IDH_redefSubmitted_TEXT='(送出：當郵件已送出，存放提供者會將郵件置於其外寄佇列中，佇列程式會從佇列中將郵件挑選出來，並傳送到一或多個傳輸提供者以進行傳遞。)';
sTemp=L_IDH_redefSubmitted_TEXT;
break;
			case 'IDH_redefTable':
			L_IDH_redefTable_TEXT='(表格：一種檢視類型，顯示項目 (列) 及其屬性 (欄) 的清單。使用此檢視表，可以顯示項目的詳細資料。表格是 [收件匣] 及 [工作] 的預設檢視類型。)';
sTemp=L_IDH_redefTable_TEXT;
break;
			case 'IDH_redefTarget':
			L_IDH_redefTarget_TEXT='(目標：使用者將拖曳的物件放到其上的物件。)';
sTemp=L_IDH_redefTarget_TEXT;
break;
			case 'IDH_redefTask':
			L_IDH_redefTask_TEXT='(工作：完成之前想要追蹤的個人或與工作相關的職責或使命。)';
sTemp=L_IDH_redefTask_TEXT;
break;
			case 'IDH_redefTaskList':
			L_IDH_redefTaskList_TEXT='(工作清單：出現在 [工作] 資料夾，和「行事曆」的 [工作清單] 中之工作的清單。)';
sTemp=L_IDH_redefTaskList_TEXT;
break;
			case 'IDH_redefTaskPad':
			L_IDH_redefTaskPad_TEXT='(工作清單：「行事曆」中工作的清單。)';
sTemp=L_IDH_redefTaskPad_TEXT;
break;
			case 'IDH_redefTaskRequest':
			L_IDH_redefTaskRequest_TEXT='(工作要求：在電子郵件中傳送的要求，要求收件者完成工作。如果收件者接受該項工作，則會將該項工作新增到收件者的工作清單中，而收件者就成為該項工作的新擁有人。)';
sTemp=L_IDH_redefTaskRequest_TEXT;
break;
			case 'IDH_redefTenative':
			L_IDH_redefTenative_TEXT='(暫訂：標示為暫訂的時間段，它與條紋可用性指標一同出現，且在其他人檢視您的「行事曆」時顯示為可用。)';
sTemp=L_IDH_redefTenative_TEXT;
break;
			case 'IDH_redefTimeline':
			L_IDH_redefTimeline_TEXT='(時刻表：一種檢視類型，依時間刻度自左向右顯示項目。使用此檢視可以依時間顯示項目。時刻表是 [日誌] 的預設檢視類型。)';
sTemp=L_IDH_redefTimeline_TEXT;
break;
			case 'IDH_redefUnbound':
			L_IDH_redefUnbound_TEXT='(未結合：與功能變數無關的控制項。)';
sTemp=L_IDH_redefUnbound_TEXT;
break;
			case 'IDH_redefUpdateList':
			L_IDH_redefUpdateList_TEXT='(更新清單：此清單包括起初傳送工作要求 (以及接收工作要求之每個人的名稱)、重新將工作指派給別人，或選擇在其工作清單中保留工作更新複本的人員名稱。)';
sTemp=L_IDH_redefUpdateList_TEXT;
break;
			case 'IDH_redefVarientExpression':
			L_IDH_redefVarientExpression_TEXT='(變量運算式：算出數值、字串或日期資料，以及特殊值 (Empty 及 Null) 的任何運算式。)';
sTemp=L_IDH_redefVarientExpression_TEXT;
break;
			case 'IDH_redefViews':
			L_IDH_redefViews_TEXT='(檢視：檢視將資料夾中的資訊置於不同的排列方式及格式中，讓您以不同的方式查看相同的資訊。每個資料夾都有標準檢視。您還可以建立自訂檢視。)';
sTemp=L_IDH_redefViews_TEXT;
break;
			case 'IDH_redefViewType':
			L_IDH_redefViewType_TEXT='(檢視類型：檢視的基本結構。當您建立檢視時，必須先選取五種檢視類型中的一種 (表格、時刻表、日期/星期/月份、卡片或圖示)，以決定資訊在新檢視中的排列方式及格式設定。)';
sTemp=L_IDH_redefViewType_TEXT;
break;
			case 'IDH_redefWeekNumber':
			L_IDH_redefWeekNumber_TEXT='(週數：年中的星期數都被指定了 1 到 52 的數字 (又稱週數)。當您啟用週數時，它們會出現在「行事曆」中 [日期導覽] 的左側。)';
sTemp=L_IDH_redefWeekNumber_TEXT;
break;
			case 'IDH_redefZorder':
			L_IDH_redefZorder_TEXT='(圖層順序：表單上控制項沿 Z 軸 (深度) 的可見分層。圖層順序決定哪些控制項在其他控制項之前。)';
sTemp=L_IDH_redefZorder_TEXT;
break;
			case 'olalternatecalendar':
			L_olalternatecalendar_TEXT='(其他行事曆：在 Outlook 內選取的行事曆。)';
sTemp=L_olalternatecalendar_TEXT;
break;
			case 'olarrangement':
			L_olarrangement_TEXT='(排列方式：表格檢視中已進行群組並排序郵件的預先定義組合。)';
sTemp=L_olarrangement_TEXT;
break;
			case 'olauthentication':
			L_olauthentication_TEXT='(驗證：驗證人員是他們所聲明之身份的過程。例如，藉由使用簽發憑證授權單位 (CA) 驗證它來確認寄件者數位簽章的來源及完整性。)';
sTemp=L_olauthentication_TEXT;
break;
			case 'OlAvailabilityIndicator':
			L_OlAvailabilityIndicator_TEXT='(可用性指標：出現在會議或約會的左側 (或在選取時出現在項目周圍)，指出空閒、暫訂、忙碌、不在辦公室或無可用資訊等時間狀態。僅在日及工作週檢視中可見。)';
sTemp=L_OlAvailabilityIndicator_TEXT;
break;
			case 'OlBcc':
			L_OlBcc_TEXT='(密件副本 (Bcc)：密件副本的縮寫。如果您在郵件中將收件者的名字新增到此方塊中，則會向該收件者傳送一份郵件複本，但郵件的其他收件者看不到該收件者的名字。)';
sTemp=L_OlBcc_TEXT;
break;
			case 'olcer':
			L_olcer_TEXT='(.cer 檔案：包含有公開金鑰 (而不是私密金鑰) 之憑證的檔案。藉由按一下 [憑證] 索引標籤中的 [匯入] 將 .cer 檔案匯入 [連絡人] 中，然後使用憑證來傳送加密的郵件。)';
sTemp=L_olcer_TEXT;
break;
			case 'OlCertificate':
			L_OlCertificate_TEXT='(憑證：證明您身份的數位方法。當您傳送數位簽章的郵件時，即會傳送您的憑證及公開金鑰。憑證由憑證授權單位所簽發 (與駕駛執照一樣) 會過期也會被撤銷。)';
sTemp=L_OlCertificate_TEXT;
break;
			case 'olcertificateauthority':
			L_olcertificateauthority_TEXT='(憑證授權單位 (CA)：類似於公證人的實體，追蹤被指定憑證的人員，簽發憑證以驗證其有效性，追蹤哪些憑證被撤銷或過期。)';
sTemp=L_olcertificateauthority_TEXT;
break;
			case 'olcertificaterevocationchecking':
			L_olcertificaterevocationchecking_TEXT='(憑證撤銷檢查：查看用於簽發郵件的憑證是否有效的方法。Outlook 可以從簽發憑證授權單位的資料庫檢查憑證的狀態。也稱為憑證撤消清單 (CRL)。)';
sTemp=L_olcertificaterevocationchecking_TEXT;
break;
			case 'olcertificationhierarchy':
			L_olcertificationhierarchy_TEXT='(憑證階層：一種結構，憑證授權單位可以藉由數位簽章其他憑證授權單位的憑證來驗證這些憑證。這會建立「信任鏈」，增加憑證的可信度。)';
sTemp=L_olcertificationhierarchy_TEXT;
break;
			case 'olconferenceresource':
			L_olconferenceresource_TEXT='(會議資源：配置特定數量連線的 Microsoft Exchange 信箱。此資源可作為線上會議的虛擬房間。您將資源引入到線上會議的方式與您為會議預留房間的方式相同。)';
sTemp=L_olconferenceresource_TEXT;
break;
			case 'OlContact':
			L_OlContact_TEXT='(連絡人：組織內或組織外的人員，您可以儲存其幾種類型的相關資訊，如街道及電子郵件地址、電話及傳真號碼，以及網頁 URL。)';
sTemp=L_OlContact_TEXT;
break;
			case 'OlContactIndex':
			L_OlContactIndex_TEXT='(連絡人索引：一組按鈕，用於在 [地址卡] 或 [詳細地址卡] 檢視中顯示的連絡人項目之間移動。[連絡人索引] 會將焦點移至姓名以所選字元開頭的第一位連絡人。)';
sTemp=L_OlContactIndex_TEXT;
break;
			case 'olcookie':
			L_olcookie_TEXT='(Cookie：伺服器放置在用戶端電腦上的資料區塊，可為未來的連線識別用戶端。)';
sTemp=L_olcookie_TEXT;
break;
			case 'oldecrypt':
			L_oldecrypt_TEXT='(解密：將加密 (已編碼) 文字轉換回可讀取之純文字的過程。收件者使用他們的私密金鑰將傳送給他們的電子郵件解密 (解除鎖定)。)';
sTemp=L_oldecrypt_TEXT;
break;
			case 'OlDefaultDataFile':
			L_OlDefaultDataFile_TEXT='(預設資料檔：用作您電子郵件主要傳送位置的個人資料夾檔案 (.pst) 資料檔。)';
sTemp=L_OlDefaultDataFile_TEXT;
break;
			case 'oldes':
			L_oldes_TEXT='(3DES：基於「資料加密標準 (DES)」的加密演算法。三重 DES (3DES) 重複 DES 三次。因此 3DES 執行的速度要比標準 DES 慢。不過它更安全。)';
sTemp=L_oldes_TEXT;
break;
			case 'OlDigitalId':
			L_OlDigitalId_TEXT='(數位 ID：包含留在寄件者電腦上的私密金鑰及憑證 (含有公開金鑰)。憑證是使用數位簽章的郵件傳送的。收件者儲存憑證並使用公開金鑰加密給寄件者的郵件。)';
sTemp=L_OlDigitalId_TEXT;
break;
			case 'oldigitalsignature':
			L_oldigitalsignature_TEXT='(數位簽章：郵件資料演算法的應用程式，用於向收件者證明郵件來自寄件者 (而不是來自冒充者) 而且郵件未變更。包括寄件者的憑證 (含有公開金鑰)。)';
sTemp=L_oldigitalsignature_TEXT;
break;
			case 'OlEmailAccount':
			L_OlEmailAccount_TEXT='(電子郵件帳號：Outlook 用來連線到電子郵件服務的伺服器名稱、使用者名稱、密碼及電子郵件地址。使用管理員或網際網路服務提供者 (ISP) 提供的資訊，您可以在 Outlook 中建立電子郵件帳號。)';
sTemp=L_OlEmailAccount_TEXT;
break;
			case 'olencrypt':
			L_olencrypt_TEXT='(加密：將可讀取之純文字轉換成加密 (已編碼) 文字的過程。寄件者使用收件者的公開金鑰來加密 (鎖定) 電子郵件及附件。)';
sTemp=L_olencrypt_TEXT;
break;
			case 'OlEncryption':
			L_OlEncryption_TEXT='(加密：將資料編碼，以防止未授權存取的處理過程。除具有能夠解密郵件之公開金鑰的收件者外 (因為該金鑰與寄件者用於加密郵件的私密金鑰相符)，任何人都無法讀取加密的郵件。)';
sTemp=L_OlEncryption_TEXT;
break;
			case 'olepf':
			L_olepf_TEXT='(.epf 檔案：Outlook 用於匯入或匯出從 Microsoft Exchange Key Management Server 取得之數位 ID (憑證及私密金鑰) 的檔案類型。)';
sTemp=L_olepf_TEXT;
break;
			case 'oleventaddress':
			L_oleventaddress_TEXT='(事件位址：類似 URL 的位址，可提供網路存取 Microsoft Windows Media Services 事件 (如現場廣播)。與會者可跳至此位址以檢視電腦上的事件。)';
sTemp=L_oleventaddress_TEXT;
break;
			case 'olhacker':
			L_olhacker_TEXT='(駭客：常用術語，專指想刻意製造損毀而非法存取電腦系統或網路之人。)';
sTemp=L_olhacker_TEXT;
break;
			case 'OlHttp':
			L_OlHttp_TEXT='(HTTP (超文字傳輸協定)：您從網際網路存取網頁時使用的通訊協定。Outlook 將 HTTP 用作電子郵件通訊協定。)';
sTemp=L_OlHttp_TEXT;
break;
			case 'OlImap':
			L_OlImap_TEXT='(IMAP (網際網路訊息存取通訊協定)：與網際網路電子郵件通訊協定 (如 POP3) 不同，IMAP 在伺服器上建立資料夾來儲存/組織郵件，供其他電腦擷取。您只能讀取郵件標題，並選取要下載的郵件。)';
sTemp=L_OlImap_TEXT;
break;
			case 'OlInfobar':
			L_OlInfobar_TEXT='(資訊列：開啟的電子郵件、約會、連絡人或工作頂端附近的橫幅。提醒您郵件已回覆或轉寄，並告知您使用「即時訊息」之連絡人的線上狀態等等。)';
sTemp=L_OlInfobar_TEXT;
break;
			case 'olinvalid':
			L_olinvalid_TEXT='(無效：指有如下狀態的憑證，Outlook 已針對憑證授權單位的資料庫進行檢查並發現憑證不合法或沒有時效的憑證。憑證也可能會過期或已被撤銷。)';
sTemp=L_olinvalid_TEXT;
break;
			case 'oljunksenderslist':
			L_oljunksenderslist_TEXT='(封鎖的寄件者清單：您想使其被封鎖之網域名稱及電子郵件地址的清單。此清單上的電子郵件地址及網域名稱一律被當作垃圾郵件。)';
sTemp=L_oljunksenderslist_TEXT;
break;
			case 'olkerberosprotocol':
			L_olkerberosprotocol_TEXT='(Kerberos 通訊協定：網路安全性通訊協定，它使用加密來提供用戶端與伺服器之間或者一個伺服器與其他伺服器之間的互相驗證 (在開啟網路連線之前)。)';
sTemp=L_olkerberosprotocol_TEXT;
break;
			case 'olnavigationpane':
			L_olnavigationpane_TEXT='(功能窗格：包括窗格 (如 [捷徑] 或 [郵件]) 及每一個窗格內捷徑或資料夾之 Outlook 視窗左側上的欄。按一下資料夾即可顯示資料夾中的項目。)';
sTemp=L_olnavigationpane_TEXT;
break;
			case 'olnonrepudiation':
			L_olnonrepudiation_TEXT='(不可否認性：寄件者無法否認對其電子郵件的責任，收件者無法聲明他們未曾取得郵件。數位簽章及 S/MIME 回條皆有助於確定不可否認性。)';
sTemp=L_olnonrepudiation_TEXT;
break;
			case 'OlOutlookUserProfile':
			L_OlOutlookUserProfile_TEXT='(Outlook 使用者設定檔：一組電子郵件帳號及通訊錄。使用者通常只需要一個設定檔，但可以建立多個，每個都帶有一組電子郵件帳號及通訊錄。如果有多個使用者在使用電腦，則多個設定檔十分有用。)';
sTemp=L_OlOutlookUserProfile_TEXT;
break;
			case 'OlOwnerPermission':
			L_OlOwnerPermission_TEXT='(擁有人權限：具有擁有人權限，您可以建立、讀取、修改及刪除所有項目及檔案，並可以建立子資料夾。作為資料夾的擁有人，您可以變更其他人對資料夾的權限層次。此權限並不適用於委派。)';
sTemp=L_OlOwnerPermission_TEXT;
break;
			case 'OlPersonalFoldersFile':
			L_OlPersonalFoldersFile_TEXT='(個人資料夾檔案 (.pst)：電腦上儲存郵件及其他項目的資料檔。您可以指定 .pst 檔作為電子郵件的預設傳送位置。還可以使用 .pst 來組織及備份項目，以保證安全。)';
sTemp=L_OlPersonalFoldersFile_TEXT;
break;
			case 'olpfx':
			L_olpfx_TEXT='(.pfx 檔案：「個人交換檔案」類型，Outlook 使用它來匯入或匯出 S\MIME 安全性中使用的數位 ID (憑證及私密金鑰)。)';
sTemp=L_olpfx_TEXT;
break;
			case 'OlPrimaryCalendar':
			L_OlPrimaryCalendar_TEXT='(主要行事曆：在 [控制台] 中的地區選項中選取的行事曆或系統行事曆。)';
sTemp=L_OlPrimaryCalendar_TEXT;
break;
			case 'olprivatekey':
			L_olprivatekey_TEXT='(私密金鑰：留在寄件者電腦上的秘密金鑰，寄件者使用它將收件者的郵件進行數位簽章，並將來自收件者的郵件解密 (解除鎖定)。私密金鑰應受密碼保護。)';
sTemp=L_olprivatekey_TEXT;
break;
			case 'olpublickey':
			L_olpublickey_TEXT='(公開金鑰：寄件者將此金鑰提供給收件者，以便收件者可以驗證寄件者的簽章並確認郵件未變更。收件者還可使用公開金鑰來加密 (鎖定) 給寄件者的電子郵件。)';
sTemp=L_olpublickey_TEXT;
break;
			case 'olremoteprocedurecallrpc':
			L_olremoteprocedurecallrpc_TEXT='(遠端程序呼叫 (RPC)：在程序設計中，在遠端系統上由一支程式到第二支程式的要求。第二支程式通常執行工作並將該工作的結果傳回給第一支程式。)';
sTemp=L_olremoteprocedurecallrpc_TEXT;
break;
			case 'olrootauthority':
			L_olrootauthority_TEXT='(根授權：位於憑證階層頂端，另有數個憑證授權單位的憑證授權單位 (CA) (稱為「信任鏈」)；每一個 CA 都驗證下一個 CA 的真實性。根 CA 有自行簽名的憑證。)';
sTemp=L_olrootauthority_TEXT;
break;
			case 'olsearchfolders':
			L_olsearchfolders_TEXT='(搜尋資料夾：包含符合特定搜尋篩選條件之所有電子郵件項目檢視的虛擬資料夾。項目仍然儲存在一個或多個 Outlook 資料夾中。)';
sTemp=L_olsearchfolders_TEXT;
break;
			case 'OlSecondaryCalendar':
			L_OlSecondaryCalendar_TEXT='(次要行事曆：在 Outlook 內選取的替代行事曆。當啟用雙行事曆支援時，次要行事曆即會出現。)';
sTemp=L_OlSecondaryCalendar_TEXT;
break;
			case 'olsecuritylabel':
			L_olsecuritylabel_TEXT='(安全性標籤：安全的電子郵件功能，可讓您將敏感標籤 (如「僅限內部使用」) 新增到郵件標題。您組織中的安全性標籤由您的電子郵件管理員設定的安全性原則所控制。)';
sTemp=L_olsecuritylabel_TEXT;
break;
			case 'OlSendReceiveGroup':
			L_OlSendReceiveGroup_TEXT='([傳送接收] 群組：可以群組並能設定通用選項的電子郵件帳號及資料夾，對象如：是否下載標題或郵件、下載郵件的大小限制、線上及離線行為，以及連接伺服器的時間間隔。)';
sTemp=L_OlSendReceiveGroup_TEXT;
break;
			case 'OlShortcutGroup':
			L_OlShortcutGroup_TEXT='(捷徑群組：可在 [捷徑] 窗格中顯示的資料夾捷徑群組之一。)';
sTemp=L_OlShortcutGroup_TEXT;
break;
			case 'olshortcutspane':
			L_olshortcutspane_TEXT='(捷徑窗格：包含捷徑及捷徑群組之 [功能窗格] 中的區域。使用 [功能窗格] 底端的 [捷徑] 按鈕即可存取。按一下 [捷徑] 窗格中的群組即可顯示群組中的捷徑。)';
sTemp=L_olshortcutspane_TEXT;
break;
			case 'olsmime':
			L_olsmime_TEXT='(S/MIME：「安全多用途網際網路郵件延伸 (S/MIME)」是安全電子郵件的規格，其對數位憑證使用 X.509 格式並使用不同的加密演算法 (如 3DES)。)';
sTemp=L_olsmime_TEXT;
break;
			case 'olsmimereceipt':
			L_olsmimereceipt_TEXT='(S/MIME 回條：電子郵件安全性功能，用於要求確認接收郵件時郵件未變更，以及開啟郵件之人員與時間的相關資訊。此驗證資訊會作為郵件傳回到您的「收件匣」中。)';
sTemp=L_olsmimereceipt_TEXT;
break;
			case 'OlTemplate':
			L_OlTemplate_TEXT='(範本：可用作主控文件的一種特殊文件。Outlook 範本的副檔名為 .oft。)';
sTemp=L_OlTemplate_TEXT;
break;
			case 'oltoken':
			L_oltoken_TEXT='(憑證：Microsoft Exchange Server 簽發給 Outlook，以便在「金鑰管理服務 (KMS)」中註冊的特殊隨機文字字串。然後 Outlook 使用該憑證將安全回應傳送給 Exchange 伺服器以完成 KMS 註冊。)';
sTemp=L_oltoken_TEXT;
break;
			case 'oltrust':
			L_oltrust_TEXT='(信任：指出您是否信任向其簽發憑證的個人或群組。預設設定是「沿用發行者的信任」，這表示因為通常憑證授權單位信任發行者所以信任憑證。)';
sTemp=L_oltrust_TEXT;
break;
			case 'oltrustedrecipientslist':
			L_oltrustedrecipientslist_TEXT='(安全收件者清單：此清單包含郵件清單或其他訂閱網域以及您所屬且用來接收郵件的電子郵件地址。傳送到這些地址的郵件將不會被當作垃圾郵件。)';
sTemp=L_oltrustedrecipientslist_TEXT;
break;
			case 'oltrustedsenderslist':
			L_oltrustedsenderslist_TEXT='(安全寄件者清單：您想要接收其郵件之網域名稱及電子郵件地址的清單。預設會在此清單中包含 [連絡人] 及 [全域通訊錄] 中的電子郵件地址。)';
sTemp=L_oltrustedsenderslist_TEXT;
break;
			case 'olvalid':
			L_olvalid_TEXT='(有效：指有如下狀態的憑證，Outlook 已針對憑證授權單位的資料庫進行檢查並發現，憑證為合法且有時效的憑證。憑證未過期也未被撤銷。)';
sTemp=L_olvalid_TEXT;
break;
			case 'olvirtualprivatenetworkvpn':
			L_olvirtualprivatenetworkvpn_TEXT='(虛擬私人網路 (VPN)：私人網路的擴充，其包含跨越共用或公用網路之已封裝、加密並驗證的連結。VPN 連線提供在「網際網路」上遠端存取及連線到私人網路。)';
sTemp=L_olvirtualprivatenetworkvpn_TEXT;
break;
			case 'OlWebProtocolToConnect':
			L_OlWebProtocolToConnect_TEXT='(連接的網頁通訊協定：若要查看您是否在使用此通訊協定，請在 [工具] 功能表上按一下 [電子郵件帳號]，再按 [檢視] 或變更現有的電子郵件帳號，再按 [下一步]。如果您確實在使用此通訊協定，則清單中的 Microsoft Exchange Server 旁會顯示網頁通訊協定。)';
sTemp=L_OlWebProtocolToConnect_TEXT;
break;
			case 'reBanner':
			L_reBanner_TEXT='(橫幅：「行事曆」中指定日期頂端所顯示的事件或假日名稱。橫幅可以跨越多天。橫幅中的項目標示為空閒時間，在您檢視「行事曆」時以白色表示。)';
sTemp=L_reBanner_TEXT;
break;
			case 'reBusy':
			L_reBusy_TEXT='(忙碌：標示為忙碌的時段，它與實心可用性指標一同出現，且在別人檢視您的行事曆時顯示為無法使用。)';
sTemp=L_reBusy_TEXT;
break;
			case 'rehowPage':
			L_rehowPage_TEXT='(頁：頁籤的另一種說法。在「Outlook 表單」設計介面中，使用頁，而不使用頁籤。例如，基於電子郵件的表單具有 [郵件] 頁。)';
sTemp=L_rehowPage_TEXT;
break;
			case 'rehowValidationFormula':
			L_rehowValidationFormula_TEXT='(驗證公式：在欄位中輸入資料時對資料進行檢查。它對可以輸入的內容設定限制或條件。)';
sTemp=L_rehowValidationFormula_TEXT;
break;
			case 'rerefMeetingSelectionBars':
			L_rerefMeetingSelectionBars_TEXT='(會議選取列：拖曳用來選取會議時間的垂直列。)';
sTemp=L_rerefMeetingSelectionBars_TEXT;
break;
			case 'rnconDatepicker':
			L_rnconDatepicker_TEXT='(日期導覽：「行事曆」中顯示目前月份的小行事曆。它提供簡單快速的方法，讓您移動約會及檢視其他日期。)';
sTemp=L_rnconDatepicker_TEXT;
break;
			case 'IDH_ppdefAnimate':
			L_IDH_ppdefAnimate_TEXT='(動畫：將特殊的視覺效果或音效新增至文字或物件中。例如，您可以讓文字項目符號點自左側飛入，每次一個字，或在抽出圖片時聽到掌聲。)';
sTemp=L_IDH_ppdefAnimate_TEXT;
break;
			case 'IDH_ppdefBroadcast':
			L_IDH_ppdefBroadcast_TEXT='(簡報廣播：此功能可讓您在網頁上執行簡報。簡報以 HTML 格式儲存，並可包含音訊及視訊。也可以記錄並儲存起來，以供稍後檢視。)';
sTemp=L_IDH_ppdefBroadcast_TEXT;
break;
			case 'IDH_ppdefCustomShow':
			L_IDH_ppdefCustomShow_TEXT='(自訂放映：簡報中的簡報，您可以將現有簡報中的投影片組合起來，如此便可以將該部份簡報播放給特定的觀眾觀看。)';
sTemp=L_IDH_ppdefCustomShow_TEXT;
break;
			case 'IDH_ppdefLobbyPage':
			L_IDH_ppdefLobbyPage_TEXT='(首頁：廣播開始前，觀眾的瀏覽器中所顯示的廣播相關資訊頁。它可以包含標題、主旨、主機名稱、廣播的相關資訊，以及廣播的倒數時間。)';
sTemp=L_IDH_ppdefLobbyPage_TEXT;
break;
			case 'PPAnimationScheme':
			L_PPAnimationScheme_TEXT='(動畫配置：將預設的視覺效果新增至投影片上的文字。動畫的內容有精緻有新奇，通常每個配置都包括投影片標題效果，以及套用至投影片上項目符號或段落的效果。)';
sTemp=L_PPAnimationScheme_TEXT;
break;
			case 'PPAntiAliasing':
			L_PPAntiAliasing_TEXT='(消除鋸齒：將圖形元素及文字中參差不齊的邊緣修平滑。消除鋸齒可以使參差不齊的線條或曲線變得平滑，方法是為鄰近的像素加上陰影。)';
sTemp=L_PPAntiAliasing_TEXT;
break;
			case 'PPChangeMarker':
			L_PPChangeMarker_TEXT='(變更標記：指定由檢閱者對簡報所作變更的圖示。)';
sTemp=L_PPChangeMarker_TEXT;
break;
			case 'PPChartEffectOptions':
			L_PPChartEffectOptions_TEXT='(圖表效果選項：可讓您依數列、類別或數列或類別中的元素，將效果套用至圖表的動畫增強功能。)';
sTemp=L_PPChartEffectOptions_TEXT;
break;
			case 'PPCustomAnimationList':
			L_PPCustomAnimationList_TEXT='([自訂動畫] 清單：一部投影片的動畫順序清單。列出項目的順序即是項目的新增順序，包含的圖示指示相對於其他動畫事件的時間。)';
sTemp=L_PPCustomAnimationList_TEXT;
break;
			case 'ppdefActionButton':
			L_ppdefActionButton_TEXT='(動作按鈕：可以插入簡報，並可為其定義超連結的現成按鈕。)';
sTemp=L_ppdefActionButton_TEXT;
break;
			case 'ppdefAutoLayout':
			L_ppdefAutoLayout_TEXT='(自動版面配置：如果您插入的項目不符合原始版面配置，此動作會自動調整版面配置。您可以使用 [自動版面配置選項] 按鈕進行復原。)';
sTemp=L_ppdefAutoLayout_TEXT;
break;
			case 'ppdefAutoshape':
			L_ppdefAutoshape_TEXT='(快取圖案：一組現成的圖案，其中包括諸如矩形及圓形等基本圖案，還有各種線條及接點、箭號圖案、流程圖符號、星星及綵帶以及圖說文字。)';
sTemp=L_ppdefAutoshape_TEXT;
break;
			case 'ppdefBackgroundColor':
			L_ppdefBackgroundColor_TEXT='(背景色彩：投影片的底色。)';
sTemp=L_ppdefBackgroundColor_TEXT;
break;
			case 'ppdefBackgroundGraphics':
			L_ppdefBackgroundGraphics_TEXT='(背景圖形：投影片上任意的圖形，包含繪圖物件、填滿背景的圖樣及圖片。)';
sTemp=L_ppdefBackgroundGraphics_TEXT;
break;
			case 'ppdefBorder':
			L_ppdefBorder_TEXT='(框線：物件邊緣周圍可見的線條。例如，矩形的四邊就是它的框線。)';
sTemp=L_ppdefBorder_TEXT;
break;
			case 'ppdefBoundingBox':
			L_ppdefBoundingBox_TEXT='(週框方塊：文字框中可以含括文字的最小矩形。了解文字週框方塊的位置及尺寸，您可以在投影片上重疊圖案，而不掩蓋任何文字。)';
sTemp=L_ppdefBoundingBox_TEXT;
break;
			case 'ppdefColorScheme':
			L_ppdefColorScheme_TEXT='(色彩配置：可以套用至投影片、備忘稿或觀眾講義的一組 8 種平衡的色彩。色彩配置的組成為：背景色彩、線條及文字的色彩，以及另外六種色彩選取用來使投影片更易於閱讀。)';
sTemp=L_ppdefColorScheme_TEXT;
break;
			case 'ppdefContentTemplate':
			L_ppdefContentTemplate_TEXT='(範本內容：包含每張投影片上文字建議的設計範本。您可以用自己的文字取代文字建議。範本內容包含投影片母片及選用的標題母片。)';
sTemp=L_ppdefContentTemplate_TEXT;
break;
			case 'ppdefDatasheet':
			L_ppdefDatasheet_TEXT='(資料工作表：圖表隨附的資料表，它提供範例資訊，顯示在何處鍵入您自己的列標籤和欄標籤以及資料。)';
sTemp=L_ppdefDatasheet_TEXT;
break;
			case 'ppdefDefaultShape':
			L_ppdefDefaultShape_TEXT='(預設圖案：包含新圖案預設格式內容的虛擬圖案。每份簡報都包含一個預設圖案。)';
sTemp=L_ppdefDefaultShape_TEXT;
break;
			case 'ppdefExtraColors':
			L_ppdefExtraColors_TEXT='(額外色彩：出於特殊目的使用的非配置色彩。它們出現在透過對話方塊控制項及工具列按鈕顯示的調色盤中。色彩配置的變更不會影響可用的額外色彩或使用額外色彩設定格式的物件。)';
sTemp=L_ppdefExtraColors_TEXT;
break;
			case 'ppdefFreeform':
			L_ppdefFreeform_TEXT='(手繪多邊形：使用「曲線」、「手繪多邊形」及「徒手畫」工具繪製的任何圖案。手繪多邊形圖案可以包括直線及手繪曲線。繪製的圖案可以是開口的或封閉的，並可以使用繪圖工具編輯。)';
sTemp=L_ppdefFreeform_TEXT;
break;
			case 'ppdefGrid':
			L_ppdefGrid_TEXT='(格線：用於對齊物件的一組交叉線。)';
sTemp=L_ppdefGrid_TEXT;
break;
			case 'ppdefGuides':
			L_ppdefGuides_TEXT='(輔助線：非列印的水平及垂直直線，用於對齊顯示的物件。)';
sTemp=L_ppdefGuides_TEXT;
break;
			case 'ppdefHighContrast':
			L_ppdefHighContrast_TEXT='(高對比：一種協助工具設定，它藉由放大視窗、工具列按鈕及字型，並以黑白兩色顯示項目的方式，變更螢幕上所顯示項目的外觀。)';
sTemp=L_ppdefHighContrast_TEXT;
break;
			case 'ppdefInteractiveEffect':
			L_ppdefInteractiveEffect_TEXT='(動畫引動程序：設定此動畫選項後，在您按一下指定的項目時即會播放動畫。)';
sTemp=L_ppdefInteractiveEffect_TEXT;
break;
			case 'ppdefLayout':
			L_ppdefLayout_TEXT='(版面配置：圖表上元件的排列方式，元件包括標題及副標題文字、清單、圖片、表格、圖表、快取圖案及影片。)';
sTemp=L_ppdefLayout_TEXT;
break;
			case 'ppdefMaster':
			L_ppdefMaster_TEXT='(母片：投影片檢視或頁面，您可以在上面定義簡報中所有投影片或頁面的格式。每份簡報中的每個主要元件 (如投影片、標題投影片、演講者備忘稿及觀眾講義) 都有母片。)';
sTemp=L_ppdefMaster_TEXT;
break;
			case 'ppdefMasterText':
			L_ppdefMasterText_TEXT='(母片文字：投影片母片上的投影片文字。母片文字決定所有投影片上的文字格式，以及文字預留位置的形狀及其在投影片上的放置方式。)';
sTemp=L_ppdefMasterText_TEXT;
break;
			case 'ppdefNotesDatabase':
			L_ppdefNotesDatabase_TEXT='(Notes 資料庫：以同一名稱儲存的文件及其表單、檢視及資料夾的集合。)';
sTemp=L_ppdefNotesDatabase_TEXT;
break;
			case 'ppdefNotesDocument':
			L_ppdefNotesDocument_TEXT='(Notes 文件：由欄位、文字、數字、圖形等組成的文件。資訊可以由使用者輸入、從其他應用程式匯入，或連結到其他應用程式以動態更新。)';
sTemp=L_ppdefNotesDocument_TEXT;
break;
			case 'ppdefNotesForm':
			L_ppdefNotesForm_TEXT='(Notes 表單：這種表單可以包含欄位、靜態文字、圖形及特殊物件，並可控制您編輯、顯示及列印文件的方式。)';
sTemp=L_ppdefNotesForm_TEXT;
break;
			case 'ppdefNotesPages':
			L_ppdefNotesPages_TEXT='(備忘稿：在備註隨附的投影片下方顯示作者備註的頁面上。)';
sTemp=L_ppdefNotesPages_TEXT;
break;
			case 'ppdefNotesPane':
			L_ppdefNotesPane_TEXT='(備註窗格：標準模式中的窗格，其中可以鍵入投影片隨附的備註。您可以將這些備註當作備忘稿列印，或在將簡報儲存為網頁時顯示。)';
sTemp=L_ppdefNotesPane_TEXT;
break;
			case 'ppdefParagraph':
			L_ppdefParagraph_TEXT='(段落：結尾帶有換行符號 (強制換行符號) 的文字，如按 ENTER 鍵換行的文字。項目符號或編號清單中的每個項目都是段落，標題或副標題也是段落。)';
sTemp=L_ppdefParagraph_TEXT;
break;
			case 'ppdefPicture':
			L_ppdefPicture_TEXT='(圖片：可以取消群組設定，並作為兩個或多個物件進行操作的檔案 (如中繼檔)，或以單一物件的形式存在的檔案 (如點陣圖)。)';
sTemp=L_ppdefPicture_TEXT;
break;
			case 'ppdefPlaceholders':
			L_ppdefPlaceholders_TEXT='(預留位置：帶有點狀或影線標記框線的方塊，大部份投影片的版面配置都包含此項目。這些方塊保留標題及本文，或像圖表、表格及圖片的物件。)';
sTemp=L_ppdefPlaceholders_TEXT;
break;
			case 'ppdefRuler':
			L_ppdefRuler_TEXT='(尺規：以英吋標示的垂直及水平輔助線，可以將其開啟或關閉。起點 (或零點標記) 依投影片上選取的項目 (文字、文字方塊或圖案) 變更。)';
sTemp=L_ppdefRuler_TEXT;
break;
			case 'ppdefSlideMaster':
			L_ppdefSlideMaster_TEXT='(投影片母片：這種投影片會儲存套用之設計範本的相關資訊 (包括字型樣式、預留位置的大小及位置、背景設計及色彩配置)。)';
sTemp=L_ppdefSlideMaster_TEXT;
break;
			case 'ppdefSlideTitleMasterPair':
			L_ppdefSlideTitleMasterPair_TEXT='(投影片母片標題組對：您套用至簡報之給定設計範本的投影片母片與標題母片。)';
sTemp=L_ppdefSlideTitleMasterPair_TEXT;
break;
			case 'ppdefTemplate':
			L_ppdefTemplate_TEXT='(簡報設計範本：此檔案包含簡報樣式，包括項目符號及字型的類型與大小、預留位置的大小及位置、背景設計及填滿色彩配置，以及投影片母片與選用的標題母片。)';
sTemp=L_ppdefTemplate_TEXT;
break;
			case 'ppdefTextAttributes':
			L_ppdefTextAttributes_TEXT='(文字屬性：文字的所有特徵，如字型、大小、樣式、色彩，或類似下標或上標的效果。)';
sTemp=L_ppdefTextAttributes_TEXT;
break;
			case 'ppdefTitleMaster':
			L_ppdefTitleMaster_TEXT='(標題母片：這種投影片存放與標題投影片樣式 (包括預留位置的大小及位置、背景設計及色彩配置) 相關的設計範本資訊。)';
sTemp=L_ppdefTitleMaster_TEXT;
break;
			case 'ppdefView':
			L_ppdefView_TEXT='(模式：顯示簡報內容的一種方式，使用者可以透過它與簡報互動。)';
sTemp=L_ppdefView_TEXT;
break;
			case 'ppdefWebArchive':
			L_ppdefWebArchive_TEXT='(網頁封存：以 MHTML 格式儲存的簡報，它將所有的支援資訊 (包括圖形及其他檔案) 納入一個檔案中。)';
sTemp=L_ppdefWebArchive_TEXT;
break;
			case 'ppdefWebPage':
			L_ppdefWebPage_TEXT='(網頁：以 HTML 格式儲存的簡報。當您將簡報儲存成網頁時，支援圖形及其他的相關檔案會儲存在相關的資料夾中。)';
sTemp=L_ppdefWebPage_TEXT;
break;
			case 'ppdefWordart':
			L_ppdefWordart_TEXT='(文字藝術師：使用現成效果建立的文字物件，您可以向其套用其他格式選項。)';
sTemp=L_ppdefWordart_TEXT;
break;
			case 'ppdefXYZAxes':
			L_ppdefXYZAxes_TEXT='(x、y 及 z 座標軸：三條互相垂直的直線，用於在笛卡兒座標系統中確定點的位置。在 Microsoft Office 繪圖層中，x 是水平的，y 是垂直的，而 z 則垂直於資料定位面。)';
sTemp=L_ppdefXYZAxes_TEXT;
break;
			case 'PPDiagramEffectOptions':
			L_PPDiagramEffectOptions_TEXT='(圖表效果選項：可讓您將效果逐一套用至圖表的動畫增強功能；例如，從金字塔圖表的頂端到底部。)';
sTemp=L_PPDiagramEffectOptions_TEXT;
break;
			case 'PPHandout':
			L_PPHandout_TEXT='(講義：簡報的列印版本，每頁可以包含多張投影片，並可包含供觀眾記錄備註的空間。)';
sTemp=L_PPHandout_TEXT;
break;
			case 'PPJustify':
			L_PPJustify_TEXT='(對齊：調整水平間距，使文字沿左右邊界平均對齊。調整文字使兩端的邊緣都很平滑。)';
sTemp=L_PPJustify_TEXT;
break;
			case 'PPMicrosoftDirect3d':
			L_PPMicrosoftDirect3d_TEXT='(Microsoft Direct 3D：Microsoft DirectX 元件，它是一組內建於 Microsoft Windows 作業系統中的進階多媒體系統服務。)';
sTemp=L_PPMicrosoftDirect3d_TEXT;
break;
			case 'PPMotionPath':
			L_PPMotionPath_TEXT='(影片路徑：指定物件或文字要遵循的路徑，它是投影片中動畫順序的一部份。)';
sTemp=L_PPMotionPath_TEXT;
break;
			case 'PPMultipleMasters':
			L_PPMultipleMasters_TEXT='(多重母片：當您將多個設計範本套用至簡報時，即需要使用多重母片，使用的每個範本都需要一個母片。)';
sTemp=L_PPMultipleMasters_TEXT;
break;
			case 'PPWindowsMediaEncoder':
			L_PPWindowsMediaEncoder_TEXT='(Windows Media 編碼器：一種 Microsoft Windows Media 技術，可讓內容開發者將現場及預先錄製的音訊、視訊及電腦螢幕影像轉換成「Windows Media 格式」，以供現場及點播使用。)';
sTemp=L_PPWindowsMediaEncoder_TEXT;
break;
			case 'PPWindowsMediaServices':
			L_PPWindowsMediaServices_TEXT='(Windows Media Services：在伺服器 (如 Windows 2000) 上執行的，以支援資料流媒體 (如音訊及視訊) 的數位媒體平台。)';
sTemp=L_PPWindowsMediaServices_TEXT;
break;
			case 'IDH_htdefDecreaseFontSize':
			L_IDH_htdefDecreaseFontSize_TEXT='(縮小字型：在製作網頁時，將所選文字的字型大小減小為可用的下一個較小的字型大小。)';
sTemp=L_IDH_htdefDecreaseFontSize_TEXT;
break;
			case 'IDH_htdefExitViewSource':
			L_IDH_htdefExitViewSource_TEXT='(離開 HTML 原始程式碼：將檢視從顯示 HTML 原始程式碼切換到顯示網頁內容。)';
sTemp=L_IDH_htdefExitViewSource_TEXT;
break;
			case 'IDH_htdefHorizontalLine':
			L_IDH_htdefHorizontalLine_TEXT='(水平規線：向網頁中插入水平規線。Microsoft Word 插入的線條樣式與您上次插入的樣式相同。)';
sTemp=L_IDH_htdefHorizontalLine_TEXT;
break;
			case 'IDH_htdefIncreaseFontSize':
			L_IDH_htdefIncreaseFontSize_TEXT='(放大字型：在製作網頁時，將所選文字的字型大小增加到可用的下一個較大的字型大小。)';
sTemp=L_IDH_htdefIncreaseFontSize_TEXT;
break;
			case 'IDH_htdefInlineVideo':
			L_IDH_htdefInlineVideo_TEXT='(內置影片：使用者開啟網頁時，或當指標停在電影圖像上時，或在這兩種狀況下依據物件設定所播放的電影短片。並非所有的網頁瀏覽器都支援內置影片。)';
sTemp=L_IDH_htdefInlineVideo_TEXT;
break;
			case 'IDH_htdefWebPagePreview':
			L_IDH_htdefWebPagePreview_TEXT='(網頁預覽：在網頁瀏覽器中顯示網頁。)';
sTemp=L_IDH_htdefWebPagePreview_TEXT;
break;
			case 'IDH_wddefChangedLines':
			L_IDH_wddefChangedLines_TEXT='(線條修改樣式：使用追蹤修訂來新增、刪除或變更的文字旁所出現的垂直線。您可以指定線條修改樣式是出現在文字的左側還是右側。還可以隱藏線條修改樣式。)';
sTemp=L_IDH_wddefChangedLines_TEXT;
break;
			case 'IDH_wddefClickNTypePointerShapes':
			L_IDH_wddefClickNTypePointerShapes_TEXT='(「即點即書」的指標形狀：指出您連按兩下時要套用的格式設定：靠左對齊、置中或靠右對齊定位點；左側縮排或左右文繞圖。)';
sTemp=L_IDH_wddefClickNTypePointerShapes_TEXT;
break;
			case 'IDH_wddefFileProperty':
			L_IDH_wddefFileProperty_TEXT='(檔案內容：幫助您識別檔案的檔案詳細資訊，如描述性標題、作者姓名、主題或識別主題或檔案中其他重要資訊的關鍵字。)';
sTemp=L_IDH_wddefFileProperty_TEXT;
break;
			case 'IDH_wddefFloatingObject':
			L_IDH_wddefFloatingObject_TEXT='(浮動物件：插入繪圖層的圖形或其他物件，使您可以準確地將其定位在頁面上或文字或其他物件的前後。)';
sTemp=L_IDH_wddefFloatingObject_TEXT;
break;
			case 'IDH_wddefGutterMargin':
			L_IDH_wddefGutterMargin_TEXT='(裝訂邊邊界：此邊界設定可以在要裝訂文件的側邊界或上邊界增加額外空間。裝訂邊邊界可確保裝訂時不會遮住文字。)';
sTemp=L_IDH_wddefGutterMargin_TEXT;
break;
			case 'IDH_wddefInline':
			L_IDH_wddefInline_TEXT='(內置：一種定義樣式的樣式表，這些樣式用來控制網頁或網頁的一部份在網頁瀏覽器中的顯示方式。內置樣式在網頁中與樣式套用至的文字位於同一行。)';
sTemp=L_IDH_wddefInline_TEXT;
break;
			case 'IDH_wddefInlineObject':
			L_IDH_wddefInlineObject_TEXT='(內置物件：直接定位於 Microsoft Word 文件文字插入點處的圖形或其他物件。)';
sTemp=L_IDH_wddefInlineObject_TEXT;
break;
			case 'IDH_wddefJustify':
			L_IDH_wddefJustify_TEXT='(對齊：調整水平間距，使文字沿左右邊界平均對齊。調整文字使兩端的邊緣都很平滑。)';
sTemp=L_IDH_wddefJustify_TEXT;
break;
			case 'IDH_wddefLinked':
			L_IDH_wddefLinked_TEXT='(連結：一種定義樣式的樣式表，這些樣式用來控制網頁或網頁的一部份在網頁瀏覽器中的顯示方式。連結的樣式表在其他檔案中，被一或多個網頁所參照。)';
sTemp=L_IDH_wddefLinked_TEXT;
break;
			case 'IDH_wddefMirrorMargins':
			L_IDH_wddefMirrorMargins_TEXT='(左右對稱：頁面左側邊界是頁面右側邊界的鏡映影像。意即，內邊界的寬度相同，外邊界的寬度也相同。)';
sTemp=L_IDH_wddefMirrorMargins_TEXT;
break;
			case 'IDH_wddefNormalTemplate':
			L_IDH_wddefNormalTemplate_TEXT='(一般範本：可用於任何類型文件的共用範本。您可以修改此範本，來變更預設文件格式或內容。)';
sTemp=L_IDH_wddefNormalTemplate_TEXT;
break;
			case 'IDH_wddefOutlineNumberedList':
			L_IDH_wddefOutlineNumberedList_TEXT='(大綱編號清單：建立此清單以將階層式結構套用至任何清單或文件。一份文件至多可以有九層，Microsoft Word 並不會向清單中的項目套用內建標題樣式。)';
sTemp=L_IDH_wddefOutlineNumberedList_TEXT;
break;
			case 'IDH_wddefRelativePath':
			L_IDH_wddefRelativePath_TEXT='(相對路徑：僅包括路徑中與來源物件路徑不同的部份。例如，從 c:\animal\mammal\canine\fido 到 c:\animal\mammal\feline\fluffy 的相對路徑是 ..\ ..\feline\fluffy。)';
sTemp=L_IDH_wddefRelativePath_TEXT;
break;
			case 'IDH_wddefSeparatorCharacters':
			L_IDH_wddefSeparatorCharacters_TEXT='(分隔字元：選擇此字元可以指出將表格轉換成文字時文字分隔的位置，或者將文字轉換成表格時新列或新欄開始的位置。)';
sTemp=L_IDH_wddefSeparatorCharacters_TEXT;
break;
			case 'IDH_wddefShortMenu':
			L_IDH_wddefShortMenu_TEXT='(個人化功能表：此功能表僅顯示基本指令及常用的指令。)';
sTemp=L_IDH_wddefShortMenu_TEXT;
break;
			case 'IDH_wddefUsesForTextFrames':
			L_IDH_wddefUsesForTextFrames_TEXT='(文字框的用途：若要設定包含註解、註腳、章節附註或特定欄位之圖形或文字的位置，請使用框架。若為其他類型的文字，請使用文字方塊。)';
sTemp=L_IDH_wddefUsesForTextFrames_TEXT;
break;
			case 'IDH_wodefCollapseMasterDocument':
			L_IDH_wodefCollapseMasterDocument_TEXT='(摺疊主控文件：在大綱模式中摺疊主控文件，以隱藏子文件的內容，並將它們顯示為超連結。)';
sTemp=L_IDH_wodefCollapseMasterDocument_TEXT;
break;
			case 'IDH_wodefCommentMark':
			L_IDH_wodefCommentMark_TEXT='(註解標記：每次您將註解新增到文件時，Microsoft Word 都會在文件中插入一個註解標記。當您在 [檢視] 功能表上按一下 [標記] 時，註解標記即會出現。)';
sTemp=L_IDH_wodefCommentMark_TEXT;
break;
			case 'IDH_wodefDocumentMap':
			L_IDH_wodefDocumentMap_TEXT='(文件引導模式：沿文件視窗左邊緣的垂直窗格，其顯示文件標題的大綱。您可以使用「文件引導模式」快速地瀏覽整份文件，並追蹤您在其中的位置。)';
sTemp=L_IDH_wodefDocumentMap_TEXT;
break;
			case 'IDH_wodefExpandMasterDocument':
			L_IDH_wodefExpandMasterDocument_TEXT='(展開主控文件：以大綱模式顯示所有子文件的內容。展開主控文件能夠更輕易地處理整個主控文件，例如，檢查拼字或建立索引。)';
sTemp=L_IDH_wodefExpandMasterDocument_TEXT;
break;
			case 'IDH_wodefExternalDataSource':
			L_IDH_wodefExternalDataSource_TEXT='(外部資料來源：此資料來源包含使用者想要存取的資料，例如 Microsoft Excel 清單或 Microsoft Access 資料庫。)';
sTemp=L_IDH_wodefExternalDataSource_TEXT;
break;
			case 'IDH_wodefIndex':
			L_IDH_wodefIndex_TEXT='(索引：列印文件中討論的單字及片語清單，以及它們所處的頁碼。)';
sTemp=L_IDH_wodefIndex_TEXT;
break;
			case 'IDH_wodefLeader':
			L_IDH_wodefLeader_TEXT='(指引線：將讀者的目光從圖說文字吸引到插圖適當部份的一條直線。)';
sTemp=L_IDH_wodefLeader_TEXT;
break;
			case 'IDH_wodefOnlineLayoutView':
			L_IDH_wodefOnlineLayoutView_TEXT='(Web 版面配置檢視：使文件可以顯示在網頁瀏覽器中的文件檢視。例如，文件會顯示為較大篇幅的一頁 (沒有分頁符號)，文字及表格都會自動換行，以容納在視窗中。)';
sTemp=L_IDH_wodefOnlineLayoutView_TEXT;
break;
			case 'IDH_wodefOutlineLevel':
			L_IDH_wodefOutlineLevel_TEXT='(大綱層級：可以用來向文件中的段落指定階層式層級 (「層級 1」到「層級 9」) 的段落格式設定。例如，指定大綱層級後，您即可以大綱模式或「文件引導模式」處理文件。)';
sTemp=L_IDH_wodefOutlineLevel_TEXT;
break;
			case 'IDH_wodefPan':
			L_IDH_wodefPan_TEXT='(取景位置調整：使用 Microsoft IntelliMouse 指標裝置或 Microsoft IntelliMouse TrackBall 在整份文件中連續捲動。)';
sTemp=L_IDH_wodefPan_TEXT;
break;
			case 'IDH_wodefQuery':
			L_IDH_wodefQuery_TEXT='(查詢：一種查找方法，它在資料來源所儲存的記錄中查找所有符合您命名之一組篩選條件的記錄。查詢可以包含有助於縮小搜尋範圍的運算子、引號、萬用字元及括號。)';
sTemp=L_IDH_wodefQuery_TEXT;
break;
			case 'IDH_wodefTableOfAuthorities':
			L_IDH_wodefTableOfAuthorities_TEXT='(法律文件索引：法律文件參照清單，如案件、法令及規則參照，以及參照所顯示的頁數。)';
sTemp=L_IDH_wodefTableOfAuthorities_TEXT;
break;
			case 'IDH_wodefTableOfFigures':
			L_IDH_wodefTableOfFigures_TEXT='(圖表目錄：文件中圖片、圖表、圖形、投影片或其他插圖標號的清單，以及標號所顯示的頁數。)';
sTemp=L_IDH_wodefTableOfFigures_TEXT;
break;
			case 'IDH_wodefWatermark':
			L_IDH_wodefWatermark_TEXT='(浮水印：列印時出現在現有文件文字上方或背後的圖形或文字 (如「機密」)。)';
sTemp=L_IDH_wodefWatermark_TEXT;
break;
			case 'WdBalloonsformarkup':
			L_WdBalloonsformarkup_TEXT='(球形文字說明：在整頁模式或 Web 版面配置檢視中，標記球形文字說明在文件邊界中顯示標記元素 (如註解及追蹤修訂)。使用這些球形文字說明可以輕鬆地查看並回覆檢閱者的修訂與註解。)';
sTemp=L_WdBalloonsformarkup_TEXT;
break;
			case 'WdBookfold':
			L_WdBookfold_TEXT='(書籍對頁列印：將文件列印成一或多本手冊，使列印頁對摺後可以像書籍一樣閱讀。)';
sTemp=L_WdBookfold_TEXT;
break;
			case 'WdConcordance':
			L_WdConcordance_TEXT='(辭彙索引檔：索引中包含的詞彙表。在 Microsoft Word 中使用辭彙索引檔可以快速標記索引項目。)';
sTemp=L_WdConcordance_TEXT;
break;
			case 'wdconFrames':
			L_wdconFrames_TEXT='(框架：框架頁的命名子視窗。框架是網頁瀏覽器中可以顯示網頁的幾個視窗區域之一。框架可以捲動及調整大小，並可以有邊框。)';
sTemp=L_wdconFrames_TEXT;
break;
			case 'WdFilteredhtml':
			L_WdFilteredhtml_TEXT='(篩選 HTML：儲存在網頁中的「篩選」格式會移除 Microsoft Office 特定的標籤。以篩選 HTML 格式儲存檔案後，如果重新在 Office 程式中開啟該檔案，將會保留文字及一般外觀，但部份功能可能會有所不同。)';
sTemp=L_WdFilteredhtml_TEXT;
break;
			case 'WdLinkbar':
			L_WdLinkbar_TEXT='(連結列：圖形或文字按鈕的集合，這些按鈕代表的超連結連結到您網站內及外部網站的網頁。)';
sTemp=L_WdLinkbar_TEXT;
break;
			case 'WdMappeddatafield':
			L_WdMappeddatafield_TEXT='(對應資料欄位：代表常用資訊的欄位，如「名字」。如果資料來源包含「名字」(First Name) 欄位或變化形式 (如「FName」)，則資料來源欄位會自動對應到相應的對應資料欄位。)';
sTemp=L_WdMappeddatafield_TEXT;
break;
			case 'WdMarkup':
			L_WdMarkup_TEXT='(標記：註解及追蹤修訂，如插入、刪除及格式設定變更。當您想要處理追蹤修訂及註解時，請檢視標記。列印帶有標記的文件可以保留對文件所作的變更記錄。)';
sTemp=L_WdMarkup_TEXT;
break;
			case 'WdNestedTable':
			L_WdNestedTable_TEXT='(巢狀表格：表格儲存格中插入的表格。如果您使用表格配置頁面，並想使用另一個表格來排列資訊，則可以插入巢狀表格。)';
sTemp=L_WdNestedTable_TEXT;
break;
			case 'WdOledb':
			L_WdOledb_TEXT='(OLE DB：提供對多種類型資料來源 (包括相關的資料、郵件檔案、一般檔案及試算表) 之有效網路及網際網路存取的元件資料庫架構。)';
sTemp=L_WdOledb_TEXT;
break;
			case 'wdreadinglayoutview':
			L_wdreadinglayoutview_TEXT='(閱讀版面配置檢視：為在電腦螢幕上閱讀文件而設計的檢視。文件會被調整至符合螢幕的大小，並會移除大部份工具列，但仍然可使用導覽、註解及查找單字的指令。)';
sTemp=L_wdreadinglayoutview_TEXT;
break;
			case 'WdSmallCaps':
			L_WdSmallCaps_TEXT='(小型大寫字：這種格式將小寫文字以縮小字型大小的大寫字母顯示。小型大寫字格式設定不會影響數字、標點符號、非字母字元或大寫字母。)';
sTemp=L_WdSmallCaps_TEXT;
break;
			case 'WdTrackedchanges':
			L_WdTrackedchanges_TEXT='(追蹤修訂：此標記顯示文件中作過刪除、插入或其他編輯變更的位置。)';
sTemp=L_WdTrackedchanges_TEXT;
break;
			case 'wdxmlexpansionpack':
			L_wdxmlexpansionpack_TEXT='(XML Expansion Pack：檔案的集合，由 manifest.xml 檔案管理，會透過指定自訂顯示或巨集指令，將功能新增到 Microsoft Word 或 Microsoft Excel 文件。)';
sTemp=L_wdxmlexpansionpack_TEXT;
break;
			case 'wodefActiveDocument':
			L_wodefActiveDocument_TEXT='(使用中文件：您正在使用的文件。您在 Microsoft Word 中鍵入的文字或插入的圖形都會出現在使用中文件中。使用中文件的標題列會反白提示。)';
sTemp=L_wodefActiveDocument_TEXT;
break;
			case 'wodefAnnotation':
			L_wodefAnnotation_TEXT='(註解：作者或檢閱者新增到文件的附註或註釋。Microsoft Word 在文件邊界的球形文字說明中或在 [檢閱窗格] 中顯示註解。)';
sTemp=L_wodefAnnotation_TEXT;
break;
			case 'wodefAutoText':
			L_wodefAutoText_TEXT='(自動圖文集：想要再次使用之文字或圖形 (如標準合約條款或大型通訊群組清單) 的儲存位置。每個文字或圖形選取範圍都會記錄為自動圖文集項目，並會指定唯一的名稱。)';
sTemp=L_wodefAutoText_TEXT;
break;
			case 'wodefbaseStyle':
			L_wodefbaseStyle_TEXT='(根據樣式：文件中其他樣式所依存的基本或原始樣式。當您變更文件中根據樣式的格式設定元件時，也會變更以此根據樣式為基準的所有其他樣式。)';
sTemp=L_wodefbaseStyle_TEXT;
break;
			case 'wodefBodyText':
			L_wodefBodyText_TEXT='(本文：未使用內建標題樣式 (「標題 1」到「標題 9」) 或大綱層級段落格式 (「層級 1」到「層級 9」) 進行格式設定的文字。在大綱模式中，Microsoft Word 會在本文的左側顯示一個符號。)';
sTemp=L_wodefBodyText_TEXT;
break;
			case 'wodefcharacterStyle':
			L_wodefcharacterStyle_TEXT='(字元樣式：依樣式名稱識別之所有字元格式選項的組合。)';
sTemp=L_wodefcharacterStyle_TEXT;
break;
			case 'wodefCollapse':
			L_wodefCollapse_TEXT='(摺疊大綱：在大綱模式中摺疊大綱可以隱藏本文及標題下的次標題。摺疊標題與展開標題相反。摺疊本文及次標題後，便可將重點放在更少的詳細資訊上。)';
sTemp=L_wodefCollapse_TEXT;
break;
			case 'wodefdatafield':
			L_wodefdatafield_TEXT='(資料欄位：此資訊類別對應資料來源中的一欄資訊。每個資料欄位的名稱都列於資料來源的第一列 (欄位名稱列)。「PostalCode」及「LastName」都是資料欄位名稱的範例。)';
sTemp=L_wodefdatafield_TEXT;
break;
			case 'wodefdatarecord':
			L_wodefdatarecord_TEXT='(資料記錄：對應資料來源中一列資訊的一組完整相關資訊。用戶端郵寄清單中一個用戶端的所有相關資訊即是資料記錄的範例。)';
sTemp=L_wodefdatarecord_TEXT;
break;
			case 'wodefDemote':
			L_wodefDemote_TEXT='(降階：在大綱中，將標題變更為本文，或變更為更低層標題，例如，從「標題 5」到「標題 6」。)';
sTemp=L_wodefDemote_TEXT;
break;
			case 'wodefEmbed':
			L_wodefEmbed_TEXT='(內嵌：將在一支程式中建立的資訊 (如圖表或方程式) 插入另一支程式。內嵌物件後，該資訊即成為文件的一部份。您對物件所作的任何變更都會在文件中反映出來。)';
sTemp=L_wodefEmbed_TEXT;
break;
			case 'wodefExcludeDictionary':
			L_wodefExcludeDictionary_TEXT='(排除字典：此字典包含主字典認為拼字正確，但您想要在拼字檢查時進行確認的單字。例如，如果您偏好使用「theatre」，而不是「theater」，請將「theater」新增到排除字典。)';
sTemp=L_wodefExcludeDictionary_TEXT;
break;
			case 'wodefField':
			L_wodefField_TEXT='(功能變數：指示 Microsoft Word 自動向文件插入文字、圖形、頁碼及其他資料的一組代碼。例如，DATE 功能變數會插入現行日期。)';
sTemp=L_wodefField_TEXT;
break;
			case 'wodefFieldName':
			L_wodefFieldName_TEXT='(欄位名稱：合併列印資料來源中資訊類別的名稱。例如，「City」、「State」及「PostalCode」都是通訊清單中常用的欄位名稱。)';
sTemp=L_wodefFieldName_TEXT;
break;
			case 'wodefFieldResult':
			L_wodefFieldResult_TEXT='(功能變數結果：當 Microsoft Word 執行功能變數的指示時，在文件中插入的文字或圖形。在您列印文件或隱藏功能變數代碼時，功能變數結果會取代功能變數代碼。)';
sTemp=L_wodefFieldResult_TEXT;
break;
			case 'wodefFieldType':
			L_wodefFieldType_TEXT='(功能變數類型：識別功能變數在文件中的動作或效果的名稱。功能變數類型有 AUTHOR、COMMENTS 及 DATE。)';
sTemp=L_wodefFieldType_TEXT;
break;
			case 'wodefForm':
			L_wodefForm_TEXT='(表單：包含填滿空白或表單欄位 (可在其中輸入資訊) 的文件。例如，您可以在 Microsoft Word 中建立使用下拉式清單的線上註冊表單，使用者可以從下拉式清單中選取項目。)';
sTemp=L_wodefForm_TEXT;
break;
			case 'wodefFormatSwitch':
			L_wodefFormatSwitch_TEXT='(格式參數 (\*)：參數或指示，它指定 Microsoft Word 在功能變數結果中使用的大小寫、數字樣式及字元格式設定。)';
sTemp=L_wodefFormatSwitch_TEXT;
break;
			case 'wodefFormField':
			L_wodefFormField_TEXT='(表單欄位：表單中儲存特定資料類型 (如名稱或地址) 的位置。)';
sTemp=L_wodefFormField_TEXT;
break;
			case 'wodefFrame':
			L_wodefFrame_TEXT='(框架：可以調整大小，並可置於頁面任何位置的容器。若要置放包含註解、註腳、章節附註或特定欄位的文字或圖形，您必須使用框架，而不能使用文字方塊。)';
sTemp=L_wodefFrame_TEXT;
break;
			case 'wodefglobalTemplate':
			L_wodefglobalTemplate_TEXT='(共用範本：共用範本可儲存巨集、自動圖文集項目及自訂工具列、功能表與快速鍵設定，藉由使用這些工具，您可以處理以任何範本為基礎的文件。一般範本預設即為共用範本。)';
sTemp=L_wodefglobalTemplate_TEXT;
break;
			case 'wodefGridlines':
			L_wodefGridlines_TEXT='(格線：表格中指示儲存格邊界的細線。在您列印文件時格線不會列印出來。)';
sTemp=L_wodefGridlines_TEXT;
break;
			case 'wodefHeaderRow':
			L_wodefHeaderRow_TEXT='(欄位名稱列：合併列印資料來源中的第一列 (或第一筆記錄)。欄位名稱列包含資料來源中資訊類別的欄位名稱，如「名稱」與「城市」。)';
sTemp=L_wodefHeaderRow_TEXT;
break;
			case 'wodefHeaderSource':
			L_wodefHeaderSource_TEXT='(欄位名稱來源：包含欄位名稱列 (或欄位名稱記錄) 的文件，該欄位名稱列與針對合併列印主文件指定的資料來源搭配使用。)';
sTemp=L_wodefHeaderSource_TEXT;
break;
			case 'wodefHeadingStyle':
			L_wodefHeadingStyle_TEXT='(標題樣式：套用至標題的格式設定。Microsoft Word 有九種不同的內建樣式：「標題 1」到「標題 9」。)';
sTemp=L_wodefHeadingStyle_TEXT;
break;
			case 'wodefHiddenText':
			L_wodefHiddenText_TEXT='(隱藏文字：一種字元格式設定，可讓您顯示或隱藏指定的文字。Microsoft Word 使用點線底線表示隱藏文字。)';
sTemp=L_wodefHiddenText_TEXT;
break;
			case 'wodefHorizontalRuler':
			L_wodefHorizontalRuler_TEXT='(水平尺規：橫跨文件視窗頂端顯示的，以度量單位 (如英吋) 標示的橫條。)';
sTemp=L_wodefHorizontalRuler_TEXT;
break;
			case 'wodefHyperlinkDisplayText':
			L_wodefHyperlinkDisplayText_TEXT='(超連結顯示文字：文件中超連結的一部份，或在螢幕上顯示為文字的網頁。)';
sTemp=L_wodefHyperlinkDisplayText_TEXT;
break;
			case 'wodefIndexEntry':
			L_wodefIndexEntry_TEXT='(索引項目：標記特定文字，以將其包含在索引中的功能變數代碼。當您將文字標記為索引項目時，Microsoft Word 會插入格式設定為隱藏文字的 XE (索引項目) 功能變數。)';
sTemp=L_wodefIndexEntry_TEXT;
break;
			case 'wodefLeaderCharacter':
			L_wodefLeaderCharacter_TEXT='(前置字元：在目錄中使用的，以及填補定位字元所用空間的實線、點線或虛線。)';
sTemp=L_wodefLeaderCharacter_TEXT;
break;
			case 'wodefLineSpacing':
			L_wodefLineSpacing_TEXT='(行距：一行文字底端到下一行文字底端的距離。Microsoft Word 會調整行距，以容納該行最大的字型或最高的圖形。)';
sTemp=L_wodefLineSpacing_TEXT;
break;
			case 'wodefLink':
			L_wodefLink_TEXT='(連結：用於將某支程式中建立的資訊複本插入 Word 文件，同時還保留兩個檔案之間的連接。當來源檔案中的資訊變更時，這些變更會在目的文件中反映出來。)';
sTemp=L_wodefLink_TEXT;
break;
			case 'wodefMasterDocument':
			L_wodefMasterDocument_TEXT='(主控文件：一組不同檔案 (或子文件) 的「容器」。您可以使用主控文件設定及管理多個部份的文件 (如一本含有多個章節的書)。)';
sTemp=L_wodefMasterDocument_TEXT;
break;
			case 'wodefNonbreakingHyphen':
			L_wodefNonbreakingHyphen_TEXT='(不分行連字號：使用此連字號可以防止連字號連接的單字、數字或片語在一行的結尾處被斷開。例如，您可以不讓 555-0123 分行，而將整個項目移至下一行的開頭。)';
sTemp=L_wodefNonbreakingHyphen_TEXT;
break;
			case 'wodefnormalStyle':
			L_wodefnormalStyle_TEXT='(一般樣式：根據一般範本 (Normal.dot)，在文件中使用的預設段落樣式。)';
sTemp=L_wodefnormalStyle_TEXT;
break;
			case 'wodefNormalView':
			L_wodefNormalView_TEXT='(標準模式：此模式顯示文字格式設定及簡化的版面配置。對大多數編輯及格式設定工作而言，標準模式都十分簡便。)';
sTemp=L_wodefNormalView_TEXT;
break;
			case 'wodefNoteReferenceMark':
			L_wodefNoteReferenceMark_TEXT='(註解參照標記：數字、字元或字元組合，指示註腳或章節附註中包含其他資訊。)';
sTemp=L_wodefNoteReferenceMark_TEXT;
break;
			case 'wodefNumericPictureSwitch':
			L_wodefNumericPictureSwitch_TEXT='(數字顯示格式參數 (\#)：指定 Microsoft Word 如何顯示欄位的數值結果。此參數又稱為「圖片參數」，因為您可以使用符號來顯示想要的欄位結果外觀。)';
sTemp=L_wodefNumericPictureSwitch_TEXT;
break;
			case 'wodefOptionalHyphen':
			L_wodefOptionalHyphen_TEXT='(選擇性連字號：使用此連字號可以控制一行結尾處單字或片語的分行位置。例如您可以指定「nonprinting」像「non-printing」這樣分隔，而不是像「nonprint-ing」這樣分隔。)';
sTemp=L_wodefOptionalHyphen_TEXT;
break;
			case 'wodefOutlineSymbols':
			L_wodefOutlineSymbols_TEXT='(大綱符號：大綱模式中段落旁所顯示的符號。您可以使用符號來顯示或隱藏附屬層文字，並快速組織文字。)';
sTemp=L_wodefOutlineSymbols_TEXT;
break;
			case 'wodefOutlineView':
			L_wodefOutlineView_TEXT='(大綱模式：此模式顯示代表文件結構層次的文件標題。您還可以使用大綱模式來處理主控文件。)';
sTemp=L_wodefOutlineView_TEXT;
break;
			case 'wodefOvertype':
			L_wodefOvertype_TEXT='(取代：用最新鍵入的字元來取代現有字元。開啟取代模式後，會在狀態列中顯示 OVR。)';
sTemp=L_wodefOvertype_TEXT;
break;
			case 'wodefPageBreak':
			L_wodefPageBreak_TEXT='(分頁符號：一頁結束另一頁開始處的點。Microsoft Word 會為您插入自動分頁符號，您也可以在特定的位置強制分頁，方法是插入手動分頁符號。)';
sTemp=L_wodefPageBreak_TEXT;
break;
			case 'wodefParagraphFormatting':
			L_wodefParagraphFormatting_TEXT='(段落格式：控制段落外觀的格式設定。例如縮排、對齊、行距及分頁。)';
sTemp=L_wodefParagraphFormatting_TEXT;
break;
			case 'wodefparagraphMark':
			L_wodefparagraphMark_TEXT='(段落標記：您按 ENTER 鍵結束段落時 Microsoft Word 插入的非列印符號。段落標記儲存您套用至段落的格式設定。)';
sTemp=L_wodefparagraphMark_TEXT;
break;
			case 'wodefPenAnnotations':
			L_wodefPenAnnotations_TEXT='(撰寫註解：使用畫筆建立的註解。Microsoft Word 處理撰寫註解的方式與處理其他繪圖物件一樣。撰寫註解不出現在 [檢閱窗格] 中，Word 也不會在文件視窗中插入註解標記。)';
sTemp=L_wodefPenAnnotations_TEXT;
break;
			case 'wodefPicturePlaceholder':
			L_wodefPicturePlaceholder_TEXT='(圖片外框：文件中代表匯入圖形的矩形。您可以暫時使用圖片外框代替圖形，從而增加捲動速度。)';
sTemp=L_wodefPicturePlaceholder_TEXT;
break;
			case 'wodefPredefinedBookmark':
			L_wodefPredefinedBookmark_TEXT='(預先定義的書籤：Microsoft Word 在每份文件中自動設定的書籤。例如，預先定義的書籤 "\Sel" 表示目前的選取範圍或插入點。)';
sTemp=L_wodefPredefinedBookmark_TEXT;
break;
			case 'wodefPromote':
			L_wodefPromote_TEXT='(升階：在大綱中，將本文變更為標題，或將標題變更為更高層標題，例如從「標題 6」到「標題 5」。)';
sTemp=L_wodefPromote_TEXT;
break;
			case 'wodefRevisionMark':
			L_wodefRevisionMark_TEXT='(修訂標記：此標記顯示文件中作過刪除、插入或其他編輯變更的位置。)';
sTemp=L_wodefRevisionMark_TEXT;
break;
			case 'wodefSection':
			L_wodefSection_TEXT='(章節：文件的一部份，其中可以設定特定的頁面格式設定選項。當您想要變更行號、欄數或標題及頁尾等內容時，需要建立新的章節。)';
sTemp=L_wodefSection_TEXT;
break;
			case 'wodefSectionBreak':
			L_wodefSectionBreak_TEXT='(分節符號：為顯示一節結束而插入的標記。分節符號儲存一節的格式設定元素，如邊界、分頁方向、頁首和頁尾以及連續頁碼。)';
sTemp=L_wodefSectionBreak_TEXT;
break;
			case 'wodefSpecialCharacter':
			L_wodefSpecialCharacter_TEXT='(特殊字元：不在鍵盤上，但可以在螢幕上顯示及列印的字元或符號，例如版權符號。)';
sTemp=L_wodefSpecialCharacter_TEXT;
break;
			case 'wodefSpike':
			L_wodefSpike_TEXT='(特殊圖文集：儲存多次刪除的特殊自動圖文集項目。Microsoft Word 會將一個項目附加到另一個項目之後，直到您將內容作為群組貼到文件的新位置中。您也可以使用「Microsoft Office 剪貼簿」取得相同的結果。)';
sTemp=L_wodefSpike_TEXT;
break;
			case 'wodefStory':
			L_wodefStory_TEXT='(本文：包含的文字範圍與文件中其他文字區域有所不同的文件區域。例如，如果文件包括本文、註腳及標題，則它包含主要本文、註腳本文及標題本文。)';
sTemp=L_wodefStory_TEXT;
break;
			case 'wodefStyleArea':
			L_wodefStyleArea_TEXT='(樣式區域：沿文件視窗左邊緣的垂直區域，其中顯示套用至每個段落的段落樣式名稱。)';
sTemp=L_wodefStyleArea_TEXT;
break;
			case 'wodefSubentry':
			L_wodefSubentry_TEXT='(次要項目：在更大範圍標題下的索引項目。例如，索引項目「行星」可以有「火星」與「金星」兩個次要項目。)';
sTemp=L_wodefSubentry_TEXT;
break;
			case 'wodefSwitch':
			L_wodefSwitch_TEXT='(參數：當處理功能變數時，導致發生特定動作的特殊指令。一般來說，將參數新增至功能變數中可修改結果。)';
sTemp=L_wodefSwitch_TEXT;
break;
			case 'wodefTable':
			L_wodefTable_TEXT='(表格：一或多列儲存格，通常用於顯示數字及其他項目，以供快速參照及分析。表格中項目的組織形式是列及欄。)';
sTemp=L_wodefTable_TEXT;
break;
			case 'wodeftextframe':
			L_wodeftextframe_TEXT='(文字框：圖案中可以包含文字的區域。)';
sTemp=L_wodeftextframe_TEXT;
break;
			case 'wodefVerticalRuler':
			L_wodefVerticalRuler_TEXT='(垂直尺規：沿文件視窗左側顯示的豎條。您可以使用垂直尺規來調整頁面的上下邊界，以及表格中的列高。)';
sTemp=L_wodefVerticalRuler_TEXT;
break;
			case 'wodefVoiceAnnotations':
			L_wodefVoiceAnnotations_TEXT='(聲音註解：附加至文件的錄音。)';
sTemp=L_wodefVoiceAnnotations_TEXT;
break;
			case 'wodefWidowAndOrphan':
			L_wodefWidowAndOrphan_TEXT='(段落遺留字串：頁面頂端自行列印之段落的最後一行；或頁面底端自行列印之段落的第一行。)';
sTemp=L_wodefWidowAndOrphan_TEXT;
break;
			case 'wodefWLL':
			L_wodefWLL_TEXT='(Word 增益集程式庫 (WLL)：獨立的動態連結程式庫，載入時，該動態連結程式庫可以新增擴充 Microsoft Word 功能的自訂指令。Microsoft Visual Basic 專案也可以使用載入之 WLL 中的指令及函數。)';
sTemp=L_wodefWLL_TEXT;
break;
			case 'wodefWordPublication':
			L_wodefWordPublication_TEXT='(Word 出版物：包含到其他位置之超連結的 Microsoft Word 文件。您可以使用超連結跳至同一文件的其他位置，或跳至硬碟、網路、內部網路或網際網路上的其他檔案。)';
sTemp=L_wodefWordPublication_TEXT;
break;
			case 'FpAccessControlList':
			L_FpAccessControlList_TEXT='(ACL：存取控制清單。此清單指出哪些使用者或群組具有存取或修改 Windows NT 伺服器上特定檔案的權限。)';
sTemp=L_FpAccessControlList_TEXT;
break;
			case 'FpActiveServerPages':
			L_FpActiveServerPages_TEXT='(ASP：動態伺服器網頁。伺服器端指令碼技術，用於建立動態的互動網頁ㄌ應用程式。ASP 檔案是包含指令碼的 HTML 網頁，其中的指令碼在傳送到瀏覽器之前由網頁伺服器先行處理。)';
sTemp=L_FpActiveServerPages_TEXT;
break;
			case 'FpAdministratorRole':
			L_FpAdministratorRole_TEXT='(系統管理員角色：可讓使用者修改所有網站內容並管理網站設定及帳號的權利集合。)';
sTemp=L_FpAdministratorRole_TEXT;
break;
			case 'FpAdvanceAuthorRole':
			L_FpAdvanceAuthorRole_TEXT='(進階作者角色：可讓使用者檢視、新增及變更網頁、程式庫文件、討論區、佈景主題及框線，以及管理工作及重新計算連結的權利集合。此為預設角色。)';
sTemp=L_FpAdvanceAuthorRole_TEXT;
break;
			case 'fpanchor':
			L_fpanchor_TEXT='(錨點 (也稱為書籤)：網頁上可作為超連結目標的命名位置。書籤可以套用至字元字串，也可以獨立於任何文字存在於網頁中。在 URL 中，書籤前有一個數字記號 (#)。)';
sTemp=L_fpanchor_TEXT;
break;
			case 'fpAnonymousFTP':
			L_fpAnonymousFTP_TEXT='(匿名 FTP：不具有遠端電腦系統帳號，而透過網際網路的「檔案傳輸通訊協定 (FTP)」存取遠端電腦系統的能力。匿名 FTP 使用者的存取權受到限制。)';
sTemp=L_fpAnonymousFTP_TEXT;
break;
			case 'FpAnonymousUserAccess':
			L_FpAnonymousUserAccess_TEXT='(匿名使用者存取：不具有網頁伺服器帳號而存取網頁伺服器的能力。匿名使用者的存取權通常比具有帳號的使用者限制更多。)';
sTemp=L_FpAnonymousUserAccess_TEXT;
break;
			case 'fpArticle':
			L_fpArticle_TEXT='(文章：討論群組或網際網路新聞群組中的郵件或張貼的文字。文章可以是對先前文章的回覆。)';
sTemp=L_fpArticle_TEXT;
break;
			case 'fpAspectratio':
			L_fpAspectratio_TEXT='(長寬比：在電腦顯示畫面及圖形中，圖片寬度或圖片區域與其高度的比例。例如，長寬比 2:1 表示圖片的寬度是其高度的兩倍。)';
sTemp=L_fpAspectratio_TEXT;
break;
			case 'FpAuthorListRight':
			L_FpAuthorListRight_TEXT='(製作者清單權利：允許使用者新增、修改或移除文件庫、討論區、問卷或清單項目的權利。)';
sTemp=L_FpAuthorListRight_TEXT;
break;
			case 'FpAuthorRole':
			L_FpAuthorRole_TEXT='(作者角色：可讓使用者檢視、新增及修改網頁，以及文件庫、討論區、問卷或清單項目的權利集合。)';
sTemp=L_FpAuthorRole_TEXT;
break;
			case 'fpAutoThumbnail':
			L_fpAutoThumbnail_TEXT='(自動影像目錄標籤：這種工具可以建立圖片或相片縮圖 (小型版本)，並建立原圖的超連結。)';
sTemp=L_fpAutoThumbnail_TEXT;
break;
			case 'fpBackgroundsound':
			L_fpBackgroundsound_TEXT='(背景聲音：與網頁相關的音效檔案。當在網頁瀏覽器中顯示網頁時，會連續播放音效，或播放指定的次數。)';
sTemp=L_fpBackgroundsound_TEXT;
break;
			case 'fpBanner':
			L_fpBanner_TEXT='(橫幅：網頁的一個區段，包含圖形元素及文字，如網頁標題。網頁橫幅通常顯示在網頁的頂端。)';
sTemp=L_fpBanner_TEXT;
break;
			case 'fpBannerAdManager':
			L_fpBannerAdManager_TEXT='(橫幅廣告管理員：FrontPage 中的元件，以指定的秒數顯示一組指定的圖形，然後透過切換效果變更到下一個圖形。橫幅廣告通常包含廣告網站的超連結。)';
sTemp=L_fpBannerAdManager_TEXT;
break;
			case 'FpBaseline':
			L_FpBaseline_TEXT='(基準線：列印及在螢幕上顯示字元時假想的水平規線，每個字元的底部 (下降幅度除外) 都依照它來對齊。)';
sTemp=L_FpBaseline_TEXT;
break;
			case 'fpBaselocationbaseURL':
			L_fpBaselocationbaseURL_TEXT='(基底位置，基底 URL：您可以將此 URL 指定給網頁，從而將該網頁上的所有相對 URL 都轉換成絕對 URL。基底 URL 應該以文件名稱部份 (如 .../sample.htm) 結尾或後面帶有斜線。)';
sTemp=L_fpBaselocationbaseURL_TEXT;
break;
			case 'FpBrowserRole':
			L_FpBrowserRole_TEXT='(瀏覽器角色：容許使用者檢視清單、文件庫、討論版或問卷中項目的權限集合。)';
sTemp=L_FpBrowserRole_TEXT;
break;
			case 'Fpbuiltinstyle':
			L_Fpbuiltinstyle_TEXT='(內建樣式：FrontPage 樣式清單中預設可用的格式設定屬性。)';
sTemp=L_Fpbuiltinstyle_TEXT;
break;
			case 'fpCategory':
			L_fpCategory_TEXT='(類別：依據通用篩選條件為網頁及檔案標示標籤及分組 (如網頁內容、檔案類型或特徵類似的項目) 的一種分類方式。)';
sTemp=L_fpCategory_TEXT;
break;
			case 'fpCellpadding':
			L_fpCellpadding_TEXT='(儲存格與邊框距離：表格儲存格的內容及其內緣之間的間距。)';
sTemp=L_fpCellpadding_TEXT;
break;
			case 'fpCellspacing':
			L_fpCellspacing_TEXT='(儲存格間距：表格中儲存格之間的間距。儲存格間距是每個儲存格周圍背景牆的厚度 (以像素為單位)。)';
sTemp=L_fpCellspacing_TEXT;
break;
			case 'fpCGI':
			L_fpCGI_TEXT='(CGI：通用閘道介面。在回應網頁瀏覽器要求 (如在表單處理程序中) 時，藉由執行程式或指令碼來擴充網頁伺服器功能的一種標準方法。使用 CGI 可以使網頁更具動感。)';
sTemp=L_fpCGI_TEXT;
break;
			case 'FpCharacterStyle':
			L_FpCharacterStyle_TEXT='(字元樣式：依樣式名稱識別的所有字元格式選項的組合。)';
sTemp=L_FpCharacterStyle_TEXT;
break;
			case 'FpClassSelector':
			L_FpClassSelector_TEXT='(類別選擇器：在階層式樣式表中，識別使用者定義樣式的名稱。依據定義方式，類別選取器可以與一種標籤搭配使用，或與 BODY 元件中的任何 HTML 標籤搭配使用。)';
sTemp=L_FpClassSelector_TEXT;
break;
			case 'fpClient':
			L_fpClient_TEXT='(用戶端：在區域網路 (LAN) 或網際網路中，用戶端電腦可以存取由其他電腦提供的共用網路資源。)';
sTemp=L_fpClient_TEXT;
break;
			case 'fpClientsideimagemap':
			L_fpClientsideimagemap_TEXT='(用戶端影像對應：這些影像對應可以直接為網頁上每個作用點的目的 URL 進行編碼。這些影像對應不需要伺服器進行處理，便可讓網站訪客追蹤影像對應上的超連結。)';
sTemp=L_fpClientsideimagemap_TEXT;
break;
			case 'fpClientsideprogram':
			L_fpClientsideprogram_TEXT='(用戶端程式：網際網路上的一種程式，它在用戶端電腦上執行，而不是在伺服器電腦上執行。)';
sTemp=L_fpClientsideprogram_TEXT;
break;
			case 'fpcodec':
			L_fpcodec_TEXT='(轉碼器：壓縮/解壓縮的簡稱。透過複雜的演算法處理視訊的軟體程式，這種演算法會壓縮檔案以便進行儲存或傳送，再解壓縮該檔案以便進行播放。)';
sTemp=L_fpcodec_TEXT;
break;
			case 'fpcodesnippet':
			L_fpcodesnippet_TEXT='(程式碼片段：一或多行 HTML 或其他經常使用的程式碼。您可以插入程式碼片段而不必鍵入程式碼。Microsoft FrontPage 包括數個預設的程式碼片段。您也可以建立自訂程式碼片段。)';
sTemp=L_fpcodesnippet_TEXT;
break;
			case 'fpColoraveragetool':
			L_fpColoraveragetool_TEXT='(色彩調和工具：這種工具的使用方法是，在網頁的各種圖形或純色上拖曳滴管工具，從而決定平均色彩頻譜。)';
sTemp=L_fpColoraveragetool_TEXT;
break;
			case 'FpCommandTimeout':
			L_FpCommandTimeout_TEXT='(命令逾時：分配以用來對資料庫執行命令的時間量。超過分配的時間量後，會發生錯誤。)';
sTemp=L_FpCommandTimeout_TEXT;
break;
			case 'fpComment':
			L_fpComment_TEXT='(註解：註解文字可以在網頁檢視中檢視，但無法在網頁瀏覽器中檢視。在建構網頁期間，使用註解文字插入供其他作者閱讀的備註。網站訪客可以在網頁的 HTML 原始檔中檢視註解。)';
sTemp=L_fpComment_TEXT;
break;
			case 'fpComponent':
			L_fpComponent_TEXT='(元件：當作者儲存網頁時 (有時是在網站訪客造訪網頁時)，評估及執行的內建 FrontPage 物件。大部份元件都會產生 HTML。元件包括搜尋表單及「儲存結果」表單處理程式。)';
sTemp=L_fpComponent_TEXT;
break;
			case 'fpConfirmationFieldcomponent':
			L_fpConfirmationFieldcomponent_TEXT='(「確認欄位」元件：FrontPage 中使用表單欄位內容取代的元件。在表單確認網頁上，此元件十分有用，因為它可以顯示網站訪客的名稱，或輸入欄位的任何其他資料。)';
sTemp=L_fpConfirmationFieldcomponent_TEXT;
break;
			case 'fpConfirmationpage':
			L_fpConfirmationpage_TEXT='(確認網頁：此網頁在網頁瀏覽器中顯示，用於確認輸入表單的資料已成功送出。)';
sTemp=L_fpConfirmationpage_TEXT;
break;
			case 'FpConnectionTimeout':
			L_FpConnectionTimeout_TEXT='(連線逾時：指示用來建立資料庫連線的時間量。超過指示的時間量後，會發生錯誤。)';
sTemp=L_FpConnectionTimeout_TEXT;
break;
			case 'FpContributorRole':
			L_FpContributorRole_TEXT='(參與人角色：可讓使用者檢視程式庫中的網頁及文件，並參與討論的權利集合。此為預設角色。)';
sTemp=L_FpContributorRole_TEXT;
break;
			case 'FpCss':
			L_FpCss_TEXT='(CSS：階層式樣式表是包含可由多個網頁參照之樣式資訊的文件。樣式定義網頁內容的外觀及格式，並可讓作者進一步控制內容在瀏覽器中的顯示方式。)';
sTemp=L_FpCss_TEXT;
break;
			case 'FpDatabaseColumnValue':
			L_FpDatabaseColumnValue_TEXT='(資料庫欄值：在資料庫結果區域中顯示的資料庫欄位預留位置。)';
sTemp=L_FpDatabaseColumnValue_TEXT;
break;
			case 'FpDatabaseConnection':
			L_FpDatabaseConnection_TEXT='(資料庫連接：指定資料庫名稱、類型、位置及選用資訊的連接。)';
sTemp=L_FpDatabaseConnection_TEXT;
break;
			case 'fpDatabaseresultsregion':
			L_fpDatabaseresultsregion_TEXT='(資料庫結果區域：在網頁瀏覽器中顯示「動態伺服器網頁」時，在該網頁中可由資料庫的查詢結果動態填入的某個區域。)';
sTemp=L_fpDatabaseresultsregion_TEXT;
break;
			case 'fpDatabaseResultsWizard':
			L_fpDatabaseResultsWizard_TEXT='(資料庫結果精靈：這個 FrontPage 精靈會指導您在網頁上建立一個區域，該區域所顯示的資訊從資料庫的記錄中獲得。您可以使用現有的資料庫來完成此動作，或讓精靈為您建立。)';
sTemp=L_fpDatabaseResultsWizard_TEXT;
break;
			case 'FpDataSource':
			L_FpDataSource_TEXT='(資料來源：由驅動程式存取，並透過資料來源名稱 (DSN) 識別的資料庫或檔案。)';
sTemp=L_FpDataSource_TEXT;
break;
			case 'fpDatavalidation':
			L_fpDatavalidation_TEXT='(資料驗證：可以套用至表單欄位的一組規則，它限制網站訪客在表單中輸入的資訊類型。例如，您設定的規則可以是，只允許向表單的「名稱」欄位輸入字母，而不允許輸入數字。)';
sTemp=L_fpDatavalidation_TEXT;
break;
			case 'fpDefaulthyperlink':
			L_fpDefaulthyperlink_TEXT='(預設超連結：在影像對應中，當網站訪客在沒有作用點的圖片上按一下某一區域時，訪客會前往的超連結。)';
sTemp=L_fpDefaulthyperlink_TEXT;
break;
			case 'fpDesigntimecontrol':
			L_fpDesigntimecontrol_TEXT='(設計階段控制項：設計或編輯網頁時使用的 ActiveX 控制項。)';
sTemp=L_fpDesigntimecontrol_TEXT;
break;
			case 'fpDiscussionformhandler':
			L_fpDiscussionformhandler_TEXT='(討論區表單處理程式：FrontPage 中可讓網站訪客使用表單參與線上討論的表單處理程式。)';
sTemp=L_fpDiscussionformhandler_TEXT;
break;
			case 'FpDiskbasedWebSite':
			L_FpDiskbasedWebSite_TEXT='(磁碟基礎的網站：本機電腦主控的網站。)';
sTemp=L_FpDiskbasedWebSite_TEXT;
break;
			case 'fpDistributedPasswordAuthentication':
			L_fpDistributedPasswordAuthentication_TEXT='(DPA：分散式密碼認證。允許單一使用者登入的進階使用者驗證方法。DPA 由 Microsoft Membership System 提供支援，並已進行最佳化，以滿足網際網路服務提供者及線上服務的需要。)';
sTemp=L_fpDistributedPasswordAuthentication_TEXT;
break;
			case 'fpDomainname':
			L_fpDomainname_TEXT='(網域名稱：以特定格式表明其擁有者之網路位置的位址，特定格式為「server.organization.type」。例如，www.whitehouse.gov 表明網頁伺服器在白宮，它是美國政府的隸屬機構。)';
sTemp=L_fpDomainname_TEXT;
break;
			case 'fpEditor':
			L_fpEditor_TEXT='(編輯器：建立檔案或對現有檔案進行變更的程式。 FrontPage 具有對 WYSIWYG、程式碼、文字及 CSS 進行編輯的編輯器。您還可以關聯檔案與外部編輯器。)';
sTemp=L_fpEditor_TEXT;
break;
			case 'fpEmail':
			L_fpEmail_TEXT='(電子郵件 (e-mail)：是電子郵件 (Electronic Mail) 的縮寫。它是一種透過網際網路或網路傳送文字郵件及檔案附件的方法。)';
sTemp=L_fpEmail_TEXT;
break;
			case 'FpEmbeddedCascadingStyleSheet':
			L_FpEmbeddedCascadingStyleSheet_TEXT='(內嵌階層式樣式表：網頁中所包含並套用的階層式樣式表。)';
sTemp=L_FpEmbeddedCascadingStyleSheet_TEXT;
break;
			case 'fpEmbeddedfiles':
			L_fpEmbeddedfiles_TEXT='(內嵌檔案：FrontPage 中，從檔案系統或剪貼簿插入網頁的圖形、圖片、聲音及視訊剪輯。儲存網頁時，會提示您儲存內嵌檔案。)';
sTemp=L_fpEmbeddedfiles_TEXT;
break;
			case 'fpEPS':
			L_fpEPS_TEXT='(EPS：封裝式 PostScript。由 Adobe Systems 開發之 PostScript 圖形檔格式的副檔名。EPS 能讓 PostScript 圖形檔併入其他文件中。)';
sTemp=L_fpEPS_TEXT;
break;
			case 'fpExecutablefolder':
			L_fpExecutablefolder_TEXT='(可執行資料夾：FrontPage 網站中的資料夾，網頁伺服器可以從該資料夾執行指令碼及可執行程式。伺服器系統管理員可以禁止使用可執行資料夾。)';
sTemp=L_fpExecutablefolder_TEXT;
break;
			case 'FpExternalCascadingStyleSheet':
			L_FpExternalCascadingStyleSheet_TEXT='(外部階層式樣式表：副檔名為 .css 之檔案中的階層式樣式表。.css 檔案只包含以有效 .css 語法書寫的樣式規則，周圍沒有任何 HTML 標籤。)';
sTemp=L_FpExternalCascadingStyleSheet_TEXT;
break;
			case 'fpExternalhyperlink':
			L_fpExternalhyperlink_TEXT='(外部超連結：指向現行網站外部之網頁或檔案的超連結。)';
sTemp=L_fpExternalhyperlink_TEXT;
break;
			case 'fpExternalstylesheet':
			L_fpExternalstylesheet_TEXT='(外部樣式表：副檔名為 .css 之檔案中的階層式樣式表。.css 檔案只包含以有效 .css 語法書寫的樣式規則，周圍沒有任何 HTML 標籤。您可將一或多個網頁連結到外部樣式表。)';
sTemp=L_fpExternalstylesheet_TEXT;
break;
			case 'fpFAQ':
			L_fpFAQ_TEXT='(FAQ：常見問題解答。列出特定主題常見問題及解答的文件。)';
sTemp=L_fpFAQ_TEXT;
break;
			case 'FpFieldValue':
			L_FpFieldValue_TEXT='(欄位值：如同網頁瀏覽器中顯示的那樣，在資料庫結果區域中顯示的資料庫欄位內容。)';
sTemp=L_FpFieldValue_TEXT;
break;
			case 'fpFile':
			L_fpFile_TEXT='(檔案：存放在電腦上的具名資訊集合。也可以是參照磁碟或區域網路 (LAN) 檔案的網際網路通訊協定。在 FrontPage 中，您可以在網頁檢視中建立到檔案的超連結 (使用 file://)。)';
sTemp=L_fpFile_TEXT;
break;
			case 'FpFileDsn':
			L_FpFileDsn_TEXT='(檔案型 DSN：檔案「資料來源名稱」。它是儲存資料庫連結相關資訊的檔案。副檔名為 .dsn。)';
sTemp=L_FpFileDsn_TEXT;
break;
			case 'fpfiletransferprotocolftp':
			L_fpfiletransferprotocolftp_TEXT='(檔案傳輸通訊協定 (FTP)：一種通訊協定，透過網路或網際網路將檔案複製到遠端電腦系統或從遠端電腦複製檔案。在網際網路上會經常使用 FTP 站台來公開使用檔案及資料夾。)';
sTemp=L_fpfiletransferprotocolftp_TEXT;
break;
			case 'fpFiletype':
			L_fpFiletype_TEXT='(檔案類型：檔案的格式，一般由其副檔名指示。電腦應用程式通常只能處理一組有限的檔案類型。)';
sTemp=L_fpFiletype_TEXT;
break;
			case 'fpfilter':
			L_fpfilter_TEXT='(篩選：套用給資料以顯示資料的子集合或排序資料的一組篩選條件。)';
sTemp=L_fpfilter_TEXT;
break;
			case 'fpFirewall':
			L_fpFirewall_TEXT='(防火牆：這種方法可保護一個網路上的檔案及程式不受另一個網路的使用者破壞。公司一般都會安裝防火牆，以在讓使用者存取網際網路的同時，保護其內部資訊。)';
sTemp=L_fpFirewall_TEXT;
break;
			case 'fpFolder':
			L_fpFolder_TEXT='(資料夾：電腦上包含檔案及其他資料夾的具名儲存區域。)';
sTemp=L_fpFolder_TEXT;
break;
			case 'fpFoldersview':
			L_fpFoldersview_TEXT='(資料夾檢視：顯示網站內容如何組織的網站檢視。在資料夾檢視中，您可以建立、刪除、複製及移動資料夾與檔案。)';
sTemp=L_fpFoldersview_TEXT;
break;
			case 'fpForm':
			L_fpForm_TEXT='(表單：網頁上的一組資料輸入欄位，且會在網頁伺服器上處理這些欄位。當網站訪客按一下按鈕 (有時是按一下圖形) 送出表單時，會將資料傳送到伺服器。)';
sTemp=L_fpForm_TEXT;
break;
			case 'fpFormfield':
			L_fpFormfield_TEXT='(表單欄位：網頁上的資料輸入欄位。網站訪客可以鍵入文字或選取值，來提供欄位中的資訊。)';
sTemp=L_fpFormfield_TEXT;
break;
			case 'fpFormhandler':
			L_fpFormhandler_TEXT='(表單處理程式：網站訪客送出表單時，在伺服器上執行的程式。FrontPage 中的表單與表單處理程式關聯。)';
sTemp=L_fpFormhandler_TEXT;
break;
			case 'fpFrame':
			L_fpFrame_TEXT='(框架：網頁瀏覽器視窗中由框架頁定義的區域。您可以在框架中顯示網頁，方法是建立到網頁的超連結，並指定框架作為超連結的一部份。)';
sTemp=L_fpFrame_TEXT;
break;
			case 'fpFrameset':
			L_fpFrameset_TEXT='(框架組：將網頁瀏覽器視窗分成不同的區域 (稱為框架)，並可以獨立顯示幾個網頁的網頁。)';
sTemp=L_fpFrameset_TEXT;
break;
			case 'fpframespagehtmlbutton':
			L_fpframespagehtmlbutton_TEXT='(框架頁 HTML 按鈕：FrontPage 中網頁檢視內的索引標籤，它顯示使用中框架頁的 HTML。)';
sTemp=L_fpframespagehtmlbutton_TEXT;
break;
			case 'fpFrontPageServerExtensions':
			L_fpFrontPageServerExtensions_TEXT='(FrontPage Server Extension：支援 FrontPage 製作並擴充網頁伺服器功能的一組程式及指令碼。)';
sTemp=L_fpFrontPageServerExtensions_TEXT;
break;
			case 'fpfunction':
			L_fpfunction_TEXT='(函數：指令碼所執行的動作或作業。函數可能會傳回值或其他結果。)';
sTemp=L_fpfunction_TEXT;
break;
			case 'fpGatewayscript':
			L_fpGatewayscript_TEXT='(閘道指令碼：在回應網頁瀏覽器要求 (如在表單處理程序中) 時，藉由在網頁伺服器上執行程式或指令碼來擴充網頁伺服器功能的一種標準方法。使用通用閘道介面可以使網頁更具動感。)';
sTemp=L_fpGatewayscript_TEXT;
break;
			case 'fpHeading':
			L_fpHeading_TEXT='(標題：以比本文大的字體來顯示的段落樣式。標題的大小與其層級關聯：「標題 1」最大，「標題 2」略微小一些，依此類推。標題提供文字段落或整個頁面的標題。)';
sTemp=L_fpHeading_TEXT;
break;
			case 'FpHexadecimal':
			L_FpHexadecimal_TEXT='(十六進位：以 16 為基礎的數字系統，以數字 0 至 9 及大寫或小寫的 A (相當於十進位的 10) 到 F (相當於十進位的 15) 表示。十六進位值通常用於 HTML 程式碼中以識別色彩。)';
sTemp=L_FpHexadecimal_TEXT;
break;
			case 'fpHiddenfield':
			L_fpHiddenfield_TEXT='(隱藏欄位：網站訪客無法看到，但能夠向表單處理程式提供資料的表單欄位。送出表單後，會將隱藏欄位傳送到表單處理程式，同時還會傳送每個可見表單欄位的名稱值組對。)';
sTemp=L_fpHiddenfield_TEXT;
break;
			case 'fpHiddenfolder':
			L_fpHiddenfolder_TEXT='(隱藏資料夾：FrontPage 網站中名稱以底線字元開頭的資料夾，如 _hidden。預設無法在網頁瀏覽器中檢視隱藏資料夾中的網頁及檔案。)';
sTemp=L_fpHiddenfolder_TEXT;
break;
			case 'fphit':
			L_fphit_TEXT='(拜訪人數：網站使用報告中指示個別檔案曾被存取的值。針對每個被存取的檔案都會記錄拜訪人數，檔案包括圖形、動畫及網頁中插入或內嵌的其他檔案。)';
sTemp=L_fphit_TEXT;
break;
			case 'fpHitCountercomponent':
			L_fpHitCountercomponent_TEXT='(計數器元件：FrontPage 中追蹤全球資訊網網站訪客數目的元件。)';
sTemp=L_fpHitCountercomponent_TEXT;
break;
			case 'fpHost':
			L_fpHost_TEXT='(主機：網路上提供服務的電腦。在全球資訊網上，主機是執行網頁伺服器軟體，以回應使用「網際網路通訊協定」所傳送之要求的電腦。也稱為伺服器。)';
sTemp=L_fpHost_TEXT;
break;
			case 'fpHostname':
			L_fpHostname_TEXT='(主機名稱：URL 中識別網際網路伺服器的唯一名稱。主機名稱的多個部份之間以句點分隔，例如 microsoft.com。又稱為網路位置或網際網路位址。)';
sTemp=L_fpHostname_TEXT;
break;
			case 'fpHoverButtoncomponent':
			L_fpHoverButtoncomponent_TEXT='(「動態顯示按鈕」元件：網頁上的動畫按鈕，當滑鼠指標移經此按鈕，或在該按鈕上按一下時便會將其啟動。)';
sTemp=L_fpHoverButtoncomponent_TEXT;
break;
			case 'fpHTMLattribute':
			L_fpHTMLattribute_TEXT='(HTML 屬性：HTML 標籤的值，會將其他的屬性指派給定義的物件。當您建立物件 (如段落) 時，FrontPage 會自動指定一些屬性。)';
sTemp=L_fpHTMLattribute_TEXT;
break;
			case 'fpHyperlinksview':
			L_fpHyperlinksview_TEXT='(超連結檢視：FrontPage 中顯示網站超連結狀態的檢視。清單會顯示內部及外部超連結，並以圖形方式指出超連結是否已經過驗證，或是否中斷。)';
sTemp=L_fpHyperlinksview_TEXT;
break;
			case 'fpHypertext':
			L_fpHypertext_TEXT='(超文字：原指電腦上包含到其他資訊之連結 (稱為超連結) 的任何本文資訊。在全球資訊網上，它是一種藉由從文字、圖片、圖形或影像對應連結，以便在網頁及網站間導覽的主要方式。)';
sTemp=L_fpHypertext_TEXT;
break;
			case 'fpIDselector':
			L_fpIDselector_TEXT='(識別碼選擇器：在階層式樣式表樣式定義 (或樣式規則) 中，選取器用來為個別網頁元件定義樣式，通常是內置樣式。)';
sTemp=L_fpIDselector_TEXT;
break;
			case 'fpIIS':
			L_fpIIS_TEXT='(IIS：網際網路資訊服務。它是使用「超文字傳輸協定」傳送全球資訊網文件的 Microsoft 網頁伺服器軟體。IIS 併入了各種安全性功能，既可由 CGI 程式使用，也可供 FTP 伺服器使用。)';
sTemp=L_fpIIS_TEXT;
break;
			case 'fpIncludePagecomponent':
			L_fpIncludePagecomponent_TEXT='(「共用頁面」元件：FrontPage 中使用網站內其他網頁的內容來取代的元件。它可以讓您以一個步驟就更新多個網頁的部份。)';
sTemp=L_fpIncludePagecomponent_TEXT;
break;
			case 'fpInitialpage':
			L_fpInitialpage_TEXT='(初始網頁：在網站訪客瀏覽包含框架的框架頁時，框架中一開始顯示的網頁。您可以在 FrontPage 的網頁檢視中指定框架的初始網頁。)';
sTemp=L_fpInitialpage_TEXT;
break;
			case 'FpInlineCascadingStyleSheet':
			L_FpInlineCascadingStyleSheet_TEXT='(內置階層式樣式表：套用至單一網頁元件，或套用至一組指定網頁元件的階層式樣式表。)';
sTemp=L_FpInlineCascadingStyleSheet_TEXT;
break;
			case 'fpInlinestyle':
			L_fpInlinestyle_TEXT='(內置樣式：將階層式樣式表屬性及值套用至網頁元件 (如表格) 的方法。即使網頁沒有連結到外部樣式表或不包含內嵌樣式表，您仍然可以使用此方法。)';
sTemp=L_fpInlinestyle_TEXT;
break;
			case 'fpInterlacedGIF':
			L_fpInterlacedGIF_TEXT='(交錯式 GIF：在網頁瀏覽器中逐漸顯示的 GIF 格式的圖片，這種格式所顯示的圖片逐漸變得清晰，直到整個檔案下載完成。)';
sTemp=L_fpInterlacedGIF_TEXT;
break;
			case 'fpInternalhyperlink':
			L_fpInternalhyperlink_TEXT='(內部超連結：文字或圖形中的區域，按一下即可存取同一網站中的其他網頁。)';
sTemp=L_fpInternalhyperlink_TEXT;
break;
			case 'fpInternetaddress':
			L_fpInternetaddress_TEXT='(網際網路位址：URL 中識別網際網路伺服器的唯一名稱。網際網路位址的多個部份之間以句點分隔，例如 microsoft.com。又稱為主機名稱或網路位置。)';
sTemp=L_fpInternetaddress_TEXT;
break;
			case 'fpIP':
			L_fpIP_TEXT='(IP：網際網路通訊協定。將資料分成封包，以在網際網路上傳送的網際網路軟體。電腦必須執行 IP，才能在網際網路間通訊。)';
sTemp=L_fpIP_TEXT;
break;
			case 'fpIPaddress':
			L_fpIPaddress_TEXT='(IP 位址：用來識別連接到網際網路之電腦的指定號碼，就好像電話號碼可識別電話網路中的電話一樣。IP 位址是以句點分隔的四組數字。)';
sTemp=L_fpIPaddress_TEXT;
break;
			case 'fpIPaddressmask':
			L_fpIPaddressmask_TEXT='(IP 位址遮罩：定義的 IP 位址範圍，以便只有 IP 位址位於該範圍內的電腦才可以存取網際網路服務。若要遮蔽一部份 IP 位址，請使用星號萬用字元 (*) 取代它。)';
sTemp=L_fpIPaddressmask_TEXT;
break;
			case 'fpISAPI':
			L_fpISAPI_TEXT='(ISAPI：網際網路伺服器應用程式發展介面。由 Process Software 及 Microsoft 開發的、可以取代 CGI 的網頁伺服器應用程式開發介面。)';
sTemp=L_fpISAPI_TEXT;
break;
			case 'fpJava':
			L_fpJava_TEXT='(Java：Sun Microsystems, Inc. 所開發的程式設計語言。用 Java 所撰寫的應用程式是獨立於作業平台的，這表示它們可以在任何類型的電腦上執行，只要「Java 虛擬機器」安裝在該電腦上即可。)';
sTemp=L_fpJava_TEXT;
break;
			case 'fpLink':
			L_fpLink_TEXT='(連結：也稱為超連結。它是從文字、圖片或圖形、或從影像對應到全球資訊網上網頁或檔案的指標。在全球資訊網上，超連結是在網頁及網站間瀏覽的主要方法。)';
sTemp=L_fpLink_TEXT;
break;
			case 'FpLinkBar':
			L_FpLinkBar_TEXT='(連結列：圖形或文字按鈕的集合，其所代表的超連結跳到您網站內及外部網站的網頁。)';
sTemp=L_FpLinkBar_TEXT;
break;
			case 'FpListField':
			L_FpListField_TEXT='(清單欄位：由文件庫、討論區、問卷或清單項目組成的一組元件之一。在表單上，使用者可以在清單欄位輸入資料；在檢視中，清單欄位顯示資料。)';
sTemp=L_FpListField_TEXT;
break;
			case 'FpListForm':
			L_FpListForm_TEXT='(清單表單：網頁上的一組資料輸入欄位，這些欄位在執行 Windows SharePoint Services 的網頁伺服器上處理。清單表單可讓使用者新增、修改及移除文件庫、問卷及清單項目。)';
sTemp=L_FpListForm_TEXT;
break;
			case 'fplistmembers':
			L_fplistmembers_TEXT='(清單成員：特定物件參照的有效程式碼元素 (屬性、方法、事件及物件)。)';
sTemp=L_fplistmembers_TEXT;
break;
			case 'fpLiveweb':
			L_fpLiveweb_TEXT='(即時網站：發佈到網頁伺服器，並可由網站訪客瀏覽的網站。使用 FrontPage 編輯即時網站，可讓網站訪客在每次儲存網頁時，都立即看到網頁的全部更新及變更。)';
sTemp=L_fpLiveweb_TEXT;
break;
			case 'FpLocalhost':
			L_FpLocalhost_TEXT='(本機：此名稱用來代表發出 TCP/IP 訊息的同一台電腦。如果您使用 http://localhost 存取伺服器網站，則要求實際並未發送到網際網路。)';
sTemp=L_FpLocalhost_TEXT;
break;
			case 'FpManageListsRight':
			L_FpManageListsRight_TEXT='(「管理清單」權利：可讓使用者新增、修改及移除清單、文件庫、討論區及問卷的權利。)';
sTemp=L_FpManageListsRight_TEXT;
break;
			case 'fpMarqueecomponent':
			L_fpMarqueecomponent_TEXT='(跑馬燈元件：網頁上顯示水平跑馬燈文字訊息的區域。)';
sTemp=L_fpMarqueecomponent_TEXT;
break;
			case 'fpMIMEtype':
			L_fpMIMEtype_TEXT='(MIME 類型：多用途網際網路郵件延伸標準類型。網頁瀏覽器用來關聯特定類型檔案與顯示該類型檔案之應用程式的一種方法。)';
sTemp=L_fpMIMEtype_TEXT;
break;
			case 'fpMultihosting':
			L_fpMultihosting_TEXT='(多重主機：網站伺服器支援多個網際網路位址及多個首頁的能力。又稱為多重主目錄。)';
sTemp=L_fpMultihosting_TEXT;
break;
			case 'fpNamevaluepair':
			L_fpNamevaluepair_TEXT='(名稱值組對：表單欄位的名稱以及送出表單時該欄位的值。表單中的每個欄位都可以有一或多個名稱值組對，表單本身也可以有一或多個名稱值組對。)';
sTemp=L_fpNamevaluepair_TEXT;
break;
			case 'fpNavigationview':
			L_fpNavigationview_TEXT='(導覽檢視：FrontPage 中用來建立、顯示、列印及變更網站導覽結構的檢視。導覽檢視包含類似資料夾的檢視，您可以從該檢視將網頁拖放到網站結構中。)';
sTemp=L_fpNavigationview_TEXT;
break;
			case 'fpNestedframespage':
			L_fpNestedframespage_TEXT='(巢狀框架頁：在一個框架中包含其他框架頁面的框架頁。)';
sTemp=L_fpNestedframespage_TEXT;
break;
			case 'fpNews':
			L_fpNews_TEXT='(新聞：從網際網路新聞群組擷取檔案的「網際網路通訊協定」。您可以在 FrontPage 中建立新聞超連結 (news://)。)';
sTemp=L_fpNews_TEXT;
break;
			case 'FpNsapi':
			L_FpNsapi_TEXT='(NSAPI：Netscape 伺服器應用程式開發介面。Netscape Communications Corporation 開發的網頁伺服器應用程式開發介面。)';
sTemp=L_FpNsapi_TEXT;
break;
			case 'fpNTLM':
			L_fpNTLM_TEXT='(NTLM：NT LanMan。Windows NT 挑戰/回應驗證通訊協定。此通訊協定使用加密以使得密碼傳送更安全。)';
sTemp=L_fpNTLM_TEXT;
break;
			case 'fpobject':
			L_fpobject_TEXT='(物件：在物件導向的程式設計中，包括常式及資料的程式設計單位。)';
sTemp=L_fpobject_TEXT;
break;
			case 'fpOLE':
			L_fpOLE_TEXT='(OLE：物件連結與內嵌。在應用程式間傳送及共用資訊的技術。OLE 可讓製作者呼叫不同的編輯器元件，以建立複合文件。)';
sTemp=L_fpOLE_TEXT;
break;
			case 'fpOnelinetextbox':
			L_fpOnelinetextbox_TEXT='(單行文字方塊：網站訪客可鍵入文字之帶有標記的單行表單欄位。)';
sTemp=L_fpOnelinetextbox_TEXT;
break;
			case 'fpPage':
			L_fpPage_TEXT='(網頁：網站中以 HTML 書寫的一份文件。您可以使用 FrontPage 建立及修改網頁，而無需了解 HTML。)';
sTemp=L_fpPage_TEXT;
break;
			case 'fpPagebanner':
			L_fpPagebanner_TEXT='(網頁橫幅：網頁中包含圖形元素及文字 (如網頁標題) 的一個區段。網頁橫幅通常在網頁的頂端顯示。)';
sTemp=L_fpPagebanner_TEXT;
break;
			case 'fpPagetemplate':
			L_fpPagetemplate_TEXT='(網頁範本：預先設計的通用網頁，您可以使用它來建立新的自訂網頁。FrontPage 中的部份網頁範本提供典型網頁內容，而其他範本提供通用版面配置。)';
sTemp=L_fpPagetemplate_TEXT;
break;
			case 'fpPagetitle':
			L_fpPagetitle_TEXT='(網頁標題：識別網頁的描述性文字字串。)';
sTemp=L_fpPagetitle_TEXT;
break;
			case 'fpPageview':
			L_fpPageview_TEXT='(網頁檢視：FrontPage 中可用來建立、編輯及預覽網頁的檢視。)';
sTemp=L_fpPageview_TEXT;
break;
			case 'fpParentpage':
			L_fpParentpage_TEXT='(上層網頁：FrontPage 中網頁內的頁面，它是網頁導覽結構的一部份，並連結至一或多個子層級網頁。子層級網頁都從其上層網頁存取。)';
sTemp=L_fpParentpage_TEXT;
break;
			case 'fpParentweb':
			L_fpParentweb_TEXT='(上層網站：在階層式結構中，緊鄰現行網站的上一層網站。)';
sTemp=L_fpParentweb_TEXT;
break;
			case 'fpPCD':
			L_fpPCD_TEXT='(PCD：Eastman Kodak Company 開發的一種圖形檔格式。FrontPage 可以匯入 PCD 檔。PCD 代表「相片 CD」。)';
sTemp=L_fpPCD_TEXT;
break;
			case 'fpPCT':
			L_fpPCT_TEXT='(PCT：個人通訊技術。「安全通訊端階層 (SSL)」的增強版本，它是透過網際網路可更安全地傳送資訊的通訊協定。)';
sTemp=L_fpPCT_TEXT;
break;
			case 'fpPCX':
			L_fpPCX_TEXT='(PCX：使用 RLE 型壓縮來壓縮圖形資料的一種圖形檔格式，早期的 Windows 小畫家版本使用這種圖形檔格式。FrontPage 可以匯入 PCX 檔。)';
sTemp=L_fpPCX_TEXT;
break;
			case 'fpPicture':
			L_fpPicture_TEXT='(圖片或圖像：可以插入網頁，並可在瀏覽器中顯示的圖形檔。FrontPage 可讓您匯入幾種圖形格式。當儲存網頁時，匯入的圖形會被轉換成 GIF 格式或 JPEG 格式。)';
sTemp=L_fpPicture_TEXT;
break;
			case 'fpPlugin':
			L_fpPlugin_TEXT='(外掛程式：整合在網頁瀏覽器中，以提供互動及多媒體功能的一組軟件模組之一。)';
sTemp=L_fpPlugin_TEXT;
break;
			case 'fpPort':
			L_fpPort_TEXT='(連接埠：執行 TCP/IP 之電腦的一個網路輸入/輸出通道。在全球資訊網上，它通常指伺服器執行所在的埠號。一台電腦上可以執行多台網頁伺服器，但每個連接埠上只能執行一台伺服器。)';
sTemp=L_fpPort_TEXT;
break;
			case 'FpPositionBox':
			L_FpPositionBox_TEXT='(位置方塊：設計檢視中的一個矩形，其表示套用 CSS 定位的網頁區域。位置方塊可能包含任何網頁元件，只有在 [標準] 工具列上選取 [全部顯示] 時才能夠看到它。)';
sTemp=L_FpPositionBox_TEXT;
break;
			case 'FpPositioning':
			L_FpPositioning_TEXT='(定位：定位是在網頁上放置元件 (如文字及圖形) 的另一種方法。定位可以讓網頁作者控制網頁元素的準確位置及圖層順序。)';
sTemp=L_FpPositioning_TEXT;
break;
			case 'fpPPP':
			L_fpPPP_TEXT='(PPP：點對點通訊協定。它是透過序列連結在電腦間傳送資料的一種網際網路標準。)';
sTemp=L_fpPPP_TEXT;
break;
			case 'FpPrimaryKey':
			L_FpPrimaryKey_TEXT='(主索引：唯一識別表格中每筆記錄的欄位 (欄)。主索引不容許 Null 值，且必須恆有唯一索引。主索引用來將表格與其他表格中的外部索引相關。)';
sTemp=L_FpPrimaryKey_TEXT;
break;
			case 'FpProductionWebServer':
			L_FpProductionWebServer_TEXT='(實際執行網頁伺服器：主控即時網站的網頁伺服器。實際執行網頁伺服器可由網際網路或內部網路觀眾瀏覽。)';
sTemp=L_FpProductionWebServer_TEXT;
break;
			case 'fpProgressiveJPEG':
			L_fpProgressiveJPEG_TEXT='(漸進 JPEG：JPEG 圖形檔格式的增強格式，這種格式在網頁瀏覽器中以漸進的方式顯示似相片般真實的圖片，且會逐漸變得清晰，直到整個檔案下載完成。)';
sTemp=L_fpProgressiveJPEG_TEXT;
break;
			case 'fpProperties':
			L_fpProperties_TEXT='(屬性：FrontPage 中使用中網站內項目 (如網站的標題或 URL) 的特性。您還可以指定網頁元件 (如表格、圖形及使用中元件) 的內容。)';
sTemp=L_fpProperties_TEXT;
break;
			case 'fpProxyserver':
			L_fpProxyserver_TEXT='(Proxy 伺服器：作為防火牆，調整受保護網路與網際網路間傳輸量的網際網路伺服器。)';
sTemp=L_fpProxyserver_TEXT;
break;
			case 'fpRAS':
			L_fpRAS_TEXT='(RAS：Sun Microsystems 開發的點陣圖形檔案格式。FrontPage 可以匯入 RAS 檔案。)';
sTemp=L_fpRAS_TEXT;
break;
			case 'fpreferringdomain':
			L_fpreferringdomain_TEXT='(參考網域：在網際網路及內部網路上，為某一網路位置的位址，網站訪客可從該位址，利用超連結前進到您的網站。)';
sTemp=L_fpreferringdomain_TEXT;
break;
			case 'fpRegistereduser':
			L_fpRegistereduser_TEXT='(註冊使用者：名稱及密碼已記錄在網站內的網站訪客。在 FrontPage 中，您可以使用「註冊」表單處理程式將網站訪客註冊到網站。)';
sTemp=L_fpRegistereduser_TEXT;
break;
			case 'fpRegistrationformhandler':
			L_fpRegistrationformhandler_TEXT='(「註冊」表單處理程式：FrontPage 中的表單處理程式，可讓網站訪客自動註冊，以存取網站的服務。)';
sTemp=L_fpRegistrationformhandler_TEXT;
break;
			case 'fpRelativeURL':
			L_fpRelativeURL_TEXT='(相對 URL：網頁的網際網路位址 (相對於現行網頁的網際網路位址而言)。例如，相對 URL Doc/Sample.htm 會參照到現行資料夾下 Doc 資料夾中的 Sample.htm 網頁。)';
sTemp=L_fpRelativeURL_TEXT;
break;
			case 'fpReportsview':
			L_fpReportsview_TEXT='(報表檢視：可讓您分析網站內容的 FrontPage 檢視。您可以計算檔案的整個大小，顯示哪些檔案未連結到任何其他檔案，識別較慢或逾期的網頁，等等。)';
sTemp=L_fpReportsview_TEXT;
break;
			case 'fpResample':
			L_fpResample_TEXT='(重新取樣：變更圖片或圖形的像素維度 (實體檔案大小也會隨之變更)。圖形可以向下重新取樣 (減少像素數目) 或向上重新取樣 (增加像素數目)。)';
sTemp=L_fpResample_TEXT;
break;
			case 'FpRights':
			L_FpRights_TEXT='(權利：對網站內容執行特定動作的權限，如檢視或修改網頁。權利可以針對使用者網站群組啟用或停用。使用者僅可以執行指定給其網站群組之權利所允許的那些動作。)';
sTemp=L_FpRights_TEXT;
break;
			case 'FpRule':
			L_FpRule_TEXT='(規則：在文件庫中執行的一組條件、動作及例外。例如，可以將早於一年 (條件) 的所有文件狀態都設為「過期」(動作)，除非上個月內進行過修改 (例外)。)';
sTemp=L_FpRule_TEXT;
break;
			case 'fpSaveResultsformhandler':
			L_fpSaveResultsformhandler_TEXT='(「儲存結果」表單處理程式：FrontPage 中從表單蒐集資訊的表單處理程式。當送出表單時，表單處理程式會以您指定的格式將資訊新增到伺服器上的檔案，或將其傳送到一個電子郵件地址。)';
sTemp=L_fpSaveResultsformhandler_TEXT;
break;
			case 'fpScheduledIncludePagecomponent':
			L_fpScheduledIncludePagecomponent_TEXT='(「排程共用網頁」元件：在指定期間內使用現行網站中的檔案內容來取代的 FrontPage 元件。此元件對存留期有限的資訊十分有用，如新產品上市。)';
sTemp=L_fpScheduledIncludePagecomponent_TEXT;
break;
			case 'fpScheduledPicturecomponent':
			L_fpScheduledPicturecomponent_TEXT='(「排程圖片」元件：網頁上在指定期間內使用圖形取代的 FrontPage 元件。此元件對存留期有限的資訊十分有用，如宣佈新產品或服務。)';
sTemp=L_fpScheduledPicturecomponent_TEXT;
break;
			case 'fpScrollingtextbox':
			L_fpScrollingtextbox_TEXT='(多行式文字方塊：網站訪客可鍵入一或多行文字的已標示多行表單欄位。)';
sTemp=L_fpScrollingtextbox_TEXT;
break;
			case 'fpSearchFormcomponent':
			L_fpSearchFormcomponent_TEXT='(「搜尋表單」元件：FrontPage 中的元件，它所建立的表單在網站中提供全文檢索功能。)';
sTemp=L_fpSearchFormcomponent_TEXT;
break;
			case 'FpServerbasedWebSite':
			L_FpServerbasedWebSite_TEXT='(伺服器型的網站：網站伺服器 (如 Microsoft Internet Information Server (MIIS)) 所主控的網站。)';
sTemp=L_FpServerbasedWebSite_TEXT;
break;
			case 'fpServersideinclude':
			L_fpServersideinclude_TEXT='(包含的伺服器端：當網頁瀏覽器讀取網頁時，部份網頁伺服器提供的自動向網頁插入文字的功能。)';
sTemp=L_fpServersideinclude_TEXT;
break;
			case 'fpSharedborders':
			L_fpSharedborders_TEXT='(共用邊框：保留的網頁區域，其中的所有網頁中都會顯示一致的內容。共用邊框通常包含連結列，該連結列包含到其他網頁及位置的超連結。)';
sTemp=L_fpSharedborders_TEXT;
break;
			case 'fpsitegroup':
			L_fpsitegroup_TEXT='(網站群組：可以指定給使用者帳號的權利集合。您可以使用及修改預設的網站群組，也可以建立自己的自訂網站群組。)';
sTemp=L_fpsitegroup_TEXT;
break;
			case 'fpSiteSummaryreport':
			L_fpSiteSummaryreport_TEXT='(「網站摘要」報表：FrontPage 中報表檢視內顯示的預設報表。網站摘要是幾個報表的組合，這些報表可以識別沒有連結的檔案、慢速網頁、未驗證的超連結、中斷的超連結及網頁元件錯誤等等。)';
sTemp=L_fpSiteSummaryreport_TEXT;
break;
			case 'fpSlowpages':
			L_fpSlowpages_TEXT='(慢速網頁：花費很長時間 (30 秒或更長) 才能下載到網頁瀏覽器的網頁。在 FrontPage 中，可以使用報表檢視識別網站中的慢速網頁。)';
sTemp=L_fpSlowpages_TEXT;
break;
			case 'fpStagingweb':
			L_fpStagingweb_TEXT='(階段性網站：存在於檔案系統或本機網頁伺服器上，但目前無法由網站訪客瀏覽的本機網站。這些網站可讓作者及工作群組在發佈之前變更或更新網站。)';
sTemp=L_fpStagingweb_TEXT;
break;
			case 'FpStagingWebServer':
			L_FpStagingWebServer_TEXT='(階段性網頁伺服器：在將網站放到實際執行的伺服器上之前，發佈及測試網站所在的網頁伺服器。網際網路或內部網路觀眾無法瀏覽階段性網頁伺服器。)';
sTemp=L_FpStagingWebServer_TEXT;
break;
			case 'fpStyle':
			L_fpStyle_TEXT='(樣式：樣式用來控制字型、對齊方式、文字間距、背景頁外觀以及其他 HTML 屬性。樣式的集合稱為樣式表。)';
sTemp=L_fpStyle_TEXT;
break;
			case 'fpsubsite':
			L_fpsubsite_TEXT='(子網站：網站 (亦稱為完整網站) 的具名子目錄。子網站可以有唯一的管理、製作及瀏覽權限。)';
sTemp=L_fpsubsite_TEXT;
break;
			case 'fpSubstitutioncomponent':
			L_fpSubstitutioncomponent_TEXT='(「替代」元件：FrontPage 中由所選網頁或網站變數值取代的元件。)';
sTemp=L_fpSubstitutioncomponent_TEXT;
break;
			case 'fpSubweb':
			L_fpSubweb_TEXT='(子網站 (正式名稱為子網頁)：頂層網站 (為完整 FrontPage 網站) 的具名子目錄。每個子網站都可以具有獨立於頂層網站及其他子網站的管理、製作及瀏覽權限。)';
sTemp=L_fpSubweb_TEXT;
break;
			case 'FpSurvey':
			L_FpSurvey_TEXT='(問卷：讓使用者可以回應由問卷建立者指定的一組問題。結果會記錄圖形摘要中。且需要執行 SharePoint Team Services 的網頁伺服器。)';
sTemp=L_FpSurvey_TEXT;
break;
			case 'FpSystemDsn':
			L_FpSystemDsn_TEXT='(系統 DSN：系統資料來源名稱是本機電腦特定的。具有權限的系統或任何使用者都可以使用以系統 DSN 設定的資料來源。)';
sTemp=L_FpSystemDsn_TEXT;
break;
			case 'fpTable':
			L_fpTable_TEXT='(表格：一或多個儲存格列，用來系統化地組織頁面的版面配置或排列資料。在 FrontPage 中，您可以在表格儲存格放置任何項目，包括文字、圖形及表單。)';
sTemp=L_fpTable_TEXT;
break;
			case 'fpTableofContentscomponent':
			L_fpTableofContentscomponent_TEXT='(「目錄」元件：FrontPage 中建立網站大綱 (帶有到每個頁面的超連結) 的元件。每次網站內容變更時，「目錄」元件都會更新此大綱。)';
sTemp=L_fpTableofContentscomponent_TEXT;
break;
			case 'fpTask':
			L_fpTask_TEXT='(工作：與 FrontPage 中的網站相關的項目，它代表完成或維護網站所需要採取的動作。部份工作由 FrontPage 中的精靈自動產生。您也可以新增自己的工作。)';
sTemp=L_fpTask_TEXT;
break;
			case 'fpTasksview':
			L_fpTasksview_TEXT='(工作檢視：FrontPage 中的檢視，用於保存完成或維護網站所需的工作清單。FrontPage 中的檢視提供查看網站資訊的各種方法，以便您可以有效地管理網站。)';
sTemp=L_fpTasksview_TEXT;
break;
			case 'FpTcpip':
			L_FpTcpip_TEXT='(TCP/IP：傳輸控制通訊協定/網際網路通訊協定；用於電腦之間通訊的通訊協定。這是網路上通訊 (包括網際網路) 的標準。)';
sTemp=L_FpTcpip_TEXT;
break;
			case 'fpTemplate':
			L_fpTemplate_TEXT='(範本：一組預先設計的文字及圖形格式，依據這些格式可新建網頁及網站。使用範本建立網頁或網站之後，您可以自訂該網頁或網站。)';
sTemp=L_fpTemplate_TEXT;
break;
			case 'fpTheme':
			L_fpTheme_TEXT='(主題：主題將一組協調的圖形元素套用至文件、網頁或網站中的所有網頁。主題可由字型、連結列及其他網頁元件的設計及色彩配置組成。)';
sTemp=L_fpTheme_TEXT;
break;
			case 'fptoplevelsite':
			L_fptoplevelsite_TEXT='(頂層網站：網站資料夾階層中的頂端資料夾。頂層網站可位於網頁伺服器、虛擬伺服器網路或本機電腦硬碟上。)';
sTemp=L_fptoplevelsite_TEXT;
break;
			case 'FpUniversalDataLink':
			L_FpUniversalDataLink_TEXT='(UDL：「通用資料連結」包含 OLE DB 資料來源物件定義，並允許管理及載入到 OLE DB 資料來源的連線。檔案的副檔名為 .udl。)';
sTemp=L_FpUniversalDataLink_TEXT;
break;
			case 'fpurl':
			L_fpurl_TEXT='(Uniform Resource Locator (URL)：指定網際網路或內部網路上物件、文件、全球資訊網網頁或其他目的地之位置及通訊協定 (如 HTTP 或 FTP) 的位址。例如：http://www.example.com/。)';
sTemp=L_fpurl_TEXT;
break;
			case 'FpUsageAnalysis':
			L_FpUsageAnalysis_TEXT='(使用分析：為評估網站使用情況而收集的資料，如訪客使用者名稱、每個網頁的瀏覽頻率，以及所使用的網頁瀏覽器類型。)';
sTemp=L_FpUsageAnalysis_TEXT;
break;
			case 'Fpuserdefinedstyle':
			L_Fpuserdefinedstyle_TEXT='(使用者定義的樣式：新樣式或內建樣式的修改。使用者定義的樣式永遠包含階層式樣式表格式設定屬性。)';
sTemp=L_Fpuserdefinedstyle_TEXT;
break;
			case 'FpViewBar':
			L_FpViewBar_TEXT='(檢視列：網頁上的區域，用來顯示可讓您選取不同檢視的清單或檔案庫。)';
sTemp=L_FpViewBar_TEXT;
break;
			case 'fpviewitemsright':
			L_fpviewitemsright_TEXT='(「檢視項目」權利：允許使用者檢視清單、文件庫、討論區或問卷中各項目的權利。使用者無法新增、修改或移除項目。)';
sTemp=L_fpviewitemsright_TEXT;
break;
			case 'fpVirtualserver':
			L_fpVirtualserver_TEXT='(虛擬伺服器：在同一伺服器上執行的多個網站之一，每個網站均具有唯一網域名稱及 IP 位址。支援虛擬伺服器的網頁伺服器稱為多主機網頁伺服器。)';
sTemp=L_fpVirtualserver_TEXT;
break;
			case 'fpvisit':
			L_fpvisit_TEXT='(瀏覽：在網站使用報告中，指出網站訪客在前進到超連結瀏覽另一個網站或關閉瀏覽器之前，已存取您的網站並檢視一或多個檔案的值。)';
sTemp=L_fpvisit_TEXT;
break;
			case 'fpWashout':
			L_fpWashout_TEXT='(刷淡：在 FrontPage 中，網頁檢視中可用的圖形編輯效果，可建立低解析度、高對比版本的圖形。)';
sTemp=L_fpWashout_TEXT;
break;
			case 'fpWatermark':
			L_fpWatermark_TEXT='(浮水印：網站中網頁背景上顯示的圖形，用來識別網頁，但在頁面捲動時不捲動。並非所有網頁瀏覽器都支援浮水印。)';
sTemp=L_fpWatermark_TEXT;
break;
			case 'fpWeb':
			L_fpWeb_TEXT='(網頁：首頁及其相關網頁、圖形、文件、多媒體及其他儲存在網頁伺服器或電腦硬碟上的檔案。與網站相同。)';
sTemp=L_fpWeb_TEXT;
break;
			case 'fpwebbaseddistributedauthoringandversioningwebdav':
			L_fpwebbaseddistributedauthoringandversioningwebdav_TEXT='(WebDAV：在全球資訊網上發佈及管理檔案的應用程式通訊協定。它支援儲存檔案的資訊，因此作者可以變更檔案及其屬性，但不會覆寫該檔案的其他變更。)';
sTemp=L_fpwebbaseddistributedauthoringandversioningwebdav_TEXT;
break;
			case 'fpWebname':
			L_fpWebname_TEXT='(Web 名稱：FrontPage 中的網頁名稱與網頁伺服器上的資料夾名稱對應，但受制於該伺服器的長度、字元限制及大小寫。)';
sTemp=L_fpWebname_TEXT;
break;
			case 'fpWebstructure':
			L_fpWebstructure_TEXT='(網站結構：在導覽檢視中定義之 FrontPage 網站中各網頁之間的關係設定。結構規劃清楚，網站訪客可因此得知他在網站中的位置。)';
sTemp=L_fpWebstructure_TEXT;
break;
			case 'FpWebview':
			L_FpWebview_TEXT='(Web 檢視：[開啟] 及 [儲存] 對話方塊中可用的其中一個檢視。顯示具有超連結的網頁，以開啟及儲存文件庫中的檔案。)';
sTemp=L_FpWebview_TEXT;
break;
			case 'FpWinsock':
			L_FpWinsock_TEXT='(winsock：Windows Sockets 的簡稱。一種軟體的應用程式開發介面標準，可在執行 Windows 的電腦上提供 TCP/IP 介面。)';
sTemp=L_FpWinsock_TEXT;
break;
			case 'FpWysiwig':
			L_FpWysiwig_TEXT='(WYSIWYG：「所見即所得」的英文簡寫。您檢視的文件與在最終產品中顯示的一樣，並可讓您直接編輯文字、圖形及該檢視中的其他元素。)';
sTemp=L_FpWysiwig_TEXT;
break;
			case 'ofCropmarks':
			L_ofCropmarks_TEXT='(裁切線：顯示要在何處修剪發佈頁的線。只有當列印網頁的紙張大小大於網頁的大小時，才會顯示裁切線。)';
sTemp=L_ofCropmarks_TEXT;
break;
			case 'pbascender':
			L_pbascender_TEXT='(上昇幅度：小寫拉丁字母 b、d、f、h、k、l 及 t 中從主體部份或 x 高度向上延伸出去的部份。)';
sTemp=L_pbascender_TEXT;
break;
			case 'pbascenderline':
			L_pbascenderline_TEXT='(上昇幅度行：標示小寫拉丁字母 b、d、f、h、k、l 及 t 之上行字母的典型高度線，您看不到此線條。)';
sTemp=L_pbascenderline_TEXT;
break;
			case 'PbAttributes':
			L_PbAttributes_TEXT='(屬性：可使用繪圖工具及功能表命令來操作的物件或文字功能 (如填滿線或文字色彩)。)';
sTemp=L_PbAttributes_TEXT;
break;
			case 'pbautoflow':
			L_pbautoflow_TEXT='(自動排文：文字從一個框架到另一個的自動排列。)';
sTemp=L_pbautoflow_TEXT;
break;
			case 'pbBaseline':
			L_pbBaseline_TEXT='(基線：線條類型所依據之一種看不到的線。)';
sTemp=L_pbBaseline_TEXT;
break;
			case 'pbbaselineguides':
			L_pbbaselineguides_TEXT='(基準輔助線：各行文字可向其對齊的輔助線，使得各欄文字的外觀保持一致。)';
sTemp=L_pbbaselineguides_TEXT;
break;
			case 'PbBleeds':
			L_PbBleeds_TEXT='(出血：圖片超出列印頁面的範圍。)';
sTemp=L_PbBleeds_TEXT;
break;
			case 'pbBodytext':
			L_pbBodytext_TEXT='(本文：構成出版物主要內容的文字。例如，不包括標題、頭條、重要引述及標號。)';
sTemp=L_pbBodytext_TEXT;
break;
			case 'pbBond':
			L_pbBond_TEXT='(證券紙：常用於信紙信頭及其他商業出版物的輕量紙。)';
sTemp=L_pbBond_TEXT;
break;
			case 'pbcapheight':
			L_pbcapheight_TEXT='(首字高度：大寫拉丁字母的典型高度。)';
sTemp=L_pbcapheight_TEXT;
break;
			case 'pbcapline':
			L_pbcapline_TEXT='(首字行：標示大寫拉丁字母典型高度之看不見的線。)';
sTemp=L_pbcapline_TEXT;
break;
			case 'pbcatalogmerge':
			L_pbcatalogmerge_TEXT='(型錄合併列印：一種處理過程，為合併來自資料來源的資訊與範本以建立頁面，且每頁可顯示多筆記錄。您可將合併頁新增至現有出版物或建立新的出版物。)';
sTemp=L_pbcatalogmerge_TEXT;
break;
			case 'pbcatalogmergearea':
			L_pbcatalogmergearea_TEXT='(型錄合併列印區域：型錄合併列印範本中的區域，其中可插入合併欄位。當合併完成時，資料來源中的資料會填滿每個欄位，且該型錄合併列印區域將在每頁上重複及顯示多筆記錄。)';
sTemp=L_pbcatalogmergearea_TEXT;
break;
			case 'pbcenterlinetrap':
			L_pbcenterlinetrap_TEXT='(中央線補漏白：兩個不同顏色、但明亮度接近的物件在列印頁面上相鄰時所產生的少量重疊。)';
sTemp=L_pbcenterlinetrap_TEXT;
break;
			case 'pbchoke':
			L_pbchoke_TEXT='(淺壓深：少量的重疊，可減少兩個不同顏色相鄰物件中下級物件的油墨廓清。)';
sTemp=L_pbchoke_TEXT;
break;
			case 'PbCmyk':
			L_PbCmyk_TEXT='(CMYK：一種商業印刷色彩模式，透過混合不同百分比的青色、洋紅、黃色及黑色油墨，來產生更多的色彩。)';
sTemp=L_PbCmyk_TEXT;
break;
			case 'PbColorModel':
			L_PbColorModel_TEXT='(色彩模式：為螢幕上顯示及列印定義色彩的方式。使用數種不同色彩模式可以描述色彩：HSV (色調、飽和度及值)；CMY (青色、洋紅及黃色) 及 RGB (紅色、綠色及藍色)。)';
sTemp=L_PbColorModel_TEXT;
break;
			case 'pbColorpalette':
			L_pbColorpalette_TEXT='(色盤：當您要將色彩套用到填滿、線或文字時可用之色彩的集合。預設的 Publisher 色盤包含 40 種色彩，但會隨著您新增色彩、套用色彩配置或變更色彩設定而變更。)';
sTemp=L_pbColorpalette_TEXT;
break;
			case 'pbColorscheme':
			L_pbColorscheme_TEXT='(色彩配置：一組預先定義的協調色彩，您可以將它們套用至文字及物件。當您切換至新色彩配置，或修改目前的色彩配置時，套用配置色彩的文字及物件會自動變更。)';
sTemp=L_pbColorscheme_TEXT;
break;
			case 'pbcolorseparation':
			L_pbcolorseparation_TEXT='(分色：分離彩色圖像中各個色彩的程序，這樣對於每種印刷色 (青色、洋紅、黃色及黑色)，以及商業印表機所使用的任何特別色墨水，色彩即可列印在不同的印刷板上。)';
sTemp=L_pbcolorseparation_TEXT;
break;
			case 'pbcolumnguides':
			L_pbcolumnguides_TEXT='(分欄輔助線：用於將出版物頁面分成兩或多個欄的垂直輔助線。)';
sTemp=L_pbcolumnguides_TEXT;
break;
			case 'pbcontinuednotice':
			L_pbcontinuednotice_TEXT='(轉接註明：在文字方塊的開始或結束處的說明，指出該文字是上承或下轉不同的頁面。)';
sTemp=L_pbcontinuednotice_TEXT;
break;
			case 'pbCopyfitting':
			L_pbCopyfitting_TEXT='(組排文字：調整文字以符合分配的空間大小。)';
sTemp=L_pbCopyfitting_TEXT;
break;
			case 'PbCyans':
			L_PbCyans_TEXT='(青色：CMY 色彩模式及 CMYK 色彩混合方式中的基本顏色。CMY 以白色開始，減去青色、洋紅及黃色的百分比，以建立不同的顏色。)';
sTemp=L_PbCyans_TEXT;
break;
			case 'pbdatasource':
			L_pbdatasource_TEXT='(預設文字：網頁瀏覽者的範例文字。此文字將顯示在 Web 表單控制項中，輔助訪客輸入資訊。)';
sTemp=L_pbdatasource_TEXT;
break;
			case 'PbDataSources':
			L_PbDataSources_TEXT='(資料來源：包含可併入出版物之資訊的檔案。例如，您要在郵件或型錄合併列印中使用之圖片的名稱及地址或路徑。您必須連結到資料來源才能執行合併。)';
sTemp=L_PbDataSources_TEXT;
break;
			case 'PbdefXYZAxes':
			L_PbdefXYZAxes_TEXT='(x、y 及 z 座標軸：三條互相垂直的直線，用於在笛卡兒座標系統中確定點的位置。在 Microsoft Office 繪圖層中，x 是水平的，y 是垂直的，而 z 則垂直於資料定位面。)';
sTemp=L_PbdefXYZAxes_TEXT;
break;
			case 'pbdescender':
			L_pbdescender_TEXT='(下降幅度：拉丁文字中的小寫字母部份，可延伸至基線下面；例如，字母 g、j、p、q 及 y 的下半部份。)';
sTemp=L_pbdescender_TEXT;
break;
			case 'pbdescenderline':
			L_pbdescenderline_TEXT='(下降幅度行：標示延伸到小寫拉丁字母 g、j、p、q 及 y 的下端部份的基線以下的看不見的線。)';
sTemp=L_pbdescenderline_TEXT;
break;
			case 'pbDesignelement':
			L_pbDesignelement_TEXT='(設計元素：出版物中有助於加強設計視覺效果的任何物件。「設計庫」包含許多預先做好的元素。)';
sTemp=L_pbDesignelement_TEXT;
break;
			case 'PbDrawingObject':
			L_PbDrawingObject_TEXT='(繪圖物件：任何您可以繪製或插入，變更及增強的圖形。繪圖物件包括「自訂圖案」、曲線、直線，以及「文字藝術師」繪圖物件。)';
sTemp=L_PbDrawingObject_TEXT;
break;
			case 'pbElectronicform':
			L_pbElectronicform_TEXT='(電子表單：網站上的互動式表單，您要填寫並傳送給網站或網頁伺服器的擁有者。)';
sTemp=L_pbElectronicform_TEXT;
break;
			case 'pbembeddedpicture':
			L_pbembeddedpicture_TEXT='(內嵌圖片：儲存在出版物中，而不是連結到出版物外部之來源檔案的圖片。)';
sTemp=L_pbembeddedpicture_TEXT;
break;
			case 'pbEmdash':
			L_pbEmdash_TEXT='(長破折號：標點符號 (a€”)，依據大寫 M 的寬度，主要用於強調句子元素。)';
sTemp=L_pbEmdash_TEXT;
break;
			case 'pbencapsulatedpostscripteps':
			L_pbencapsulatedpostscripteps_TEXT='(EPS：使用 PostScript 網頁描述語言建立的圖形檔案格式。EPS 圖形預設為列印到與 PostScript 相容的印表機。)';
sTemp=L_pbencapsulatedpostscripteps_TEXT;
break;
			case 'pbEndash':
			L_pbEndash_TEXT='(短破折號：標點符號 (a€“)，依據大寫 N 的寬度，主要用作連接元素，特別是連接數字。)';
sTemp=L_pbEndash_TEXT;
break;
			case 'pbExtension':
			L_pbExtension_TEXT='(副檔名：檔名中句點之後的最後幾個字元。這些字元通常指出儲存在檔案中的資訊種類。)';
sTemp=L_pbExtension_TEXT;
break;
			case 'PbFieldCode':
			L_PbFieldCode_TEXT='(功能變數代碼：出版物中的預留位置文字，其中可插入資料來源的資訊 (如名稱或位址)。您可以格式化、複製、移動或刪除功能變數代碼。)';
sTemp=L_PbFieldCode_TEXT;
break;
			case 'PbFontEmbedding':
			L_PbFontEmbedding_TEXT='(內嵌字型：將字型插入出版物。一旦內嵌字型，資訊便會成為出版物的一部份。)';
sTemp=L_PbFontEmbedding_TEXT;
break;
			case 'pbFontmanager':
			L_pbFontmanager_TEXT='(字型管理員：一種軟體程式，亦稱為「類型管理員」，可協助您增加或減少可用字型集合。)';
sTemp=L_pbFontmanager_TEXT;
break;
			case 'pbfontmetrics':
			L_pbfontmetrics_TEXT='(字型公制：定義電腦字型字元在螢幕或紙張上所佔據的實體空間及其與文字行中其他字元關係的值。)';
sTemp=L_pbfontmetrics_TEXT;
break;
			case 'pbFontsubsetting':
			L_pbFontsubsetting_TEXT='(字型子集：內嵌某種字型特定之有限數目的字元，從而減少檔案大小。)';
sTemp=L_pbFontsubsetting_TEXT;
break;
			case 'pbFontsubstitution':
			L_pbFontsubstitution_TEXT='(字型替代：當 Windows 或印表機所使用的字型類似於您在出版物中用來顯示或列印出版物的字型時，所發生的替代。)';
sTemp=L_pbFontsubstitution_TEXT;
break;
			case 'pbFormcontrol':
			L_pbFormcontrol_TEXT='(表單控制項：在網站上，在電子表單上輸入資訊時所使用的個別方塊或按鈕。)';
sTemp=L_pbFormcontrol_TEXT;
break;
			case 'pbFormdatafile':
			L_pbFormdatafile_TEXT='(表單資料檔：儲存從電子表單蒐集之資訊的檔案。)';
sTemp=L_pbFormdatafile_TEXT;
break;
			case 'pbFrame':
			L_pbFrame_TEXT='(框架：在螢幕上顯示為方塊的空間，包含出版物的特別元素。框架的類型包括文字方塊、表格框及圖片框。)';
sTemp=L_pbFrame_TEXT;
break;
			case 'pbgamut':
			L_pbgamut_TEXT='(色域圖：可能的色彩範圍，可透過特定色彩模式 (如 RGB 或 CMYK) 產生。)';
sTemp=L_pbgamut_TEXT;
break;
			case 'pbGraphic':
			L_pbGraphic_TEXT='(圖形：非文字設計元素，如照片、繪圖或圖案。)';
sTemp=L_pbGraphic_TEXT;
break;
			case 'pbGraphicregion':
			L_pbGraphicregion_TEXT='(繪圖區域：網頁上圖形重疊的區域。)';
sTemp=L_pbGraphicregion_TEXT;
break;
			case 'pbGraphicsfilter':
			L_pbGraphicsfilter_TEXT='(圖形篩選程式：將儲存為某種檔案格式的圖片轉換成另一種格式的程式，如此該圖片便可在特定圖形程式中顯示。)';
sTemp=L_pbGraphicsfilter_TEXT;
break;
			case 'pbGuides':
			L_pbGuides_TEXT='(輔助線：用於精確定位物件的非列印線。輔助線的類型包括邊界輔助線、欄輔助線、列輔助線及尺規輔助線。)';
sTemp=L_pbGuides_TEXT;
break;
			case 'pbGutter':
			L_pbGutter_TEXT='(裝訂邊：出版物中兩或多欄文字之間或兩個對開頁面之間的空白區域。)';
sTemp=L_pbGutter_TEXT;
break;
			case 'pbhalftone':
			L_pbhalftone_TEXT='(半色調：通常是影像的列印複製，它使用點狀圖，點的大小會根據圖像的濃度而變化。)';
sTemp=L_pbhalftone_TEXT;
break;
			case 'pbHandle':
			L_pbHandle_TEXT='(控點：選取物件時顯示在物件周圍的數個小圖案之一。您可以按一下控點並拖曳來移動或調整物件形狀。)';
sTemp=L_pbHandle_TEXT;
break;
			case 'pbHangingquotation':
			L_pbHangingquotation_TEXT='(向上引號：用於構建重要引述的大型引號。)';
sTemp=L_pbHangingquotation_TEXT;
break;
			case 'pbhsl':
			L_pbhsl_TEXT='(HSL：用三個值定義色彩的色彩模式：「色調」即色彩本身；「飽和度」即色彩的純度；「明亮度」即色彩所反射或吸收了多少光。)';
sTemp=L_pbhsl_TEXT;
break;
			case 'pbHTMLcodefragment':
			L_pbHTMLcodefragment_TEXT='(HTML 程式碼片段：為建立某些功能 (如指令碼、計數器或跑馬燈) 而新增至網頁的 HTML 程式碼。)';
sTemp=L_pbHTMLcodefragment_TEXT;
break;
			case 'pbImageColorMatching':
			L_pbImageColorMatching_TEXT='(ICM：在印表機及電腦上執行的程式，用於識別在兩個系統上最接近的色彩。ICM 可讓您更清楚地知道出版物最後會是什麼色彩。)';
sTemp=L_pbImageColorMatching_TEXT;
break;
			case 'pbimagesetter':
			L_pbimagesetter_TEXT='(網片輸出機：列印到紙張或軟片，或直接列印到印刷板的高解析度輸出裝置。商業印刷的出版物通常是網片輸出機的輸出，作為進行印刷的第一步。)';
sTemp=L_pbimagesetter_TEXT;
break;
			case 'pbIndent':
			L_pbIndent_TEXT='(縮排：除左邊界之外，新增至文字左邊的空白區域。)';
sTemp=L_pbIndent_TEXT;
break;
			case 'pbinlineobject':
			L_pbinlineobject_TEXT='(內置物件：放置在一行文字之中的圖片或其他物件，其在行中的位置不變，新增或刪除文字時與文字一起移動。內置物件可隨鄰近文字做水平或垂直移動，或只做垂直移動。)';
sTemp=L_pbinlineobject_TEXT;
break;
			case 'pbInsertionpoint':
			L_pbInsertionpoint_TEXT='(插入點：出版物中按一下滑鼠之後游標顯示的位置。)';
sTemp=L_pbInsertionpoint_TEXT;
break;
			case 'pbKnockout':
			L_pbKnockout_TEXT='(油墨廓清：在前景中消除物件後面之背景色彩的程序。)';
sTemp=L_pbKnockout_TEXT;
break;
			case 'pbLayout':
			L_pbLayout_TEXT='(版面配置：出版物頁面上文字、圖形及其他物件的整體安排。)';
sTemp=L_pbLayout_TEXT;
break;
			case 'pbLeading':
			L_pbLeading_TEXT='(前置：各行文字之間的空間，從基線到基線進行測量。)';
sTemp=L_pbLeading_TEXT;
break;
			case 'pbLinebreak':
			L_pbLinebreak_TEXT='(分行符號：指示一行文字結束的非列印字元。)';
sTemp=L_pbLinebreak_TEXT;
break;
			case 'pblineperinchlpi':
			L_pblineperinchlpi_TEXT='(LPI：列印點陣圖時所使用之半色調螢幕的行螢幕頻率的度量。對於商業印刷，使用更高的 LPI 通常會使圖片的列印效果更精密細緻。)';
sTemp=L_pblineperinchlpi_TEXT;
break;
			case 'pblinescreenangle':
			L_pblinescreenangle_TEXT='(線寬變化角度：用於印刷色列印之每個半色調之點狀線的角度。標準角度是：青色 15 度，洋紅 75 度，黃色 0 度，黑色 45 度。)';
sTemp=L_pblinescreenangle_TEXT;
break;
			case 'pblinescreenfrequency':
			L_pblinescreenfrequency_TEXT='(線寬變化頻率：半色調螢幕的細緻程度或粗劣程度，由每英吋列印行數 (LPI) 表示。LPI 越高，半色調螢幕中所使用的點越細緻。半色調螢幕越細緻，顯示的圖片就越詳細。)';
sTemp=L_pblinescreenfrequency_TEXT;
break;
			case 'pblinespacing':
			L_pblinespacing_TEXT='(行距：從一行文字的底端到下一行文字底端的距離。亦稱為前置。)';
sTemp=L_pblinespacing_TEXT;
break;
			case 'pbLink':
			L_pbLink_TEXT='(連結：用於將某支程式中建立的資訊複本插入 Word 文件，同時還保留兩個檔案之間的連接。當來源檔案中的資訊變更時，這些變更會在目的文件中反映出來。)';
sTemp=L_pbLink_TEXT;
break;
			case 'pblinkedpicture':
			L_pblinkedpicture_TEXT='(連結圖片：連結到儲存在出版物檔案之外之高解析度圖像檔的圖片。如果在圖像編輯程式中變更了連結圖片，那麼您可更新出版物檔案中的連結圖片。)';
sTemp=L_pblinkedpicture_TEXT;
break;
			case 'pbMailmerge':
			L_pbMailmerge_TEXT='(合併列印：將資料來源的資訊與出版物結合起來，以批次列印個別自訂出版物的程序。)';
sTemp=L_pbMailmerge_TEXT;
break;
			case 'pbmappeddatafield':
			L_pbmappeddatafield_TEXT='(對應資料欄位：代表常用資訊的欄位，如「名字」。如果資料來源包含「名字」(First Name) 欄位或變化形式，如「FName」，則資料來源欄位會自動對應到相應的對應資料欄位。)';
sTemp=L_pbmappeddatafield_TEXT;
break;
			case 'pbmarginguides':
			L_pbmarginguides_TEXT='(邊界輔助線：在頁面頂端、底端、左邊及右邊的輔助線，用於定義頁面邊界。頁面的大部份內容在邊界輔助線之內。)';
sTemp=L_pbmarginguides_TEXT;
break;
			case 'pbmasterpage':
			L_pbmasterpage_TEXT='(主版頁面：可套用至出版物的一或多頁的背景頁。主版頁面包含可套用之多頁的元素，如頁首、頁尾、邊界輔助線及分欄輔助線。)';
sTemp=L_pbmasterpage_TEXT;
break;
			case 'pbmergefield':
			L_pbmergefield_TEXT='(合併欄位：插入到出版物中之文字或圖片的預留位置。資料來源中的資訊 (如名稱、地址或圖像) 會插入到每個合併列印功能變數中。您可以格式化、複製、移動或刪除合併欄位。)';
sTemp=L_pbmergefield_TEXT;
break;
			case 'pbMirroredpagelayout':
			L_pbMirroredpagelayout_TEXT='(對稱版面配置：左右對開頁面為左右反射顯像的版面配置。)';
sTemp=L_pbMirroredpagelayout_TEXT;
break;
			case 'pbmisregistration':
			L_pbmisregistration_TEXT='(重合失調：列印時不同印刷板的物件未正確對齊所導致的間距。導致重合失調的原因是移動及伸展紙張或印刷板。)';
sTemp=L_pbmisregistration_TEXT;
break;
			case 'pbMockup':
			L_pbMockup_TEXT='(原型：顯示您計劃建立之出版物版面配置的素描或呈現方式。)';
sTemp=L_pbMockup_TEXT;
break;
			case 'pbNonbreakinghyphen':
			L_pbNonbreakinghyphen_TEXT='(不分行連字號：一種連字號類型，可讓帶有連字號的單字保持在同一行上。)';
sTemp=L_pbNonbreakinghyphen_TEXT;
break;
			case 'pbNudge':
			L_pbNudge_TEXT='(微調：一次以一個像素來移動物件。)';
sTemp=L_pbNudge_TEXT;
break;
			case 'pbOpacity':
			L_pbOpacity_TEXT='(不透明：定義有多少光透過物件像素的品質。如果物件為百分之百不透明，則沒有光透過該物件。)';
sTemp=L_pbOpacity_TEXT;
break;
			case 'pbOrientation':
			L_pbOrientation_TEXT='(列印方向：出版物在一張紙上的列印方向。您可以選擇直印 (高大於寬的列印方向)，或橫印 (寬大於高的列印方向)。)';
sTemp=L_pbOrientation_TEXT;
break;
			case 'pboutcrop':
			L_pboutcrop_TEXT='(超界裁剪：使用負裁剪值將裁剪套用至圖片。超界裁剪不僅不會減少圖片的大小，反而使其框架超出了邊界。)';
sTemp=L_pboutcrop_TEXT;
break;
			case 'pboverflow':
			L_pboverflow_TEXT='(溢出：不符合文字方塊大小的文字。該文字會隱藏，直到流動到新文字方塊為止，或直到重新調整文字溢出的文字方塊以包含文字為止。)';
sTemp=L_pboverflow_TEXT;
break;
			case 'PbOverlap':
			L_PbOverlap_TEXT='(重疊：指出在大型出版物 (如海報或橫幅) 中何處對齊鄰近頁面的標記。)';
sTemp=L_PbOverlap_TEXT;
break;
			case 'pbOverprint':
			L_pbOverprint_TEXT='(套印：列印一種顏色的某個元素覆蓋另一種顏色的某個元素，而不對下方的材料進行移除或油墨廓清。)';
sTemp=L_pbOverprint_TEXT;
break;
			case 'PbPacks':
			L_PbPacks_TEXT='(封裝：使用「隨身簡報精靈」來封裝出版物檔案。)';
sTemp=L_PbPacks_TEXT;
break;
			case 'pbpagesorter':
			L_pbpagesorter_TEXT='(網頁瀏覽：Publisher 視窗左下角中的一或多個網頁形的控制項，其代表出版物的每一頁，並可用來跳至、重新調整或使用出版物頁面。)';
sTemp=L_pbpagesorter_TEXT;
break;
			case 'pbpan':
			L_pbpan_TEXT='(取景位置調整：使用滑鼠在工作區中移動本頁，或向任何方向快速捲動，以取得更好的檢視。)';
sTemp=L_pbpan_TEXT;
break;
			case 'pbPantone':
			L_pbPantone_TEXT='(Pantone：一種色彩比對系統，廣泛用於定義數百種特別色墨水，或定義由 CMYK 油墨組成的印刷色。)';
sTemp=L_pbPantone_TEXT;
break;
			case 'pbParagraphmark':
			L_pbParagraphmark_TEXT='(段落標記：指示段落結束的非列印字元。)';
sTemp=L_pbParagraphmark_TEXT;
break;
			case 'pbPattern':
			L_pbPattern_TEXT='(圖樣：由簡單、重複設計 (如垂直或水平規線) 建立的效果。)';
sTemp=L_pbPattern_TEXT;
break;
			case 'pbpdf':
			L_pbpdf_TEXT='(PDF：可攜式文件格式。PostScript 型電子檔案檔案類型。您可將大部份文件儲存為 PDF 檔案，並與任何電腦上的其他使用者共用。)';
sTemp=L_pbpdf_TEXT;
break;
			case 'pbPersonalinformation':
			L_pbPersonalinformation_TEXT='(個人資訊：關於您或您組織的資訊，如姓名、地址及組織名稱，Publisher 會將其儲存，並在您所建立的後續出版物中重複使用。)';
sTemp=L_pbPersonalinformation_TEXT;
break;
			case 'pbPica':
			L_pbPica_TEXT='(pica：印刷量度單位，其相當於 1/6 英吋。1 個 pica 可分成 12 個點。)';
sTemp=L_pbPica_TEXT;
break;
			case 'pbPicture':
			L_pbPicture_TEXT='(圖片：帶入到 Publisher 中的點陣圖或繪圖類型的圖形。美工圖案是一種圖片類型。)';
sTemp=L_pbPicture_TEXT;
break;
			case 'pbpixel':
			L_pbpixel_TEXT='(像素：數字圖片的最小元素。像素是實心方形的色彩，其大小依圖片解析度的不同而不同。解析度越高的圖片像素越小，且顯示的圖片越細緻。)';
sTemp=L_pbpixel_TEXT;
break;
			case 'pbPlaceholdertext':
			L_pbPlaceholdertext_TEXT='(預留位置文字：使用其中一個 Publisher 精靈 (如「摺頁冊精靈」) 建立之出版物中顯示的文字。預留位置文字會由您的文字取代。)';
sTemp=L_pbPlaceholdertext_TEXT;
break;
			case 'pbpoint':
			L_pbpoint_TEXT='(點：印刷量度單位，它相當於一英吋的 1/72。12 點等於 1 個 pica。)';
sTemp=L_pbpoint_TEXT;
break;
			case 'pbpostscript':
			L_pbpostscript_TEXT='(PostScript：印表機及影片輸出機所使用的網頁描述語言。)';
sTemp=L_pbpostscript_TEXT;
break;
			case 'PbPostscriptFont':
			L_PbPostscriptFont_TEXT='(PostScript 字型：以任何點數均可順利顯示及列印的比例式字型。PostScript 字型以 PostScript 網頁描述語言為基礎。亦稱為「類型 1」字型。)';
sTemp=L_PbPostscriptFont_TEXT;
break;
			case 'pbPrinterdriver':
			L_pbPrinterdriver_TEXT='(印表機驅動程式：在軟體程式與印表機之間進行通訊的裝置。印表機驅動程式告知 Publisher 印表機可以執行哪些動作，還告知印表機如何列印出版物。)';
sTemp=L_pbPrinterdriver_TEXT;
break;
			case 'pbPrintersmarks':
			L_pbPrintersmarks_TEXT='(印表機標記：列印在出版物每頁之可列印區域外部的標記，有助於商業印刷服務修剪、對齊及控制出版物中的色彩。)';
sTemp=L_pbPrintersmarks_TEXT;
break;
			case 'pbPrintspooler':
			L_pbPrintspooler_TEXT='(列印多工緩衝處理器：將列印檔案傳送至印表機之前，在記憶體中暫時儲存列印檔案的軟體，以便您可以繼續工作。)';
sTemp=L_pbPrintspooler_TEXT;
break;
			case 'pbprocesscolors':
			L_pbprocesscolors_TEXT='(印刷色：四種透明墨水 (青色、洋紅、黃色及黑色)，用於商業印刷，以產生彩色圖像及更多的單色。)';
sTemp=L_pbprocesscolors_TEXT;
break;
			case 'pbPullquote':
			L_pbPullquote_TEXT='(重要引述：對故事本文的引用，用於強調一種構想、引起注意或產生興趣。)';
sTemp=L_pbPullquote_TEXT;
break;
			case 'pbPuretext':
			L_pbPuretext_TEXT='(純文字：進行簡單格式設定的文字，沒有框線、圖形或儲存格。對 Web 發佈十分重要。)';
sTemp=L_pbPuretext_TEXT;
break;
			case 'pbrasterimageprocessorrip':
			L_pbrasterimageprocessorrip_TEXT='(RIP：網片輸出機或桌上型印表機中的處理器，可解譯印表機驅動程式傳送的指令，並將它們轉換成光柵或點陣圖格線，以標記紙張或網片。)';
sTemp=L_pbrasterimageprocessorrip_TEXT;
break;
			case 'PbResolutions':
			L_PbResolutions_TEXT='(解析度：在電腦螢幕上或由印表機產生的圖像清晰度及細緻程度。)';
sTemp=L_PbResolutions_TEXT;
break;
			case 'pbrichblack':
			L_pbrichblack_TEXT='(混黑色：較為飽和的黑色，建立方法是使用 100% 印刷黑色及部份百分比的一或多種青色、洋紅或黃色。)';
sTemp=L_pbrichblack_TEXT;
break;
			case 'pbrowguides':
			L_pbrowguides_TEXT='(列輔助線：用於將螢幕分成兩或多個部份的水平輔助線，有助於組織頁面的版面配置。)';
sTemp=L_pbrowguides_TEXT;
break;
			case 'pbrulerguide':
			L_pbrulerguide_TEXT='(尺規輔助線：非列印的水平或垂直輔助線，透過它您可以對齊到尺規上的任何點。)';
sTemp=L_pbrulerguide_TEXT;
break;
			case 'pbrulermark':
			L_pbrulermark_TEXT='(尺規標記：垂直或水平尺規上的標示，其顯示出版物所使用之量度單位的單位或子單位。)';
sTemp=L_pbrulermark_TEXT;
break;
			case 'pbrulerorigin':
			L_pbrulerorigin_TEXT='(尺規原點：水平或垂直尺規的開頭或零點。尺規原點預設在出版物頁面的左上角，但無法移至頁面或草稿區的任意位置。)';
sTemp=L_pbrulerorigin_TEXT;
break;
			case 'pbSchemecolor':
			L_pbSchemecolor_TEXT='(配置色彩：定義於一組所選色彩的其中一個色彩。如果您使用配置色彩填滿物件，則每當您為該出版物選擇其他色彩配置時，物件的色彩都會變更。)';
sTemp=L_pbSchemecolor_TEXT;
break;
			case 'pbscratcharea':
			L_pbscratcharea_TEXT='(草稿區：Publisher 中網頁四周的區域，用於保留目前未在網頁上的物件。草稿區中的物件不會作為網頁一部份進行列印及匯出。)';
sTemp=L_pbscratcharea_TEXT;
break;
			case 'pbScreenfont':
			L_pbScreenfont_TEXT='(螢幕字型：為在電腦監視器上顯示文字而設計的字型。列印的螢幕字型可能與顯示的字型相同或不同，這要視您所安裝的印表機字型而定。)';
sTemp=L_pbScreenfont_TEXT;
break;
			case 'pbSeparator':
			L_pbSeparator_TEXT='(分隔符號：分隔符號是一種字元，如標點符號，在清單中用於分隔數字或字母，以識別不同於清單文字的項目。)';
sTemp=L_pbSeparator_TEXT;
break;
			case 'pbServicebureau':
			L_pbServicebureau_TEXT='(服務中心：其會準備要列印在商業印刷機上的出版物。)';
sTemp=L_pbServicebureau_TEXT;
break;
			case 'PbShade':
			L_PbShade_TEXT='(網底：與黑色混合的色彩。百分之十的陰影表示原來的色彩佔十分之一，黑色佔十分之九。)';
sTemp=L_PbShade_TEXT;
break;
			case 'pbShadow':
			L_pbShadow_TEXT='(陰影：套用至物件的樣式，其中通常將灰色外框套用至右下部份。該效果會讓物件看起來有立體感。)';
sTemp=L_pbShadow_TEXT;
break;
			case 'PbSheets':
			L_PbSheets_TEXT='(紙張：出版物要列印在其上面的紙。在商業印刷業中，紙張大小指的是用於列印的紙張，而頁面大小指的是完成之出版物的大小。)';
sTemp=L_PbSheets_TEXT;
break;
			case 'pbSpecialcharacter':
			L_pbSpecialcharacter_TEXT='(特殊字元：非列印字元，如定位字元或段落標記。)';
sTemp=L_pbSpecialcharacter_TEXT;
break;
			case 'pbSpecialpaper':
			L_pbSpecialpaper_TEXT='(特殊紙張：上面有預先印好的彩色圖樣或框線的紙張。您可以使用這些紙張建立色彩豐富、樣式美觀的外觀，而無需使用彩色印表機或影印機。)';
sTemp=L_pbSpecialpaper_TEXT;
break;
			case 'PbSpotColor':
			L_PbSpotColor_TEXT='(特別色：符合標準樣色 (如 PANTONE) 之預先混合的色彩。)';
sTemp=L_PbSpotColor_TEXT;
break;
			case 'pbspread':
			L_pbspread_TEXT='(深壓淺：延伸兩個不同顏色相鄰物件之上部圖案的少量重疊。深壓淺超出其油墨廓清的區域。)';
sTemp=L_pbspread_TEXT;
break;
			case 'pbSwatchbook':
			L_pbSwatchbook_TEXT='(樣本：準備出版物進行商業印刷時，列印色彩的選擇範本。)';
sTemp=L_pbSwatchbook_TEXT;
break;
			case 'pbSynchronization':
			L_pbSynchronization_TEXT='(同步處理：當您變更某些物件 (如智慧物件或重複設計元素) 的格式設定時，或當您變更個人資訊元件中的資訊時，Publisher 會對類似物件進行變更。)';
sTemp=L_pbSynchronization_TEXT;
break;
			case 'pbTagline':
			L_pbTagline_TEXT='(標語：簡短且容易記住的語句，用來摘要組織目的或強調產品或服務的重要性。)';
sTemp=L_pbTagline_TEXT;
break;
			case 'pbTentfoldcard':
			L_pbTentfoldcard_TEXT='(摺疊卡：具有四頁的摺疊卡片。第一頁為前封面，第二頁及第三頁為裡面的頁，而第四頁則為卡片的後封面。)';
sTemp=L_pbTentfoldcard_TEXT;
break;
			case 'pbTextconverter':
			L_pbTextconverter_TEXT='(文字轉換程式：一種檔案，可將其他程式中建立的文字處理及試算表文件轉換成可匯入 Publisher 的檔案。)';
sTemp=L_pbTextconverter_TEXT;
break;
			case 'pbtilenoun':
			L_pbtilenoun_TEXT='(並排顯示：整張無法列印之超大出版物 (如橫幅或海報) 之許多分開列印部份中的一個。可將分開的並排顯示組合起來以重新建立整個出版物。)';
sTemp=L_pbtilenoun_TEXT;
break;
			case 'pbtileverb':
			L_pbtileverb_TEXT='(並排：一個壓著一個地列印文件。)';
sTemp=L_pbtileverb_TEXT;
break;
			case 'pbTrap':
			L_pbTrap_TEXT='(補漏白：在列印頁面上兩個不同顏色物件的相鄰處建立少量重疊。)';
sTemp=L_pbTrap_TEXT;
break;
			case 'PbTruetypeFonts':
			L_PbTruetypeFonts_TEXT='(TrueType 字型：以任何點數均可順利顯示及列印的比例式字型。TrueType 字型直接受 Windows 作業系統支援，可內嵌在出版物中。)';
sTemp=L_PbTruetypeFonts_TEXT;
break;
			case 'pbxheight':
			L_pbxheight_TEXT='(x 高度：小寫拉丁字母 (如字母 a、c、e、m、n、o、r、s、u、v、w、x 及 z) 的典型高度。)';
sTemp=L_pbxheight_TEXT;
break;
			case 'pbxline':
			L_pbxline_TEXT='(x 行：標示小寫拉丁字母之典型高度 (如字母 a、c、e、m、n、o、r、s、u、v、w、x 及 z 的高度) 的看不見的線。)';
sTemp=L_pbxline_TEXT;
break;
			case 'pbZeropoint':
			L_pbZeropoint_TEXT='(零點：水平及垂直尺規上「0」的位置。)';
sTemp=L_pbZeropoint_TEXT;
break;
			case 'IDH_pddef256Colors':
			L_IDH_pddef256Colors_TEXT='(8-bit color: A display setting that holds up to 256 specific color entries. Any color palette attached to a picture is by definition an 8-bit palette.)';
sTemp=L_IDH_pddef256Colors_TEXT;
break;
			case 'IDH_pddef3DLighting':
			L_IDH_pddef3DLighting_TEXT='(3-D lighting: In Microsoft PhotoDraw, the indirect and direct sources of light you can apply to 3-D objects. To modify 3-D lighting, you can apply a preset effect, change the lighting colors, or tilt lights.)';
sTemp=L_IDH_pddef3DLighting_TEXT;
break;
			case 'IDH_pddefActiveColor':
			L_IDH_pddefActiveColor_TEXT='(active color: The color displayed in the central square of the color box that appears in most workpanes. The active color is used when you create a new object and when you add fills and patterns to a selected object.)';
sTemp=L_IDH_pddefActiveColor_TEXT;
break;
			case 'IDH_pddefActiveColorPalette':
			L_IDH_pddefActiveColorPalette_TEXT='(active color palette: A subset of up to 256 of the colors in the True Color spectrum.)';
sTemp=L_IDH_pddefActiveColorPalette_TEXT;
break;
			case 'IDH_pddefActivePicture':
			L_IDH_pddefActivePicture_TEXT='(active picture: The picture that is currently open on the PhotoDraw workspace.)';
sTemp=L_IDH_pddefActivePicture_TEXT;
break;
			case 'IDH_pddefBitsPerPixel':
			L_IDH_pddefBitsPerPixel_TEXT='(bits per pixel: Also known as color depth or bit depth. The term refers to the number of bits (8, 16, 24, or 32) used to store and display the color data for a single pixel. The number of bits per pixel determines the range of color available to an image.)';
sTemp=L_IDH_pddefBitsPerPixel_TEXT;
break;
			case 'IDH_pddefBrightness':
			L_IDH_pddefBrightness_TEXT='(brightness: The relative lightness of a color. An object with 0 percent brightness would be black, while an object with 100 percent brightness would be white. A tint is a color with brightness, or white, added to it.)';
sTemp=L_IDH_pddefBrightness_TEXT;
break;
			case 'IDH_pddefbrush_strokes':
			L_IDH_pddefbrush_strokes_TEXT='(brush strokes: Line styles resembling natural media paint strokes or photorealistic images that you can apply to an object.)';
sTemp=L_IDH_pddefbrush_strokes_TEXT;
break;
			case 'IDH_pddefCMYK':
			L_IDH_pddefCMYK_TEXT='(CMYK: A method for mixing print colors that starts with white, subtracts percentages of cyan, magenta, and yellow, and then adds a black component to reduce the amount of ink used to print a particular color.)';
sTemp=L_IDH_pddefCMYK_TEXT;
break;
			case 'IDH_pddefColorBox':
			L_IDH_pddefColorBox_TEXT='(color box: A set of color choices located in a workpane.)';
sTemp=L_IDH_pddefColorBox_TEXT;
break;
			case 'IDH_pddefColorDepth':
			L_IDH_pddefColorDepth_TEXT='(color depth: The number of color values that can be assigned to a single pixel in an image. Also known as bit depth, color depth can range from I bit (black and white) to 32 bits (over 16.7 million colors).)';
sTemp=L_IDH_pddefColorDepth_TEXT;
break;
			case 'IDH_pddefColorList':
			L_IDH_pddefColorList_TEXT='(color list: A drop-down list of color choices that appears in certain workpanes.)';
sTemp=L_IDH_pddefColorList_TEXT;
break;
			case 'IDH_pddefColorMatrix':
			L_IDH_pddefColorMatrix_TEXT='(color matrix: A map that displays the range of True Colors you can choose in PhotoDraw. True Colors, as people see them, range from violet at the high-frequency end of the visible-light band to red at the low-frequency end.)';
sTemp=L_IDH_pddefColorMatrix_TEXT;
break;
			case 'IDH_pddefColorModel':
			L_IDH_pddefColorModel_TEXT='(color model: A way of defining color both for onscreen and print display. Colors can be described using several different color models: HSV (hue, saturation, and value); CMY (cyan, magenta, yellow); and RGB (red, green, and blue).)';
sTemp=L_IDH_pddefColorModel_TEXT;
break;
			case 'IDH_pddefColorPalette':
			L_IDH_pddefColorPalette_TEXT='(color palette: A set of specific colors that can be saved with a composition or as a separate .pal (palette) file.)';
sTemp=L_IDH_pddefColorPalette_TEXT;
break;
			case 'IDH_pddefColorRamp':
			L_IDH_pddefColorRamp_TEXT='(color ramp: A range of colors in which each color gradually blends into the next one. For example, a blue ramp gradually blends hues of blue from pure black to pure blue.)';
sTemp=L_IDH_pddefColorRamp_TEXT;
break;
			case 'IDH_pddefColorSpectrum':
			L_IDH_pddefColorSpectrum_TEXT='(color spectrum: Colors, as people see them, range from violet at the high-frequency end of the visible-light band to red at the low-frequency end. In PhotoDraw, the True Color spectrum is represented as a color matrix.)';
sTemp=L_IDH_pddefColorSpectrum_TEXT;
break;
			case 'IDH_pddefComplementaryColors':
			L_IDH_pddefComplementaryColors_TEXT='(complementary colors: Colors such as yellow and blue that are opposite each other on the color wheel.)';
sTemp=L_IDH_pddefComplementaryColors_TEXT;
break;
			case 'IDH_pddefCompression':
			L_IDH_pddefCompression_TEXT='(compression: A method for reducing a picture\'s file size that combines pixel information for similar colors and stores the information in a smaller space. Higher compression levels yield smaller file sizes and shorter download times.)';
sTemp=L_IDH_pddefCompression_TEXT;
break;
			case 'IDH_pddefCompressionLevel':
			L_IDH_pddefCompressionLevel_TEXT='(compression level: The amount by which an image\'s file size is reduced. Higher compression levels yield smaller file sizes and shorter download times.)';
sTemp=L_IDH_pddefCompressionLevel_TEXT;
break;
			case 'IDH_pddefContrast':
			L_IDH_pddefContrast_TEXT='(contrast: The difference between the lightest and darkest areas of an image.)';
sTemp=L_IDH_pddefContrast_TEXT;
break;
			case 'IDH_pddefCustomPalette':
			L_IDH_pddefCustomPalette_TEXT='(custom palette: A set of colors on a palette with up to 256 specific color entries.)';
sTemp=L_IDH_pddefCustomPalette_TEXT;
break;
			case 'IDH_pddefCutout':
			L_IDH_pddefCutout_TEXT='(cutout: A copy of a selected area of a PhotoDraw object. You can create cutouts by using the Edge Finder, by tracing the area manually, by dragging out the shape of the area you want to cut out, or by selecting specific colors in an object.)';
sTemp=L_IDH_pddefCutout_TEXT;
break;
			case 'IDH_pddefCyan':
			L_IDH_pddefCyan_TEXT='(Cyan: A color essential to the CMY color model and the CMYK color-mixing method. The CMY model starts with white and subtracts percentages of cyan, magenta, and yellow to create different colors.)';
sTemp=L_IDH_pddefCyan_TEXT;
break;
			case 'IDH_pddefDesignerClip':
			L_IDH_pddefDesignerClip_TEXT='(Designer clip: Clip art exclusive to PhotoDraw. A Designer clip looks especially good when you enhance its lines with artistic or photographic brush strokes or different line styles.)';
sTemp=L_IDH_pddefDesignerClip_TEXT;
break;
			case 'IDH_pddefDestination':
			L_IDH_pddefDestination_TEXT='(destination: The location where you intend to display your finished PhotoDraw picture. The printed page, a Web site, and an online newsletter are all considered destinations.)';
sTemp=L_IDH_pddefDestination_TEXT;
break;
			case 'IDH_pddefdigital_photo':
			L_IDH_pddefdigital_photo_TEXT='(digital photo: An image that has been captured electronically with a digital camera or scanner.)';
sTemp=L_IDH_pddefdigital_photo_TEXT;
break;
			case 'IDH_pddefDisplaySetting':
			L_IDH_pddefDisplaySetting_TEXT='(display setting: The number of colors that your computer display software supports.)';
sTemp=L_IDH_pddefDisplaySetting_TEXT;
break;
			case 'IDH_pddefDisplaySystem':
			L_IDH_pddefDisplaySystem_TEXT='(display system: The combination of monitor, video adapter, and display software.)';
sTemp=L_IDH_pddefDisplaySystem_TEXT;
break;
			case 'IDH_pddefDithering':
			L_IDH_pddefDithering_TEXT='(dithering: A method for approximating colors on a display system or in a file format that does not have the specified color available.)';
sTemp=L_IDH_pddefDithering_TEXT;
break;
			case 'IDH_pddefDotsPerInchDPI':
			L_IDH_pddefDotsPerInchDPI_TEXT='(dots per inch (DPI): The units often used to measure image resolution for print devices and onscreen display resolution.)';
sTemp=L_IDH_pddefDotsPerInchDPI_TEXT;
break;
			case 'IDH_pddefDownload':
			L_IDH_pddefDownload_TEXT='(download: The process of transferring a copy of a file from a device or computer to another computer.)';
sTemp=L_IDH_pddefDownload_TEXT;
break;
			case 'IDH_pddefdrop_shadow':
			L_IDH_pddefdrop_shadow_TEXT='(drop shadow: a shaded outline that appears behind an object and creates the illusion of depth.)';
sTemp=L_IDH_pddefdrop_shadow_TEXT;
break;
			case 'IDH_pddefEdgeFinderWidth':
			L_IDH_pddefEdgeFinderWidth_TEXT='(Edge Finder width: The area of an object that the Edge Finder searches to locate a traceable outline. If the area you\'re tracing contrasts sharply with the rest of the object, using a wider Edge Finder width will yield the best results.)';
sTemp=L_IDH_pddefEdgeFinderWidth_TEXT;
break;
			case 'IDH_pddefExtrusion':
			L_IDH_pddefExtrusion_TEXT='(extrusion: The depth or thickness of a three-dimensional object. Extrusion can also refer to the amount that a 3-D object\'s sides are pushed out.)';
sTemp=L_IDH_pddefExtrusion_TEXT;
break;
			case 'IDH_pddefEyedropperTool':
			L_IDH_pddefEyedropperTool_TEXT='(Eyedropper: A tool you can use to select a color from one object and apply it to another object.)';
sTemp=L_IDH_pddefEyedropperTool_TEXT;
break;
			case 'IDH_pddefFace':
			L_IDH_pddefFace_TEXT='(face: The front surface of a three-dimensional object. Typically, the face of a 3-D object is the two-dimensional object from which the 3-D object was generated.)';
sTemp=L_IDH_pddefFace_TEXT;
break;
			case 'IDH_pddeffidelity':
			L_IDH_pddeffidelity_TEXT='(fidelity: The accuracy with which an image is reproduced on your personal computer.)';
sTemp=L_IDH_pddeffidelity_TEXT;
break;
			case 'IDH_pddefFillN':
			L_IDH_pddefFillN_TEXT='(fill: The color, pattern, texture, or picture used to fill the inside of an object.)';
sTemp=L_IDH_pddefFillN_TEXT;
break;
			case 'IDH_pddefFineTuning':
			L_IDH_pddefFineTuning_TEXT='(Fine tuning and Bleed settings: Fine tuning settings shift all inserted images by the same amount to align them properly on a full sheet of labels or stickers. Bleed settings determine how much of an object can print beyond the edges of a label or sticker)';
sTemp=L_IDH_pddefFineTuning_TEXT;
break;
			case 'IDH_pddefFlatbedScan':
			L_IDH_pddefFlatbedScan_TEXT='(flatbed scanner: A scanner with a flat, transparent surface that holds the image to be scanned, generally a book or other document.)';
sTemp=L_IDH_pddefFlatbedScan_TEXT;
break;
			case 'IDH_pddefFlatFileFormat':
			L_IDH_pddefFlatFileFormat_TEXT='(flat file format: An image file format in which individual objects cannot be edited. Files stored in JPEG, GIF, and BMP formats are all flat files. The PhotoDraw MIX file format is not a flat file format.)';
sTemp=L_IDH_pddefFlatFileFormat_TEXT;
break;
			case 'IDH_pddefFlatten':
			L_IDH_pddefFlatten_TEXT='(flatten: To permanently combine a set of objects into one object. Flattening is similar to grouping in that both actions combine a set of objects. However, flattening is a permanent action, whereas a group of objects can be ungrouped.)';
sTemp=L_IDH_pddefFlatten_TEXT;
break;
			case 'IDH_pddefFlip':
			L_IDH_pddefFlip_TEXT='(flip: To change the orientation of a selected object horizontally, vertically, or in both directions.)';
sTemp=L_IDH_pddefFlip_TEXT;
break;
			case 'IDH_pddefFreeform':
			L_IDH_pddefFreeform_TEXT='(freeform: Any shape you create from scratch with PhotoDraw drawing tools. A puffy cloud, mountains, a lightening bolt, and your name in cursive are all freeforms.)';
sTemp=L_IDH_pddefFreeform_TEXT;
break;
			case 'IDH_pddefGallery':
			L_IDH_pddefGallery_TEXT='(gallery: A collection of predefined styles that you can apply to PhotoDraw objects. Galleries show previews of what the styles look like. Clicking an item in a gallery applies the style to the selection object(s).)';
sTemp=L_IDH_pddefGallery_TEXT;
break;
			case 'IDH_pddefGalleryList':
			L_IDH_pddefGalleryList_TEXT='(gallery list: A drop-down list that you use to select a gallery of style or effect previews. Gallery lists appear in many PhotoDraw workpanes.)';
sTemp=L_IDH_pddefGalleryList_TEXT;
break;
			case 'IDH_pddefGIF_animation':
			L_IDH_pddefGIF_animation_TEXT='(GIF animation: A file containing a series of graphics that are displayed in rapid sequence in a Web browser.)';
sTemp=L_IDH_pddefGIF_animation_TEXT;
break;
			case 'IDH_pddefgraphics_filters':
			L_IDH_pddefgraphics_filters_TEXT='(graphic filter: A program that transforms a picture stored in one file format to another format so that it can be displayed in a specific graphics program.)';
sTemp=L_IDH_pddefgraphics_filters_TEXT;
break;
			case 'IDH_pddefGroupV':
			L_IDH_pddefGroupV_TEXT='(group: To temporarily designate all currently selected objects as a single object within a composition. Grouped objects can be ungrouped.)';
sTemp=L_IDH_pddefGroupV_TEXT;
break;
			case 'IDH_pddefhhscanner':
			L_IDH_pddefhhscanner_TEXT='(hand-held scanner: An input device that users hold in their hands and move over the document to be scanned.)';
sTemp=L_IDH_pddefhhscanner_TEXT;
break;
			case 'IDH_pddefHighColor':
			L_IDH_pddefHighColor_TEXT='(HTML tag: A text string used in HTML to identify a page element\'s type, format, and appearance. FrontPage automatically creates HTML tags to represent each element on a page.)';
sTemp=L_IDH_pddefHighColor_TEXT;
break;
			case 'IDH_pddefHSV':
			L_IDH_pddefHSV_TEXT='(HSV: A model for defining colors that uses the attributes of hue, saturation, and value (brightness) to specify a color. In this model, setting the value to 0 produces black; setting the hue and saturation to 0 and setting the value to 100 produces white.)';
sTemp=L_IDH_pddefHSV_TEXT;
break;
			case 'IDH_pddefHue':
			L_IDH_pddefHue_TEXT='(hue: The color attribute that most readily distinguishes one color from other colors. A color\'s hue is also its name.)';
sTemp=L_IDH_pddefHue_TEXT;
break;
			case 'IDH_pddeflayers':
			L_IDH_pddeflayers_TEXT='(layers: A feature of Adobe Photoshop that lets you edit portions of your image without affecting other areas. Layers are laid over the background canvas, so that each object can occupy its own layer.)';
sTemp=L_IDH_pddeflayers_TEXT;
break;
			case 'IDH_pddefLineSeg':
			L_IDH_pddefLineSeg_TEXT='(line segment: The straight or curved line that connects two points in a drawing object.)';
sTemp=L_IDH_pddefLineSeg_TEXT;
break;
			case 'IDH_pddefLosslessCompression':
			L_IDH_pddefLosslessCompression_TEXT='(lossless compression: A method for reducing file size in which image quality is retained regardless of the compression level. GIF format uses lossless compression.)';
sTemp=L_IDH_pddefLosslessCompression_TEXT;
break;
			case 'IDH_pddefLossyCompression':
			L_IDH_pddefLossyCompression_TEXT='(lossy compression: A method for reducing file size in which image quality degrades as the file size decreases. JPEG format, which uses lossy compression, lets you control the level of compression to balance the picture quality and the file size.)';
sTemp=L_IDH_pddefLossyCompression_TEXT;
break;
			case 'IDH_pddefMIX':
			L_IDH_pddefMIX_TEXT='(MIX: The Microsoft PhotoDraw native file format. Saving a picture in MIX format maintains all the objects in the picture as separate objects, allowing you to edit the individual objects when you reopen the file.)';
sTemp=L_IDH_pddefMIX_TEXT;
break;
			case 'IDH_pddefMonochrome':
			L_IDH_pddefMonochrome_TEXT='(monochrome: A photograph or drawing that contains a single hue or color, typically black.)';
sTemp=L_IDH_pddefMonochrome_TEXT;
break;
			case 'IDH_pddefObjectList':
			L_IDH_pddefObjectList_TEXT='(object list: The list of objects in a PhotoDraw picture that appears to the left of the workspace. You can use the object list to select objects that are hidden in the workspace, as well as to change the order of objects in the picture.)';
sTemp=L_IDH_pddefObjectList_TEXT;
break;
			case 'IDH_pddefopaque':
			L_IDH_pddefopaque_TEXT='(opacity: The quality of an object that defines the ability of light to pass through it. If an object is completely opaque, light does not pass through it.)';
sTemp=L_IDH_pddefopaque_TEXT;
break;
			case 'IDH_pddefOptimizedPalette':
			L_IDH_pddefOptimizedPalette_TEXT='(optimized palette: A palette that you create and fill yourself. After you create an optimized palette, you can modify the colors in it or remove the palette altogether.)';
sTemp=L_IDH_pddefOptimizedPalette_TEXT;
break;
			case 'IDH_pddeforder':
			L_IDH_pddeforder_TEXT='(order: The front-to-back placement of an object relative to other objects in a picture.)';
sTemp=L_IDH_pddeforder_TEXT;
break;
			case 'IDH_pddefPan':
			L_IDH_pddefPan_TEXT='(pan: To move the view of a PhotoDraw picture up, down, left, or right. You can use the view finder in the Pan and Zoom window to shift your view of a picture shown in the workspace.)';
sTemp=L_IDH_pddefPan_TEXT;
break;
			case 'IDH_pddefPanZoomWindow':
			L_IDH_pddefPanZoomWindow_TEXT='(Pan and Zoom window: Contains the tools you use when you want to concentrate on a particular area of a picture.)';
sTemp=L_IDH_pddefPanZoomWindow_TEXT;
break;
			case 'IDH_pddefphoto_brush':
			L_IDH_pddefphoto_brush_TEXT='(photo brush: A line style created from a photographic image, such as a chain, a snake, etc.)';
sTemp=L_IDH_pddefphoto_brush_TEXT;
break;
			case 'IDH_pddefphoto_stamp':
			L_IDH_pddefphoto_stamp_TEXT='(photo stamp: A line style created from stamping an image, such as a daisy or a shoe, along a path that you draw.)';
sTemp=L_IDH_pddefphoto_stamp_TEXT;
break;
			case 'IDH_pddefPicture':
			L_IDH_pddefPicture_TEXT='(picture: A Microsoft PhotoDraw file is called a picture, and may be composed of one or more objects.)';
sTemp=L_IDH_pddefPicture_TEXT;
break;
			case 'IDH_pddefPictureArea':
			L_IDH_pddefPictureArea_TEXT='(background: The area defined by a white rectangle on the Microsoft PhotoDraw workspace. When you save in any format other than MIX, your picture is cropped to this rectangle.)';
sTemp=L_IDH_pddefPictureArea_TEXT;
break;
			case 'IDH_pddefPictureGuides':
			L_IDH_pddefPictureGuides_TEXT='(background handles: The handles used to resize the background. By default, background handles are hidden.)';
sTemp=L_IDH_pddefPictureGuides_TEXT;
break;
			case 'IDH_pddefPictureList':
			L_IDH_pddefPictureList_TEXT='(Picture List: The list of open pictures that appears to the left of the workspace. You can use the Picture List to switch between open pictures, to copy objects from one picture to another, and to select objects in a picture.)';
sTemp=L_IDH_pddefPictureList_TEXT;
break;
			case 'IDH_pddefPluginProgram':
			L_IDH_pddefPluginProgram_TEXT='(plug-in filter: Software programs that you install to enhance the Microsoft PhotoDraw program. PhotoDraw supports Adobe Photoshop-compatible filter plug-ins.)';
sTemp=L_IDH_pddefPluginProgram_TEXT;
break;
			case 'IDH_pddefPoints':
			L_IDH_pddefPoints_TEXT='(points: Also known as vertices. In PhotoDraw, the term point refers to the highest point of a curve, the point where a curve ends, or the point where two line segments meet in a polygon or freeform.)';
sTemp=L_IDH_pddefPoints_TEXT;
break;
			case 'IDH_pddefPPI':
			L_IDH_pddefPPI_TEXT='(pixels per inch (PPI): A measurement of the clarity or fineness of detail of an image displayed on a computer monitor.)';
sTemp=L_IDH_pddefPPI_TEXT;
break;
			case 'IDH_pddefPreview':
			L_IDH_pddefPreview_TEXT='(preview: A thumbnail representation that you click to open at full size or to apply as an effect or style.)';
sTemp=L_IDH_pddefPreview_TEXT;
break;
			case 'IDH_pddefPrintFile':
			L_IDH_pddefPrintFile_TEXT='(print file: A file that can be sent directly from a computer to a printer port without being opened first. PhotoDraw saves print files with a .prn file extension.)';
sTemp=L_IDH_pddefPrintFile_TEXT;
break;
			case 'IDH_pddefPrintQuality':
			L_IDH_pddefPrintQuality_TEXT='(print quality: The quality of your printed picture. Microsoft PhotoDraw offers three print qualities: Good, Better, and Best.)';
sTemp=L_IDH_pddefPrintQuality_TEXT;
break;
			case 'IDH_pddefPureBlack':
			L_IDH_pddefPureBlack_TEXT='(pure black: In the RGB model, the color that results from mixing zero amounts of red, green, and blue.)';
sTemp=L_IDH_pddefPureBlack_TEXT;
break;
			case 'IDH_pddefPureBlue':
			L_IDH_pddefPureBlue_TEXT='(pure blue: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
sTemp=L_IDH_pddefPureBlue_TEXT;
break;
			case 'IDH_pddefPureCyan':
			L_IDH_pddefPureCyan_TEXT='(pure cyan: A secondary color that, according to the RGB model, contains the maximum amounts of green and blue and zero amounts of red. In the CMYK color-mixing method, cyan is one of the colors subtracted from white to create other colors.)';
sTemp=L_IDH_pddefPureCyan_TEXT;
break;
			case 'IDH_pddefPureGreen':
			L_IDH_pddefPureGreen_TEXT='(pure green: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
sTemp=L_IDH_pddefPureGreen_TEXT;
break;
			case 'IDH_pddefPureMagenta':
			L_IDH_pddefPureMagenta_TEXT='(pure magenta: A secondary color that, according to the RGB model, contains the maximum amounts of red and blue and zero amounts of green. In the CMYK color-mixing method, magenta is one of the colors subtracted from white to create other colors.)';
sTemp=L_IDH_pddefPureMagenta_TEXT;
break;
			case 'IDH_pddefPureRed':
			L_IDH_pddefPureRed_TEXT='(pure red: A primary color in the RGB and HSV color models. In the RGB model, varying amounts of red, green, and blue are combined to create different colors.)';
sTemp=L_IDH_pddefPureRed_TEXT;
break;
			case 'IDH_pddefPureWhite':
			L_IDH_pddefPureWhite_TEXT='(pure white: In the RGB color model, the color that results from combining the maximum amounts of red, green, and blue.)';
sTemp=L_IDH_pddefPureWhite_TEXT;
break;
			case 'IDH_pddefPureYellow':
			L_IDH_pddefPureYellow_TEXT='(pure yellow: A secondary color that, according to the RGB model, contains the maximum amounts of red and green and zero amounts of blue)';
sTemp=L_IDH_pddefPureYellow_TEXT;
break;
			case 'IDH_pddefrepair_box':
			L_IDH_pddefrepair_box_TEXT='(repair box: The rectangle that temporarily appears around the points you click in a picture to remove a scratch.)';
sTemp=L_IDH_pddefrepair_box_TEXT;
break;
			case 'IDH_pddefRotate':
			L_IDH_pddefRotate_TEXT='(rotate: To turn an object about its center in a clockwise or counter-clockwise direction.)';
sTemp=L_IDH_pddefRotate_TEXT;
break;
			case 'IDH_pddefRotateHandle':
			L_IDH_pddefRotateHandle_TEXT='(rotate handle: The filled circle handle on a PhotoDraw object that you drag to rotate the object.)';
sTemp=L_IDH_pddefRotateHandle_TEXT;
break;
			case 'IDH_pddefroyalty_free':
			L_IDH_pddefroyalty_free_TEXT='(royalty-free: The absence of a requirement to pay proprietors for the right to use their pictures.)';
sTemp=L_IDH_pddefroyalty_free_TEXT;
break;
			case 'IDH_pddefscan':
			L_IDH_pddefscan_TEXT='(scan: To move a light across a surface such as a page of text so that it can be interpreted by a computer.)';
sTemp=L_IDH_pddefscan_TEXT;
break;
			case 'IDH_pddefScrollButtons':
			L_IDH_pddefScrollButtons_TEXT='(scroll buttons: Buttons located at the top and bottom of workpanes and the Picture List. You can use the scroll buttons to view more of a workpane or to scroll through thumbnails in the Picture List or the object list.)';
sTemp=L_IDH_pddefScrollButtons_TEXT;
break;
			case 'IDH_pddefSelect':
			L_IDH_pddefSelect_TEXT='(select: To specify an object by clicking it or by highlighting it with the TAB key.)';
sTemp=L_IDH_pddefSelect_TEXT;
break;
			case 'IDH_pddefSelectionOutline':
			L_IDH_pddefSelectionOutline_TEXT='(selection outline: The outline that surrounds and defines the area of a cutout.)';
sTemp=L_IDH_pddefSelectionOutline_TEXT;
break;
			case 'IDH_pddefShininess':
			L_IDH_pddefShininess_TEXT='(shininess: A property of three-dimensional objects that determines the highlighting of a surface. A low level of shininess diffuses the highlighting, while a high level sharpens it.)';
sTemp=L_IDH_pddefShininess_TEXT;
break;
			case 'IDH_pddefSkew':
			L_IDH_pddefSkew_TEXT='(shear: To distort an object by skewing its opposing sides in opposite directions around its center.)';
sTemp=L_IDH_pddefSkew_TEXT;
break;
			case 'IDH_pddefSkewHandle':
			L_IDH_pddefSkewHandle_TEXT='(shear handle: The handle on an object\'s selection rectangle that you drag to shear the object.)';
sTemp=L_IDH_pddefSkewHandle_TEXT;
break;
			case 'IDH_pddefslider':
			L_IDH_pddefslider_TEXT='(slider: A control that displays and sets values for picture attributes such as brightness, contrast, transparency, and tint.)';
sTemp=L_IDH_pddefslider_TEXT;
break;
			case 'IDH_pddefSmallIncrements':
			L_IDH_pddefSmallIncrements_TEXT='(small increments: Short distances along the edge of the area that you want to cut out or erase.)';
sTemp=L_IDH_pddefSmallIncrements_TEXT;
break;
			case 'IDH_pddefStackN':
			L_IDH_pddefStackN_TEXT='(stack: The order of objects, from front to back, in a picture.)';
sTemp=L_IDH_pddefStackN_TEXT;
break;
			case 'IDH_pddefsupported_file_format':
			L_IDH_pddefsupported_file_format_TEXT='(supported file format: one of the file formats that Microsoft PhotoDraw recognizes without requiring you to install third-party graphics filters.)';
sTemp=L_IDH_pddefsupported_file_format_TEXT;
break;
			case 'IDH_pddefTangent':
			L_IDH_pddefTangent_TEXT='(tangent: A line that extends through a vertex or point. Dragging the end point of the tangent changes the shape of the curve.)';
sTemp=L_IDH_pddefTangent_TEXT;
break;
			case 'IDH_pddefTemplate':
			L_IDH_pddefTemplate_TEXT='(template: A predefined design that you can use to create pictures for direct print or for another program. PhotoDraw templates include Web Graphics, Flyers, Cards, and Designer Clip Art.)';
sTemp=L_IDH_pddefTemplate_TEXT;
break;
			case 'IDH_pddefTextObject':
			L_IDH_pddefTextObject_TEXT='(text object: A string of text that appears in your pictures as a single object. A text object can range from one character to several sentences.)';
sTemp=L_IDH_pddefTextObject_TEXT;
break;
			case 'IDH_pddefTrueColor':
			L_IDH_pddefTrueColor_TEXT='(true color: In Microsoft PhotoDraw, the color specification that produces the maximum range of colors that can be differentiated by the human eye.)';
sTemp=L_IDH_pddefTrueColor_TEXT;
break;
			case 'IDH_pddefUndock':
			L_IDH_pddefUndock_TEXT='(undock: To move a menu or workpane from its default position on the workspace.)';
sTemp=L_IDH_pddefUndock_TEXT;
break;
			case 'IDH_pddefViewFinder':
			L_IDH_pddefViewFinder_TEXT='(view finder: The rectangular outline located inside the Pan and Zoom window that you drag to magnify a portion of an object or picture.)';
sTemp=L_IDH_pddefViewFinder_TEXT;
break;
			case 'IDH_pddefViewport':
			L_IDH_pddefViewport_TEXT='(viewport: A view into a document or graphical image that, unlike a window, cuts off portions outside the range of the viewport. A viewport can cover all of a screen or only a portion.)';
sTemp=L_IDH_pddefViewport_TEXT;
break;
			case 'IDH_pddefvisual_menu':
			L_IDH_pddefvisual_menu_TEXT='(visual menu: The bar located between the menu bar and toolbar that displays many tasks that you\'ll carry out in PhotoDraw.)';
sTemp=L_IDH_pddefvisual_menu_TEXT;
break;
			case 'IDH_pddefWorkspace':
			L_IDH_pddefWorkspace_TEXT='(workspace: The entire area that you can use when you create a picture in Microsoft PhotoDraw. The workspace includes the background and the surrounding scratch area.)';
sTemp=L_IDH_pddefWorkspace_TEXT;
break;
			case 'IDH_pddefZoom':
			L_IDH_pddefZoom_TEXT='(zoom: To change the display magnification level. When you zoom to a level higher than 100 percent, less of the workspace is visible and the images on it appear larger.)';
sTemp=L_IDH_pddefZoom_TEXT;
break;
			case 'pddefRollover':
			L_pddefRollover_TEXT='(rollover: An effect that changes the appearance of the selected object when you hover over or click it. Typically, rollover effects are used to indicate that an object is hyperlinked.)';
sTemp=L_pddefRollover_TEXT;
break;
			case 'DvAdf':
			L_DvAdf_TEXT='(ADF：部份掃描器上提供的附件，允許多頁自動掃描。)';
sTemp=L_DvAdf_TEXT;
break;
			case 'dvannotation':
			L_dvannotation_TEXT='(註釋：標記文件時可新增的元素，包括文字、反白提示、手繪多邊形文字或圖案，或者圖片。)';
sTemp=L_dvannotation_TEXT;
break;
			case 'dvmicrosoftdocumentimagingformatmdi':
			L_dvmicrosoftdocumentimagingformatmdi_TEXT='(Microsoft Document Imaging 格式 (MDI)：使用標籤格式的高解析度圖形，主要為用於數位圖形「Tagged Image 檔案格式 (TIFF)」。)';
sTemp=L_dvmicrosoftdocumentimagingformatmdi_TEXT;
break;
			case 'dvobject':
			L_dvobject_TEXT='(物件：可作為一個單元處理的程式碼及資料組合。例如，控制表單或應用程式元件。)';
sTemp=L_dvobject_TEXT;
break;
			case 'DvOcr':
			L_DvOcr_TEXT='(OCR：將文字圖像 (如掃描的文件) 轉換成實際的文字字元。亦稱為文字辨識。)';
sTemp=L_DvOcr_TEXT;
break;
			case 'DvPagePane':
			L_DvPagePane_TEXT='(頁面窗格：以較大的大小顯示在縮圖窗格中選取的頁面，使得頁面的各部份可被選取及複製。)';
sTemp=L_DvPagePane_TEXT;
break;
			case 'DvReadingView':
			L_DvReadingView_TEXT='(閱讀檢視：為方便螢幕上閱讀而提供的單頁或頁面某部份的全螢幕檢視。)';
sTemp=L_DvReadingView_TEXT;
break;
			case 'DvThumbnailPane':
			L_DvThumbnailPane_TEXT='(縮圖窗格：以一或多個小圖像顯示目前掃描的文件。)';
sTemp=L_DvThumbnailPane_TEXT;
break;
			case 'OdContentClass':
			L_OdContentClass_TEXT='(content class: A Web Storage System content class defines the intent or purpose of an item along with the names of properties that are intended for items in this class.)';
sTemp=L_OdContentClass_TEXT;
break;
			case 'OdDesignElement':
			L_OdDesignElement_TEXT='(design element: A page, frameset, item type, form, view, or resource (such as a script file, text file, cascading style sheet, or image).)';
sTemp=L_OdDesignElement_TEXT;
break;
			case 'OdEcmascript':
			L_OdEcmascript_TEXT='(ECMAScript: A scripting language standard defined by the European Computer Manufacturers Association (ECMA) 262 specification. Microsoft implements ECMAScript as JScript, and Netscape implements ECMAScript as JavaScript.)';
sTemp=L_OdEcmascript_TEXT;
break;
			case 'OdFrameset':
			L_OdFrameset_TEXT='(frameset: A page that divides a Web browser window into different areas called frames that can each display a different Web page. Framesets are often used to display a page with navigation elements or a header in one frame and a page in another frame.)';
sTemp=L_OdFrameset_TEXT;
break;
			case 'OdItemType':
			L_OdItemType_TEXT='(item type: The data definition for a class of items stored in a Web application. An item type consists of its name and references to the default set of fields (properties) associated with items of that class.)';
sTemp=L_OdItemType_TEXT;
break;
			case 'OdLocalInformationStoreFile':
			L_OdLocalInformationStoreFile_TEXT='(Local Information Store file (.lis): Data file that caches your Outlook items, Web applications opened with Outlook, and Web applications under development online in Solution Designer. You can also create applications offline in an .lis file.)';
sTemp=L_OdLocalInformationStoreFile_TEXT;
break;
			case 'OdPrimary':
			L_OdPrimary_TEXT='(primary: A primary form, frameset, or page has no restrictions as to what client browsers or languages can access the form, frameset, or page.)';
sTemp=L_OdPrimary_TEXT;
break;
			case 'OdProjectItem':
			L_OdProjectItem_TEXT='(project item: A subfolder or a design element in a Solution Designer project, which can be a page, frameset, item type, form, view, or generic&nbsp;item (any item added to the project folder).)';
sTemp=L_OdProjectItem_TEXT;
break;
			case 'OdSchema':
			L_OdSchema_TEXT='(schema: The formal definition of the structure of a database. For the Web Storage System, the schema defines item types (also called content classes), which play a similar role to tables in other database systems, and fields (also called properties).)';
sTemp=L_OdSchema_TEXT;
break;
			case 'OdSimpleAction':
			L_OdSimpleAction_TEXT='(simple action: A button control for performing pre-scripted actions on forms and pages, such as saving an item or setting the value of a field. You can customize most simple action buttons by right-clicking the button, and then clicking Properties.)';
sTemp=L_OdSimpleAction_TEXT;
break;
			case 'OdSubstitute':
			L_OdSubstitute_TEXT='(substitute: A substitute form, frameset, or page is&nbsp;one that has been registered to be displayed for only certain client browsers and languages.)';
sTemp=L_OdSubstitute_TEXT;
break;
			case 'OdUniformResourceName':
			L_OdUniformResourceName_TEXT='(URN: An Internet standard for uniquely identifying a network resource. In Web applications, URNs are used to name item types and field definitions. The format of a URN uses a registered domain name. For example, urn:schemas-microsoft-com:datatypes#type.)';
sTemp=L_OdUniformResourceName_TEXT;
break;
			case 'OdView':
			L_OdView_TEXT='(view: An interactive list that displays the data in your application, typically in a table format. A view consists of a definition of what fields to display, which is hosted on a page by the View control to render the view and provide interactivity.)';
sTemp=L_OdView_TEXT;
break;
			case 'OdWebParts':
			L_OdWebParts_TEXT='(Web Parts: The components that make up a digital dashboard. Web Parts are reusable components that can contain any kind of Web-based information, including analytical, collaborative, and database information.)';
sTemp=L_OdWebParts_TEXT;
break;
			case 'OdWebStorageSystem':
			L_OdWebStorageSystem_TEXT='(WSS: The storage component of Exchange 2000 and SharePoint Portal servers, which integrates Web server, database, file system, and workgroup functionality. The WSS lets you store and share many types of data in a single integrated system.)';
sTemp=L_OdWebStorageSystem_TEXT;
break;
			case 'xdactivefield':
			L_xdactivefield_TEXT='(使用中欄位：表單上游標所在的欄位。)';
sTemp=L_xdactivefield_TEXT;
break;
			case 'xdattributefield':
			L_xdattributefield_TEXT='(屬性欄位：資料來源中可包含資料的欄位，其為屬性 (而非元素)。屬性欄位無法包含其他欄位。)';
sTemp=L_xdattributefield_TEXT;
break;
			case 'xdbind':
			L_xdbind_TEXT='(繫結：將控制項連接至資料來源中的欄位或群組，如此便可儲存輸入控制項中的資料。未繫結控制項時，該控制項未連接至欄位或群組，因此將不會儲存輸入控制項中的資料。)';
sTemp=L_xdbind_TEXT;
break;
			case 'xdchildelement':
			L_xdchildelement_TEXT='(子元件：在 XML 樹狀結構中，父系元件中包含的元件。)';
sTemp=L_xdchildelement_TEXT;
break;
			case 'xdclosedcontentmodel':
			L_xdclosedcontentmodel_TEXT='(封閉式內容模型：一組 XML 文件規則，指出 XML 文件中的元素不能包含任何未在文件所參照之結構描述中宣告的資訊。)';
sTemp=L_xdclosedcontentmodel_TEXT;
break;
			case 'xdconditionalformatting':
			L_xdconditionalformatting_TEXT='(條件格式設定：依據輸入表單的值來變更控制項的外觀，包括其可見度。)';
sTemp=L_xdconditionalformatting_TEXT;
break;
			case 'xdcssselector':
			L_xdcssselector_TEXT='(CSS (階層式樣式表) 選取器：套用顯示資訊的元素類型名稱。)';
sTemp=L_xdcssselector_TEXT;
break;
			case 'xdcustominstalledform':
			L_xdcustominstalledform_TEXT='(自訂安裝表單：以自訂安裝程式安裝的表單，通常可存取電腦上的檔案及設定。)';
sTemp=L_xdcustominstalledform_TEXT;
break;
			case 'xdcustomtaskpane':
			L_xdcustomtaskpane_TEXT='(自訂工作窗格：內容會顯示於格式旁的視窗之 .html 檔案。自訂工作窗格可提供表單特定命令及 [說明] 內容。)';
sTemp=L_xdcustomtaskpane_TEXT;
break;
			case 'xddataadapter':
			L_xddataadapter_TEXT='(資料配接器：用於將資料送出至資料庫、Web 服務及 .xml 檔案和從中擷取資料的物件。)';
sTemp=L_xddataadapter_TEXT;
break;
			case 'xddatasource':
			L_xddatasource_TEXT='(資料來源：欄位和群組的集合，其定義並儲存 InfoPath 格式的資料。此格式內的控制項繫結於資料來源的欄位和群組。)';
sTemp=L_xddatasource_TEXT;
break;
			case 'xddatatype':
			L_xddatatype_TEXT='(資料類型：定義欄位可儲存之資料類型的欄位屬性。資料類型包括「文字」、「RTF 文字」、「整數」、「小數」、「真/假」、「超連結」、「日期」、「時間」、「日期及時間」及「圖片」。)';
sTemp=L_xddatatype_TEXT;
break;
			case 'xddatavalidation':
			L_xddatavalidation_TEXT='(資料驗證：測試資料正確性的程序；您可以套用至控制項的一組規則，用於指定使用者可輸入資料的類型及範圍。)';
sTemp=L_xddatavalidation_TEXT;
break;
			case 'xddeclarativeprogramming':
			L_xddeclarativeprogramming_TEXT='(宣告式程式設計：以規則為基礎的程式設計，其中每條規則是獨立的，宣告或執行規則的順序無關緊要。)';
sTemp=L_xddeclarativeprogramming_TEXT;
break;
			case 'xddesignmode':
			L_xddesignmode_TEXT='(設計模式：您可在其中建立或修改表單範本的 InfoPath 設計環境。)';
sTemp=L_xddesignmode_TEXT;
break;
			case 'xddialogboxalert':
			L_xddialogboxalert_TEXT='(對話方塊提醒：一種資料驗證提醒，在控制項中輸入無效資料時，會開啟對話方塊，顯示自訂錯誤訊息。)';
sTemp=L_xddialogboxalert_TEXT;
break;
			case 'xddocumenttypedefinitiondtd':
			L_xddocumenttypedefinitiondtd_TEXT='(文件類型定義 (DTD)：結構描述定義檔案的前置任務，為 XML 文件元件、屬性及內含項目關係指定規則。)';
sTemp=L_xddocumenttypedefinitiondtd_TEXT;
break;
			case 'xdeventhandler':
			L_xdeventhandler_TEXT='(事件處理程式：InfoPath 格式的指令碼函數程式碼，它會回應格式事件或資料驗證事件。)';
sTemp=L_xdeventhandler_TEXT;
break;
			case 'xdexpressionbox':
			L_xdexpressionbox_TEXT='(運算式方塊：表單上的控制項，依據使用 XPath 運算式的資料，顯示查閱或計算的結果 (唯讀資料)。)';
sTemp=L_xdexpressionbox_TEXT;
break;
			case 'xdfield':
			L_xdfield_TEXT='(欄位：資料來源中可包含資料的元素或屬性。如果欄位是元素，則可包含屬性欄位。欄位會儲存輸入控制項中的資料。)';
sTemp=L_xdfield_TEXT;
break;
			case 'xdform':
			L_xdform_TEXT='(表單：在 InfoPath 中，具有一組控制項 (使用者可在其中輸入資訊) 的文件。InfoPath 表單可包含許多功能，如 RTF 文字方塊、日期選擇器、選擇性及重複區段、資料驗證，以及設定格式化條件。)';
sTemp=L_xdform_TEXT;
break;
			case 'xdformarea':
			L_xdformarea_TEXT='(表單區域：InfoPath 工作區，顯示您正在使用的表單。)';
sTemp=L_xdformarea_TEXT;
break;
			case 'xdformdefinitionfilexsf':
			L_xdformdefinitionfilexsf_TEXT='(表單定義檔案：副檔名為 .xsf 的 XML 檔案，包含所有其他檔案及表單中使用之元件的相關資訊，包括使用者介面自訂、XML 結構描述、檢視、商務邏輯、事件及部署設定。)';
sTemp=L_xdformdefinitionfilexsf_TEXT;
break;
			case 'xdformfiles':
			L_xdformfiles_TEXT='(表單檔案：用於實作 InfoPath 表單的檔案集合。檔案類型可包括 .html、.xml、.xsd、.xslt、Script，以及其他支援表單功能所需要的其他檔案類型。)';
sTemp=L_xdformfiles_TEXT;
break;
			case 'xdformlibrary':
			L_xdformlibrary_TEXT='(表單庫：儲存及共用以相同範本建立之表單集合的資料夾。表單庫中的每個表單都與該程式庫內容清單中顯示的使用者定義資訊相關。)';
sTemp=L_xdformlibrary_TEXT;
break;
			case 'xdformlibrarycolumns':
			L_xdformlibrarycolumns_TEXT='(表單庫欄：在 Windows SharePoint Team Services 表單程式庫中，顯示在欄中的表單資訊。對於程式庫中的每個表單，欄中會顯示輸入控制項中的資訊，而該控制項是表單設計工具指定為表單庫欄之控制項。)';
sTemp=L_xdformlibrarycolumns_TEXT;
break;
			case 'xdformtemplate':
			L_xdformtemplate_TEXT='(表單範本：在 InfoPath 中，定義資料結構、外觀及表單行為的一個檔案或一組檔案。)';
sTemp=L_xdformtemplate_TEXT;
break;
			case 'xdgroup':
			L_xdgroup_TEXT='(群組：資料來源中的元素，可包含欄位及其他群組。包含其他控制項的控制項 (如重複表格及區段) 會繫結至群組。)';
sTemp=L_xdgroup_TEXT;
break;
			case 'xdinlinealert':
			L_xdinlinealert_TEXT='(內置提醒：使用紅色虛線框標示包含無效資料之控制項的資料驗證提醒。使用者可以在控制項上按一下滑鼠右鍵，以顯示自訂錯誤訊息。)';
sTemp=L_xdinlinealert_TEXT;
break;
			case 'xdlayouttable':
			L_xdlayouttable_TEXT='(版面配置表格：用於排列表單內容 (如文字或控制項) 的儲存格集合。)';
sTemp=L_xdlayouttable_TEXT;
break;
			case 'xdlistcontrol':
			L_xdlistcontrol_TEXT='(清單控制項：可格式化為項目清單、編號清單及一般清單的表單上的控制項。使用者可將文字輸入清單控制項 (視需要重複)。)';
sTemp=L_xdlistcontrol_TEXT;
break;
			case 'xdmicrosoftscripteditormse':
			L_xdmicrosoftscripteditormse_TEXT='(Microsoft Script Editor (MSE)：用於在 InfoPath 表單上建立、編輯及除錯 Microsoft JScript 或 Microsoft VBScript 程式碼的程式設計環境。)';
sTemp=L_xdmicrosoftscripteditormse_TEXT;
break;
			case 'xdmicrosoftwindowsinstallermsi':
			L_xdmicrosoftwindowsinstallermsi_TEXT='(Microsoft Windows Installer (MSI)：用於建立要在 Windows 作業系統上部署之軟體安裝套件的工具。)';
sTemp=L_xdmicrosoftwindowsinstallermsi_TEXT;
break;
			case 'xdnamespace':
			L_xdnamespace_TEXT='(命名空間：唯一限定元素名稱及關係的機制，以免在來自多個來源但名稱相同的元素中發生名稱衝突。)';
sTemp=L_xdnamespace_TEXT;
break;
			case 'xdopencontentmodel':
			L_xdopencontentmodel_TEXT='(開放式內容模型：一組 XML 文件規則，指出 XML 文件中的元素可以具有未在文件參照之結構描述中宣告的其他子元素及屬性。)';
sTemp=L_xdopencontentmodel_TEXT;
break;
			case 'xdoptionalsection':
			L_xdoptionalsection_TEXT='(選擇性區段：表單上包含其他控制項 (且預設狀況下通常不會顯示) 的控制項。使用者可以在填寫表單時插入及移除選擇性區段。)';
sTemp=L_xdoptionalsection_TEXT;
break;
			case 'xdparentelement':
			L_xdparentelement_TEXT='(父系元件：在 XML 中，給定元件所隸屬的元件。)';
sTemp=L_xdparentelement_TEXT;
break;
			case 'xdprocessinginstructions':
			L_xdprocessinginstructions_TEXT='(處理指示：XML 文件宣告中儲存的資訊。此資訊會透過 XML 剖析器傳遞給任何使用 XML 文件的應用程式。)';
sTemp=L_xdprocessinginstructions_TEXT;
break;
			case 'xdpublish':
			L_xdpublish_TEXT='(發佈：使其他人能夠填寫表單。發佈的表單範本儲存在共用位置，如網頁伺服器或公司的內部網路上。)';
sTemp=L_xdpublish_TEXT;
break;
			case 'xdreferencefield':
			L_xdreferencefield_TEXT='(參照欄位：與其他欄位相關的欄位，如此其屬性可永遠相符。如果某一欄位的屬性變更，則其他欄位的屬性也會自動更新。)';
sTemp=L_xdreferencefield_TEXT;
break;
			case 'xdreferencegroup':
			L_xdreferencegroup_TEXT='(參照群組：與其他群組相關的群組，如此其屬性將永遠與其包含的群組和欄位之屬性相符。如果某一群組的屬性變更，則其他群組也會自動更新。)';
sTemp=L_xdreferencegroup_TEXT;
break;
			case 'xdrepeatingfield':
			L_xdrepeatingfield_TEXT='(重複欄位：資料來源中出現一次以上的群組。控制項 (如項目清單、編號清單及一般清單；重複區段；和重複表格) 可繫結至重複欄位。)';
sTemp=L_xdrepeatingfield_TEXT;
break;
			case 'xdrepeatinggroup':
			L_xdrepeatinggroup_TEXT='(重複群組：資料來源中出現一次以上的群組。控制項 (如重複表格及區段) 會繫結至重複群組。)';
sTemp=L_xdrepeatinggroup_TEXT;
break;
			case 'xdrepeatingsection':
			L_xdrepeatingsection_TEXT='(重複區段：表單上包含其他控制項且視需要進行重複的控制項。使用者可以在填寫表單時插入多個區段。)';
sTemp=L_xdrepeatingsection_TEXT;
break;
			case 'xdrepeatingtable':
			L_xdrepeatingtable_TEXT='(重複表格：表單上包含其他表格格式控制項且視需要進行重複的控制項。使用者可以在填寫表單時插入多個列。)';
sTemp=L_xdrepeatingtable_TEXT;
break;
			case 'xdresourcemanager':
			L_xdresourcemanager_TEXT='(資源管理員：新增及移除支援表單功能之資源檔案的介面。)';
sTemp=L_xdresourcemanager_TEXT;
break;
			case 'xdrootelement':
			L_xdrootelement_TEXT='(根元素：XML 文件中包含所有其他元素的元素。它是 XML 文件的頂層元素，且必須是文件中的第一個元素。)';
sTemp=L_xdrootelement_TEXT;
break;
			case 'xdsecondarydatasource':
			L_xdsecondarydatasource_TEXT='(次要資料來源：清單方塊項目或指令碼動作的格式所使用的 XML 資料檔、資料庫或 Web 服務。)';
sTemp=L_xdsecondarydatasource_TEXT;
break;
			case 'xdsection':
			L_xdsection_TEXT='(區段：表單上包含其他控制項的控制項。)';
sTemp=L_xdsection_TEXT;
break;
			case 'xdtable':
			L_xdtable_TEXT='(表格：一或多列儲存格，通常用於顯示數字及其他項目，以供快速參照及分析。表格中項目的組織形式是列及欄。)';
sTemp=L_xdtable_TEXT;
break;
			case 'xdtextbox':
			L_xdtextbox_TEXT='(文字方塊：使用者可以輸入文字的控制項。RTF 文字方塊允許選擇文字格式進行資料輸入。)';
sTemp=L_xdtextbox_TEXT;
break;
			case 'xdvalid':
			L_xdvalid_TEXT='(有效：沒有錯誤或可接受 (依據已建立的一組規則或標準)。例如，如果輸入表單中的資料符合表單資料驗證規則中設定的篩選條件，則資料有效。)';
sTemp=L_xdvalid_TEXT;
break;
			case 'xdvalidxml':
			L_xdvalidxml_TEXT='(有效 XML：格式正確的 XML 文件，符合一組特定的限制，通常在「XML 結構描述」中進行定義。)';
sTemp=L_xdvalidxml_TEXT;
break;
			case 'xdview':
			L_xdview_TEXT='(檢視：一種表單特定的顯示設定，可使用表單範本進行儲存，填寫表單時還可將其套用至表單資料。使用者可在檢視中切換，以選擇表單中顯示的資料數量。)';
sTemp=L_xdview_TEXT;
break;
			case 'xdwellformedxml':
			L_xdwellformedxml_TEXT='(格式正確的 XML：符合標準 XML 文件之最小篩選條件的 XML 文件。)';
sTemp=L_xdwellformedxml_TEXT;
break;
			case 'xdxhtml':
			L_xdxhtml_TEXT='(可延伸超文字標記語言 (XHTML)：延伸 HTML 並重新以 XML 形式表示的標記語言。)';
sTemp=L_xdxhtml_TEXT;
break;
			case 'xdxmlattribute':
			L_xdxmlattribute_TEXT='(XML 屬性：XML 結構化建構。可修改元素功能的名稱值組對，使用等號區隔且內含在標籤元素中。所有屬性值都是文字字串，且必須含括在引號之中。)';
sTemp=L_xdxmlattribute_TEXT;
break;
			case 'xdxmldata':
			L_xdxmldata_TEXT='(XML 資料：以 XML 格式儲存的資料。InfoPath 表單會儲存為 XML 資料檔案。)';
sTemp=L_xdxmldata_TEXT;
break;
			case 'xdxmlelement':
			L_xdxmlelement_TEXT='(XML 元素：由起始標籤、結束標籤及標籤之間資訊組成的 XML 結構。元素可具有屬性且可包含其他元素。)';
sTemp=L_xdxmlelement_TEXT;
break;
			case 'xdxmlparser':
			L_xdxmlparser_TEXT='(XML 剖析器：藉由驗證 XML 文件結構，檢視或轉換其中內容，來處理 XML 文件時使用的軟體元件。)';
sTemp=L_xdxmlparser_TEXT;
break;
			case 'xdxmlsignature':
			L_xdxmlsignature_TEXT='(XML 簽章：XML 數位簽章可用來幫忙保護包含在 XML 文件中的資料。「XML 簽章」是由「全球資訊網協會 (W3C)」所規定的標準。)';
sTemp=L_xdxmlsignature_TEXT;
break;
			case 'xdxmltemplatefile':
			L_xdxmltemplatefile_TEXT='(XML 範本檔案：包含範例資料 (使用者填寫表單之前顯示在表單欄位中) 的 XML 檔案。)';
sTemp=L_xdxmltemplatefile_TEXT;
break;
			case 'xdxpath':
			L_xdxpath_TEXT='(XML 路徑語言 (XPath)：用於確定 XML 文件位址部份的語言。XPath 還提供操作字串、數字及布林值的基本工具。)';
sTemp=L_xdxpath_TEXT;
break;
			case 'xdxsltransformationxslt':
			L_xdxsltransformationxslt_TEXT='(XSL 轉換 (XSLT)：用於將 XML 文件轉換成其他類型文件 (如 HTML 或 XML) 的語言。其設計目的是為了作為 XSL 的一部份來使用。)';
sTemp=L_xdxsltransformationxslt_TEXT;
break;
			case 'Abstract_class':
			L_Abstract_class_TEXT='(抽象類別：無法建立實例的類別。)';
sTemp=L_Abstract_class_TEXT;
break;
			case 'Abstract_type':
			L_Abstract_type_TEXT='(抽象類型：一種類型，其成員屬於某個子類型。在概念性模型中，您可以用斜體顯示它的標題來指示抽象類型。)';
sTemp=L_Abstract_type_TEXT;
break;
			case 'Action':
			L_Action_TEXT='(動作：(1) 與圖形關聯的使用者定義功能表項目。選取圖形時，會在捷徑功能表以及 [圖形] 功能表的 [動作] 子功能表顯示項目。(2) 回應事件而執行的程式或 Visio 指令。)';
sTemp=L_Action_TEXT;
break;
			case 'Action_2':
			L_Action_2_TEXT='(動作：在狀態圖表中，處於特殊狀態的物件不變更其狀態而對事件的回應。與活動不同的是，動作具有可忽略的執行次數，且無法中斷。)';
sTemp=L_Action_2_TEXT;
break;
			case 'Action_state':
			L_Action_state_TEXT='(動作狀態：在活動圖表中，具有一個內部動作以及一個以上的向外轉換程式 (涉及完成內部動作的外顯事件) 的狀態類型。)';
sTemp=L_Action_state_TEXT;
break;
			case 'Activation':
			L_Activation_TEXT='(啟動：順序圖中，物件或動作項目執行動作的時間週期。以細長方形表示啟動。)';
sTemp=L_Activation_TEXT;
break;
			case 'Active_document':
			L_Active_document_TEXT='(使用中文件：目前在 Visio 中可供編輯的文件。)';
sTemp=L_Active_document_TEXT;
break;
			case 'Active_object':
			L_Active_object_TEXT='(主動物件：在共同作業圖中可以初始控制項的物件角色。典型的主動物件包括程序與任務。反之，被動物件保留資料且能傳送訊息，但不會初始控制項。)';
sTemp=L_Active_object_TEXT;
break;
			case 'Active_page':
			L_Active_page_TEXT='(使用中頁面：目前在 Visio 文件中可供編輯的繪圖頁面。)';
sTemp=L_Active_page_TEXT;
break;
			case 'Activity':
			L_Activity_TEXT='(活動：在狀態圖表中，處於特殊狀態的物件不變更其狀態而對事件的回應。與活動不同的是，動作具有不可忽略的執行次數，而且可以中斷。關鍵字「做」即表示一個活動。)';
sTemp=L_Activity_TEXT;
break;
			case 'Activity_diagram':
			L_Activity_diagram_TEXT='(活動圖表：狀態圖表的一個特例，其中所有的狀態都是動作狀態，而轉換是由來源狀態中的動作完成所引動。)';
sTemp=L_Activity_diagram_TEXT;
break;
			case 'Actor':
			L_Actor_TEXT='(動作項目：使用案例圖中，表示由外部物件扮演的角色。因此，一個實體物件可能由數個動作項目來表示。通訊關係指出動作項目在使用案例中的參與方式。)';
sTemp=L_Actor_TEXT;
break;
			case 'Actor_Class':
			L_Actor_Class_TEXT='(動作項目類別：ROOM 結構圖的基礎元件。動作項目內部的空間可以包含動作項目參考、行為結束埠、參考埠、繫結以及圖層連接。框線可以包含類別轉接埠和類別結束埠。)';
sTemp=L_Actor_Class_TEXT;
break;
			case 'Actor_Reference':
			L_Actor_Reference_TEXT='(動作項目參考：定義結構圖元件的動作項目。動作項目參考只可以出現在動作項目類別內部。動作項目參考可以在所屬的外部邊界擁有參考埠。)';
sTemp=L_Actor_Reference_TEXT;
break;
			case 'Add_on':
			L_Add_on_TEXT='(附加元件：一種程式，可透過參考 Visio 物件、方法以及屬性的自動化來擴充 Visio 應用程式。)';
sTemp=L_Add_on_TEXT;
break;
			case 'Aggregation':
			L_Aggregation_TEXT='(彙總：指出某個元素，例如某個點，是另一個元素的一部份，例如多邊形。在 UML 表示法中，以空心菱形附加至已為彙總的類別來表示彙總。)';
sTemp=L_Aggregation_TEXT;
break;
			case 'Alignment_box':
			L_Alignment_box_TEXT='(對齊方塊：當您從其他應用程式移動圖形和物件時，顯示在它們週圍的矩形。)';
sTemp=L_Alignment_box_TEXT;
break;
			case 'Anchor_point':
			L_Anchor_point_TEXT='(錨定點：固定的一點，可以錨定「彈力」線，另一端連接到控制項控點。當您移動控制項控點時，彈力線延伸和縮收來顯示控點的原始位置。)';
sTemp=L_Anchor_point_TEXT;
break;
			case 'Angle_of_rotation':
			L_Angle_of_rotation_TEXT='(旋轉角度：圖形的本機座標系統相對於它父系座標系統的方向角度。旋轉角度是在 ShapeSheet 試算表 Shape Transform 區段的 Angle 儲存格內設定的。)';
sTemp=L_Angle_of_rotation_TEXT;
break;
			case 'Angular_units':
			L_Angular_units_TEXT='(角度單位：在 ShapeSheet 儲存格內表示角度的單位。)';
sTemp=L_Angular_units_TEXT;
break;
			case 'Animated_build':
			L_Animated_build_TEXT='(動畫式建置：一種使用 Visio 繪圖的元素來建立 PowerPoint 投影片的方法。在動畫式建置中，您逐一將 Visio 繪圖的元素引入投影片中。)';
sTemp=L_Animated_build_TEXT;
break;
			case 'Antiscaling':
			L_Antiscaling_TEXT='(反縮放：圖形未按頁面繪圖比例來調整大小的行為。當主圖形的繪圖比例超過高度範圍時，Visio 應用程式會自動反縮放圖形。)';
sTemp=L_Antiscaling_TEXT;
break;
			case 'Argument':
			L_Argument_TEXT='(引數：傳送到分派要求，而且在動作中彙總的實際值表示方式。)';
sTemp=L_Argument_TEXT;
break;
			case 'aspect_ratio':
			L_aspect_ratio_TEXT='(外觀比例：一個維度與另一個維度的比例。當外觀比例被鎖定後，圖形只能按比例來調整大小，無法在單一維度調整大小。)';
sTemp=L_aspect_ratio_TEXT;
break;
			case 'Asset':
			L_Asset_TEXT='(資產：您要追蹤資訊的個人或物件。)';
sTemp=L_Asset_TEXT;
break;
			case 'Association':
			L_Association_TEXT='(關聯：兩個或更多類別之間的關係 (例如，多邊形上的一點；公司下訂單)。在 UML 表示法中，會用實線表示關聯。)';
sTemp=L_Association_TEXT;
break;
			case 'Association_class':
			L_Association_class_TEXT='(關聯類別：靜態結構圖表中，用於新增屬性、作業或其他屬性至關聯的類別。雖然關聯類別的圖形是在類別圖形附加一條連接至二元關聯圖形的虛線，實際上它是單一的模型元素。)';
sTemp=L_Association_class_TEXT;
break;
			case 'Association_End':
			L_Association_End_TEXT='(關聯末端：連接至類別的二元或其他關聯的末端。將屬性與關聯末端關聯，就可以表示角色或方向。)';
sTemp=L_Association_End_TEXT;
break;
			case 'AssociationRole':
			L_AssociationRole_TEXT='(關聯角色：說明二個類別器角色之關係的共同作業角色類型。關聯角色以二個類別角色元素間的路徑來表示，可以包括相對的關聯名稱 (加底線)。)';
sTemp=L_AssociationRole_TEXT;
break;
			case 'Attribute':
			L_Attribute_TEXT='(屬性：可套用到圖形的一種個別格式化元素，例如線條色彩、填滿色彩或線條寬度。一種樣式可以擁有一個以上的屬性。)';
sTemp=L_Attribute_TEXT;
break;
			case 'Attribute_2':
			L_Attribute_2_TEXT='(屬性：由類別保存的資料定義。類別的結構是由它的屬性來敘述的。屬性的預設語法是：可見性名稱 ：類型-運算式=起始值 {屬性字串}。)';
sTemp=L_Attribute_2_TEXT;
break;
			case 'attribute_database_2':
			L_attribute_database_2_TEXT='(屬性：在關聯式模式中，它是表格的資料欄。在實體關係模型中，則為實體的屬性。)';
sTemp=L_attribute_database_2_TEXT;
break;
			case 'Automatic_layout':
			L_Automatic_layout_TEXT='(自動配置：當您編輯連接的繪圖或選取 [圖形] 功能表的 [配置圖形] 指令時，所發生的圖形和連接器路徑定位。)';
sTemp=L_Automatic_layout_TEXT;
break;
			case 'Automation':
			L_Automation_TEXT='(自動化：應用程式使用它的物件來合併或擴充另一應用程式功能的一種方法。之前稱為 OLE Automation。)';
sTemp=L_Automation_TEXT;
break;
			case 'Background':
			L_Background_TEXT='(背景：您可以指派至其他頁面以便在繪圖中建立多個圖層的頁面。當顯示被指派的頁面時，會在背景看到圖形。必須顯示背景頁面才能選取或編輯背景。)';
sTemp=L_Background_TEXT;
break;
			case 'Begin_point':
			L_Begin_point_TEXT='(起點：一維 (1D) 圖形開頭的選取控點。起點是由 X 標示。)';
sTemp=L_Begin_point_TEXT;
break;
			case 'Binary_Association':
			L_Binary_Association_TEXT='(二元關聯：在靜態結構圖表中，它是二個類別之間的關係。可以在二元關聯中新增名稱和鉛版屬性。二元關聯連接至類別的點稱為關聯末端或角色。)';
sTemp=L_Binary_Association_TEXT;
break;
			case 'Binding':
			L_Binding_TEXT='(繫結：指示參數化類別、或範本、參數與實際值的繫結，以建立繫結 (或非參數化) 元素的一種相依性。)';
sTemp=L_Binding_TEXT;
break;
			case 'Bindings':
			L_Bindings_TEXT='(繫結：兩個動作項目之間通訊路徑的表示。)';
sTemp=L_Bindings_TEXT;
break;
			case 'Bitmap':
			L_Bitmap_TEXT='(點陣圖：一種影像，儲存成點的圖樣。通常會將掃描圖片或您在繪圖程式中建立的圖形儲存成點陣圖。)';
sTemp=L_Bitmap_TEXT;
break;
			case 'Block':
			L_Block_TEXT='(區塊：在 CAD 繪圖中，一個或多個實體組合起來形成單一的實體。)';
sTemp=L_Block_TEXT;
break;
			case 'Bound_element':
			L_Bound_element_TEXT='(界限元素：在靜態結構圖表中，使用參數化類別或範本，其中參數化類別的參數繫結至實際值。)';
sTemp=L_Bound_element_TEXT;
break;
			case 'Bow':
			L_Bow_TEXT='(弧度：從圓弧中心點到弦中心點之間的距離。)';
sTemp=L_Bow_TEXT;
break;
			case 'CAD':
			L_CAD_TEXT='(CAD：電腦輔助設計的簡稱。)';
sTemp=L_CAD_TEXT;
break;
			case 'Call_Event':
			L_Call_Event_TEXT='(呼叫事件：在狀態圖或活動圖中，指出物件已經收到要執行某個作業的呼叫。CallEvent 是使用以下格式來定義：事件-名稱 (逗點分隔參數清單)。)';
sTemp=L_Call_Event_TEXT;
break;
			case 'CAPSIF':
			L_CAPSIF_TEXT='(CAPSIF：從經銷商指定或訂購家具的標準檔案格式。)';
sTemp=L_CAPSIF_TEXT;
break;
			case 'Category':
			L_Category_TEXT='(類別：在設施規劃中所追蹤的資訊分類。類別包括例如人員、電腦、印表機、資產、空間以及組織群組 (例如公司和部門) 等等的資產。)';
sTemp=L_Category_TEXT;
break;
			case 'Cell_reference':
			L_Cell_reference_TEXT='(儲存格參考：用於 ShapeSheet 試算表的公式中，以另一個儲存格的值為基礎來計算某一個儲存格的值。)';
sTemp=L_Cell_reference_TEXT;
break;
			case 'Center_of_rotation':
			L_Center_of_rotation_TEXT='(旋轉中心：圖形或文字區塊旋轉的中心點。)';
sTemp=L_Center_of_rotation_TEXT;
break;
			case 'Change_Event':
			L_Change_Event_TEXT='(變更事件：在狀態圖或活動圖中，指定的條件變成真的事件。當變更事件後跟隨一個放在括弧內的布林運算式時，會以關鍵字來表示，例如：when (balance &lt; 0)。)';
sTemp=L_Change_Event_TEXT;
break;
			case 'Check_clause':
			L_Check_clause_TEXT='(檢查子句：在表格或資料欄強制限制式的程式碼。)';
sTemp=L_Check_clause_TEXT;
break;
			case 'Choicepoints':
			L_Choicepoints_TEXT='(選擇點：轉換分歧成多個互斥分支的點，每一個點在不同的狀態終止。其中一個分支必須是預設的分支。)';
sTemp=L_Choicepoints_TEXT;
break;
			case 'Chord':
			L_Chord_TEXT='(弦：連接弧結束點的線條。)';
sTemp=L_Chord_TEXT;
break;
			case 'Class':
			L_Class_TEXT='(類別：在靜態結構圖中，一個結構、行為和關係均類似的物件集合。類別代表模型化系統的概念，並被宣告於類別 (統計結構) 圖中。)';
sTemp=L_Class_TEXT;
break;
			case 'Class_module':
			L_Class_module_TEXT='(類別模組：在 Microsoft Visual Basic for Applications (VBA) 或 Visual Basic 專案中，包含類別定義 (它的屬性和方法) 的模組。)';
sTemp=L_Class_module_TEXT;
break;
			case 'Classifier':
			L_Classifier_TEXT='(類別器：包括類別、資料類型與介面子類別的超類別。因為所有的類別器子類別共用相同的語法，因此都以相同的矩形模型元素來表示。)';
sTemp=L_Classifier_TEXT;
break;
			case 'ClassifierRole':
			L_ClassifierRole_TEXT='(類別器角色：表示共同作業中物件位置的共同作業角色類型。以只顯示名稱部份的類別矩形來表示。)';
sTemp=L_ClassifierRole_TEXT;
break;
			case 'ClientSide_image_map':
			L_ClientSide_image_map_TEXT='(用戶端影像地圖：擁有不同連結區域的圖形。網路瀏覽器處理按一下連結區域時需要的所有資訊是儲存在擁有影像資料的 HTML 中。)';
sTemp=L_ClientSide_image_map_TEXT;
break;
			case 'Clipboard':
			L_Clipboard_TEXT='(剪貼簿：Windows 內的暫時儲存區，用來在文件和應用程式之間傳送資料。您可以在 Visio 程式的繪圖或其他程式之間，使用剪貼簿來複製圖形或文字。)';
sTemp=L_Clipboard_TEXT;
break;
			case 'closed_shape':
			L_closed_shape_TEXT='(封閉式圖形：週圍被連續外框，例如矩形或圓形包圍著的一種圖形。您可以用色彩或圖樣填入封閉式圖形。)';
sTemp=L_closed_shape_TEXT;
break;
			case 'Code_behind_events':
			L_Code_behind_events_TEXT='(事件背後的程式碼：在 Microsoft Visual Basic for Applications (VBA) 程式中，當事件發生時所執行的程式碼。例如，使用者表單上的按鈕通常在 Click 事件背後會有程式碼。)';
sTemp=L_Code_behind_events_TEXT;
break;
			case 'Collaboration':
			L_Collaboration_TEXT='(協同作業：在指定的環境中互動以執行作業或使用案例之模型元素的集合。協同作業中的物件是描述物件類型的角色，而並非代表物件本身。)';
sTemp=L_Collaboration_TEXT;
break;
			case 'Collaboration_diagram':
			L_Collaboration_diagram_TEXT='(協同作業圖表：顯示物件群組如何與其他物件群組協同作業的互動圖表 (一個使用案例說明一個系統事件)。)';
sTemp=L_Collaboration_diagram_TEXT;
break;
			case 'Collaboration_role':
			L_Collaboration_role_TEXT='(協同作業角色：協同作業中物件的位置，用來說明可以扮演角色的物件類型以及與其他角色之關係。若要顯示協同作業角色，請使用物件或連結的表示法。)';
sTemp=L_Collaboration_role_TEXT;
break;
			case 'Collection_type':
			L_Collection_type_TEXT='(集合類型：允許集合；例如一個集合、一個清單、或多重集合；屬於相同類型的物件儲存在單一欄位中。)';
sTemp=L_Collection_type_TEXT;
break;
			case 'Color_scheme':
			L_Color_scheme_TEXT='(色彩配置：一個您可以指派到某些繪圖類型的色彩集合。您可以從預設的色彩配置中選取，或者建立新的色彩配置。)';
sTemp=L_Color_scheme_TEXT;
break;
			case 'Communicates_relationship':
			L_Communicates_relationship_TEXT='(通訊關係：在使用案例圖中，關係定義了動作項目如何參與使用案例。您可以新增箭頭到關係以指出資訊流程的方向。)';
sTemp=L_Communicates_relationship_TEXT;
break;
			case 'Complex_transition':
			L_Complex_transition_TEXT='(複雜轉換：在狀態圖或活動圖中，在多個來源和 (或) 目標狀態或動作狀態 (來源和目標狀態或活動相關的簡單轉換) 之間的關係。)';
sTemp=L_Complex_transition_TEXT;
break;
			case 'Component':
			L_Component_TEXT='(元件：在元件和部署圖表中，它是系統執行的可分配單位。例如，元件可以代表具體的模型碼 (原始、二元或可執行的)，或是人性化系統中的商業文件。)';
sTemp=L_Component_TEXT;
break;
			case 'Component_1':
			L_Component_1_TEXT='(元件：在製程工程範本中，元件表示真實世界中的單一實體物件，例如閥或管線。在製程工程圖中，每一個元件是以一個圖形或多個圖形表示。)';
sTemp=L_Component_1_TEXT;
break;
			case 'Component_diagram':
			L_Component_diagram_TEXT='(元件圖表：顯示程式碼本身結構的實作圖表。從元件圖表中可以得知軟體元件間編譯器和執行時間的相依性，例如原始碼檔案或 DLL。)';
sTemp=L_Component_diagram_TEXT;
break;
			case 'Composite_object':
			L_Composite_object_TEXT='(綜合物件：由緊密繫結的部份組成的高層物件。綜合物件是綜合類別的實例，表示類別與其部份之間的綜合彙總。)';
sTemp=L_Composite_object_TEXT;
break;
			case 'Composite_state':
			L_Composite_state_TEXT='(綜合狀態：在狀態圖表中，它是已經分解為並行 (表示和關係) 或互斥 (表示或關係) 子狀態的狀態。)';
sTemp=L_Composite_state_TEXT;
break;
			case 'Composition':
			L_Composition_TEXT='(綜合：一種指出部份可能只屬於一個整體，且整體的生命週期決定部份的生命週期的彙總形式。如果刪除整體，則其部份也會被刪除。)';
sTemp=L_Composition_TEXT;
break;
			case 'Conceptual_model':
			L_Conceptual_model_TEXT='(概念性模型：一種工具，用於軟體開發的分析階段，以幫助將問題分解為個別的概念或物件，並澄清範圍辭彙。)';
sTemp=L_Conceptual_model_TEXT;
break;
			case 'configuration_context':
			L_configuration_context_TEXT='(組態環境：在 Active Directory 方案中，組態環境會儲存與 Active Directory 樹系相關的資訊。它包含站台、分割區以及子網路的集合。)';
sTemp=L_configuration_context_TEXT;
break;
			case 'Connection_point':
			L_Connection_point_TEXT='(連接點：圖形上的一點，為連接點可黏附的地方。您可以使用 [連接點] 工具，在圖形的周長內部、外部或上面建立新的連接點。每一個圖形的連接點會標示著藍色的 X。)';
sTemp=L_Connection_point_TEXT;
break;
			case 'Connector':
			L_Connector_TEXT='(連接器：任何可以在繪圖中兩個圖形之間黏附，以便連接圖形的一維 (1D) 圖形。)';
sTemp=L_Connector_TEXT;
break;
			case 'Constraint':
			L_Constraint_TEXT='(限制式：要使系統有效則必須維持為 True 的條件和假設的一種規格。限制式是以大括弧內 ({  }) 的文字來表示。)';
sTemp=L_Constraint_TEXT;
break;
			case 'Constraint_ORM':
			L_Constraint_ORM_TEXT='(限制式 ORM：一種規則，限制在一或多個角色內允許的實例，或者識別綜合或巢狀物件類型。例如，內部唯一性限制式不允許在限制角色中有重複的實例。)';
sTemp=L_Constraint_ORM_TEXT;
break;
			case 'Container':
			L_Container_TEXT='(容器：一種 OLE 應用程式，可用來內嵌或連結資訊。例如，如果您將 Visio 繪圖插入 Word 文件，Word 就是容器應用程式。容器應用程式也稱為用戶端。)';
sTemp=L_Container_TEXT;
break;
			case 'Container_2':
			L_Container_2_TEXT='(容器：一種可以有潛在的子系或父系層次的物件。)';
sTemp=L_Container_2_TEXT;
break;
			case 'Control':
			L_Control_TEXT='(控制項：一種物件，您可以放到有自己的屬性、方法和事件 (例如工具列按鈕) 的使用者表單或 Visio 繪圖頁面上。)';
sTemp=L_Control_TEXT;
break;
			case 'Control_flow':
			L_Control_flow_TEXT='(控制項流程：活動圖表中的轉換。控制項流程表示兩個狀態或動作狀態之間的關係，同時指出第一個狀態的物件會進入第二個狀態，然後執行指定的動作。)';
sTemp=L_Control_flow_TEXT;
break;
			case 'Control_handle':
			L_Control_handle_TEXT='(控制項控點：一種控點，它指定特定圖形的唯一行為。例如，在某些圖形中，您可以使用控制項控點來調整繪圖頁面上的文字位置。您可以將指標暫停於控制項控點上來了解它的功能。)';
sTemp=L_Control_handle_TEXT;
break;
			case 'Control_point':
			L_Control_point_TEXT='(控制點：(1) 當您使用鉛筆工具選取線條或弧形時，顯示在線段或弧段上的圓圈。拖曳控制點來變更弧或橢圓的曲度。(2) 影響曲線區段曲度的一點。)';
sTemp=L_Control_point_TEXT;
break;
			case 'Control_polygon':
			L_Control_polygon_TEXT='(控制項多邊形：一系列直線線條，可以連接單一曲線所有的控制點。)';
sTemp=L_Control_polygon_TEXT;
break;
			case 'Controller_application':
			L_Controller_application_TEXT='(控制器應用程式：在自動化中，使用提供者應用程式顯露之物件的應用程式 (例如您的程式)。控制器應用程式會建立物件的實例，然後設定它們的屬性或呼叫它們的方法。)';
sTemp=L_Controller_application_TEXT;
break;
			case 'Coordinates':
			L_Coordinates_TEXT='(座標：一對數字，表示點相對於圖形、群組或頁面中心的位置。X 座標表示點的水平距離，Y 座標表示點的垂直距離。)';
sTemp=L_Coordinates_TEXT;
break;
			case 'Creation_destruction_markers':
			L_Creation_destruction_markers_TEXT='(建立/毀損標記：在共同作業圖中，用來表示在作業中所建立或毀損的物件角色與關聯角色或連結的標記。)';
sTemp=L_Creation_destruction_markers_TEXT;
break;
			case 'Crop':
			L_Crop_TEXT='(裁剪：縮小插入的物件或圖片。雖然裁剪的作業是切開物件或圖片的部份，但是被裁剪的部份會保留在記憶體內。您可以使用 [裁剪] 工具來選取物件或圖片，然後拖曳其中一個控點，就可以裁剪物件或圖片。)';
sTemp=L_Crop_TEXT;
break;
			case 'Crows_Foot':
			L_Crows_Foot_TEXT='(Crow\'s Foot：一種敘述資料結構的規格語言。您可以使用 Crow’s Foot 實體和關係圖形來繪製資料庫的結構。)';
sTemp=L_Crows_Foot_TEXT;
break;
			case 'Custom_color':
			L_Custom_color_TEXT='(自訂色彩：Visio 應用程式中的色彩，以 RGB 或 HSL 值隨圖形儲存，而不是儲存成文件色板的索引。自訂色彩只會隨它套用的圖形一起儲存。)';
sTemp=L_Custom_color_TEXT;
break;
			case 'Custom_property':
			L_Custom_property_TEXT='(自訂屬性：繪圖中的圖形相關資訊。部份 Visio 圖形有已經定義的自訂屬性。您可以編輯或刪除現有的自訂屬性或建立新屬性。)';
sTemp=L_Custom_property_TEXT;
break;
			case 'Data_points':
			L_Data_points_TEXT='(資料點：在統計圖表範本中。線條圖圖形上的控制項控點，您可以拖曳控點來變更圖形內的值。)';
sTemp=L_Data_points_TEXT;
break;
			case 'Data_source':
			L_Data_source_TEXT='(資料來源：存取資料時所需的資訊，包括資料庫位置、檔案名稱以及資料庫使用的驅動程式名稱。)';
sTemp=L_Data_source_TEXT;
break;
			case 'Data_store_DFD_model':
			L_Data_store_DFD_model_TEXT='(資料儲存：資訊的儲存區。從資料儲存到程序的線條，指出程序使用儲存區中的資料。從程序到資料儲存的線條，表示程序會以某些方式變更資料儲存中的資訊。)';
sTemp=L_Data_store_DFD_model_TEXT;
break;
			case 'Data_type':
			L_Data_type_TEXT='(資料類型：類型的說明或可在欄位中輸入的字元數。限制欄位的資料類型可以減少資料輸入的錯誤。)';
sTemp=L_Data_type_TEXT;
break;
			case 'Data_type_2':
			L_Data_type_2_TEXT='(資料類型：UML 變換模型中定義的 DataType 變換類型之實例。資料類型宣告類別屬性的類型。當定義模型中其他元素屬性時，可包含該類型做為字串。)';
sTemp=L_Data_type_2_TEXT;
break;
			case 'Dataflow_DFD_model':
			L_Dataflow_DFD_model_TEXT='(資料流程：在 DFD 模型中程序之間的資訊交換。資料流程表示從程序流進或流出的離散資料封包。)';
sTemp=L_Dataflow_DFD_model_TEXT;
break;
			case 'Dataflow_diagram':
			L_Dataflow_diagram_TEXT='(資料流程圖：顯示系統或程式一般資訊流程的函數分析工具。)';
sTemp=L_Dataflow_diagram_TEXT;
break;
			case 'Decision':
			L_Decision_TEXT='(決策：在活動圖中，表示一個動作狀態之各種可能轉換的保護條件。若轉換成其他的決策，新決策會以傳統菱形來表示。)';
sTemp=L_Decision_TEXT;
break;
			case 'Default_font':
			L_Default_font_TEXT='(預設字型：Visio 程式按照預設顯示包含於圖形內文字的字型。在 [字型] 對話方塊中預設字型是用角括弧顯示。)';
sTemp=L_Default_font_TEXT;
break;
			case 'Default_units':
			L_Default_units_TEXT='(預設單位：如果未明確指定度量單位時，用來顯示 ShapeSheet 儲存格中值的度量單位。預設的繪圖和頁面單位是繪圖頁面的屬性。預設的角度和文字單位是應用程式設定。)';
sTemp=L_Default_units_TEXT;
break;
			case 'Deferred_event':
			L_Deferred_event_TEXT='(延期事件：在狀態圖或活動圖中，其他活動正在執行時必須延期以供稍後使用的事件。可以在狀態的內部轉換中包含事件，以顯示狀態的延期事件。)';
sTemp=L_Deferred_event_TEXT;
break;
			case 'Dependency':
			L_Dependency_TEXT='(相依：兩個元素之間的關係，指出對目標元素所做的變更可能會造成來源元素的變更。)';
sTemp=L_Dependency_TEXT;
break;
			case 'Deployment_diagram':
			L_Deployment_diagram_TEXT='(部署圖表：顯示執行階段系統結構的實作圖表。從部署圖表中可以得知軟硬體元件間的實體關係，以及處理節點之元件的分佈。)';
sTemp=L_Deployment_diagram_TEXT;
break;
			case 'Derived_element':
			L_Derived_element_TEXT='(衍生元素：一種元素，例如屬性或關聯，可被計算或從其他資訊衍生。例如，若知道人員的生日，就可以在人員類別中衍生一個年齡屬性。)';
sTemp=L_Derived_element_TEXT;
break;
			case 'Destination_file':
			L_Destination_file_TEXT='(目地檔案：連結或內嵌之物件被插入的檔案。被用來建立物件的檔案是來源檔案。當您變更目地檔案的資訊時，不會變更來源檔案。)';
sTemp=L_Destination_file_TEXT;
break;
			case 'DGN':
			L_DGN_TEXT='(DGN：Bentley MicroStation CAD 程式用來儲存繪圖檔案的格式。)';
sTemp=L_DGN_TEXT;
break;
			case 'Digitally_signed':
			L_Digitally_signed_TEXT='(數位簽章：數位簽章是一種巨集或文件的電子加密安全認證戳印。此簽章會確認巨集或文件是從簽署者發出，而且未被變更。)';
sTemp=L_Digitally_signed_TEXT;
break;
			case 'Directory_Service':
			L_Directory_Service_TEXT='(目錄服務：一種讓您存取目錄的應用程式，而該目錄是一種網路資源相關資訊，例如硬體、軟體、使用者或原則等等的資料庫。)';
sTemp=L_Directory_Service_TEXT;
break;
			case 'Discriminator':
			L_Discriminator_TEXT='(鑑別器：一般化路徑上的文字標籤，指出一般類別 (內含更多特定類別) 的分割區名稱。預設的鑑別器是空字串。)';
sTemp=L_Discriminator_TEXT;
break;
			case 'distribute':
			L_distribute_TEXT='(分散：您可以在所選圖形的端點或中心建立相等的距離。若要這樣做，請在 [圖形] 功能表指向 [分散圖形]。您也可以將圖形對齊其他圖形。請在 [圖形] 功能表按一下 [對齊圖形]。)';
sTemp=L_distribute_TEXT;
break;
			case 'Docked_stencil':
			L_Docked_stencil_TEXT='(停駐的樣板：連接到繪圖視窗一邊的樣板。按預設值，樣板是停駐在視窗的左邊。您可以讓樣板浮動、或將它們放到視窗右邊、頂端或底部。)';
sTemp=L_Docked_stencil_TEXT;
break;
			case 'Document_library':
			L_Document_library_TEXT='(文件庫：一個資料夾，此處的檔案集合是共用的，而且檔案通常使用相同的範本。文件庫中的每一個檔案，會和顯示在該文件庫內容清單中的使用者定義資訊產生關聯。)';
sTemp=L_Document_library_TEXT;
break;
			case 'Documentation_tab':
			L_Documentation_tab_TEXT='(程式碼索引標籤：在 UML 方案中的一個視窗，顯示 UML 元素相關的特定語言語意錯誤。列在 [程式碼] 視窗中的錯誤，是以產生程式碼時選取的語言為基礎。)';
sTemp=L_Documentation_tab_TEXT;
break;
			case 'Domain_of_influence':
			L_Domain_of_influence_TEXT='(影響範圍：曲線的一部份，指定為一些曲線節，其曲度受單一控制點影響。)';
sTemp=L_Domain_of_influence_TEXT;
break;
			case 'Drag_and_drop_drawing':
			L_Drag_and_drop_drawing_TEXT='(拖放繪圖：從樣板拖曳主圖形到繪圖，以建立主圖形的實例。)';
sTemp=L_Drag_and_drop_drawing_TEXT;
break;
			case 'Drawing':
			L_Drawing_TEXT='(繪圖：前景頁面上的所有圖形以及選用背景頁面上的所有圖形。)';
sTemp=L_Drawing_TEXT;
break;
			case 'Drawing_file':
			L_Drawing_file_TEXT='(繪圖檔案：副檔名是 vsd 而且包含繪圖的 Visio 檔案。要建立繪圖檔案，請在 [檔案] 功能表指向 [開新檔案]，然後按一下 [新繪圖]，以從頭開始繪圖。)';
sTemp=L_Drawing_file_TEXT;
break;
			case 'Drawing_page':
			L_Drawing_page_TEXT='(繪圖頁面：包含繪圖的繪圖視窗中的頁面。頁面可以是前景或背景頁面。每個頁面都有一個大小，一般相當於標準紙張大小，而且有一個比例。)';
sTemp=L_Drawing_page_TEXT;
break;
			case 'Drawing_path':
			L_Drawing_path_TEXT='(繪圖路徑：儲存所建立 Visio 繪圖的預設位置，通常是 [我的文件] 資料夾。)';
sTemp=L_Drawing_path_TEXT;
break;
			case 'Drawing_scale':
			L_Drawing_scale_TEXT='(繪圖比例：列印頁面與真實世界中距離之間的距離比率。例如，繪圖比例為 1 cm = 1 m 表示列印頁面上的 1 公分表示實際大小的 1 公尺。)';
sTemp=L_Drawing_scale_TEXT;
break;
			case 'Drawing_type':
			L_Drawing_type_TEXT='(繪圖類型：擁有副檔名為 .vst 的一種 Visio 檔案 (範本)，會開啟當您建立特殊繪圖類型時需用到的樣板、樣式以及設定。)';
sTemp=L_Drawing_type_TEXT;
break;
			case 'Driver':
			L_Driver_TEXT='(驅動程式：可以啟動設施管理方案與儲存區中資料通訊的軟體。)';
sTemp=L_Driver_TEXT;
break;
			case 'DWG':
			L_DWG_TEXT='(DWG：CAD 程式 (例如 Autodesk AutoCAD) 用來儲存繪圖檔案的標準格式。)';
sTemp=L_DWG_TEXT;
break;
			case 'DXF':
			L_DXF_TEXT='(DXF：用於在大部份 CAD 程式之間匯入和匯出檔案的標準 ASCII 或二進位檔案格式。為 Drawing Exchange Format 的簡稱。)';
sTemp=L_DXF_TEXT;
break;
			case 'Dynamic_Connector':
			L_Dynamic_Connector_TEXT='(動態連接器：一維 (1D) 連接器圖形，可變更它的路徑，避免跨越位在連接器連接的兩個圖形之間的二維 (2D) 可置放圖形。(此類型的連接器也稱為「可定路徑的連接器」)。)';
sTemp=L_Dynamic_Connector_TEXT;
break;
			case 'Dynamic_glue':
			L_Dynamic_glue_TEXT='(動態黏附：一種黏附類型，當移動連接的圖形時，讓連接器圖形的結束點可以從某一個連接點移到另一個連接點。)';
sTemp=L_Dynamic_glue_TEXT;
break;
			case 'Eccentricity_handle':
			L_Eccentricity_handle_TEXT='(離心率控點：當使用鉛筆工具選取橢圓弧形的控制點時，顯示在虛線兩端的圓圈。拖曳以變更弧的離心率角度和強度。)';
sTemp=L_Eccentricity_handle_TEXT;
break;
			case 'Embed':
			L_Embed_TEXT='(內嵌：要將 Visio 繪圖插入另一個應用程式的文件 (容器應用程式)，以便在繪圖和其他文件之間建立動態連接。)';
sTemp=L_Embed_TEXT;
break;
			case 'Embedded_object':
			L_Embedded_object_TEXT='(內嵌物件：插入到目地檔案的物件。內嵌之後，物件會變成目地檔案的一部份。當您按兩下內嵌物件，它會在原先建立它的程式 (來源程式) 中開啟。)';
sTemp=L_Embedded_object_TEXT;
break;
			case 'End_name':
			L_End_name_TEXT='(結束名稱：一種以文字串形式，顯示在靠近二元關聯的名稱。它指出連接到關聯結束的類別，其扮演的角色，因此每一個結束都有自己的結束名稱。亦稱為角色名稱。)';
sTemp=L_End_name_TEXT;
break;
			case 'End_Ports':
			L_End_Ports_TEXT='(結束埠：一種類別埠，定義動作項目類別的內部和外部連接埠。此符號只能顯示在動作項目類別的邊界上。結束埠提供結構和行為之間的連結。)';
sTemp=L_End_Ports_TEXT;
break;
			case 'Endpoint':
			L_Endpoint_TEXT='(結束點：顯示在所選線條、弧形或其他一維 (1D) 圖形開始或結束處的其中一個方形控點。)';
sTemp=L_Endpoint_TEXT;
break;
			case 'Equivalence_at_boundaries':
			L_Equivalence_at_boundaries_TEXT='(在邊界相等：資料流程經常在最上層和詳細資訊頁之間使用的需求。如果您新增資料流程到擁有詳細資訊頁的程序時，新的資料流程也必須新增至詳細資訊頁。)';
sTemp=L_Equivalence_at_boundaries_TEXT;
break;
			case 'Errors_tab':
			L_Errors_tab_TEXT='(錯誤索引標籤：在 UML 方案中，一個顯示與 UML 元素關聯語意錯誤的視窗。按兩下 [錯誤] 索引標籤的錯誤時，可以尋找表示包含錯誤之元素的圖示或圖形。)';
sTemp=L_Errors_tab_TEXT;
break;
			case 'Event':
			L_Event_TEXT='(事件：在 Visio 內發生的動作，例如圖形公式的變更或刪除頁面。)';
sTemp=L_Event_TEXT;
break;
			case 'Event_2':
			L_Event_2_TEXT='(事件：在狀態圖或活動圖中，引發轉換的動作。在指定的狀態或動作狀態下，物件會等待事件改變成不同的狀態。)';
sTemp=L_Event_2_TEXT;
break;
			case 'Event_object':
			L_Event_object_TEXT='(事件物件：您從獨立的 Microsoft Visual Basic、C 或 C++ 程式建立的 Visio 物件，用來處理 Visio 事件。)';
sTemp=L_Event_object_TEXT;
break;
			case 'Event_procedure':
			L_Event_procedure_TEXT='(事件程序：在 Microsoft Visual Basic 程式中，當事件發生時所執行的程式碼。例如，Visual Basic 表單上的按鈕一般都有事件程序以處理 Click 事件。)';
sTemp=L_Event_procedure_TEXT;
break;
			case 'Exception':
			L_Exception_TEXT='(例外：由行為功能所發起的訊號，一般是在執行失敗時才產生。在變換模型中，例外是衍生自訊號。)';
sTemp=L_Exception_TEXT;
break;
			case 'Explicit_units':
			L_Explicit_units_TEXT='(外顯單位：指定為數字單位配對一部份的度量單位，讓顯示的結果永遠使用指定的單位。例如，值 3 mm 永遠在 ShapeSheet 視窗中顯示成 3 mm。)';
sTemp=L_Explicit_units_TEXT;
break;
			case 'Expression':
			L_Expression_TEXT='(運算式：值、運算子、函數以及可產生值的工作表參考等等的組合。邏輯運算式會比較兩個值，然後產生 TRUE 或 FALSE 結果。)';
sTemp=L_Expression_TEXT;
break;
			case 'Extended_Property':
			L_Extended_Property_TEXT='(擴充屬性：指派給被歸類為使用者定義物件的屬性。擴充屬性可以從物件刪除，而且不需要包含任何值。新增擴充屬性到物件並不會影響相同類型的物件。)';
sTemp=L_Extended_Property_TEXT;
break;
			case 'Extends_relationship':
			L_Extends_relationship_TEXT='(延伸關係：在使用案例圖表中，二個使用案例之間的關係，用以表示依延伸中指定的條件而定，使用案例 B 的實例可以包括使用案例 A 所指定的行為。)';
sTemp=L_Extends_relationship_TEXT;
break;
			case 'Extensible':
			L_Extensible_TEXT='(可擴充：您可以新增擴充屬性的物件。)';
sTemp=L_Extensible_TEXT;
break;
			case 'Extension_points':
			L_Extension_points_TEXT='(擴充點：使用案例內的位置，在此處可能會插入另一個使用案例的動作順序。在使用案例中，每一個擴充點名稱必須是唯一的。擴充點會顯示在使用案例圖形底端的劃分中。)';
sTemp=L_Extension_points_TEXT;
break;
			case 'Facilities_data_source':
			L_Facilities_data_source_TEXT='(設施資料來源：一種指向資料庫的資料來源檔案 (.dsn)，安裝它以包含組織資訊，而且已經透過 [設施管理安裝精靈] 成功連結到繪圖。)';
sTemp=L_Facilities_data_source_TEXT;
break;
			case 'Facilities_database':
			L_Facilities_database_TEXT='(設施資料庫：Visio CAFM Explorer 用來追蹤資產資訊的資料庫。也稱為儲存區。)';
sTemp=L_Facilities_database_TEXT;
break;
			case 'Field':
			L_Field_TEXT='(欄位：文字內的保留位置，可以顯示資訊，例如維度、日期以及時間。欄位可以顯示繪圖列印的日期和時間、圖形的旋轉角度，或者所撰寫公式的結果。)';
sTemp=L_Field_TEXT;
break;
			case 'Fill':
			L_Fill_TEXT='(填滿：封閉式圖形內部的色彩和圖樣。Visio 圖形的預設填滿是實色白。)';
sTemp=L_Fill_TEXT;
break;
			case 'Final_state':
			L_Final_state_TEXT='(最終狀態：在狀態圖或活動圖中，表示在封閉狀態或活動狀態中完成的活動。最終狀態是以紅心表示。)';
sTemp=L_Final_state_TEXT;
break;
			case 'Fixed_grid':
			L_Fixed_grid_TEXT='(固定格線：當您拉近或拉遠時，繪圖頁面上的格線會保持等距離。)';
sTemp=L_Fixed_grid_TEXT;
break;
			case 'Floating_stencil':
			L_Floating_stencil_TEXT='(浮動樣板：以您選取的大小和位置顯示的樣板。按預設值，樣板是停駐在繪圖視窗的左邊。您可以讓樣板浮動，或者可以停駐在繪圖視窗的右邊。)';
sTemp=L_Floating_stencil_TEXT;
break;
			case 'Foreground':
			L_Foreground_TEXT='(前景：繪圖的最上層頁面。前景頁面上的圖形會顯示在背景頁面的前面，而當您編輯繪圖的背景時，無法看見前景。)';
sTemp=L_Foreground_TEXT;
break;
			case 'Forest':
			L_Forest_TEXT='(樹系：一或多個不必要連接的 Active Directory 網域，但共用共通的配置和組態資訊。)';
sTemp=L_Forest_TEXT;
break;
			case 'Format':
			L_Format_TEXT='(格式：圖形的視覺外觀 (例如線條的粗細和色彩、圖形內部的色彩和圖樣以及它字型)。您可以經由套用樣式或變更個別屬性來變更圖形的格式。)';
sTemp=L_Format_TEXT;
break;
			case 'Format_picture':
			L_Format_picture_TEXT='(設定圖片格式：一個 Visio 解譯和用來格式化字串輸出 (例如自訂文字欄位公式) 的符號或縮寫集合。)';
sTemp=L_Format_picture_TEXT;
break;
			case 'Formula':
			L_Formula_TEXT='(公式：在 ShapeSheet 儲存格中輸入的運算式，它會傳回值。)';
sTemp=L_Formula_TEXT;
break;
			case 'Formula_bar':
			L_Formula_bar_TEXT='(公式列：ShapeSheet 視窗的一部份，您可以輸入所選 ShapeSheet 儲存格的公式。您也可以直接在儲存格輸入公式。)';
sTemp=L_Formula_bar_TEXT;
break;
			case 'freeform_curve':
			L_freeform_curve_TEXT='(任意繪圖曲線：內含曲線線段的圖形。也稱為 spline。)';
sTemp=L_freeform_curve_TEXT;
break;
			case 'Function':
			L_Function_TEXT='(函數：一種用於公式中各種用途的計算工具。Visio 包括數學、三角函數、地理、事件、時間和時間、色彩、邏輯、統計以及其他函數。)';
sTemp=L_Function_TEXT;
break;
			case 'Functional_Band_shape':
			L_Functional_Band_shape_TEXT='(功能帶圖形：表示功能單位 (例如部門) 的圖形，在此會發生程序逐步執行。您可以依照圖形的方向，使用水平或垂直功能帶圖形。)';
sTemp=L_Functional_Band_shape_TEXT;
break;
			case 'Generalization':
			L_Generalization_TEXT='(一般化：特定元素和一般元素之間的一種關係，例如特定元素完全和一般元素一致，而且包括其他資訊 (例如屬性和關聯)。)';
sTemp=L_Generalization_TEXT;
break;
			case 'Geometry':
			L_Geometry_TEXT='(幾何：頂點和線段的一種排列，可定義路徑。)';
sTemp=L_Geometry_TEXT;
break;
			case 'Gesture_recognition':
			L_Gesture_recognition_TEXT='(gesture 辨識：鉛筆工具的一種功能。當您開始移動滑鼠，Visio 會快速計算滑鼠指標的行徑。如果滑鼠的路徑是直線，鉛筆工具會畫一條直線。)';
sTemp=L_Gesture_recognition_TEXT;
break;
			case 'Glue':
			L_Glue_TEXT='(黏附：圖形的屬性，造成圖形保持連接，即使其中一個圖形移動也會不中斷。當您將連接器連接到圖形，就會黏附連接器。)';
sTemp=L_Glue_TEXT;
break;
			case 'Grid':
			L_Grid_TEXT='(格線：頁面上以固定間隔顯示的不可列印之水平和垂直線。)';
sTemp=L_Grid_TEXT;
break;
			case 'Grid_lines':
			L_Grid_lines_TEXT='(格線：當啟動格線時，顯示在繪圖視窗內淡淡的垂直和水平線。您可以使用格線來協助精確定位圖形。)';
sTemp=L_Grid_lines_TEXT;
break;
			case 'Grid_origin':
			L_Grid_origin_TEXT='(格線原點：定義繪圖頁面上格線配置的點。垂直格線和水平格線會從格線原點穿越，而且其他格線會以指定的間隔從這些參考線繪製。)';
sTemp=L_Grid_origin_TEXT;
break;
			case 'Group':
			L_Group_TEXT='(群組：由兩個或多個圖形組合的圖形。您可以將圖形當作一個整體來移動或調整大小，但是群組成員會保留它們的原始外觀和屬性。)';
sTemp=L_Group_TEXT;
break;
			case 'Group_Transition':
			L_Group_Transition_TEXT='(群組轉換：一種外向轉換，包含在狀態環境開始的外向箭頭，而且沒有鏈結的往內轉換。)';
sTemp=L_Group_Transition_TEXT;
break;
			case 'Group_window':
			L_Group_window_TEXT='(群組視窗：一個繪圖視窗，您可以開啟以編輯群組的個別元件。群組在群組視窗中顯示時並未旋轉過，即使它已經在繪圖頁面中旋轉了。)';
sTemp=L_Group_window_TEXT;
break;
			case 'Guard':
			L_Guard_TEXT='(保護：在狀態圖或活動圖中，指定事件何時發生的條件。無論何時觸發事件，只會評估保護一次。)';
sTemp=L_Guard_TEXT;
break;
			case 'Guide_guide_point':
			L_Guide_guide_point_TEXT='(輔助線、輔助點：您可以拖曳到繪圖頁面的參考線，可以精確定位圖形。從座標尺拖曳輔助線，從繪圖視窗左上角拖曳輔助點。)';
sTemp=L_Guide_guide_point_TEXT;
break;
			case 'Handle':
			L_Handle_TEXT='(控點：當您選取圖形時顯示的控制項。您可以使用控點來更改圖形。控點會隨圖形的類型和您用來選取它的工具不同而改變。)';
sTemp=L_Handle_TEXT;
break;
			case 'History_state_indicator':
			L_History_state_indicator_TEXT='(歷程記錄狀態指示器：在狀態圖中，表示前次造訪的子狀態。當觸發指示器轉換時，物件會恢復到前次與歷程記錄指示器相同層次的狀態。)';
sTemp=L_History_state_indicator_TEXT;
break;
			case 'IDEF1X':
			L_IDEF1X_TEXT='(IDEF1X：一種用於敘述資料結構的規格語言。Visio 包括 IDEF1X 範本。您可以使用 IDEF1X 實體和關係圖形來繪製資料庫的結構。)';
sTemp=L_IDEF1X_TEXT;
break;
			case 'Image_map':
			L_Image_map_TEXT='(影像地圖：全球資訊網上使用的一種圖形。影像地圖是區分成不同的區域，部份區域和和連結有關聯。)';
sTemp=L_Image_map_TEXT;
break;
			case 'Implementation_class':
			L_Implementation_class_TEXT='(實作類別：在靜態結構圖中，定義實作於傳統程式設計語言，例如 C++ 等之物件的實體資料結構和程序的類別。一個物件只能有一個實作類別。)';
sTemp=L_Implementation_class_TEXT;
break;
			case 'Implicit_units':
			L_Implicit_units_TEXT='(隱含單位：為數字單位配對某部份的度量單位，其中顯示的結果是使用指定的度量單位，可能不會和原始輸入的單位一樣。)';
sTemp=L_Implicit_units_TEXT;
break;
			case 'In_place':
			L_In_place_TEXT='(在位：從另一個程式內部執行某個程式。當您在正確位置執行時，會顯示來源程式的功能和工具列，並且取代目前程式的部份功能表和工具列。)';
sTemp=L_In_place_TEXT;
break;
			case 'Include_product_Enterprise':
			L_Include_product_Enterprise_TEXT='(文件索引標籤：一個視窗，顯示所選 UML 元素的文件 (以標籤值的形式)。您可以選取表示元素的圖形，然後在 [文件] 視窗輸入，就可以新增文件到 UML 元素。)';
sTemp=L_Include_product_Enterprise_TEXT;
break;
			case 'Index':
			L_Index_TEXT='(索引：對應於 [色彩] 對話方塊中某個色彩的數字。索引會顯示在色彩的左邊。Visio 會將圖形的色彩記錄成該色彩的索引。)';
sTemp=L_Index_TEXT;
break;
			case 'Inherited_formula':
			L_Inherited_formula_TEXT='(繼承的公式：儲存在樣式或主圖形內的公式，但是由某個實例使用，如同公式是隨圖形儲存在本機。對樣式或主圖形的公式所作變更，會影響所有繼承該公式的圖形。)';
sTemp=L_Inherited_formula_TEXT;
break;
			case 'Initial_state':
			L_Initial_state_TEXT='(初始狀態：在狀態圖或活動圖中，表示圖表中的任何事件作用在物件之前的初始狀態。初始狀態是以實體填滿的圓圈表示。)';
sTemp=L_Initial_state_TEXT;
break;
			case 'Insertion_point':
			L_Insertion_point_TEXT='(插入點：當您使用文字工具選取圖形，然後使用滑鼠按一下文字時，顯示在文字內閃爍的垂直線。您輸入的文字會顯示在插入點。)';
sTemp=L_Insertion_point_TEXT;
break;
			case 'Installation_folder':
			L_Installation_folder_TEXT='(安裝資料夾：安裝 Visio 的位置； 預設的資料夾位置是 Program Files\Microsoft Office\Visio11。)';
sTemp=L_Installation_folder_TEXT;
break;
			case 'Instance':
			L_Instance_TEXT='(實例：(1) 您從樣板拖曳主圖形到繪圖後建立的主圖形複本。(2) Windows 應用程式的執行影像。)';
sTemp=L_Instance_TEXT;
break;
			case 'Instance_1':
			L_Instance_1_TEXT='(實例：特定實體的同屬性抽象描述項的變化。例如，物件是類別的實例，連結是關聯的實例，值是參數的實例，儲存格是作業的實例。)';
sTemp=L_Instance_1_TEXT;
break;
			case 'Intelligent_tag':
			L_Intelligent_tag_TEXT='(智慧標記：在製程工程範本中，包含元件相關資訊的標記，例如管線的線條大小。)';
sTemp=L_Intelligent_tag_TEXT;
break;
			case 'Interaction':
			L_Interaction_TEXT='(互動：用於達成某個目的 (例如執行一個作業) 的樣式或訊息交換順序。共同作業中的物件藉由交換訊息來互動。訊息可能是訊號或呼叫，且能包含條件和時間事件。)';
sTemp=L_Interaction_TEXT;
break;
			case 'Interface':
			L_Interface_TEXT='(介面：指定類別、元素、套件或其他元素的外部可見作業，但不指定內部結構。介面只有作業而無屬性、狀態或關聯。)';
sTemp=L_Interface_TEXT;
break;
			case 'Interface_DFD_model':
			L_Interface_DFD_model_TEXT='(介面 (DFD 模型)：在 DFD 模型中，可以產生或接收資料流程或資料儲存的資訊系統中的外部使用者。)';
sTemp=L_Interface_DFD_model_TEXT;
break;
			case 'Internal_SelfTransition':
			L_Internal_SelfTransition_TEXT='(內部自我轉換：在相同狀態環境開始和結束的轉換區段，而且沒有鏈結的對內交易或鏈結的對外交易。此轉換是群組和歷程記錄轉換的組合。)';
sTemp=L_Internal_SelfTransition_TEXT;
break;
			case 'Internal_units':
			L_Internal_units_TEXT='(內部單位：Visio 內部用來儲存維度值的度量單位。Visio 應用程式的內部單位在線性測量方面是英吋，在角度測量方面是徑度量。)';
sTemp=L_Internal_units_TEXT;
break;
			case 'Item':
			L_Item_TEXT='(項目：您可以追蹤屬性的單一物件。在 Visio CAFM Explorer 中是以資料夾中的圖示來表示項目。)';
sTemp=L_Item_TEXT;
break;
			case 'Jump':
			L_Jump_TEXT='(跳轉：圖形或繪圖頁面與繪圖檔案內另一個頁面、另一個程式內的檔案或網際網路網站之間的超連結。您可以在圖形或繪圖頁面上按滑鼠右鍵以「跳轉」到目的地。)';
sTemp=L_Jump_TEXT;
break;
			case 'Junction_shape':
			L_Junction_shape_TEXT='(接合圖形：在製程工程中，當管線被另一個管線分割時，用來連接管線的圖形。預設的管線連接圖形是接合。不過，您可以將文件樣板上任何的圖形指定為接合。)';
sTemp=L_Junction_shape_TEXT;
break;
			case 'Keyword':
			L_Keyword_TEXT='(關鍵字：特定文字、片語或程式碼，儲存在關鍵字欄位而且可用來主導排序或搜尋記錄。您可以在 [尋找] 或 [索引] 方塊輸入關鍵字來搜尋說明檔案的記錄。)';
sTemp=L_Keyword_TEXT;
break;
			case 'Layer':
			L_Layer_TEXT='(圖層：圖形的指名類別。您可以將圖形指派給圖層來組織圖形。也可以選擇性檢視、編輯、列印或鎖定圖層上的圖形。)';
sTemp=L_Layer_TEXT;
break;
			case 'Layer_Export_Connections':
			L_Layer_Export_Connections_TEXT='(圖層/匯出連接：(1) 一或多個服務存取點 (SAP) 或服務規定點 (SPP) 之間的圖層連接；(2) 匯出連接，此處是透過內含動作項目匯出 SPP 的地方。)';
sTemp=L_Layer_Export_Connections_TEXT;
break;
			case 'Level':
			L_Level_TEXT='(層次：Bentley MicroStation .dgn 檔案內圖形的指名類別。您可以在 Visio 繪圖插入 MicroStation 繪圖，然後選擇性檢視所插入繪圖的層次。)';
sTemp=L_Level_TEXT;
break;
			case 'Link':
			L_Link_TEXT='(連結：在 Visio 繪圖的物件和其他程式檔案之間建立動態連結。變更原始檔案時，您可以更新連結的檔案，如此在連結的檔案會顯示最新版的物件。)';
sTemp=L_Link_TEXT;
break;
			case 'Link_2':
			L_Link_2_TEXT='(連結：關聯的實例。連結代表物件間的參照。可以是二元的、n 元的或反射性的。)';
sTemp=L_Link_2_TEXT;
break;
			case 'Linked_object':
			L_Linked_object_TEXT='(連結物件：在維持兩個檔案之間的連接時，在某個檔案 (來源檔案) 建立後又插入到另一個檔案 (目地檔案) 的資訊。更新來源檔案時，會更新連結的物件。連結的物件不會變成目地檔案的一部份。)';
sTemp=L_Linked_object_TEXT;
break;
			case 'Local_coordinates':
			L_Local_coordinates_TEXT='(本機座標：原點是在圖形寬度高度視窗左下角的座標系統。圖形的幾何是用本機座標來計算。)';
sTemp=L_Local_coordinates_TEXT;
break;
			case 'Local_formatting':
			L_Local_formatting_TEXT='(本機格式：個別的格式屬性，例如線條寬度、填入色彩或字型大小，您可以使用 [格式] 功能表上的指令，例如 [線條]、[填滿] 或 [文字]，套用到選取的圖形。)';
sTemp=L_Local_formatting_TEXT;
break;
			case 'Local_formula':
			L_Local_formula_TEXT='(本機公式：儲存在圖形的儲存格內，而不是從主圖形或樣式繼承的公式。如果主圖形的圖形是一個實例，則本機公式會取代主圖形內相對儲存格的變更。也稱為本機置換。)';
sTemp=L_Local_formula_TEXT;
break;
			case 'Local_stencil':
			L_Local_stencil_TEXT='(文件樣板：儲存在繪圖檔案的樣板，包含用於檔案所有繪圖的主圖形庫存。文件樣板的主圖形是連結到繪圖中的所屬實例。)';
sTemp=L_Local_stencil_TEXT;
break;
			case 'Lock':
			L_Lock_TEXT='(鎖定：一種設定，限制使用者變更圖形的方式。例如，選取控點上的鎖定可以禁止使用者使用選取控點來調整圖形大小。)';
sTemp=L_Lock_TEXT;
break;
			case 'Macro':
			L_Macro_TEXT='(巨集：(1) Visual Basic for Applications 程式，可透過自動化來擴充 Visio；  (2) 一種程序，不會使用引數，而且包含在 Visio 範本、樣板或繪圖的專案模組內。)';
sTemp=L_Macro_TEXT;
break;
			case 'Mandatory_constraint':
			L_Mandatory_constraint_TEXT='(強制限制式：一種限制式，要求物件類型產生的每一個實例要扮演該角色。有了分離性強制角色限制式之後，物件類型產生的每一個成員至少必須扮演其中一個指示的角色。)';
sTemp=L_Mandatory_constraint_TEXT;
break;
			case 'Mandatory_Property':
			L_Mandatory_Property_TEXT='(強制屬性：一種屬性，當它以物件方式存在 Directory Navigator 和圖表時，需要一個值。無法刪除為類別定義的強制屬性。)';
sTemp=L_Mandatory_Property_TEXT;
break;
			case 'Master_shape':
			L_Master_shape_TEXT='(主圖形：樣板上的圖形，您可以重複用來建立繪圖。當您從樣板拖曳圖形到繪圖頁面時，圖形會變成該主圖形的實例。)';
sTemp=L_Master_shape_TEXT;
break;
			case 'Measurement_unit':
			L_Measurement_unit_TEXT='(度量單位：度量單位是真實世界中的大小，而頁面單位是列印頁面上的大小。例如，在使用比例 1 cm =1 m 的架構繪圖中，公尺是度量單位，而公分是頁面單位。公尺是度量單位，而公分是頁面單位。)';
sTemp=L_Measurement_unit_TEXT;
break;
			case 'Message_flow':
			L_Message_flow_TEXT='(訊息流：在共同作業圖中，關聯角色 (或連結) 附近標有標籤的箭頭，用以連接二個物件角色以表示從一個物件傳送訊息至另一個物件。)';
sTemp=L_Message_flow_TEXT;
break;
			case 'Message_label':
			L_Message_label_TEXT='(訊息標籤：一種箭頭標籤，它指示傳送的訊息、它的引數以及傳回值、較大互動內的訊息順序 (包括呼叫巢狀處理、重覆項目、分支、併行以及同步)。)';
sTemp=L_Message_label_TEXT;
break;
			case 'Message_sequence_diagram':
			L_Message_sequence_diagram_TEXT='(訊息：在順序圖中，在傳送資訊和產生動作的物件之間的通訊。訊息是由水平箭頭表示。)';
sTemp=L_Message_sequence_diagram_TEXT;
break;
			case 'Metaclass':
			L_Metaclass_TEXT='(變換類型：在靜態結構圖中，實例都是類別的一種類別。它在 UML 表示法是顯示成擁有鉛版 "metaclass" 的類別。)';
sTemp=L_Metaclass_TEXT;
break;
			case 'Metafile':
			L_Metafile_TEXT='(中繼檔：一種檔案，將影像儲存成圖形物件 (線條、圓形、多邊形)，而不是以像素儲存。當調整影像大小時，以中繼檔儲存的影像會比以像素儲存更精確。目前有兩種中繼檔；標準和增強。)';
sTemp=L_Metafile_TEXT;
break;
			case 'Mirror_file':
			L_Mirror_file_TEXT='(鏡像檔案：從資料庫模型圖分離的檔案，您可以儲存模型中的程式碼。)';
sTemp=L_Mirror_file_TEXT;
break;
			case 'Model':
			L_Model_TEXT='(模型：從特定的觀點並在特定的抽象層次指定系統之抽象模型化系統。)';
sTemp=L_Model_TEXT;
break;
			case 'Model_space':
			L_Model_space_TEXT='(模型空間：在 CAD 繪圖中，主要的繪圖工作區，草稿員會在此處建立 3D 繪圖。)';
sTemp=L_Model_space_TEXT;
break;
			case 'Modeless_activity':
			L_Modeless_activity_TEXT='(非強制回應活動：一種當控制項傳回 Visio 程式時，不會終止的程式活動。例如，附加元件可能會開啟非強制回應視窗，當附加元件終止後，它仍然保持開啟。)';
sTemp=L_Modeless_activity_TEXT;
break;
			case 'Modifed_Actor_Reference':
			L_Modifed_Actor_Reference_TEXT='(已修改動作項目參考：一種動作項目參考，經過修改以指示不同的屬性。)';
sTemp=L_Modifed_Actor_Reference_TEXT;
break;
			case 'Module':
			L_Module_TEXT='(模組：在 Microsoft Visual Basic 或 Viusal Basic for Applications (VBA) 專案中，是一個在宣告之後還有程序的程式碼集合。標準模組只包含程序、類型以及資料宣告和定義。)';
sTemp=L_Module_TEXT;
break;
			case 'Multi_object':
			L_Multi_object_TEXT='(多個物件：在共同作業圖中，一個在關聯角色的「很多」 端點上的物件角色集合。使用多個物件會顯示作業針對了整個集合，而不是該集合內的單一物件。)';
sTemp=L_Multi_object_TEXT;
break;
			case 'MultiLanguage_Pack':
			L_MultiLanguage_Pack_TEXT='(多語言套件：提供 Visio 使用者介面和說明的翻譯文字。)';
sTemp=L_MultiLanguage_Pack_TEXT;
break;
			case 'Multiplicity':
			L_Multiplicity_TEXT='(多重性：曲線節重覆的次數。)';
sTemp=L_Multiplicity_TEXT;
break;
			case 'Multiplicity_2':
			L_Multiplicity_2_TEXT='(多重性：可以參與特殊關係的物件數目，以單一數目或上下限之間的範圍表示。最常用的多重性是 1, * (表示 0 至無限大) 以及 0..1。)';
sTemp=L_Multiplicity_2_TEXT;
break;
			case 'Naming_properties':
			L_Naming_properties_TEXT='(命名屬性：用來決定如何在 Directory Navigator 和目錄圖顯示物件名稱值的屬性。)';
sTemp=L_Naming_properties_TEXT;
break;
			case 'NAry_Association':
			L_NAry_Association_TEXT='(n 元關聯：在靜態結構圖中，三個或多個類別之間的關聯 (單一類別可以出現一次以上)。每個關聯的實例都是個別類別中已排序的值集。)';
sTemp=L_NAry_Association_TEXT;
break;
			case 'Natural_language':
			L_Natural_language_TEXT='(自然語言：一種搜尋方式，讓您使用口語方式進行搜尋。這讓您以例如「尋找今天所有的約會」的方式來提供搜尋指示。)';
sTemp=L_Natural_language_TEXT;
break;
			case 'Navigability':
			L_Navigability_TEXT='(可瀏覽性：從多邊形至點，表示多邊型可以顯示其所有點，但點無法顯示多邊型。在關聯上，可瀏覽性以箭頭表示。)';
sTemp=L_Navigability_TEXT;
break;
			case 'Network_place':
			L_Network_place_TEXT='(網路位置：網路檔案、網路伺服器或 Microsoft Exchange 2000 伺服器上的資料夾。建立網路位置捷徑以使用該處的檔案。部份網路位置，例如文件庫，擁有的功能無法用於本機資料夾。)';
sTemp=L_Network_place_TEXT;
break;
			case 'Node':
			L_Node_TEXT='(節點：在部署實作圖表中，表示處理資源的執行階段實體物件。節點通常是計算裝置，但也可以表示人力資源或機械處理資源。)';
sTemp=L_Node_TEXT;
break;
			case 'Nonperiodic_spline':
			L_Nonperiodic_spline_TEXT='(非定期曲線：擁有已定義結束點的曲線。如果曲線的開始點和結束點相會，則曲線是封閉的。)';
sTemp=L_Nonperiodic_spline_TEXT;
break;
			case 'Note':
			L_Note_TEXT='(附註：對模型元素沒有語意影響的圖表註解。要新增文字到 [附註] 圖形，請按兩下圖形，然後在 [文件] 底下輸入您要的文字，再按 [確定]。)';
sTemp=L_Note_TEXT;
break;
			case 'Nudge':
			L_Nudge_TEXT='(微調：使用方向鍵稍微移動圖形。選取圖形，然後按一下上、下、左、右方向鍵。(確定已經關閉 SCROLL LOCK 鍵)。)';
sTemp=L_Nudge_TEXT;
break;
			case 'Number_unit_pair':
			L_Number_unit_pair_TEXT='(數字單位配對：包含數字和相對維度的一種運算式。例如， 1 cm 是一種數字單位配對。)';
sTemp=L_Number_unit_pair_TEXT;
break;
			case 'Object':
			L_Object_TEXT='(物件：在其他應用程式建立、匯入、內嵌或連結到 Visio 繪圖的資訊。物件這個名詞是用來指其他應用程式的物件和 OLE 物件。)';
sTemp=L_Object_TEXT;
break;
			case 'Object_2':
			L_Object_2_TEXT='(物件：表示目錄服務類別的檢視。物件表示特定的網路資源，而且其屬性有指定的值。)';
sTemp=L_Object_2_TEXT;
break;
			case 'Object_flow':
			L_Object_flow_TEXT='(物件流程：在活動圖中，表示物件是藉由動作輸入或輸出的虛線箭頭。物件流程箭頭會將物件流程狀態連接到控制流程箭頭或動作狀態。)';
sTemp=L_Object_flow_TEXT;
break;
			case 'Object_flow_state':
			L_Object_flow_state_TEXT='(物件流程狀態：在活動圖中，定義動作之間的物件流程。物件流程狀態會發出指定狀態下某一類別器實例的可用性訊號，通常當成作業的結果。)';
sTemp=L_Object_flow_state_TEXT;
break;
			case 'Object_in_state':
			L_Object_in_state_TEXT='(狀態中物件：在活動圖中，由許多連續活動所操作的物件。物件的每個外觀表示其壽命的不同階段。)';
sTemp=L_Object_in_state_TEXT;
break;
			case 'Object_lifeline':
			L_Object_lifeline_TEXT='(物件壽命：在順序圖中特定時間物件存在的表示。如果物件在圖表顯示的期間內建立或損毀，則壽命會在適當的一點開始或停止。物件的損毀會以大寫 X 標示。)';
sTemp=L_Object_lifeline_TEXT;
break;
			case 'Object_linking_and_embedding_OLE':
			L_Object_linking_and_embedding_OLE_TEXT='(OLE：一種 Windows 通訊協定，可以將 Windows 應用程式建立的物件內嵌到其他 Windows 應用程式建立的文件，或者連結物件到包含原始物件的檔案。)';
sTemp=L_Object_linking_and_embedding_OLE_TEXT;
break;
			case 'Object_UML':
			L_Object_UML_TEXT='(物件 (UML)：類別的特殊實例的表示法。物件有名稱與屬性，其名稱會加上底線以指示它是實例層次的元素。物件通常顯示在概念性模型中以代表真實世界的概念。)';
sTemp=L_Object_UML_TEXT;
break;
			case 'ODBC_Open_Database_Connectivity':
			L_ODBC_Open_Database_Connectivity_TEXT='(ODBC：允許應用程式存取、檢視以及修改不同資料庫資料的標準介面。很多資料庫應用程式，包括 Microsoft Access 7.0、Microsoft SQL Server 和 Oracle SQL Server，都和 ODBC 相容。)';
sTemp=L_ODBC_Open_Database_Connectivity_TEXT;
break;
			case 'OffPage_Reference_shape':
			L_OffPage_Reference_shape_TEXT='(換頁參考圖形：您可以用於大型流程圖的 2D 圖形，以便連結到繪圖中的其他頁面。)';
sTemp=L_OffPage_Reference_shape_TEXT;
break;
			case 'Offset':
			L_Offset_TEXT='(位移：在特殊的線條或曲線中，Visio 程式會將位移實作成從原始線條或曲線都是等距離的線條配對。)';
sTemp=L_Offset_TEXT;
break;
			case 'One_dimensional_shape':
			L_One_dimensional_shape_TEXT='(1D 圖形：使用 Visio 繪圖工具繪製的直線，或是有起點和終點的圖形，而且兩個端點可以在兩個圖形之間黏附，來連接圖形。)';
sTemp=L_One_dimensional_shape_TEXT;
break;
			case 'open_shape':
			L_open_shape_TEXT='(開啟圖形：類似線條、弧或閃電圖等等的圖形。您可以使用線條圖樣和端點來格式化開啟圖形，例如將實線變更成虛線以及在某一端新增箭頭。)';
sTemp=L_open_shape_TEXT;
break;
			case 'Operation':
			L_Operation_TEXT='(作業：類別的實例可被要求執行的服務。類別的行為由一個作業的集合來表示。每一項作業都有名稱及引數的清單。)';
sTemp=L_Operation_TEXT;
break;
			case 'Optional_Property':
			L_Optional_Property_TEXT='(選用屬性：一種屬性，當它套用的類別以物件的方式存在 Directory Navigator 以及目錄圖時不需要值。無法刪除為類別定義的選用屬性。)';
sTemp=L_Optional_Property_TEXT;
break;
			case 'OR_constraint':
			L_OR_constraint_TEXT='(OR 限制式：一種狀態指示器，其中類別的任何實例一次只能參與一個關聯。限制式是顯示成連接兩或多個關聯的虛線，其中必須要有一個共通的類別。。)';
sTemp=L_OR_constraint_TEXT;
break;
			case 'Origin':
			L_Origin_TEXT='(原點：圖形、群組或繪圖頁面的選取矩形左下角。原點的 x- 和 y- 座標永遠是 0,0。)';
sTemp=L_Origin_TEXT;
break;
			case 'Orthogonal':
			L_Orthogonal_TEXT='(直角：以 90 度交叉或佇立。您可以旋轉 Visio 繪圖頁面，如此繪圖中無論以何種角度繪製的每一個圖形，都會繪製成直角。)';
sTemp=L_Orthogonal_TEXT;
break;
			case 'Package':
			L_Package_TEXT='(套件：在 UML 中以類似於檔案資料夾的符號來表示的模型元素的群組。系統中的每個元素只可以被一個套件所擁有，但套件可以套疊在另一個套件之中。)';
sTemp=L_Package_TEXT;
break;
			case 'Page':
			L_Page_TEXT='(頁面：在包含繪圖的繪圖視窗中的可列印區域。頁面可以是前景或背景頁面。每一個頁面都有一個大小，一般相當於標準紙張大小，而且有一個比例。)';
sTemp=L_Page_TEXT;
break;
			case 'Page_coordinates':
			L_Page_coordinates_TEXT='(頁面座標：原點是在繪圖頁面左下角的座標系統。)';
sTemp=L_Page_coordinates_TEXT;
break;
			case 'Page_orientation':
			L_Page_orientation_TEXT='(頁面方向：列印繪圖時可以選取直印 (垂直) 或橫印 (水平) 的頁面方向。在直印模式下，文件會在矩形紙張的較窄的一面列印。在橫印模式下，文件會在矩形紙張的較寬的一面列印。)';
sTemp=L_Page_orientation_TEXT;
break;
			case 'Page_sheet':
			L_Page_sheet_TEXT='(頁面工作表：表示頁面的 ShapeSheet。)';
sTemp=L_Page_sheet_TEXT;
break;
			case 'Page_units':
			L_Page_units_TEXT='(頁面單位：列印頁面上的大小或距離。例如，在使用比例尺 1cm = 1 m 的架構繪圖中，公分是頁面單位。頁面單位和度量單位的比率就是繪圖縮放。)';
sTemp=L_Page_units_TEXT;
break;
			case 'Pan':
			L_Pan_TEXT='(全景：要使用裁剪工具移動 OLE 物件，請按住滑鼠左鍵，然後在物件的邊框之內移動物件。)';
sTemp=L_Pan_TEXT;
break;
			case 'Paper_space':
			L_Paper_space_TEXT='(紙張大小：在 CAD 繪圖中，模擬紙張的 2D 工作區，讓草稿員可以排列不同的 3D 繪圖檢視。)';
sTemp=L_Paper_space_TEXT;
break;
			case 'Parameter':
			L_Parameter_TEXT='(參數：一種可以被變更、傳送或傳回的未繫結變數。參數可以包括通訊的名稱、類型以及方向。參數是用來指定作業、訊息、事件、範本和其他等等。)';
sTemp=L_Parameter_TEXT;
break;
			case 'Parameterized_class':
			L_Parameterized_class_TEXT='(參數化類別：在靜態結構圖中，描述具有一或多個未連結型式參數之類別的範本。它定義類別系列，每個系列藉由將參數繫結至實際值來指定。)';
sTemp=L_Parameterized_class_TEXT;
break;
			case 'Parametric':
			L_Parametric_TEXT='(參數性：Visio 圖形根據特定參數的值來調整它的幾何以及其他屬性的功能。)';
sTemp=L_Parametric_TEXT;
break;
			case 'Parent':
			L_Parent_TEXT='(父系：所包含圖形是圖形父系的群組。如果圖形不在群組中，它的父系是頁面。)';
sTemp=L_Parent_TEXT;
break;
			case 'Partition':
			L_Partition_TEXT='(分割：Novell Directory Service (NDS) 樹狀結構中不同的資料區段。它必須在階層結構中至少包含一個父系物件和 0 個或更多個子系物件。)';
sTemp=L_Partition_TEXT;
break;
			case 'Paste':
			L_Paste_TEXT='(貼上：從剪貼簿將資訊貼到 Visio 繪圖或其他 Windows 應用程式。)';
sTemp=L_Paste_TEXT;
break;
			case 'Pasteboard':
			L_Pasteboard_TEXT='(剪貼區：繪圖視窗中頁面周圍的區域。您可以將圖形儲存到剪貼區。每一個頁面擁有自己的剪貼區。)';
sTemp=L_Pasteboard_TEXT;
break;
			case 'Path':
			L_Path_TEXT='(路徑：圖形中一系列的連續線條或弧形。圖形可以有一個以上的路徑。)';
sTemp=L_Path_TEXT;
break;
			case 'Patterns':
			L_Patterns_TEXT='(圖樣：開發人員在指派軟體類別和設計系統行為時的指導原則。在建立指出負責訊息的共同作業圖表時用處最大。)';
sTemp=L_Patterns_TEXT;
break;
			case 'Periodic_spline':
			L_Periodic_spline_TEXT='(定期曲線：沒有已定義結束點的封閉曲線。)';
sTemp=L_Periodic_spline_TEXT;
break;
			case 'Persistence':
			L_Persistence_TEXT='(保存：變數、程序或物件的壽命。例如，當 Visio 應用程式執行時，物件可以保存。可以在 Visio 應用程式工作階段之間儲存 Event 物件的物件，被稱為保存事件。)';
sTemp=L_Persistence_TEXT;
break;
			case 'Pin':
			L_Pin_TEXT='(釘點：圖形或文字區塊旋轉的那一點，是由內部含 + 號的圓形來標示。)';
sTemp=L_Pin_TEXT;
break;
			case 'Pixel':
			L_Pixel_TEXT='(像素：顯示資訊的個別區塊。像素 (pixel) 這個名詞是衍生自「圖片元素」(picture element) 一詞。)';
sTemp=L_Pixel_TEXT;
break;
			case 'Placeable_shape':
			L_Placeable_shape_TEXT='(可置放的圖形：一種 2D 圖形，被設定成與可定向的連接器和自動配置一起使用。如果圖形被設定成可置放，則可定向的連接器可以偵測和避免穿越它。)';
sTemp=L_Placeable_shape_TEXT;
break;
			case 'Point':
			L_Point_TEXT='(點：具體表示一個 x- 和 y- 座標的單一值集合，以便計算。)';
sTemp=L_Point_TEXT;
break;
			case 'Point_to_point':
			L_Point_to_point_TEXT='(點對點：一種連接圖形的方法。無論您如何移動連接的圖形，連接的實際點永遠保持相同。)';
sTemp=L_Point_to_point_TEXT;
break;
			case 'polygon':
			L_polygon_TEXT='(多邊形：擁有三或多個線段的 2D 封閉式單一圖形。)';
sTemp=L_polygon_TEXT;
break;
			case 'Polyline':
			L_Polyline_TEXT='(多線條：當您連續繪製線段，而沒有提起筆時建立的線條樣式。封閉式多線條是一種多邊形。)';
sTemp=L_Polyline_TEXT;
break;
			case 'Primary_selection':
			L_Primary_selection_TEXT='(主要選取：在複選情形中第一個選取的圖形，在繪圖頁面中由綠色選取控點指示。結合複選時，主要選取的格式會套用到新圖形。)';
sTemp=L_Primary_selection_TEXT;
break;
			case 'Procedure':
			L_Procedure_TEXT='(程序：陳述式的指定順序，以一個單位執行。例如，函數、屬性和 Sub 都是程序的類型。)';
sTemp=L_Procedure_TEXT;
break;
			case 'Procedure_template':
			L_Procedure_template_TEXT='(程序範本：當您在 [插入程序] 對話方塊指定函數、屬性或子程序時，自動插入到 [程式碼] 視窗的開始和結束陳述式。)';
sTemp=L_Procedure_template_TEXT;
break;
			case 'Process_DFD_model':
			L_Process_DFD_model_TEXT='(程序 (DFD 模型)：在 DFD 模型中，任何會產生、使用、轉換或損毀資料的活動。)';
sTemp=L_Process_DFD_model_TEXT;
break;
			case 'Project':
			L_Project_TEXT='(專案：在 Microsoft Visual Basic for Applications (VBA) 中，由您撰寫並隨 Visio 檔案儲存的程式碼。一個 Visio 文件只能建立一個專案，但是該專案可以包含任何數目的模組、類別、類別模組以及使用者表單。)';
sTemp=L_Project_TEXT;
break;
			case 'Properties_tab':
			L_Properties_tab_TEXT='(屬性索引標籤：顯示和所選 UML 元素所關聯通用屬性的視窗。您無法在此視窗編輯屬性，它僅供檢視而已。)';
sTemp=L_Properties_tab_TEXT;
break;
			case 'Property':
			L_Property_TEXT='(屬性：按類別追蹤的資訊類型。例如，人員類可追蹤名字、姓氏、聘僱日期以及職稱等等的屬性。)';
sTemp=L_Property_TEXT;
break;
			case 'Provider_application':
			L_Provider_application_TEXT='(提供者應用程式：一種應用程式 ，提供可以透過自動化控制的物件。提供者應用程式可讓物件開放給其他應用程式存取，同時提供或開放控制它們的屬性和方法。)';
sTemp=L_Provider_application_TEXT;
break;
			case 'Qualified_Name':
			L_Qualified_Name_TEXT='(完整名稱：目錄服務物件的命名屬性和值。完整名稱語法使用命名屬性以及加上顯示時的值。)';
sTemp=L_Qualified_Name_TEXT;
break;
			case 'Qualifier':
			L_Qualifier_TEXT='(辨識符號：關聯的一個或多個屬性，其值可以識別關聯遠端的物件集。辨識符號由位於關聯來源末端的小矩形來表示。)';
sTemp=L_Qualifier_TEXT;
break;
			case 'Range_of_eight':
			L_Range_of_eight_TEXT='(範圍 8：處理與繪圖頁面繪圖比例不同的實例時所使用的規則。如果主圖形的繪圖比例與頁面的比例比因素 8 小，則實例會依照繪圖頁面適當縮放。否則，實例會反縮放。)';
sTemp=L_Range_of_eight_TEXT;
break;
			case 'Realizes_relationship':
			L_Realizes_relationship_TEXT='(瞭解關係：一種關係，表示箭頭尾端的用戶端支援或繼承位於箭頭的提供者的所有作業。)';
sTemp=L_Realizes_relationship_TEXT;
break;
			case 'Reception':
			L_Reception_TEXT='(接收：敘述類別器準備要反應接收訊號的宣告。接收會指派訊號並指定預期的行為反應。接收是預期行為的摘要。)';
sTemp=L_Reception_TEXT;
break;
			case 'Redlining':
			L_Redlining_TEXT='(註解：要審閱和標示或新增註解到繪圖。)';
sTemp=L_Redlining_TEXT;
break;
			case 'Reference_mode':
			L_Reference_mode_TEXT='(參考模式：用來識別實體物件類型唯一實例的文字、數字或縮寫。)';
sTemp=L_Reference_mode_TEXT;
break;
			case 'Reference_Ports':
			L_Reference_Ports_TEXT='(參考埠：定義動作項目參考的內部或外部埠的一個埠。參考埠只能放到動作項目參考圖形的外部框線。它們可以用來當作繫結的錨定。)';
sTemp=L_Reference_Ports_TEXT;
break;
			case 'Refinement':
			L_Refinement_TEXT='(細分：在有對應的二個元素之間表示歷程或衍生關係的一種相依性。對應的描述可以附註形式加到相依性。)';
sTemp=L_Refinement_TEXT;
break;
			case 'Related_to':
			L_Related_to_TEXT='(相關於：將所選取的項目與另一個資料夾共用或產生關聯。例如，如果兩個部門共用管理助理，您應該將該名人員與兩部門產生關聯。)';
sTemp=L_Related_to_TEXT;
break;
			case 'Relay_Ports':
			L_Relay_Ports_TEXT='(轉接埠：一種類別埠類型，定義動作項目的內部和外部埠。此符號只可以出現在動作項目類別的框線。轉接埠會轉接對內的訊息到被包含的動作項目，或從被包含的動作項目轉接對外訊息。)';
sTemp=L_Relay_Ports_TEXT;
break;
			case 'Replication':
			L_Replication_TEXT='(複製：兩個資料儲存物件之間的連接，讓兩個物件之間可以同步化。資料儲存物件一般是伺服器、資料庫或網域控制器。)';
sTemp=L_Replication_TEXT;
break;
			case 'Report_definition':
			L_Report_definition_TEXT='(報告定義：判斷哪些圖形是用來產生報告、加入哪些自訂屬性，以及報告中的資訊如何排序的屬性報告定義。)';
sTemp=L_Report_definition_TEXT;
break;
			case 'Resize':
			L_Resize_TEXT='(調整大小：變更圖形的維度。)';
sTemp=L_Resize_TEXT;
break;
			case 'Rotation_handle':
			L_Rotation_handle_TEXT='(旋轉控點：您使用旋轉工具選取圖形時，顯示在圖形選取矩形角落的圓形控點其中之一。)';
sTemp=L_Rotation_handle_TEXT;
break;
			case 'Routable_connector':
			L_Routable_connector_TEXT='(可定向的連接器：1D 連接器，它會自動變更它的路徑，以避免穿越其連接之兩個圖形之間的 2D 可置放性圖形。)';
sTemp=L_Routable_connector_TEXT;
break;
			case 'Scale':
			L_Scale_TEXT='(縮放：實際距離與 Visio 繪圖中所表示距離二者間的一種度量關係。例如，樓面規劃是 1 公尺的實際距離等於繪圖中的 1 公分。)';
sTemp=L_Scale_TEXT;
break;
			case 'Scaled_drawing_page':
			L_Scaled_drawing_page_TEXT='(縮放的繪圖頁面：有繪圖比例的繪圖頁面，例如 1/4" = 1\' 或 2 cm = 1 m。)';
sTemp=L_Scaled_drawing_page_TEXT;
break;
			case 'Schema':
			L_Schema_TEXT='(架構：目錄服務的類別和屬性的集合。類別和屬性判斷儲存在目錄服務內的資訊類型，以及它們之間如何互動。)';
sTemp=L_Schema_TEXT;
break;
			case 'Scope':
			L_Scope_TEXT='(範圍：保存在執行中程式內的變數、程序和物件的範圍。項目的範圍一般取決於它被宣告的位置。)';
sTemp=L_Scope_TEXT;
break;
			case 'ScreenTips':
			L_ScreenTips_TEXT='(工具提示：當您將指標停在 Visio 程式的特定元素，包括樣板的主圖形、工具列按鈕以及尺規時，所顯示的提示。)';
sTemp=L_ScreenTips_TEXT;
break;
			case 'Segment':
			L_Segment_TEXT='(區段：為更複雜圖形一部份的直線或曲線。)';
sTemp=L_Segment_TEXT;
break;
			case 'Selection':
			L_Selection_TEXT='(選取範圍：位於所選取的繪圖且可執行動作的圖形。選取的圖形有選取範圍控點。多個選取範圍會有洋紅色外框。文字區塊中選取的文字可以編輯時，會以反白顯示。)';
sTemp=L_Selection_TEXT;
break;
			case 'Selection_handle':
			L_Selection_handle_TEXT='(選取範圍控點：使用指標工具選取圖形時，顯示的方形控點。選取範圍控點表示您可以移動圖形或調整大小。)';
sTemp=L_Selection_handle_TEXT;
break;
			case 'Selection_net':
			L_Selection_net_TEXT='(選取網路：拖曳指標工具來定義區域以包含所有要選取的圖形，以便一次選取多個圖形的方法。)';
sTemp=L_Selection_net_TEXT;
break;
			case 'Selection_rectangle':
			L_Selection_rectangle_TEXT='(選取範圍矩形：顯示在選取圖形或來自其他應用程式的物件周圍的虛線。)';
sTemp=L_Selection_rectangle_TEXT;
break;
			case 'Sequence_diagram':
			L_Sequence_diagram_TEXT='(順序圖：顯示參與特殊互動的物件及其按時間順序安排的交換訊息的互動圖。)';
sTemp=L_Sequence_diagram_TEXT;
break;
			case 'Sequential_build':
			L_Sequential_build_TEXT='(循序建置：一種使用 Visio 繪圖元素來建立 Microsoft PowerPoint 投影片的方法。在循序建置中，您將 Visio 繪圖的元素，逐一置入連續的投影片。)';
sTemp=L_Sequential_build_TEXT;
break;
			case 'ServerSide_image_map':
			L_ServerSide_image_map_TEXT='(伺服器端影像地圖：內含不同連結區域的全球資訊網圖形。網路伺服器上的程式會檢查與連結區域相關的地圖資料和處理連結。)';
sTemp=L_ServerSide_image_map_TEXT;
break;
			case 'Shape':
			L_Shape_TEXT='(圖形：(1) 使用 Visio 工具或指令建立的一種開放或封閉式物件。(2) 圖形的群組集合。(3) 從樣板拖曳到繪圖頁面的主圖形實例。)';
sTemp=L_Shape_TEXT;
break;
			case 'Shape_to_shape':
			L_Shape_to_shape_TEXT='(圖形對圖形：一種連接圖形的方法。當您移動連接的圖形時，可能會變更實際的連接點。您可以從某個圖形的中心，拖曳連接器到另一個圖形的中心，就可以進行圖形對圖形連接。)';
sTemp=L_Shape_to_shape_TEXT;
break;
			case 'ShapeSheet':
			L_ShapeSheet_TEXT='(ShapeSheet：Spreadsheet 包含了圖形的相關資訊；例如，它的維度、角度、旋轉中心以及決定圖形外觀的樣式。)';
sTemp=L_ShapeSheet_TEXT;
break;
			case 'Signal':
			L_Signal_TEXT='(訊號：與處理訊號的類別無關的一般化元素，用以指定於實例 (無回覆) 之間通訊的非同步刺激。接收實例會處理狀態機器傳出的訊號。)';
sTemp=L_Signal_TEXT;
break;
			case 'Signal_Event':
			L_Signal_Event_TEXT='(訊號事件：在狀態圖或活動圖中，表示物件已從另一個物件接收到訊號。可以使用類別圖表上的的類別關鍵字「訊號」來宣告訊號。)';
sTemp=L_Signal_Event_TEXT;
break;
			case 'Signal_receipt':
			L_Signal_receipt_TEXT='(訊號接收：在活動圖中用來取代轉換上事件標籤的圖示。事件簽章會顯示在圖示內。未具標籤的轉換箭頭會將圖示連接到上一個和下一個動作狀態。)';
sTemp=L_Signal_receipt_TEXT;
break;
			case 'Signal_send':
			L_Signal_send_TEXT='(訊號傳送：在活動圖中用來取代轉換上事件標籤的圖示。事件簽章會顯示在圖示內。未具標籤的轉換箭頭會將圖示連接到上一個和下一個動作狀態。)';
sTemp=L_Signal_send_TEXT;
break;
			case 'Sink_object':
			L_Sink_object_TEXT='(接收物件：在 Microsoft Visual Basic for Applications (VBA) 程式的類別，可以接收特殊類型的 Visio 物件觸發的事件。)';
sTemp=L_Sink_object_TEXT;
break;
			case 'Site':
			L_Site_TEXT='(站台：屬於具良好網路連接的區域。通常是 LAN (區域網路)，但可能包含由快速 WAN (廣域網路) 連接的多個 LAN。)';
sTemp=L_Site_TEXT;
break;
			case 'Size':
			L_Size_TEXT='(大小：使用指標裝置選取圖形後，拖曳它的控點來變更圖形的維度。)';
sTemp=L_Size_TEXT;
break;
			case 'SmartConnector_shape':
			L_SmartConnector_shape_TEXT='(SmartConnector 圖形：一種 1D 圖形，當用來連接其他圖形時，會依需要自動作業。)';
sTemp=L_SmartConnector_shape_TEXT;
break;
			case 'SmartShape_symbol':
			L_SmartShape_symbol_TEXT='(SmartShape 符號：一種圖形，經過程式設計後，當您移動或調整其大小的時候，會精確地作業。)';
sTemp=L_SmartShape_symbol_TEXT;
break;
			case 'Snap':
			L_Snap_TEXT='(貼齊：圖形、輔助線以及 Visio 程式其他元素的功能，可以在移動或調整圖形與元素時，讓它們就定位。)';
sTemp=L_Snap_TEXT;
break;
			case 'solution':
			L_solution_TEXT='(方案：包含特殊繪圖類型範本的檔案資料夾。例如，專案排程方案資料夾包含日曆、甘特圖、柏特圖以及時刻表以及您用來建立這些繪圖類型的範本。)';
sTemp=L_solution_TEXT;
break;
			case 'Source_file':
			L_Source_file_TEXT='(來源檔案：包含用來建立連結或內嵌物件資訊的檔案。物件存在於目地檔案中。當您更新來源檔案的資訊，也會更新連結物件內的資訊。)';
sTemp=L_Source_file_TEXT;
break;
			case 'Space_identifier_1':
			L_Space_identifier_1_TEXT='(空間識別碼：一種指定給空間圖形的自訂屬性，可唯一識別空間規劃圖中的空間圖形，例如辦公室號碼或房間號碼。自訂屬性標籤是空間 ID。)';
sTemp=L_Space_identifier_1_TEXT;
break;
			case 'space_plan':
			L_space_plan_TEXT='(空間規劃：使用空間圖形或資源圖形來追蹤建築物內資源大概位置的繪圖。)';
sTemp=L_space_plan_TEXT;
break;
			case 'Spanning_Tree':
			L_Spanning_Tree_TEXT='(跨越樹狀結構：在部份開關和橋接器可以使用跨越樹狀結構功能。此功能可以備份開關之間的迴圈 (電纜或埠失敗的狀態)。)';
sTemp=L_Spanning_Tree_TEXT;
break;
			case 'Spline':
			L_Spline_TEXT='(曲線：以多項式為基礎的一種隨意繪圖曲線。)';
sTemp=L_Spline_TEXT;
break;
			case 'Spline_knot':
			L_Spline_knot_TEXT='(曲線節：標示曲線多項式部份之間邊界的一個實數。)';
sTemp=L_Spline_knot_TEXT;
break;
			case 'Stacking_order':
			L_Stacking_order_TEXT='(堆疊順序：頁面上圖形重疊的順序以及圖形的選取順序。您可以使用 [圖形] 功能表的指令，變更圖形的堆疊順序。)';
sTemp=L_Stacking_order_TEXT;
break;
			case 'Stamp':
			L_Stamp_TEXT='(圖章：使用 [圖章] 工具建立主圖形的實例。要在主圖形加上圖章，請選取樣板中的主圖形，選取 [圖章] 工具，然後按一下您要顯示實例的地方。)';
sTemp=L_Stamp_TEXT;
break;
			case 'StandAlone_stencil':
			L_StandAlone_stencil_TEXT='(獨立式樣板：副檔名為 .vss 且內含主圖形集合的 Visio 檔案，通常簡稱為樣板。獨立式樣板通常沒有伴隨的繪圖。)';
sTemp=L_StandAlone_stencil_TEXT;
break;
			case 'State':
			L_State_TEXT='(狀態：動作項目表現特殊行為的一段時間。)';
sTemp=L_State_TEXT;
break;
			case 'State_Context':
			L_State_Context_TEXT='(狀態環境：狀態的巢狀系列，表示系統的目前狀態。)';
sTemp=L_State_Context_TEXT;
break;
			case 'State_machine':
			L_State_machine_TEXT='(狀態機器：狀態和轉換的圖形，敘述指定類別的物件對於接收外部刺激的回應。狀態機器是連接到類別或方法。一個狀態圖表示一個狀態機器。)';
sTemp=L_State_machine_TEXT;
break;
			case 'State_UML':
			L_State_UML_TEXT='(狀態 (UML)：在狀態圖或活動圖中，在物件滿足條件、執行動作或等候事件時的條件。)';
sTemp=L_State_UML_TEXT;
break;
			case 'Statechart_diagram':
			L_Statechart_diagram_TEXT='(狀態圖：狀態機器的表示，被附加到敘述對於外部刺激的類別回應的類別或方法。)';
sTemp=L_Statechart_diagram_TEXT;
break;
			case 'Static_glue':
			L_Static_glue_TEXT='(靜態黏附：一種黏附行為，無論黏附的圖形如何移動，連接器的結束點會固定於特殊的連接點。)';
sTemp=L_Static_glue_TEXT;
break;
			case 'Static_structure_diagram':
			L_Static_structure_diagram_TEXT='(靜態結構圖：顯示模型靜態結構的圖表；亦即存在的元素 (例如類別與類型)、元素的內部結構以及它們之間的關係。)';
sTemp=L_Static_structure_diagram_TEXT;
break;
			case 'Stencil':
			L_Stencil_TEXT='(樣板：與特殊 Visio 繪圖類型或範本相關的主圖形集合。按預設值，由範本開啟的樣板，會停駐在繪圖視窗的左邊。)';
sTemp=L_Stencil_TEXT;
break;
			case 'Stencil_path':
			L_Stencil_path_TEXT='(樣板路徑：儲存 Visio 樣板的資料夾。要尋找您的樣板路徑，請按一下 [工具] 功能表上的 [選項]。在 [檔案路徑] 索引標籤，[樣板] 方塊會顯示樣板資料夾位置。您可以新增資料夾到此路徑。)';
sTemp=L_Stencil_path_TEXT;
break;
			case 'Stereotype':
			L_Stereotype_TEXT='(鉛版：使用區分的表示法。鉛版是現有元素的子類別，其屬性和關係與該元素相同，但意圖不同且可能有額外的限制式。)';
sTemp=L_Stereotype_TEXT;
break;
			case 'Stored_procedure':
			L_Stored_procedure_TEXT='(預存程序：由分析師建立的程序，儲存在資料字典中，以供應用程式重複使用。)';
sTemp=L_Stored_procedure_TEXT;
break;
			case 'Stub':
			L_Stub_TEXT='(虛設常式：在狀態圖的綜合狀態邊界內部繪製的小型垂直線，該綜合狀態指示連接到抑制巢狀狀態的轉換。)';
sTemp=L_Stub_TEXT;
break;
			case 'Style':
			L_Style_TEXT='(樣式：擁有名稱而且隨範本或繪圖檔案儲存的屬性集合。)';
sTemp=L_Style_TEXT;
break;
			case 'Subcategory':
			L_Subcategory_TEXT='(子類別：以現有類別為基礎的新類別。例如，若不要將電腦以及其他設備一起記錄，則可以從 [設備] 類別建立 [電腦] 子類別，將它們記錄成不同的群組。)';
sTemp=L_Subcategory_TEXT;
break;
			case 'Subdivision':
			L_Subdivision_TEXT='(細分：格線之間以及尺規間隔之間的細分。此選項是使用 [尺規和格線] 指令來設定的。選項包括 [細緻]、[一般] 以及 [粗糙]。)';
sTemp=L_Subdivision_TEXT;
break;
			case 'Subselect':
			L_Subselect_TEXT='(部份選取：選取群組內的個別圖形。)';
sTemp=L_Subselect_TEXT;
break;
			case 'Subsystem':
			L_Subsystem_TEXT='(子系統：包含整個系統內容或系統內整個模型的套件。將子系統圖形拖曳到繪圖頁面會自動產生新靜態結構圖繪圖頁面。)';
sTemp=L_Subsystem_TEXT;
break;
			case 'Summary_task':
			L_Summary_task_TEXT='(摘要工作：摘要工作之下有一個以上的子工作。子工作是專案框架內摘要工作下內縮的項目。摘要工作有特殊的標記 (反轉的黃色三角形) 來指示它有子工作。)';
sTemp=L_Summary_task_TEXT;
break;
			case 'Swimlane':
			L_Swimlane_TEXT='(區隔線：在活動圖中，指定責任給活動狀態的方式。區隔線是每邊為垂直實線的欄位。每個區隔線表示負責的類別、人員或組織單位。)';
sTemp=L_Swimlane_TEXT;
break;
			case 'Synchronized_copy':
			L_Synchronized_copy_TEXT='(同步複本：您在大型組織圖新頁面上建立的部門複本，如此您可以決定圖形如何在跨越頁面。當您建立同步複本，兩處都會顯示您作的任何變更。)';
sTemp=L_Synchronized_copy_TEXT;
break;
			case 'System':
			L_System_TEXT='(系統：任何您要模型化的應用程式或程序。系統的範例包括電腦遊戲、裝配微電腦晶片的程序以及圖書館資訊系統。)';
sTemp=L_System_TEXT;
break;
			case 'System_boundary':
			L_System_boundary_TEXT='(系統邊界：在使用案例圖中，在指示系統的使用案例週圍的邊界。您可以拖曳系統邊界圖形上的選取範圍控點來調整系統邊界的大小。)';
sTemp=L_System_boundary_TEXT;
break;
			case 'Tagged_value':
			L_Tagged_value_TEXT='(標記值：可以附加至任何模型元素的關鍵值組。關鍵字稱為標記，表示可以套用至一個或許多元素的屬性。關鍵字和值都是字串。)';
sTemp=L_Tagged_value_TEXT;
break;
			case 'Template':
			L_Template_TEXT='(範本：擁有副檔名為 .vst 的一種 Visio 檔案 (繪圖類型)，會開啟當您建立特殊繪圖類型時需用到的樣板、樣式以及設定。)';
sTemp=L_Template_TEXT;
break;
			case 'Text_block':
			L_Text_block_TEXT='(文字方塊：與圖形相關的文字區塊，當您使用文字工具或指標工具來按一下圖形時就會顯示。)';
sTemp=L_Text_block_TEXT;
break;
			case 'Textual_Definition':
			L_Textual_Definition_TEXT='(本文定義：一種定義，用來列出擴充狀態變數的文字性宣告，或與狀態環境相關的函數。)';
sTemp=L_Textual_Definition_TEXT;
break;
			case 'Tile':
			L_Tile_TEXT='(並排：(1) 在多個紙張上列印過大頁面時使用的一種列印技術。(2) Visio Window 功能表上的指令，會在主視窗上並排開啟多個圖形。)';
sTemp=L_Tile_TEXT;
break;
			case 'Time_Event':
			L_Time_Event_TEXT='(時間事件：在指定的期間之後或在指定日期或時間發生的一種事件。時間事件是由 after 這個關鍵字指示，之後跟隨評估總時間的運算式，例如：after (5 seconds)。)';
sTemp=L_Time_Event_TEXT;
break;
			case 'Tip':
			L_Tip_TEXT='(提示：當您將指標放到 Visio 程式特定元素上，包括樣板上的主圖形、工具列以及尺規時所顯示的附註。)';
sTemp=L_Tip_TEXT;
break;
			case 'Toolbars':
			L_Toolbars_TEXT='(工具列：方塊列、按鈕列以及顯示在功能表列下方的條塊。若要選取要顯示的工具列和建立自訂工具列，請按一下 [檢視]，然後指向 [工具列]。)';
sTemp=L_Toolbars_TEXT;
break;
			case 'Trace':
			L_Trace_TEXT='(追蹤：一種相依性，表示在不同的語意層次或從不同的角度代表相同概念的二個元素之間的歷程關係。)';
sTemp=L_Trace_TEXT;
break;
			case 'Transition':
			L_Transition_TEXT='(轉換：從某個狀態到另一個狀態的允許路徑。)';
sTemp=L_Transition_TEXT;
break;
			case 'Transition_Points':
			L_Transition_Points_TEXT='(轉換點：轉換區段的開始或結束點。)';
sTemp=L_Transition_Points_TEXT;
break;
			case 'Transition_To_History':
			L_Transition_To_History_TEXT='(轉換到歷程記錄：在對外狀態環境上結束的對內轉換區段，而且在環境中沒有連續的轉換區段。)';
sTemp=L_Transition_To_History_TEXT;
break;
			case 'Transition_UML':
			L_Transition_UML_TEXT='(轉換 (UML)：在狀態圖或活動圖中，兩個狀態或動作狀態之間、狀態和它本身之間的關係 (複雜轉換有多個來源和 (或) 目標狀態)。)';
sTemp=L_Transition_UML_TEXT;
break;
			case 'Transitive':
			L_Transitive_TEXT='(可轉換：一種信任關係，其中一個網域信任任何所有其他網域。例如，如果 Site X 和 Site Y 有信任關係，而 Site Y 和 Site Z 有信任關係，則 Site X 不需要和 Site Z 有信任關係。)';
sTemp=L_Transitive_TEXT;
break;
			case 'Tree_view':
			L_Tree_view_TEXT='(樹狀檢視：顯示在 UML Navigator 的視窗中的一種階層，其中每一個 UML 元素或檢視 (圖表) 都由一個圖示表示。UML 方案會自動建立模型的樹狀檢視。)';
sTemp=L_Tree_view_TEXT;
break;
			case 'Trigger':
			L_Trigger_TEXT='(引動程序：事件驅動的預存程序。預存程序是由分析師建立的程序，儲存在資料字典中以供應用程式重複使用。)';
sTemp=L_Trigger_TEXT;
break;
			case 'TWAIN':
			L_TWAIN_TEXT='(TWAIN：一種跨平台介面，用於取得掃描器、數位相機以及靜態畫面視訊擷取卡所捕捉的電子影像。)';
sTemp=L_TWAIN_TEXT;
break;
			case 'Two_dimensional_shape':
			L_Two_dimensional_shape_TEXT='(2D 圖形：有四個選取控點的圖形，您可以使用這些控點依比例調整圖形大小。)';
sTemp=L_Two_dimensional_shape_TEXT;
break;
			case 'Two_element_constraint':
			L_Two_element_constraint_TEXT='(2-元素限制式：套用到兩元素，例如兩個類別或關聯的限制式。限制式會在某一個元素和另一個元素之間顯示成虛線箭頭，並由放在括弧內的限制式字串 ({  }) 來標示。)';
sTemp=L_Two_element_constraint_TEXT;
break;
			case 'Type':
			L_Type_TEXT='(類型：物件可以採用，稍後再放棄的可變更角色。類型與類別類似，可描述一個具有屬性與作業的物件集合，但類型可能不包括方法。)';
sTemp=L_Type_TEXT;
break;
			case 'UML_Navigator':
			L_UML_Navigator_TEXT='(UML 導覽器：在 UML 方案的一個視窗，包含 UML 系統的樹狀結構檢視。您可以開啟或關閉 UML Navigator，而且可以將它固定或浮動在繪圖頁面和樣板上。)';
sTemp=L_UML_Navigator_TEXT;
break;
			case 'UML_Properties_dialog_boxes':
			L_UML_Properties_dialog_boxes_TEXT='(UML 屬性對話方塊：用於編輯 UML 元素的屬性。按兩下繪圖頁面上的 UML 圖形或樹狀結構檢視中的圖示，可以開啟元素的 [UML 屬性] 對話方塊，然後新增元素屬性的值。)';
sTemp=L_UML_Properties_dialog_boxes_TEXT;
break;
			case 'UMLSysA':
			L_UMLSysA_TEXT='(UMLSysA：一種 UML 繪圖檔案，代表您正在建立模型的系統。)';
sTemp=L_UMLSysA_TEXT;
break;
			case 'UMLSysB':
			L_UMLSysB_TEXT='(UMLSysB：系統中的每一個模型都是一種抽象概念，分別從不同的觀點來呈現系統。每一個圖表是模型的不同檢視。每一個圖表類型是由圖示表示 (類似此處的圖示)。)';
sTemp=L_UMLSysB_TEXT;
break;
			case 'UMLSysC':
			L_UMLSysC_TEXT='(UMLSysC：使用案例圖會敘述外部動作項目以及它們如何使用系統。)';
sTemp=L_UMLSysC_TEXT;
break;
			case 'UMLSysD':
			L_UMLSysD_TEXT='(UMLSysD：概念性模型 (物件圖)，一種靜態結構圖的類型，可以將系統拆解成相關工作的物件。)';
sTemp=L_UMLSysD_TEXT;
break;
			case 'UMLSysE':
			L_UMLSysE_TEXT='(UMLSysE：系統順序圖顯示 (用於特殊使用案例) 外部動作項目產生的系統事件。)';
sTemp=L_UMLSysE_TEXT;
break;
			case 'UMLSysF':
			L_UMLSysF_TEXT='(UMLSysF：使用套件將相關元素組成群組，並且將複雜模型分割成可管理的子集。)';
sTemp=L_UMLSysF_TEXT;
break;
			case 'UMLSysG':
			L_UMLSysG_TEXT='(UMLSysG：共同作業圖顯示涉及每一個系統事件的物件，如何透過訊息互動來完成工作。)';
sTemp=L_UMLSysG_TEXT;
break;
			case 'UMLSysH':
			L_UMLSysH_TEXT='(UMLSysH：類別圖，靜態結構圖表的一種類型，將工作的物件轉譯成擁有關聯、屬性、介面、方法和相依的軟體實體。)';
sTemp=L_UMLSysH_TEXT;
break;
			case 'UMLSysI':
			L_UMLSysI_TEXT='(UMLSysI：用於狀態獨立物件，狀態圖會敘述物件如何反應不同的事件。)';
sTemp=L_UMLSysI_TEXT;
break;
			case 'UMLSysJ':
			L_UMLSysJ_TEXT='(UMLSysJ：活動圖顯示與個別物件相關的工作流程。)';
sTemp=L_UMLSysJ_TEXT;
break;
			case 'UMLSysK':
			L_UMLSysK_TEXT='(UMLSysK：部署圖顯示軟體和硬體元件之間的實體關係。)';
sTemp=L_UMLSysK_TEXT;
break;
			case 'UMLSysL':
			L_UMLSysL_TEXT='(UMLSysL：元件圖顯示程式碼本身的結構以及元件之間的相依性。)';
sTemp=L_UMLSysL_TEXT;
break;
			case 'Uniqueness_constraint':
			L_Uniqueness_constraint_TEXT='(唯一性限制式：一種限制式，禁止重複個別資料或資料組合。)';
sTemp=L_Uniqueness_constraint_TEXT;
break;
			case 'Unitless_number':
			L_Unitless_number_TEXT='(無單位數字：與測量單位無關的數字。)';
sTemp=L_Unitless_number_TEXT;
break;
			case 'Units_of_measure':
			L_Units_of_measure_TEXT='(測量單位：用於繪圖中的測量系統類型。在公式中，用在數字後面來指定數字表示的測量單位。)';
sTemp=L_Units_of_measure_TEXT;
break;
			case 'Unqualified_Name':
			L_Unqualified_Name_TEXT='(不完整名稱：顯示的物件值沒有任何命名屬性。多個命名屬性以加號 (+) 分隔。)';
sTemp=L_Unqualified_Name_TEXT;
break;
			case 'Unscaled_drawing_page':
			L_Unscaled_drawing_page_TEXT='(未縮放的繪圖頁面：繪圖縮放比例是 1：1 的繪圖頁面。)';
sTemp=L_Unscaled_drawing_page_TEXT;
break;
			case 'US_units':
			L_US_units_TEXT='(英制：美國度量系統所使用的單位，例如英吋、英呎、碼以及哩。)';
sTemp=L_US_units_TEXT;
break;
			case 'Usage':
			L_Usage_TEXT='(用法：一種相依性，表示一個元素若要正確執行或運作，另一個元素必須存在。)';
sTemp=L_Usage_TEXT;
break;
			case 'Use_case':
			L_Use_case_TEXT='(使用案例：在使用案例圖中，表示當動作項目使用系統來完成某個程序時發生的一個事件集合。一般而言，使用案例是相當大的程序，而不是個別的步驟或交易。)';
sTemp=L_Use_case_TEXT;
break;
			case 'Use_case_diagram':
			L_Use_case_diagram_TEXT='(使用案例圖：顯示與系統互動的外部動作項目和使用方式的一種圖表。圖表包含系統邊界、動作項目、使用案例以及使用案例關係 (通訊、使用和延伸)。)';
sTemp=L_Use_case_diagram_TEXT;
break;
			case 'User_form':
			L_User_form_TEXT='(使用者表單：Microsoft Visual Basic 或 Visual Basic for Applications (VBA) 專案中的一種檔案，副檔名是 .frm，它包含使用者介面控制項，例如指令按鈕和文字方塊。)';
sTemp=L_User_form_TEXT;
break;
			case 'Uses_relationship':
			L_Uses_relationship_TEXT='(使用關係：在使用案例圖中，兩個使用案例之間的關係，指示使用案例 A 的實例也會包括使用案例 B 指定的行為。箭頭會指向目前使用的使用案例。)';
sTemp=L_Uses_relationship_TEXT;
break;
			case 'Utility':
			L_Utility_TEXT='(公用程式：在靜態結構圖中，比基本建構更方便的程式設計工具。您在公用程式定義的屬性和作業會成為全域變數和程序。)';
sTemp=L_Utility_TEXT;
break;
			case 'Vanishing_point':
			L_Vanishing_point_TEXT='(消失點：表示繪圖中的透視消失的位置點。您可以在繪圖頁面上任意移動消失點。)';
sTemp=L_Vanishing_point_TEXT;
break;
			case 'Variable_grid':
			L_Variable_grid_TEXT='(變動格線：當您變更繪圖大小時隨之變動的格線。當您拉近時，格線會更靠近。當您拉遠時，格線會分開更遠。)';
sTemp=L_Variable_grid_TEXT;
break;
			case 'Vertex_vertices':
			L_Vertex_vertices_TEXT='(頂點：一個菱形控點，顯示在多重線段圖形的兩個線段之間，或者顯示在線段的末端。您可以拖曳圖形或連接器的頂點來調整圖形或連接器。)';
sTemp=L_Vertex_vertices_TEXT;
break;
			case 'viconvertedcaddrawing':
			L_viconvertedcaddrawing_TEXT='(轉換的 CAD 繪圖：可以使用 Visio 編輯的 CAD 繪圖。當轉換 CAD 繪圖時，區塊和實體會對應到最近乎相等的 Visio 圖形。)';
sTemp=L_viconvertedcaddrawing_TEXT;
break;
			case 'vidithered':
			L_vidithered_TEXT='(遞色：在無特定可用色的顯示系統或檔案格式中產生相近色的方法。)';
sTemp=L_vidithered_TEXT;
break;
			case 'View':
			L_View_TEXT='(檢視：一種顯示資料庫中資料的方法，以供使用者檢閱。檢視是從資料庫中一或多個表格的資料欄內的子集建立。)';
sTemp=L_View_TEXT;
break;
			case 'viink':
			L_viink_TEXT='(筆跡：以手寫方式書寫。)';
sTemp=L_viink_TEXT;
break;
			case 'viinsertedcaddrawing':
			L_viinsertedcaddrawing_TEXT='(插入的 CAD 繪圖：可以使用 Visio 檢視的 CAD 繪圖。必須先將插入的 CAD 繪圖轉換為 Visio 繪圖，才可進行編輯。)';
sTemp=L_viinsertedcaddrawing_TEXT;
break;
			case 'vimarkup':
			L_vimarkup_TEXT='(標記：檢閱新增到標記覆疊的註解、圖形和筆跡。開啟 [檢閱] 工作窗格來檢視標記。)';
sTemp=L_vimarkup_TEXT;
break;
			case 'vimarkupoverlay':
			L_vimarkupoverlay_TEXT='(標記覆疊：保留檢閱者的檢閱註解、圖形和筆跡。標記覆疊與原始繪圖是分開的。檢視 [標記] 來查閱檢閱者的標記覆疊。)';
sTemp=L_vimarkupoverlay_TEXT;
break;
			case 'vimemorymodel':
			L_vimemorymodel_TEXT='(記憶模型：在網站地圖中，記憶模型包含每一個找到的連結資訊。變更記憶模型也會變更繪圖頁的地圖。)';
sTemp=L_vimemorymodel_TEXT;
break;
			case 'viresource':
			L_viresource_TEXT='(資源：在空間規劃中的人員、電腦、印表機或資產。)';
sTemp=L_viresource_TEXT;
break;
			case 'virle':
			L_virle_TEXT='(執行長度編碼 (RLE) 壓縮：快速及有效儲存資料的方法，能將代表資訊的位元模式轉換為程式碼，而非逐一以位元和字元來儲存。)';
sTemp=L_virle_TEXT;
break;
			case 'Virtual':
			L_Virtual_TEXT='(虛擬：您無法建立實例的類別。虛擬/抽象類別只能當成其他類別的超級類別。在目錄服務結構中，虛擬/抽象類別會變成暗灰色。)';
sTemp=L_Virtual_TEXT;
break;
			case 'Visibility':
			L_Visibility_TEXT='(可見性：一個元素看見或參考另一個元素的能力。一個元素若要傳送訊息給另一個元素，傳送訊息的元素必須可以看見接收訊息的元素。)';
sTemp=L_Visibility_TEXT;
break;
			case 'Visio_library':
			L_Visio_library_TEXT='(Visio 程式庫：特殊的動態連結程式庫 (dll)，由 Visio 應用程式在執行期間載入，而且可以實作一或多個 Visio 附加元件。Visio 程式庫的副檔名是 .vsl。)';
sTemp=L_Visio_library_TEXT;
break;
			case 'Visio_type_library':
			L_Visio_type_library_TEXT='(Visio 類型程式庫：包含 Visio 應用程式呈現給自動化的物件、屬性、方法、事件和限制式定義的一種檔案。)';
sTemp=L_Visio_type_library_TEXT;
break;
			case 'vispace':
			L_vispace_TEXT='(空間：在空間規劃中，空間是一或多個資源約略位置的識別，例如人員、電腦、印表機或資產。)';
sTemp=L_vispace_TEXT;
break;
			case 'VLAN_Domains':
			L_VLAN_Domains_TEXT='(VLAN 網域：是一個連接的開關集合，共用相同的子網路定義。VLAN 網域會傳播網域屬性的變更 (包括子網路定義) 到網域中的開關。)';
sTemp=L_VLAN_Domains_TEXT;
break;
			case 'VLANs':
			L_VLANs_TEXT='(虛擬區域網路 (VLAN)：在交換式網路內部提供路由式網路的部份優點，例如將網路分成多個廣播網域以降低網路流量。)';
sTemp=L_VLANs_TEXT;
break;
			case 'Wall_reference_line':
			L_Wall_reference_line_TEXT='(牆參考線：從牆開始點延伸到牆結束點的線。雖然牆參考線一般在牆的中央，或者與牆的某個邊緣對齊，不過您可以將牆參考線放在與牆相隔任意距離的地方。)';
sTemp=L_Wall_reference_line_TEXT;
break;
			case 'WIA':
			L_WIA_TEXT='(WIA：一種裝置驅動程式介面，支援靜態數位相機以及低階和高階掃描器，而且允許從 IEEE 1394 DV 攝影機和 USB「Web 相機」取得靜態影像。)';
sTemp=L_WIA_TEXT;
break;
			case 'Wizard':
			L_Wizard_TEXT='(精靈：一種 Visio 工具，可以自動處理一般工作。例如，您可以使用組織圖精靈來自動建立組織圖。)';
sTemp=L_Wizard_TEXT;
break;
			case 'Workspace':
			L_Workspace_TEXT='(工作區：一種 Visio 檔案，包含繪圖的大小和位置相關資料，以及當您儲存工作環境時使用的樣板。開啟工作環境時，Visio 程式會重新建立樣板和繪圖視窗的排列。)';
sTemp=L_Workspace_TEXT;
break;
			case 'Zero_point':
			L_Zero_point_TEXT='(零點：(1) 水平或垂直座標軸上 0 的位置。(2) 繪圖視窗中的某一點，它是每一個座標軸零點交會處。按預設，零點是在繪圖頁面的左下角。)';
sTemp=L_Zero_point_TEXT;
break;
			case 'Zoom':
			L_Zoom_TEXT='(縮放：增加或減少繪圖視窗中的繪圖顯示大小。除非您變更 [頁面設定] 的列印輸出，否則 100% 的顯示大小 (或實際大小) 會與列印的繪圖大小相同。)';
sTemp=L_Zoom_TEXT;
break;
			case 'pjcommittedresource':
			L_pjcommittedresource_TEXT='(確定資源：正式配置給其在專案內具有的任何任務分派的資源。這是預設的登記類型。)';
sTemp=L_pjcommittedresource_TEXT;
break;
			case 'pjdefAbsoluteReference':
			L_pjdefAbsoluteReference_TEXT='(絕對參照：與作用中儲存格無關的欄或列的參照。無論作用中儲存格位於什麼位置，絕對參照的結果都會相同。)';
sTemp=L_pjdefAbsoluteReference_TEXT;
break;
			case 'pjdefaccessibility_aids':
			L_pjdefaccessibility_aids_TEXT='(協助工具輔助：讓殘障人士能輕鬆使用電腦的公用程式。協助工具輔助的範例包括螢幕助讀程式、語音辨識程式及螢幕小鍵盤。)';
sTemp=L_pjdefaccessibility_aids_TEXT;
break;
			case 'pjdefaccessible':
			L_pjdefaccessible_TEXT='(可存取：指硬體或軟體指定系統的品質，這些軟硬體可讓身體上有某部分殘障 (例如行動不便、眼盲或失聰) 的人使用。)';
sTemp=L_pjdefaccessible_TEXT;
break;
			case 'pjdefAccrualMethod':
			L_pjdefAccrualMethod_TEXT='(累算方法：決定資源成本產生的時間及實際成本被記入專案的時間。您可以在任務的啟動 [開始] 或完成 [結束] 時產生成本，或在任務期間按比例分派它們 [依比例]。)';
sTemp=L_pjdefAccrualMethod_TEXT;
break;
			case 'pjdefActiveXAddin':
			L_pjdefActiveXAddin_TEXT='(COM 增益集：副檔名為 .dll 或 .exe，可以藉由新增自訂指令及專用特性來擴充程式功能的附加程式。COM 增益集可設計用在一或多個 Office 程式中載入及執行。)';
sTemp=L_pjdefActiveXAddin_TEXT;
break;
			case 'pjdefActual':
			L_pjdefActual_TEXT='(實際：顯示實際發生情況的資訊。例如，任務的實際開始日期是任務實際開始的日子。)';
sTemp=L_pjdefActual_TEXT;
break;
			case 'pjdefActualCost':
			L_pjdefActualCost_TEXT='(實際成本：任務、資源或工作分派日期所實際產生的成本。例如，如果指定給任務的唯一資源每小時獲利 20 美元且已經工作了 2 小時，則該工作日期的實際成本是 40 美元。)';
sTemp=L_pjdefActualCost_TEXT;
break;
			case 'pjdefActualDuration':
			L_pjdefActualDuration_TEXT='(實際工期：任務進行中的時間量。輸入任務的實際工期時，Project 會根據下列公式使用此值計算剩餘工期：剩餘工期 = 工期 - 實際工期。)';
sTemp=L_pjdefActualDuration_TEXT;
break;
			case 'pjdefActualWork':
			L_pjdefActualWork_TEXT='(實際工時：已在任務或工作分派上執行的工作量。當您在任務上輸入實際的工作時，將使用這個公式計算剩餘的工作：剩餘的工作 = 工作 - 實際工作。實際工作通常稱為「實際」。)';
sTemp=L_pjdefActualWork_TEXT;
break;
			case 'pjdefACWP':
			L_pjdefACWP_TEXT='(ACWP：顯示到專案狀態日期或目前日期為止，某資源在任務上已執行工作所產生的實際成本。)';
sTemp=L_pjdefACWP_TEXT;
break;
			case 'pjdefAddress':
			L_pjdefAddress_TEXT='(位址：「位址」欄位即是 Project 儲存檔案的「通用命名慣例」[UNC] 或儲存與任務、資源或工作分派相關聯的超連結的統一資源定位器 (URL) 位址之處。)';
sTemp=L_pjdefAddress_TEXT;
break;
			case 'pjdefAdminClosure':
			L_pjdefAdminClosure_TEXT='(管理終止：以即時方式記錄和保存專案，並正式接受專案產品和所學習經驗的過程。)';
sTemp=L_pjdefAdminClosure_TEXT;
break;
			case 'pjdefadministrator':
			L_pjdefadministrator_TEXT='(管理員：設定並管理使用者帳戶，指定使用權限以及幫助使用者解決網路或伺服器存取問題。該人員還可以管理及自訂 Project Professional 及 Project Server 中的各種元素。)';
sTemp=L_pjdefadministrator_TEXT;
break;
			case 'pjdefAlef_Hamzas':
			L_pjdefAlef_Hamzas_TEXT='(Alef Hamza：代表 Alef 和 Hamza 這兩個字元的合併的單一阿拉伯字元。)';
sTemp=L_pjdefAlef_Hamzas_TEXT;
break;
			case 'pjdefAllocation':
			L_pjdefAllocation_TEXT='(資源分派：指派到特定工作分派的資源容量百分比。)';
sTemp=L_pjdefAllocation_TEXT;
break;
			case 'pjdefApplication':
			L_pjdefApplication_TEXT='(應用程式：用於某特定類型工作 (例如管理專案或文字處理) 的電腦程式。這個應用程式詞彙也可和程式通用。)';
sTemp=L_pjdefApplication_TEXT;
break;
			case 'pjdefArgument':
			L_pjdefArgument_TEXT='(引數：是指 Visual Basic for Applications 中傳遞到程序的常數、變數或運算式。)';
sTemp=L_pjdefArgument_TEXT;
break;
			case 'pjdefASCII':
			L_pjdefASCII_TEXT='(ASCII：美國資訊交換標準程式碼。)';
sTemp=L_pjdefASCII_TEXT;
break;
			case 'pjdefAssignment':
			L_pjdefAssignment_TEXT='(工作分派：分派至特定任務的特定資源。)';
sTemp=L_pjdefAssignment_TEXT;
break;
			case 'pjdefAssignmentDelay':
			L_pjdefAssignmentDelay_TEXT='(延後工作分派：任務的目前規劃開始時間和分派資源預定要開始任務之間的時間。)';
sTemp=L_pjdefAssignmentDelay_TEXT;
break;
			case 'pjdefAssignmentUnits':
			L_pjdefAssignmentUnits_TEXT='(工作分派單位：資源分派至任務的工作資源時間或單位的百分比。)';
sTemp=L_pjdefAssignmentUnits_TEXT;
break;
			case 'pjdefAssignmentView':
			L_pjdefAssignmentView_TEXT='(工作分派檢視：此檢視可以顯示已分派給每一任務的資源，同時也可以顯示每一工作分派的工作總數和時段工作，及成本資訊。有兩個工作分派檢視分別是「任務分派狀況」和「資源使用狀況」檢視。)';
sTemp=L_pjdefAssignmentView_TEXT;
break;
			case 'pjdefAuthentication':
			L_pjdefAuthentication_TEXT='(驗證：識別特定使用者和確認使用者具有存取 Project Server 之權限的過程。)';
sTemp=L_pjdefAuthentication_TEXT;
break;
			case 'pjdefAutoFilter':
			L_pjdefAutoFilter_TEXT='(自動篩選：篩選欄位 [欄] 中資訊的方式。「自動篩選」功能預設是關閉的，但您可以藉由按一下 [自動篩選] 來開啟。選取篩選器並不會刪除您專案中的任何資訊；僅可以從檢視中篩選它。)';
sTemp=L_pjdefAutoFilter_TEXT;
break;
			case 'pjdefAutomation':
			L_pjdefAutomation_TEXT='(Automation：一種使用另一個程式或開發工具的物件的方法。以前稱為 OLE Automation，Automation 是一種工業標準，並且是元件物件模型 [COM] 的一個功能。)';
sTemp=L_pjdefAutomation_TEXT;
break;
			case 'pjdefAvailability':
			L_pjdefAvailability_TEXT='(可用性：指出何時以及有多少的資源時間可以安排給分派的工作。可用性是由下列項目決定的：專案和資源行事曆、資源開始和完成日期，或可供工作使用之資源所在的層級。)';
sTemp=L_pjdefAvailability_TEXT;
break;
			case 'pjdefBAC':
			L_pjdefBAC_TEXT='(BAC：專案總成本的估計。)';
sTemp=L_pjdefBAC_TEXT;
break;
			case 'pjdefBackwardPass':
			L_pjdefBackwardPass_TEXT='(反向傳遞：計算專案活動的最遲完成日期和最遲開始日期，此計算會從專案的完成日期往回推算。)';
sTemp=L_pjdefBackwardPass_TEXT;
break;
			case 'pjdefBaseCalendar':
			L_pjdefBaseCalendar_TEXT='(基準行事曆：可用來作為指定一組資源的預設工作和非工作時間的專案和任務行事曆。基準行事曆和資源行事曆不同，資源行事曆是指定個別資源的工作和非工作時間。)';
sTemp=L_pjdefBaseCalendar_TEXT;
break;
			case 'pjdefBaselineCost':
			L_pjdefBaselineCost_TEXT='(比較基準成本：比較基準計劃中所顯示的原始專案、資源和工作分派成本。比較基準成本是比較基準計劃儲存時的成本快照。)';
sTemp=L_pjdefBaselineCost_TEXT;
break;
			case 'pjdefBaselinePlan':
			L_pjdefBaselinePlan_TEXT='(比較基準計劃：用來追蹤專案進度的原始專案計劃 [每一專案最多 11 個]。比較基準計劃是您儲存比較基準時的排程快照，而且包括任務、資源和工作分派的相關資訊。)';
sTemp=L_pjdefBaselinePlan_TEXT;
break;
			case 'pjdefBCWP':
			L_pjdefBCWP_TEXT='(BCWP：指出在任務的實際工期應該花掉多少任務預算的盈餘分析欄位。請注意，Project 是在任務層次計算 BCWP，而不是在工作分派層次。)';
sTemp=L_pjdefBCWP_TEXT;
break;
			case 'pjdefBCWS':
			L_pjdefBCWS_TEXT='(BCWS：盈餘分析欄位，考慮到任務、工作分派或資源的比較基準成本，顯示應花費多少工作的預算。累積按照時段的比較基準成本到達狀態日期或今天的日期時會計算 BCWS。)';
sTemp=L_pjdefBCWS_TEXT;
break;
			case 'pjdefbidirectional':
			L_pjdefbidirectional_TEXT='(雙向：同時使用由右至左和由左至右的行為屬性的環境，例如希伯來文和英文文字出現在同一個句子的情況。)';
sTemp=L_pjdefbidirectional_TEXT;
break;
			case 'pjdefBinding':
			L_pjdefBinding_TEXT='(早期及晚期繫結：一個程式中的物件變數參照另一個程式提供的物件時，VBA 所使用的驗證程序。 繫結可能會在執行階段 (晚期繫結) 或在編譯階段 (早期繫結) 發生。)';
sTemp=L_pjdefBinding_TEXT;
break;
			case 'pjdefBitmapGrid':
			L_pjdefBitmapGrid_TEXT='(點陣圖格線：您可以在其中編輯影像的個別色彩像素的按鈕影像放大檢視。)';
sTemp=L_pjdefBitmapGrid_TEXT;
break;
			case 'pjdefBottomUpEstimating':
			L_pjdefBottomUpEstimating_TEXT='(由下至上的估計：個別工作項目或資源的基準成本計算到任務、資源和專案總成本中的估計方法。)';
sTemp=L_pjdefBottomUpEstimating_TEXT;
break;
			case 'pjdefBreakMode':
			L_pjdefBreakMode_TEXT='(中斷模式：在 Visual Basic for Applications 開發環境中對執行中程式或巨集的暫時停止。在中斷模式中，您可以檢查、偵錯、重設、逐步執行或恢復執行程式或巨集。)';
sTemp=L_pjdefBreakMode_TEXT;
break;
			case 'pjdefBrowser':
			L_pjdefBrowser_TEXT='(瀏覽器：解譯並格式化從網頁伺服器傳來的 HTML 資料，再顯示給使用者的程式。)';
sTemp=L_pjdefBrowser_TEXT;
break;
			case 'pjdefBudget':
			L_pjdefBudget_TEXT='(預算：在 Project 中以您的比較基準計劃建立的專案估計成本。)';
sTemp=L_pjdefBudget_TEXT;
break;
			case 'pjdefBuffer':
			L_pjdefBuffer_TEXT='(緩衝時間：加入任務或專案已排程工期的其他時間，這些時間是要完成任務或專案所需要的實際時間的可能增加量。)';
sTemp=L_pjdefBuffer_TEXT;
break;
			case 'pjdefCal':
			L_pjdefCal_TEXT='(行事曆：為資源及任務決定任務時間的排程機制。Project 使用四種類型的行事曆：基準行事曆、專案行事曆、資源行事曆及任務行事曆。)';
sTemp=L_pjdefCal_TEXT;
break;
			case 'pjdefCalcOrEnter':
			L_pjdefCalcOrEnter_TEXT='(計算型或輸入型欄位：Project 根據其他欄位中資訊來決定值所在的欄位。您在欄位中自行輸入的資訊會置換已計算的值。)';
sTemp=L_pjdefCalcOrEnter_TEXT;
break;
			case 'pjdefCalculatedFields':
			L_pjdefCalculatedFields_TEXT='(計算型欄位：Project 根據其他欄位中資訊來決定值所在的欄位。視您選擇的計算設定而定，Project 可能會自動重新計算數值或您指定的時間。)';
sTemp=L_pjdefCalculatedFields_TEXT;
break;
			case 'pjdefCalculatedFilter':
			L_pjdefCalculatedFilter_TEXT='(計算型篩選器：比較任務或資源的兩個欄位中的值。例如，「成本超過預算」篩選器比較基準成本與目前成本，並僅顯示或醒目提示其目前成本高於其比較基準成本的任務。)';
sTemp=L_pjdefCalculatedFilter_TEXT;
break;
			case 'pjdefCalendar':
			L_pjdefCalendar_TEXT='(行事曆檢視：一種在行事曆格式中顯示專案任務的「專案」檢視。)';
sTemp=L_pjdefCalendar_TEXT;
break;
			case 'pjdefCaseSensitive':
			L_pjdefCaseSensitive_TEXT='(區分大小寫：注意字元的大小寫。例如，對包括大寫及小寫字元之特定字元字串進行區分大小寫的搜尋，將找不到其字元均為小寫的相同字元字串。)';
sTemp=L_pjdefCaseSensitive_TEXT;
break;
			case 'pjdefCategory':
			L_pjdefCategory_TEXT='(類別：在 Project Server 的使用者及專案和檢視的對應。每個類別都有一個名稱，並容許該類別中的使用者透過一組特定的檢視來存取特定的專案。)';
sTemp=L_pjdefCategory_TEXT;
break;
			case 'pjdefChart':
			L_pjdefChart_TEXT='(圖表：以圖形方式表示專案資訊的檢視或部份檢視。例如，「甘特圖」檢視是由一個工作表和圖表窗格組成，在圖表窗格中任務是以橫向長條圖表示。)';
sTemp=L_pjdefChart_TEXT;
break;
			case 'pjdefcheck_out':
			L_pjdefcheck_out_TEXT='(取出：開啟企業專案或企業資源記錄以進行編輯的過程。)';
sTemp=L_pjdefcheck_out_TEXT;
break;
			case 'pjdefClipboard':
			L_pjdefClipboard_TEXT='(剪貼簿：在 Project 或在 Project 和其他程式間複製或移動資訊的保留空間。)';
sTemp=L_pjdefClipboard_TEXT;
break;
			case 'pjdefCode':
			L_pjdefCode_TEXT='(代碼：在 Visual Basic for Applications 的巨集中包含一或多個指示的序列。)';
sTemp=L_pjdefCode_TEXT;
break;
			case 'pjdefCodeMask':
			L_pjdefCodeMask_TEXT='(代碼遮罩：為工作分解結構 [WBS] 代碼或自訂大綱代碼定義的格式。遮罩指定每個層次及分隔層次之符號所必要的字母或數字的順序及數目。)';
sTemp=L_pjdefCodeMask_TEXT;
break;
			case 'pjdefCodePage':
			L_pjdefCodePage_TEXT='(字碼頁：作業系統用來將鍵盤上的按鍵與螢幕上顯示的字元相關的內部表格。不同的字碼頁支援用在不同國家/地區的字元集及鍵盤配置。)';
sTemp=L_pjdefCodePage_TEXT;
break;
			case 'pjdefCodePane':
			L_pjdefCodePane_TEXT='(代碼窗格：在 Visual Basic for Applications 中用來顯示、編輯和撰寫模組層級和程序代碼的視窗。)';
sTemp=L_pjdefCodePane_TEXT;
break;
			case 'pjdefCollapsing':
			L_pjdefCollapsing_TEXT='(摺疊：在大綱中，隱藏從屬於摘要任務的任務，僅顯示摘要任務；這只會顯示主要階段。在各種使用量檢視中展開及摺疊大綱以顯示或隱藏資源分派。。)';
sTemp=L_pjdefCollapsing_TEXT;
break;
			case 'pjdefcolumn_or_row_of_pages':
			L_pjdefcolumn_or_row_of_pages_TEXT='(預覽要列印的頁面時，Project 對應欄 [代表每頁要列印的欄] 及列 [代表每頁要列印的列] 的頁面。)';
sTemp=L_pjdefcolumn_or_row_of_pages_TEXT;
break;
			case 'pjdefCombinationView':
			L_pjdefCombinationView_TEXT='(複合檢視：包含兩個檢視的檢視。底端窗格檢視會顯示有關頂端窗格檢視中任務或資源的詳細資訊。例如，「甘特圖」檢視可以位在頂端窗格，「任務表單」檢視則可以位於底端窗格。)';
sTemp=L_pjdefCombinationView_TEXT;
break;
			case 'pjdefConsolidatedFile':
			L_pjdefConsolidatedFile_TEXT='(合併專案：含有一個或多個插入的專案 [也稱為子專案] 的專案。這些插入的專案可以保留到其來源專案的連結，並可能會被互相連結。合併專案亦稱為主專案。)';
sTemp=L_pjdefConsolidatedFile_TEXT;
break;
			case 'pjdefConstraint':
			L_pjdefConstraint_TEXT='(限制式：設定在任務開始或完成日期的限制。可以指定任務必須在特定日期前開始或完成。限制式可以是具有彈性 [不受特定日期約束] 或強制性 [受特定日期約束]。)';
sTemp=L_pjdefConstraint_TEXT;
break;
			case 'pjdefContainer':
			L_pjdefContainer_TEXT='(容器：具有在另一個程式或文件所建立之 OLE 物件的程式或文件。OLE 容器參考可識別 OLE 的程式，該程式可儲存 OLE 伺服器提供的內嵌或連結物件。)';
sTemp=L_pjdefContainer_TEXT;
break;
			case 'pjdefContingencyPlan':
			L_pjdefContingencyPlan_TEXT='(應急計劃：在風險事件發生時識別所要採取之正確步驟的計劃。)';
sTemp=L_pjdefContingencyPlan_TEXT;
break;
			case 'pjdefContour':
			L_pjdefContour_TEXT='(作業分佈：工作分派的排程工作如何跨時間分散的圖案。使用作業分佈控制 Project 如何排定資源工作。作業分佈的範例包括一般分佈、前輕後重、前重後輕、鐘型分佈、中央加重鐘型分佈等等。)';
sTemp=L_pjdefContour_TEXT;
break;
			case 'pjdefContractCloseout':
			L_pjdefContractCloseout_TEXT='(完成合約：合約的完成 [如固定價格或總和、成本補償、單價合約]。完成包括解決所有未處理問題及項目，如審查或發票。)';
sTemp=L_pjdefContractCloseout_TEXT;
break;
			case 'pjdefCost':
			L_pjdefCost_TEXT='(成本：任務、資源或工作分派或者整個專案的排程總成本。這個值有時也稱為目前成本。在 Project 中，比較基準成本通常稱為「預算」。)';
sTemp=L_pjdefCost_TEXT;
break;
			case 'pjdefCostRateTable':
			L_pjdefCostRateTable_TEXT='(成本比率表：有關資源費率的資訊集合，包括標準工資率、加班工資率、任何每次使用成本，以及付款費率生效的日期。每個資源最多可以建立五個不同的成本比率表。)';
sTemp=L_pjdefCostRateTable_TEXT;
break;
			case 'pjdefCPI':
			L_pjdefCPI_TEXT='(CPI：執行任務的預算成本與執行任務的實際成本的比率 [BCWP/ACWP]。可使用累計 CPI [所有任務之 BCWP 的總和除以所有工作之 ACWP 的總和] 來預測專案是否會超出預算。)';
sTemp=L_pjdefCPI_TEXT;
break;
			case 'pjdefCPM':
			L_pjdefCPM_TEXT='(CPM：根據個別任務工期及其相依性計算專案總工期的專案管理方法。)';
sTemp=L_pjdefCPM_TEXT;
break;
			case 'pjdefCrash':
			L_pjdefCrash_TEXT='(毀損：在不變更任務關係的狀況下，減少專案的整個工期。毀損專案通常需要對任務指定其他資源。)';
sTemp=L_pjdefCrash_TEXT;
break;
			case 'pjdefCriteria':
			L_pjdefCriteria_TEXT='(準則：在篩選器中，指定當套用篩選器時，應顯示哪些任務或資源的指示。例如，「已完成的任務」篩選器的準則是所有已 100% 完成的任務。)';
sTemp=L_pjdefCriteria_TEXT;
break;
			case 'pjdefCriticalPath':
			L_pjdefCriticalPath_TEXT='(要徑：為了如期完成專案而必須如期完成的一系列任務。要徑上的每個任務都是要徑任務。)';
sTemp=L_pjdefCriticalPath_TEXT;
break;
			case 'pjdefCriticalTask':
			L_pjdefCriticalTask_TEXT='(要徑任務：為了如期完成專案而必須如期完成的任務。如果要徑任務延遲，專案的完成日期也可能會延遲。一系列的要徑任務會構成專案的要徑。)';
sTemp=L_pjdefCriticalTask_TEXT;
break;
			case 'pjdefCrossProjectLinking':
			L_pjdefCrossProjectLinking_TEXT='(跨專案連結：不同 Project 檔案中任務之間的相依性，亦稱為外部相依性。專案計劃不需要有主專案 - 子專案關係即可包括跨專案連結。)';
sTemp=L_pjdefCrossProjectLinking_TEXT;
break;
			case 'pjdefCrosstabReport':
			L_pjdefCrosstabReport_TEXT='(交叉分析報告：指定時間期間內之任務及資源的列印資訊。Project 中有五種預定的交叉分析報告：「現金流量」、「交叉分析」、「資源使用狀況」、「任務分派狀況」及「誰在何時做什麼」。)';
sTemp=L_pjdefCrosstabReport_TEXT;
break;
			case 'pjdefCSV':
			L_pjdefCSV_TEXT='(CSV：逗號分隔值 [CSV] 檔案格式是一種 ASCII、以記錄為基礎的文字格式，其中每個欄位都以清單分隔字元 (通常是逗號或分號) 分隔。每個任務或資源記錄都是以換行字元或換行鍵結尾。)';
sTemp=L_pjdefCSV_TEXT;
break;
			case 'pjdefCumCPI':
			L_pjdefCumCPI_TEXT='(CPI：在盈餘分析中，由所有任務之全部執行工作的預算成本 (BCWP) 的加總，除以全部執行工作的實際成本 [ACWP] 的加總所得。CPI 通常用來預測專案是否會超過預算以及超過多少。)';
sTemp=L_pjdefCumCPI_TEXT;
break;
			case 'pjdefCurrencyField':
			L_pjdefCurrencyField_TEXT='(貨幣欄位：內容是以成本表示的一種欄位。範例包括「實際成本」和「固定成本」欄位。這個欄位允許的最大值是 999,999,999,999.99。)';
sTemp=L_pjdefCurrencyField_TEXT;
break;
			case 'pjdefCurrencyRateField':
			L_pjdefCurrencyRateField_TEXT='(貨幣工資率欄位：其內容為工資率 [例如每小時 20 美元] 的欄位類型。範例包括「標準工資率」和「加班工資率」欄位。這個欄位所容許的最大值為 999,999,999.99。)';
sTemp=L_pjdefCurrencyRateField_TEXT;
break;
			case 'pjdefCurrentDateLine':
			L_pjdefCurrentDateLine_TEXT='(現在日期基準線：「甘特圖」或「資源圖表」的圖表部分中的虛線直線，表示目前日期。)';
sTemp=L_pjdefCurrentDateLine_TEXT;
break;
			case 'pjdefcustom_form':
			L_pjdefcustom_form_TEXT='(自訂表單：為了更符合您的需求所自訂的表單 [一種提供有關個別任務或資源詳細資訊的檢視]。)';
sTemp=L_pjdefcustom_form_TEXT;
break;
			case 'pjdefCV':
			L_pjdefCV_TEXT='(CV：已在任務上執行之工作的預算成本 [BCWP] 與已執行之工作的實際成本 [ACWP] 之差。如果 CV 是正數，表示成本目前在預算的數量之下；如果 CV 是負數，表示任務超出預算。)';
sTemp=L_pjdefCV_TEXT;
break;
			case 'pjdefdata_access_page':
			L_pjdefdata_access_page_TEXT='(資料存取頁：特殊類型的網頁，它是設計經由網際網路或內部網路來檢視和使用資料。)';
sTemp=L_pjdefdata_access_page_TEXT;
break;
			case 'pjdefDateField':
			L_pjdefDateField_TEXT='(日期欄位：其內容為日期的欄位類型。範例包括「比較基準開始時間」和「最早完成時間」欄位。)';
sTemp=L_pjdefDateField_TEXT;
break;
			case 'pjdefDDE':
			L_pjdefDDE_TEXT='(DDE：在文件之間交換複製資料的通訊協定。當來源文件中的資訊變更時，複製文件中會進行自動更新。請查閱其他程式的文件，查看其是否支援 DDE。)';
sTemp=L_pjdefDDE_TEXT;
break;
			case 'pjdefDeadline':
			L_pjdefDeadline_TEXT='(期限：指示您要何時完成任務的目標日期。如果超過了期限日期還未完成任務，Project 會顯示標記。)';
sTemp=L_pjdefDeadline_TEXT;
break;
			case 'pjdefDefaultValue':
			L_pjdefDefaultValue_TEXT='(預設值：在您沒有提供值的情況下，Project 自動分派到欄位的值。)';
sTemp=L_pjdefDefaultValue_TEXT;
break;
			case 'pjdefDelay':
			L_pjdefDelay_TEXT='(延遲：任務之排程的開始時間與工作實際應開始的時間之間差異的時間量；它通常用於解決資源過度分派的問題。延遲類型有兩種：延後工作分派與資源撫平的延遲。)';
sTemp=L_pjdefDelay_TEXT;
break;
			case 'pjdefDeliverable':
			L_pjdefDeliverable_TEXT='(交付項目：用於完成專案或部份專案而必須產生之實際而可測量的結果或項目。通常，專案小組及專案負責人在專案開始前會同意專案的交付項目。)';
sTemp=L_pjdefDeliverable_TEXT;
break;
			case 'pjdefDemoting':
			L_pjdefDemoting_TEXT='(縮排：將任務移至「任務名稱」欄位中較低的大綱層級 [向右移]。當您縮排任務時，它會變成前面離它最近之較高大綱階層的子任務。)';
sTemp=L_pjdefDemoting_TEXT;
break;
			case 'pjdefDesignMode':
			L_pjdefDesignMode_TEXT='(設計及執行模式：可以在其中設計自訂對話方塊及控制項並撰寫程式碼的模式。與執行模式不同，您不能像使用者一樣與程式互動；事件並不會觸發，且事件程序不會自動執行。)';
sTemp=L_pjdefDesignMode_TEXT;
break;
			case 'pjdefDestination':
			L_pjdefDestination_TEXT='(目的地：插入移動、複製、匯入或匯出之資訊的地方；亦是檢視、表格、文件或其他程式。在 OLE 中，是連結物件所在的文件或程式；以及超連結所指向的文件。)';
sTemp=L_pjdefDestination_TEXT;
break;
			case 'pjdefDetails':
			L_pjdefDetails_TEXT='(詳細資料：位於下列檢視中的直欄：「任務分派狀況」和「資源使用狀況」檢視、「資源圖表」檢視，以及顯示有關任務、資源或工作分派等有用資訊的表單檢視。)';
sTemp=L_pjdefDetails_TEXT;
break;
			case 'pjdefDiacritics':
			L_pjdefDiacritics_TEXT='(讀音符號：在由右至左的語言中，列印在母音上方或下方可指定母音發音方式的符號。)';
sTemp=L_pjdefDiacritics_TEXT;
break;
			case 'pjdefdigital_certificate':
			L_pjdefdigital_certificate_TEXT='(數位憑證：檔案、巨集專案或電子郵件的附件，它確保其為真品、提供安全的加密，或提供可驗證的簽名。若要以數位方式簽名巨集專案，您必須安裝數位憑證。)';
sTemp=L_pjdefdigital_certificate_TEXT;
break;
			case 'pjdefdigitally_sign':
			L_pjdefdigitally_sign_TEXT='(數位簽章：在巨集或檔案上提供電子、加密式且安全的驗證戳記。此簽名確認巨集或檔案來自於簽名者，且未被變更。)';
sTemp=L_pjdefdigitally_sign_TEXT;
break;
			case 'pjdefDimmed':
			L_pjdefDimmed_TEXT='(呈現灰色：程式中不可用的項目。有時因為某個項目目前沒有套用到您正嘗試執行的操作，所以會呈現灰色。當程式未設定為執行灰色的項目時，該項目也會呈現灰色。)';
sTemp=L_pjdefDimmed_TEXT;
break;
			case 'pjdefdirection':
			L_pjdefdirection_TEXT='(方向：不論鍵盤語言為何，指定由右至左的文字和文件的閱讀順序、對齊方式和視覺外觀。方向還描述如何導向使用者介面、控制項及其他螢幕物件。)';
sTemp=L_pjdefdirection_TEXT;
break;
			case 'pjdefDividerBar':
			L_pjdefDividerBar_TEXT='(分隔列：分隔圖表和「甘特圖」、「資源圖表」、「資源使用狀況」和「任務分派狀況」檢視中的表格或圖例的縱向長條圖。)';
sTemp=L_pjdefDividerBar_TEXT;
break;
			case 'pjdefdocked_toolbar':
			L_pjdefdocked_toolbar_TEXT='(固定工具列：附加到程式視窗的一邊的工具列。當您將工具列拖曳到程式標題列之下，或者拖曳到程式視窗的左邊、右邊或底端時，工具列會貼齊到程式視窗的邊緣。)';
sTemp=L_pjdefdocked_toolbar_TEXT;
break;
			case 'pjdefdocument_library':
			L_pjdefdocument_library_TEXT='(文件庫：在其中共用一組檔案 (這些檔案通常使用同一範本) 的資料夾。文件庫中的每個檔案都與使用者定義的資訊 (這些資訊顯示在該文件庫的內容清單中) 相關。)';
sTemp=L_pjdefdocument_library_TEXT;
break;
			case 'pjdefdriving_resource':
			L_pjdefdriving_resource_TEXT='(主導性資源：分派至某項任務並會決定任務完成日期的資源。)';
sTemp=L_pjdefdriving_resource_TEXT;
break;
			case 'pjdefDuration':
			L_pjdefDuration_TEXT='(工期：完成任務所需的作用中工作時間總長度。這一般是從任務開始到結束之工作時間的數量，與專案及資源行事曆所定義的一樣。)';
sTemp=L_pjdefDuration_TEXT;
break;
			case 'pjdefDurationField':
			L_pjdefDurationField_TEXT='(工期欄位：其內容以一段時間表示的欄位類型。範例包括「工時」、「工期」和「延遲」欄位。工期欄位包括工期單位，例如小時、天或星期。)';
sTemp=L_pjdefDurationField_TEXT;
break;
			case 'pjdefEAC':
			L_pjdefEAC_TEXT='(EAC：根據狀態日期的效能而得出之任務或專案的預期總成本。EAC 的計算方式如下：EAC = ACWP + (BAC-BCWP)/CPI。)';
sTemp=L_pjdefEAC_TEXT;
break;
			case 'pjdefEarlyFinDate':
			L_pjdefEarlyFinDate_TEXT='(最早完成日期：根據前置任務和後續任務的最早完成時間、其他限制式和任何資源撫平的延遲，得出任務可能完成的最早日期。)';
sTemp=L_pjdefEarlyFinDate_TEXT;
break;
			case 'pjdefEarnedValue':
			L_pjdefEarnedValue_TEXT='(盈餘分析：衡量最多執行到狀態日期或目前日期的工作成本。盈餘分析使用根據比較基準儲存的原始成本估計，及到目前為止的實際工時，來顯示實際成本是否符合預算。)';
sTemp=L_pjdefEarnedValue_TEXT;
break;
			case 'pjdefEffortdrivenScheduling':
			L_pjdefEffortdrivenScheduling_TEXT='(投入比導向的排程：Project 中的預設排程方法；當加入資源或從任務移除資源時，任務的工期就會縮短或加長，然而完成任務所需的投入量仍然保持不變。)';
sTemp=L_pjdefEffortdrivenScheduling_TEXT;
break;
			case 'pjdefElapsedDuration':
			L_pjdefElapsedDuration_TEXT='(24 小時制工期：以一天 24 小時、一週 7 天 (包括假期及其他非工作日) 為基準，完成任務將花費的時間量。例如：emin = 已耗用的分鐘數，ehr = 已耗用的小時數，eday = 已耗用的天數，ewk = 已耗用的週數。)';
sTemp=L_pjdefElapsedDuration_TEXT;
break;
			case 'pjdefemail_system':
			L_pjdefemail_system_TEXT='(電子郵件系統：可交換電子郵件訊息之網路中連接的一組電腦。若要交換小組共同作業訊息，網路中的每台電腦都必須有一個 MAPI 相容的 32 位元電子郵件系統，例如 Outlook。)';
sTemp=L_pjdefemail_system_TEXT;
break;
			case 'pjdefEmbed':
			L_pjdefEmbed_TEXT='(內嵌：將 OLE 物件放置到容器文件中。您可以使用與該物件關聯的程式從容器文件內編輯內嵌物件。)';
sTemp=L_pjdefEmbed_TEXT;
break;
			case 'pjdefEmbeddedObject':
			L_pjdefEmbeddedObject_TEXT='(內嵌物件：插入在檔案 [目標檔案] 的資訊 [物件]。一旦內嵌，物件將變成目標檔案的一部份。當您按兩下內嵌物件時，將以建立它的 [來源程式] 開啟它。)';
sTemp=L_pjdefEmbeddedObject_TEXT;
break;
			case 'pjdefEmpty':
			L_pjdefEmpty_TEXT='(空白：指出未將開始值指定給 Variant 變數。Empty 變數表示數字內文中的 0，或字串內文中的零長度字串 [\'\']。)';
sTemp=L_pjdefEmpty_TEXT;
break;
			case 'pjdefEntered':
			L_pjdefEntered_TEXT='(輸入型欄位：您可以鍵入或編輯資訊的欄位。它和計算型欄位是相對的，在計算型欄位中 Project 可計算和輸入資訊。)';
sTemp=L_pjdefEntered_TEXT;
break;
			case 'pjdefenterprise_global_template':
			L_pjdefenterprise_global_template_TEXT='(企業通用範本：組織中所有專案使用之預設值 (如檢視、表格及欄位) 的集合。這些設定存在於 Project Server 的特殊專案中。)';
sTemp=L_pjdefenterprise_global_template_TEXT;
break;
			case 'pjdefenterprise_resources':
			L_pjdefenterprise_resources_TEXT='(企業資源：組織之整個資源清單中的部份資源。企業資源可以跨專案進行共用。)';
sTemp=L_pjdefenterprise_resources_TEXT;
break;
			case 'pjdefEnumField':
			L_pjdefEnumField_TEXT='(列舉欄位：其內容選取自預定義選項清單的欄位類型。例如，在「成本累算方式」欄位中您可以選取資源成本從包含「開始時間」、「依比例」和「結束」的清單中累算的方式。)';
sTemp=L_pjdefEnumField_TEXT;
break;
			case 'pjdefEstimatedDuration':
			L_pjdefEstimatedDuration_TEXT='(估計工期：只有足夠的資訊可以判定其暫時值的工期。這樣其狀態即會清晰可見，估計工期是由緊接在工期單位後面的問號清晰地標示出來的。)';
sTemp=L_pjdefEstimatedDuration_TEXT;
break;
			case 'pjdefException':
			L_pjdefException_TEXT='(例外：不同於專案行事曆的任務或資源行事曆實例。範例是必須在星期六工作的資源，但專案行事曆不包括涵蓋這些實例的工作時間。)';
sTemp=L_pjdefException_TEXT;
break;
			case 'pjdefExpanding':
			L_pjdefExpanding_TEXT='(展開：在大綱中，使直接附屬於摘要任務的摺疊任務顯示出來。您也可以展開及摺疊「資源使用狀況」檢視及「任務分派狀況」檢視中的大綱來隱藏或顯示資源分派。)';
sTemp=L_pjdefExpanding_TEXT;
break;
			case 'pjdefExpectedDuration':
			L_pjdefExpectedDuration_TEXT='(期望工期：對任務所預期之作用工作時間的總長度，也就是從任務的期望開始時間到期望結束時間的時間量。)';
sTemp=L_pjdefExpectedDuration_TEXT;
break;
			case 'pjdefExporting':
			L_pjdefExporting_TEXT='(匯出：將資料從 Project 轉移到其他程式，如 Excel。當匯出資料時，您可以選擇或建立一個對應，來指定 Project 中的欄位與輸出檔中的直欄之間的關係。)';
sTemp=L_pjdefExporting_TEXT;
break;
			case 'pjdefExportMap':
			L_pjdefExportMap_TEXT='(匯出/匯入對應：一組指示，確切規定要為 Project 匯出或匯入何種類型的資料、按照何種順序及其在目的格式中的欄位名稱。Project 會隨附預設的匯出/匯入對應。)';
sTemp=L_pjdefExportMap_TEXT;
break;
			case 'pjdefExternalDependency':
			L_pjdefExternalDependency_TEXT='(外部相依?係：任務的開始或完成日期取決於其他專案中的任務之關係。)';
sTemp=L_pjdefExternalDependency_TEXT;
break;
			case 'pjdefExternalPredecessors':
			L_pjdefExternalPredecessors_TEXT='(外部前置任務：位於其他專案之目前專案任務的前置任務，以模糊出現在任務清單中的任務表示。)';
sTemp=L_pjdefExternalPredecessors_TEXT;
break;
			case 'pjdefExternalSuccessors':
			L_pjdefExternalSuccessors_TEXT='(外部後置任務：位於其他專案之目前專案任務的後置任務，以模糊出現在任務清單中的任務表示。)';
sTemp=L_pjdefExternalSuccessors_TEXT;
break;
			case 'pjdefExternalTask':
			L_pjdefExternalTask_TEXT='(外部任務：表示其他專案中連結工作的任務，提供一種無需在專案之間切換即可檢閱連結工作屬性的簡單方法。外部任務僅可在來源專案中進行變更。)';
sTemp=L_pjdefExternalTask_TEXT;
break;
			case 'pjdefField':
			L_pjdefField_TEXT='(欄位：包含任務、資源或工作分派之特殊種類資訊之工作表、表單或圖表中的位置。例如，在工作表中，每欄都是一個欄位。在表單中，欄位是欄中命名的方塊或位置。)';
sTemp=L_pjdefField_TEXT;
break;
			case 'pjdefFileFormat':
			L_pjdefFileFormat_TEXT='(檔案格式：資訊儲存在檔案中的特殊方式。不同的程式使用不同的檔案格式及副檔名來表示格式。)';
sTemp=L_pjdefFileFormat_TEXT;
break;
			case 'pjdefFilename':
			L_pjdefFilename_TEXT='(檔名：檔案名稱。有效名稱可以包含最多 255 個字元，可以進行任意字母或數字的組合，並可以帶有副檔名 [一個句點加上一到三個字元]。請參閱 Windows「說明」，以取得其他容許的字元資訊。)';
sTemp=L_pjdefFilename_TEXT;
break;
			case 'pjdefFillHandle':
			L_pjdefFillHandle_TEXT='(填滿控點：工作表之選項角上的小方塊。當您指向填滿控點時，指標會變為黑色的十字形。若要將內容複製到相鄰的欄位，或重複所選取的資訊，請拖曳填滿控點。)';
sTemp=L_pjdefFillHandle_TEXT;
break;
			case 'pjdefFilter':
			L_pjdefFilter_TEXT='(篩選器：指定應在檢視中顯示或醒目提示哪個任務或資源。例如，當您套用「要徑」篩選器時，僅會顯示重要任務。)';
sTemp=L_pjdefFilter_TEXT;
break;
			case 'pjdefFinishDate':
			L_pjdefFinishDate_TEXT='(完成日期：排程任務完成的日期。此日期是以任務的開始日期、工期、行事曆、前置任務日期、任務相依性及限制式為基礎的。)';
sTemp=L_pjdefFinishDate_TEXT;
break;
			case 'pjdeffirewall':
			L_pjdeffirewall_TEXT='(防火牆：提供安全系統的硬體和軟體組合，通常是防止外部對內部網路的未經授權存取。)';
sTemp=L_pjdeffirewall_TEXT;
break;
			case 'pjdefFixedConsumptionRate':
			L_pjdefFixedConsumptionRate_TEXT='(固定材料消耗：要用於完成工作分派之資料資源的絕對數量。固定消耗率指出使用之資料的數量是常數，與工作工期或工作分派長度的變更無關。)';
sTemp=L_pjdefFixedConsumptionRate_TEXT;
break;
			case 'pjdefFixedCost':
			L_pjdefFixedCost_TEXT='(固定成本：不論任務工期或資源已執行的工作為何，均保持不變的任務設定成本。)';
sTemp=L_pjdefFixedCost_TEXT;
break;
			case 'pjdefFixedDate':
			L_pjdefFixedDate_TEXT='(固定日期：約束任務的日期，因為日期已輸入在「實際開始」或「實際完成」欄位，或是因為任務受到強制性限制式的限制。)';
sTemp=L_pjdefFixedDate_TEXT;
break;
			case 'pjdefFixeddurationResource':
			L_pjdefFixeddurationResource_TEXT='(固定單位的任務：其分派的單位 [或資源] 是固定值，且工作量或任務工期的任何變更均不會影響任務單位的任務。計算公式如下：工期 x 單位 = 工作。)';
sTemp=L_pjdefFixeddurationResource_TEXT;
break;
			case 'pjdefFixedDurationScheduling':
			L_pjdefFixedDurationScheduling_TEXT='(固定工期的排程：不論分派至任務的資源數量為何，任務工期均保持不變的排程方法。)';
sTemp=L_pjdefFixedDurationScheduling_TEXT;
break;
			case 'pjdefFixeddurationTask':
			L_pjdefFixeddurationTask_TEXT='(固定工期的任務：工期為固定值的任務，其中工時或指定單位 [即資源] 的任何變更都不會影響任務工期。計算公式如下：工期 x 單位 = 工作。)';
sTemp=L_pjdefFixeddurationTask_TEXT;
break;
			case 'pjdefFixedworkTask':
			L_pjdefFixedworkTask_TEXT='(固定工作的任務：工時為固定值的任務，其中對任務工期或指定單位 (或資源) 數量的變更不會影響任務的工時。計算公式如下：工期 x 單位 = 工作。)';
sTemp=L_pjdefFixedworkTask_TEXT;
break;
			case 'pjdeffloating_toolbars':
			L_pjdeffloating_toolbars_TEXT='(浮動工具列：未附加到程式視窗邊緣的工具列。您可以變更部份浮動工具列的形狀。)';
sTemp=L_pjdeffloating_toolbars_TEXT;
break;
			case 'pjdefFooter':
			L_pjdefFooter_TEXT='(頁尾：出現在頁面底端的文字。頁尾通常包含諸如頁碼、總頁數及日期之類的資訊。)';
sTemp=L_pjdefFooter_TEXT;
break;
			case 'pjdefForm':
			L_pjdefForm_TEXT='(表單：提供您有關個別任務或資源之詳細資訊的檢視類型。)';
sTemp=L_pjdefForm_TEXT;
break;
			case 'pjdefFreeSlack':
			L_pjdefFreeSlack_TEXT='(可用可寬延時間：不延遲後續任務的狀況下任務可延遲的時間量。對於沒有後續任務的任務，可用可寬延時間是在不延遲專案的結束日期的狀況下任務可延遲的時間量。)';
sTemp=L_pjdefFreeSlack_TEXT;
break;
			case 'pjdefgantt_bar_type':
			L_pjdefgantt_bar_type_TEXT='(甘特圖長條類型：代表特定資訊類型的甘特圖長條，例如任務上的摘要或分割任務或進度。一種類型可透過其外觀與其他類型相區分，並可包括相關的文字，如開始及結束日期。)';
sTemp=L_pjdefgantt_bar_type_TEXT;
break;
			case 'pjdefGanttBar':
			L_pjdefGanttBar_TEXT='(甘特圖長條：代表任務工期之「甘特圖」檢視的圖表部分上的圖形項目。)';
sTemp=L_pjdefGanttBar_TEXT;
break;
			case 'pjdefgeneral_alignment':
			L_pjdefgeneral_alignment_TEXT='(一般對齊：通常在左邊對齊文字，在右邊對齊數字的格式。當由右至左的功能啟用時，一般對齊會擴充為包括文字模式 [永遠可用] 及介面模式 [有時可用]。)';
sTemp=L_pjdefgeneral_alignment_TEXT;
break;
			case 'pjdefgeneric_resources':
			L_pjdefgeneric_resources_TEXT='(一般資源：用來指定特定任務所需技術的預留位置資源。)';
sTemp=L_pjdefgeneric_resources_TEXT;
break;
			case 'pjdefGhostTask':
			L_pjdefGhostTask_TEXT='(ghost 工作：亦稱為外部任務。在「甘特圖」檢視的圖表部份顯示為灰色的長條圖，在任務清單中顯示為一列灰色的任務資訊，表示相依於其他專案中的任務。)';
sTemp=L_pjdefGhostTask_TEXT;
break;
			case 'pjdefGIFImageFile':
			L_pjdefGIFImageFile_TEXT='(GIF 檔案：壓縮的圖形檔案格式，網頁瀏覽器將其顯示為內置圖形。GIF 廣泛用於在網際網路中傳送圖像。)';
sTemp=L_pjdefGIFImageFile_TEXT;
break;
			case 'pjdefGlobalFile':
			L_pjdefGlobalFile_TEXT='(通用檔案：包含可用於不同專案之資訊的 Project 檔案 [Global.mpt]。通用檔案中的資訊可能包括檢視、行事曆、表單、報表、表格、篩選器、工具列、功能表列、巨集和選項設定。)';
sTemp=L_pjdefGlobalFile_TEXT;
break;
			case 'pjdefGrade':
			L_pjdefGrade_TEXT='(等級：指定給材料資源的等級或類別，它表示功能上的使用而不是品質的層次。等級低的資源不一定就是品質低的資源。)';
sTemp=L_pjdefGrade_TEXT;
break;
			case 'pjdefGraph':
			L_pjdefGraph_TEXT='(圖形：以圖形方式表示排程資訊的檢視 [例如資源圖形]。)';
sTemp=L_pjdefGraph_TEXT;
break;
			case 'pjdefGraphicArea':
			L_pjdefGraphicArea_TEXT='(圖形區域：Project 中可以顯示來自另一個文件或程式之圖片資訊的區域，包括靜態圖片，以及內嵌和連結的物件。)';
sTemp=L_pjdefGraphicArea_TEXT;
break;
			case 'pjdefGridlines':
			L_pjdefGridlines_TEXT='(格線：出現在許多 Project 檢視中的水平及垂直的線。您可以變更格線的圖樣及色彩，並控制不同圖樣及色彩發生的間隔。)';
sTemp=L_pjdefGridlines_TEXT;
break;
			case 'pjdefGrouped':
			L_pjdefGrouped_TEXT='(群組：根據特定準則，例如，任務工期、優先順序、資源過度分派或完成日期，來結合或重新排列任務或資源；請不要將它與「群組」欄位 (資源欄位) 混淆。)';
sTemp=L_pjdefGrouped_TEXT;
break;
			case 'pjdefHardConstraint':
			L_pjdefHardConstraint_TEXT='(強制性限制式：強制性的限制式，因為它將任務與日期相連結。強制性限制式有：「必須於...完成」、「必須於...開始」、「不得早於...完成」、「不得晚於...完成」、「不得早於...開始」、「不得晚於...開始」。)';
sTemp=L_pjdefHardConstraint_TEXT;
break;
			case 'pjdefHeader':
			L_pjdefHeader_TEXT='(頁首：出現在頁面頂端的文字。頁首通常包含諸如專案或公司名稱及專案開始及結束日期的資訊。)';
sTemp=L_pjdefHeader_TEXT;
break;
			case 'pjdefHelpWindow':
			L_pjdefHelpWindow_TEXT='(說明視窗：Project「說明」顯示的區域。「說明」視窗會一直保持開啟到您關閉它為止。)';
sTemp=L_pjdefHelpWindow_TEXT;
break;
			case 'pjdefHighlightingFilter':
			L_pjdefHighlightingFilter_TEXT='(醒目提示型篩選器：顯示所有任務或資源並顯目提示符合篩選器準則之任務或資源的篩選器。)';
sTemp=L_pjdefHighlightingFilter_TEXT;
break;
			case 'pjdefHTML':
			L_pjdefHTML_TEXT='(HTML：Hypertext Markup Language (超文字標記語言) 的首字母縮略字，它是一種格式化慣例，用以在全球資訊網上呈現文字和圖形。)';
sTemp=L_pjdefHTML_TEXT;
break;
			case 'pjdefHyperlink':
			L_pjdefHyperlink_TEXT='(超連結：包含到其他檔案或檔案中位置之連結的文字部份，由色彩區分。當您按一下超連結時，網頁瀏覽器將搜尋並顯示與超連結相關的文件。)';
sTemp=L_pjdefHyperlink_TEXT;
break;
			case 'pjdefhyperlink_display_name':
			L_pjdefhyperlink_display_name_TEXT='(超連結顯示名稱：描述性的用語，不是 URL 位址，它顯示在線上文件中以便更能夠描述超連結的目的地。例如，http://www.microsoft.com 的適當超連結顯示名稱可能是 Microsoft。)';
sTemp=L_pjdefhyperlink_display_name_TEXT;
break;
			case 'pjdefHyperlinkAddress':
			L_pjdefHyperlinkAddress_TEXT='(超連結位址：超連結的目標檔案的位址，亦即 URL 位址或 UNC 位址。當您按一下超連結時，定義在超連結位址中的目標檔案將在網頁瀏覽器或程式中開啟。)';
sTemp=L_pjdefHyperlinkAddress_TEXT;
break;
			case 'pjdefHyperlinkRepresentation':
			L_pjdefHyperlinkRepresentation_TEXT='(超連結表示：可在「超連結」欄位中鍵入以更能夠描述超連結之目的地的描述性用語。如果按一下超連結表示，其即會跳至在「超連結位址」欄位中定義的目的檔案。)';
sTemp=L_pjdefHyperlinkRepresentation_TEXT;
break;
			case 'pjdefHyperlinkSubAddress':
			L_pjdefHyperlinkSubAddress_TEXT='(超連結子位址：位在「超連結」表格中的欄位，在這裡您可以指定目標檔案中的確切位置。這個位置可以是 Project 檢視和識別碼、Word 書籤、Excel 儲存格定義等等。)';
sTemp=L_pjdefHyperlinkSubAddress_TEXT;
break;
			case 'pjdefID_numbers':
			L_pjdefID_numbers_TEXT='(識別碼：在您將每個任務、資源或工作分派加入到專案時，Project 對其分派的號碼。)';
sTemp=L_pjdefID_numbers_TEXT;
break;
			case 'pjdefIME':
			L_pjdefIME_TEXT='(IME：一種將亞洲文字 [繁體中文、簡體中文、日文或韓文] 藉由將按鍵轉換成複合的亞洲字元來輸入到程式中的程式。IME [輸入法編輯器] 被視為鍵盤配置的替代類型。)';
sTemp=L_pjdefIME_TEXT;
break;
			case 'pjdefImporting':
			L_pjdefImporting_TEXT='(匯入：將來源程式 (如 Excel) 中的資料轉送至 Project。當您匯入資料時，可選擇定義如何將來源程式中的資料對應到 Project 中之資訊的對應。)';
sTemp=L_pjdefImporting_TEXT;
break;
			case 'pjdefIndicatorField':
			L_pjdefIndicatorField_TEXT='(標記欄位：包含圖形標記並提供有關工作分派、資源或任務狀態資訊的欄位。例如，核取符號標記顯示任務已完成。)';
sTemp=L_pjdefIndicatorField_TEXT;
break;
			case 'pjdefIndicatorFlag':
			L_pjdefIndicatorFlag_TEXT='(標記：代表在「標記」欄位中顯示之任務或資源資訊的小圖示。「標記」欄位位於「識別碼」欄位的右邊，且會出現在若干表格中。)';
sTemp=L_pjdefIndicatorFlag_TEXT;
break;
			case 'pjdefInsertedProject':
			L_pjdefInsertedProject_TEXT='(插入專案：合併至其他專案檔案 [主專案] 的專案檔案。也稱為子專案。插入專案會以主專案中的摘要任務出現。)';
sTemp=L_pjdefInsertedProject_TEXT;
break;
			case 'pjdefIntegerField':
			L_pjdefIntegerField_TEXT='(整數欄位：內容為整數的欄位類型。範例包括「識別碼」和「專一識別碼」欄位。)';
sTemp=L_pjdefIntegerField_TEXT;
break;
			case 'pjdefIntegerListField':
			L_pjdefIntegerListField_TEXT='(整數清單欄位：內容為由清單分隔字元 (一般是逗號) 分隔的整數清單的欄位類型。範例包括「前置任務」和「後續任務」欄位。)';
sTemp=L_pjdefIntegerListField_TEXT;
break;
			case 'pjdefInteractiveFilter':
			L_pjdefInteractiveFilter_TEXT='(互動式篩選器：每次當您套用篩選器時，會顯示對話方塊以輸入篩選準則的篩選器。例如，「使用資源」篩選器會顯示一個您可在其中輸入資源名稱的對話方塊。)';
sTemp=L_pjdefInteractiveFilter_TEXT;
break;
			case 'pjdefInterimPlan':
			L_pjdefInterimPlan_TEXT='(中期計劃：一組在專案之特定階段可儲存的任務開始及完成日期。您可以將中期計劃與比較基準計劃或目前計劃相比較，以監視專案的進度或落後。最多可以儲存 10 個中期計劃。)';
sTemp=L_pjdefInterimPlan_TEXT;
break;
			case 'pjdefInternet':
			L_pjdefInternet_TEXT='(網際網路：由數以千計的小型電腦網路，以及數以百萬計的商業電腦、教育電腦、政府電腦和個人電腦所組成的全球網路。也稱為「全球資訊網」[WWW]。)';
sTemp=L_pjdefInternet_TEXT;
break;
			case 'pjdefInternetServiceProvider':
			L_pjdefInternetServiceProvider_TEXT='(ISP：提供其他公司、組織或個人在網際網路上的存取權或存在的公司。)';
sTemp=L_pjdefInternetServiceProvider_TEXT;
break;
			case 'pjdefIntranet':
			L_pjdefIntranet_TEXT='(內部網路：在組織中提供與網際網路所提供之服務相類似服務的所有網路。組織的內部網路不一定會連接至網際網路；它的資訊僅能在公司內散發。)';
sTemp=L_pjdefIntranet_TEXT;
break;
			case 'pjdefItem':
			L_pjdefItem_TEXT='(項目：保留 Outlook 中之資訊的基本元素 [類似於其他程式中的檔案]。項目包括電子郵件、約會、連絡、任務、日誌項目及附註。)';
sTemp=L_pjdefItem_TEXT;
break;
			case 'pjdefKashidas':
			L_pjdefKashidas_TEXT='(Kashidas：用於延伸兩個阿拉伯文字元之間的連字符的特殊字元。可使用它來藉由拉長顯示文字而不是增加字之間的間距來改善調整後文字的外觀。)';
sTemp=L_pjdefKashidas_TEXT;
break;
			case 'pjdefkeyword':
			L_pjdefkeyword_TEXT='(關鍵字：識別專案檔案中重要資訊的文字或詞。您可以使用關鍵字來編製您在 Project 中建立的檔案的索引。)';
sTemp=L_pjdefkeyword_TEXT;
break;
			case 'pjdefLagTime':
			L_pjdefLagTime_TEXT='(延遲時間：具有相依性之任務之間的延遲。例如，如果您需要在一個任務的完成時間與另一個任務的開始時間之間延遲兩天，可以建立完成-開始相依性，並指定兩天延遲時間 [具有正值]。)';
sTemp=L_pjdefLagTime_TEXT;
break;
			case 'pjdefLateFinDate':
			L_pjdefLateFinDate_TEXT='(最晚完成日期：任務在不延遲專案完成的狀況下可能完成的最晚日期。這要根據任務的最晚開始日期及前置任務與後續任務的最晚開始與最晚完成日期，以及其他限制式而定。)';
sTemp=L_pjdefLateFinDate_TEXT;
break;
			case 'pjdefLeadTime':
			L_pjdefLeadTime_TEXT='(前置時間：具有相依性之任務之間的重疊比例。例如，如果任務可以在其前置任務完成了一半時開始，那麼您可以指定完成-開始相依性，其前置時間為其後續任務的 50% [具有負的延隔時間]。)';
sTemp=L_pjdefLeadTime_TEXT;
break;
			case 'pjdeflefttoright':
			L_pjdeflefttoright_TEXT='(由左至右：鍵盤設定、文件檢視、使用者介面物件及顯示文字顯示的方向。英文及大多數歐洲語言都是從左至右的語言。)';
sTemp=L_pjdeflefttoright_TEXT;
break;
			case 'pjdefLegend':
			L_pjdefLegend_TEXT='(圖例：列印在圖表或圖形上的符號說明清單。)';
sTemp=L_pjdefLegend_TEXT;
break;
			case 'pjdefLessonsLearned':
			L_pjdefLessonsLearned_TEXT='(經驗傳承：檢閱最佳練習、專案見識及客戶資訊。當專案小組解散，新的專案開始時，檢閱經驗傳承可讓您記錄透過專案所蒐集及產生的資訊。)';
sTemp=L_pjdefLessonsLearned_TEXT;
break;
			case 'pjdefLeveling':
			L_pjdefLeveling_TEXT='(撫平：藉由延遲或分割特定任務來解決資源衝突或過度分派問題。當 Project 撫平資源時，會均分並重新排程其所選取的工作分派。)';
sTemp=L_pjdefLeveling_TEXT;
break;
			case 'pjdefLevelingDelay':
			L_pjdefLevelingDelay_TEXT='(資源撫平的延遲：工作分派或任務因為資源調平或手動輸入資源撫平的延遲而從原始排程的開始日期延遲的時間量。)';
sTemp=L_pjdefLevelingDelay_TEXT;
break;
			case 'pjdefLinkedProject':
			L_pjdefLinkedProject_TEXT='(連結專案：包含到其他專案檔案中的任務及來自其他專案檔案中任務之任務相依性的專案。其他專案中任務的連結由預留位置或 ghost 工作來表示。)';
sTemp=L_pjdefLinkedProject_TEXT;
break;
			case 'pjdefLinking':
			L_pjdefLinking_TEXT='(連結：在專案中兩個任務之間建立相依性。連結工作定義開始與完成日期之間的相依性。在 OLE 中，要在程式之間建立連接，以便當一個文件中的資料變更時，另一個會更新。)';
sTemp=L_pjdefLinking_TEXT;
break;
			case 'pjdefLinkLine':
			L_pjdefLinkLine_TEXT='(連結線：在「甘特圖」或「網狀圖」上，出現在兩個任務間表示任務相依性的直線。)';
sTemp=L_pjdefLinkLine_TEXT;
break;
			case 'pjdefLinkType':
			L_pjdefLinkType_TEXT='(連結類型：任務相依性類型。相依性類型有四種：完成-開始 [FS]、完成-完成 [FF]、開始-開始 [SS]，以及開始-完成 [SF]。)';
sTemp=L_pjdefLinkType_TEXT;
break;
			case 'pjdefListSeparatorCharacter':
			L_pjdefListSeparatorCharacter_TEXT='(清單分隔字元：分隔清單中的項目的字元，通常是逗號或分號。)';
sTemp=L_pjdefListSeparatorCharacter_TEXT;
break;
			case 'pjdefLogical':
			L_pjdefLogical_TEXT='(邏輯：用來說明處理雙向文字時的插入點移動及文字選取。在雙向文字中的移動是根據所遇到語言的方向而進行的。)';
sTemp=L_pjdefLogical_TEXT;
break;
			case 'pjdefMacro':
			L_pjdefMacro_TEXT='(巨集：可用來自動化工作的動作或一組動作。巨集以 Visual Basic for Applications 程式設計語言記錄。)';
sTemp=L_pjdefMacro_TEXT;
break;
			case 'pjdefmacro_project':
			L_pjdefmacro_project_TEXT='(巨集專案：組成巨集的元件 (包括表單、程式碼和類別模組) 集合。在 Visual Basic for Applications 中建立的巨集專案可包含在增益集和 Project 中。)';
sTemp=L_pjdefmacro_project_TEXT;
break;
			case 'pjdefMap':
			L_pjdefMap_TEXT='(對應：用於當匯入或匯出資料時在程式之間傳送資訊的格式。對應會幫助您確定資訊是否放到了目的檔案的正確欄位中。)';
sTemp=L_pjdefMap_TEXT;
break;
			case 'pjdefMAPI':
			L_pjdefMAPI_TEXT='(MAPI：Messaging Application Programming Interface 的首字母縮略字，它是 Microsoft 所提出和支援之存取電子訊息的標準程式設計介面。)';
sTemp=L_pjdefMAPI_TEXT;
break;
			case 'pjdefMasterProject':
			L_pjdefMasterProject_TEXT='(主專案：包含其他專案 [稱為插入專案或子專案] 的專案。也稱為合併專案。)';
sTemp=L_pjdefMasterProject_TEXT;
break;
			case 'pjdefmaterial_label':
			L_pjdefmaterial_label_TEXT='(材料標籤：材料資源的度量單位，例如噸、立方碼或木板英呎。)';
sTemp=L_pjdefmaterial_label_TEXT;
break;
			case 'pjdefmaterial_resources':
			L_pjdefmaterial_resources_TEXT='(材料資源：可消耗的材料或零件，如水泥、木材或釘子。)';
sTemp=L_pjdefmaterial_resources_TEXT;
break;
			case 'pjdefMaterialresource':
			L_pjdefMaterialresource_TEXT='(材料資源：用來完成專案任務的物資或其他消耗性項目。)';
sTemp=L_pjdefMaterialresource_TEXT;
break;
			case 'pjdefMaxUnits':
			L_pjdefMaxUnits_TEXT='(最大單位：資源可排程給所有任務之單位的最大百分比或數量。最大單位值指出可供工作使用之資源的最高容量；預設值是百分之百。)';
sTemp=L_pjdefMaxUnits_TEXT;
break;
			case 'pjdefmenu':
			L_pjdefmenu_TEXT='(功能表：在您按一下功能表列或其他工具列上的功能表名稱時會出現的指令清單。)';
sTemp=L_pjdefmenu_TEXT;
break;
			case 'pjdefmenu_bar':
			L_pjdefmenu_bar_TEXT='(功能表列：標題列下方的水平列，它包含功能表名稱。功能表列可以是內建功能表列或自訂功能表列。)';
sTemp=L_pjdefmenu_bar_TEXT;
break;
			case 'pjdefMessageRule':
			L_pjdefMessageRule_TEXT='(郵件規則：用於使用 Project Server 工作群組訊息中的資訊來更新專案檔案的一組準則。例如，專案管理員可以指定自動接受來自所有工作群組成員的更新。)';
sTemp=L_pjdefMessageRule_TEXT;
break;
			case 'pjdefMethod':
			L_pjdefMethod_TEXT='(方法：物件可在其自身上執行的動作。如需套用至 Project 中特殊物件的方法清單，請搜尋「Visual Basic 說明」主題，以取得物件的名稱，然後選擇 [方法]。)';
sTemp=L_pjdefMethod_TEXT;
break;
			case 'pjdefMicrosoft_Active_Accessibility_MSAA':
			L_pjdefMicrosoft_Active_Accessibility_MSAA_TEXT='(MSAA：一種可以使用協助工具輔助 (例如螢幕助讀程式) 來改善程式和作業系統運作方式的技術。)';
sTemp=L_pjdefMicrosoft_Active_Accessibility_MSAA_TEXT;
break;
			case 'pjdefMicrosoft_Project_Server':
			L_pjdefMicrosoft_Project_Server_TEXT='(Project Server：是 Project 的隨付產品，可在工作群組成員、專案經理和其他股東間進行共同作業規劃和狀態報告，方法是在網站上使用和交換專案資訊。)';
sTemp=L_pjdefMicrosoft_Project_Server_TEXT;
break;
			case 'pjdefMicrosoft_Project_Web_Access':
			L_pjdefMicrosoft_Project_Web_Access_TEXT='(Project Web Access：用來存取 Project Server 中之資訊的網頁式使用者介面。)';
sTemp=L_pjdefMicrosoft_Project_Web_Access_TEXT;
break;
			case 'pjdefMilestone':
			L_pjdefMilestone_TEXT='(里程碑：標示專案中的主要事件並用於監視專案進度的參考點。具有零工期的所有任務都會自動顯示為里程碑；您亦可以將具有任何工期的任何其他任務標示為里程碑。)';
sTemp=L_pjdefMilestone_TEXT;
break;
			case 'pjdefModule':
			L_pjdefModule_TEXT='(模組：儲存巨集的位置。儲存在 Global.mpt 檔案模組中的巨集可從任何專案取得，並可用來組織相關的模組。)';
sTemp=L_pjdefModule_TEXT;
break;
			case 'pjdefMPD':
			L_pjdefMPD_TEXT='(MPD 檔案格式：Microsoft Project Database [MPD] 檔案格式是記錄型 Access 相容的檔案格式，可用於儲存整個專案。以這個格式儲存之檔案的附檔名皆為 .mpd。)';
sTemp=L_pjdefMPD_TEXT;
break;
			case 'pjdefMPW':
			L_pjdefMPW_TEXT='(Project 工作區檔案格式：與工作區檔案關聯的檔案格式，以 .mpw 的副檔名為特點。)';
sTemp=L_pjdefMPW_TEXT;
break;
			case 'pjdefMPX':
			L_pjdefMPX_TEXT='(MPX 檔案格式：Microsoft Project Exchange [MPX] 檔案格式是用來將資料匯入至 Project 之以記錄為基礎的 ASCII 文字格式。)';
sTemp=L_pjdefMPX_TEXT;
break;
			case 'pjdefMSProjectDatabase':
			L_pjdefMSProjectDatabase_TEXT='(Microsoft Project 資料庫：用於將所有專案資訊儲存到中心位置的檔案格式 [.mpd]，該格式用於跨專案的分析與報表，且是以安全性為目的的。它會取代舊的 MPX 檔案格式。)';
sTemp=L_pjdefMSProjectDatabase_TEXT;
break;
			case 'pjdefMSWindowsUserAccount':
			L_pjdefMSWindowsUserAccount_TEXT='(Windows 使用者帳號：將使用者在作業系統定義的所有資訊，包括使用者名稱和任何需要的密碼、群組中的成員資格以及與使用者關聯的權利和權限。)';
sTemp=L_pjdefMSWindowsUserAccount_TEXT;
break;
			case 'pjdefMultipleCriticalPaths':
			L_pjdefMultipleCriticalPaths_TEXT='(多重要徑：若要如期完成專案，必須如期完成的一系列任務。識別及追蹤多重要徑，使其更有效地管理可能會影響專案完成日期的狀況。)';
sTemp=L_pjdefMultipleCriticalPaths_TEXT;
break;
			case 'pjdefMultipleProjects':
			L_pjdefMultipleProjects_TEXT='(多重專案：可能或不可能連結或合併的數個專案計劃。如果您同時在數個專案上工作，可以比較所有專案中重要路徑、資源共用或優先順序的相關資訊。)';
sTemp=L_pjdefMultipleProjects_TEXT;
break;
			case 'pjdefnetwork_place':
			L_pjdefnetwork_place_TEXT='(網路位置：網路檔案伺服器、網頁伺服器或 Exchange 2000 伺服器上的資料夾。您可以建立到「網路位置」的捷徑，以便在那裡使用檔案。部份網路位置 (如文件庫) 具有不適用於本機資料夾的功能。)';
sTemp=L_pjdefnetwork_place_TEXT;
break;
			case 'pjdefNetworkChart':
			L_pjdefNetworkChart_TEXT='(網狀圖：顯示專案任務間之相依性的圖表。任務會以方塊或節點表示，而任務相依性則以連接方塊的直線表示。在 Project 中的「網狀圖」檢視即是一種網狀圖。)';
sTemp=L_pjdefNetworkChart_TEXT;
break;
			case 'pjdefNetworkGateway':
			L_pjdefNetworkGateway_TEXT='(網路閘道：透過它可連接兩個不同網路的機制。網路閘道可約束連線並確保它們得到了有效的使用。)';
sTemp=L_pjdefNetworkGateway_TEXT;
break;
			case 'pjdefNonadjacentSelection':
			L_pjdefNonadjacentSelection_TEXT='(不相鄰的選擇：選取非循序排列的欄位。例如，在任務工作表上，您可以選取任務 14、7 及 10。當您選取欄位時，可藉由按住 CTRL 鍵選取不相鄰的欄位。)';
sTemp=L_pjdefNonadjacentSelection_TEXT;
break;
			case 'pjdefNoncriticalTask':
			L_pjdefNoncriticalTask_TEXT='(非要徑任務：可寬延的任務，它可在結束日期之後完成，不會延遲專案的完成日期。可寬延時間是任務在不影響其他任務日期或專案完成日期的狀況下，可落後的時間量。)';
sTemp=L_pjdefNoncriticalTask_TEXT;
break;
			case 'pjdefNonworkingTime':
			L_pjdefNonworkingTime_TEXT='(非工作時間：在資源或專案行事曆中所指定的小時或天數，在這些時間中，Project 不能因為工作未完成而排程任務。舉例來說，非工作時間可能包括午休時間、週末和假日等。)';
sTemp=L_pjdefNonworkingTime_TEXT;
break;
			case 'pjdefNotes':
			L_pjdefNotes_TEXT='(附註：您可以附加至任務、資源或工作分派的說明文字。)';
sTemp=L_pjdefNotes_TEXT;
break;
			case 'pjdefNull':
			L_pjdefNull_TEXT='(Null：在 Visual Basic for Applications 中，指出變數包含無效資料的值。Null 是將 Null 明確指定給變數的結果，或是在包含 Null 的運算式之間進行任何作業的結果。)';
sTemp=L_pjdefNull_TEXT;
break;
			case 'pjdefNullField':
			L_pjdefNullField_TEXT='(Null 欄位：不顯示實際資訊的欄位，但設定欄位，顯示檢視中其他地方的資訊，尤指「任務分派狀況」或「資源使用狀況」中的資訊。)';
sTemp=L_pjdefNullField_TEXT;
break;
			case 'pjdefNumberField':
			L_pjdefNumberField_TEXT='(數字欄位：其內容是數字的欄位類型。此欄位允許的最大值為 999,999,999,999.99。)';
sTemp=L_pjdefNumberField_TEXT;
break;
			case 'pjdefObject':
			L_pjdefObject_TEXT='(物件：在 OLE 中，不同文件及不同程式之間的共用資訊，如圖表。用於建立物件的程式及物件類型決定可用於編輯物件的程式，以及如何編輯物件。)';
sTemp=L_pjdefObject_TEXT;
break;
			case 'pjdefObjective':
			L_pjdefObjective_TEXT='(目標：將專案視為成功所必須符合之可測量的準則。目標必須至少包括成本、排程及品質測量。不可測量的目標會增加專案不符合準則的風險。)';
sTemp=L_pjdefObjective_TEXT;
break;
			case 'pjdefObjectsBox':
			L_pjdefObjectsBox_TEXT='(物件方塊：您可以在包含連結或內嵌物件的表單上顯示的區域。)';
sTemp=L_pjdefObjectsBox_TEXT;
break;
			case 'pjdefODBC':
			L_pjdefODBC_TEXT='(ODBC：各廠商皆適用的介面，基於 Microsoft 所宣告的 SQL Access Group 規格。開發人員可使用 ODBC 來存取關聯性及非關聯性資料庫之異質性環境中的資料。)';
sTemp=L_pjdefODBC_TEXT;
break;
			case 'pjdefOfficeShortcutBar':
			L_pjdefOfficeShortcutBar_TEXT='(Office 快捷列：如果您使用 Office，則可使用「Office 快捷列」，以便點按一下即可存取您經常需要使用的資源。如需「Office 快捷列」的相關資訊，請參閱 Office「說明」。)';
sTemp=L_pjdefOfficeShortcutBar_TEXT;
break;
			case 'pjdefOLE':
			L_pjdefOLE_TEXT='(OLE：可用來共用程式之間資訊的程式整合技術。Project 及所有 Office 程式都支援 OLE，因此您可以透過連結及內嵌物件共用資訊。)';
sTemp=L_pjdefOLE_TEXT;
break;
			case 'pjdefOLEServer':
			L_pjdefOLEServer_TEXT='(OLE 伺服器：產生用於其他 [容器] 程式或文件之 OLE 物件的程式或文件。)';
sTemp=L_pjdefOLEServer_TEXT;
break;
			case 'pjdefOperator':
			L_pjdefOperator_TEXT='(運算子：在篩選器中指定兩個以上準則間之邏輯關聯的文字 [AND、OR]。在公式中，運算子是指定要在運算式中執行之計算類型的符號。)';
sTemp=L_pjdefOperator_TEXT;
break;
			case 'pjdefOptimisticDuration':
			L_pjdefOptimisticDuration_TEXT='(樂觀工期：對任務所預期之作用工作時間的總長度的最佳可能狀況，也就是任務的樂觀開始時間到樂觀完成時間的時間量。)';
sTemp=L_pjdefOptimisticDuration_TEXT;
break;
			case 'pjdefOrganizer':
			L_pjdefOrganizer_TEXT='(組合管理：您可以在其中將自訂檢視、表格、篩選器、群組定義、行事曆、報表、表單、工具列、對應、欄位屬性和 VBA 模組複製到其他文件或其他使用者的索引式對話方塊。)';
sTemp=L_pjdefOrganizer_TEXT;
break;
			case 'pjdefOutline':
			L_pjdefOutline_TEXT='(大綱：顯示某些任務如何符合較廣泛之群組的專案階層架構。在 Project 中，子任務會縮排在摘要任務下。)';
sTemp=L_pjdefOutline_TEXT;
break;
			case 'pjdefOutlineCode':
			L_pjdefOutlineCode_TEXT='(大綱代碼：為任務或資源定義的自訂標籤，其可讓您顯示不同於 WBS 代碼或大綱號碼之專案中任務的階層。專案中最多可建立 10 組自訂大綱代碼。)';
sTemp=L_pjdefOutlineCode_TEXT;
break;
			case 'pjdefOutlineLevel':
			L_pjdefOutlineLevel_TEXT='(大綱層級：任務從大綱的最上層縮進的階層數。在 Project 中，最多可將任務縮進 65,000 個層級。)';
sTemp=L_pjdefOutlineLevel_TEXT;
break;
			case 'pjdefOutlineNumber':
			L_pjdefOutlineNumber_TEXT='(大綱編號：指出大綱中任務之確切位置的數字。例如，具有大綱編號 7.2 的任務指出它是位在第七頂層摘要任務之下的第二個子任務。)';
sTemp=L_pjdefOutlineNumber_TEXT;
break;
			case 'pjdefOutlookBar':
			L_pjdefOutlookBar_TEXT='(Outlook 功能區：程式視窗左側的欄，其包括群組，如<b>其他</b>或<b>其他捷徑</b>，且該捷徑在每個群組中都可用。按一下捷徑可快速地存取資料夾。)';
sTemp=L_pjdefOutlookBar_TEXT;
break;
			case 'pjdefOverallocation':
			L_pjdefOverallocation_TEXT='(過度分派：導致分派給資源的任務數目多過資源可以在可用工作時間內完成的資源數目。)';
sTemp=L_pjdefOverallocation_TEXT;
break;
			case 'pjdefOvertime':
			L_pjdefOvertime_TEXT='(加班：超過指定資源的正常作業時間，並按照資源的加班工資率付費之排程工作分派的工時量。加班工時指出指定為加班工時之工作分派的工時數量。)';
sTemp=L_pjdefOvertime_TEXT;
break;
			case 'pjdefPan':
			L_pjdefPan_TEXT='(取景位置調整：使用 IntelliMouse 指標裝置在專案中連續捲動。)';
sTemp=L_pjdefPan_TEXT;
break;
			case 'pjdefPane':
			L_pjdefPane_TEXT='(窗格：包含檢視的視窗部分。組合檢視包括兩個窗格，例如，窗格頂端的「甘特圖」檢視及窗格底端的「任務表單」檢視。)';
sTemp=L_pjdefPane_TEXT;
break;
			case 'pjdefParametricModelingMethod':
			L_pjdefParametricModelingMethod_TEXT='(參數模型方法：在數學模型中使用專案特性 [參數] 來預測專案成本的評估方法。)';
sTemp=L_pjdefParametricModelingMethod_TEXT;
break;
			case 'pjdefParent':
			L_pjdefParent_TEXT='(父系：與所包含之物件或集合位置最近的物件或集合。例如，在 Project 中，<b>Application</b> 物件是 <b>ActiveSelection</b> 物件的父系。)';
sTemp=L_pjdefParent_TEXT;
break;
			case 'pjdefPassword':
			L_pjdefPassword_TEXT='(密碼：用於授權存取專案之字元的組合。在 Project 中，密碼可有 1 到 17 個字元。使用大寫字、小寫字、數字及符號相結合的強性密碼。)';
sTemp=L_pjdefPassword_TEXT;
break;
			case 'pjdefPathName':
			L_pjdefPathName_TEXT='(路徑：所有從根目錄到檔案現行資料夾的資料夾名稱的順序，在 Windows 中，是以反斜線字元 [\] 區隔。)';
sTemp=L_pjdefPathName_TEXT;
break;
			case 'pjdefPathStatement':
			L_pjdefPathStatement_TEXT='(路徑陳述式：由磁碟機代號及目錄所表示的檔案位置。例如，C:\Windows\Favorites 是 Project 儲存您已儲存之最喜歡的網站位置的路徑陳述式。)';
sTemp=L_pjdefPathStatement_TEXT;
break;
			case 'pjdefPeakUnits':
			L_pjdefPeakUnits_TEXT='(最大資源量：在給定的時間期間內將資源排程給所有指定任務的最高等級。最大資源量是以百分比、單位數或消耗率來表示。)';
sTemp=L_pjdefPeakUnits_TEXT;
break;
			case 'pjdefPercentComplete':
			L_pjdefPercentComplete_TEXT='(完成百分比：用來輸入或顯示完成之任務量的欄位。此值表示為已完成之任務工期的百分比。)';
sTemp=L_pjdefPercentComplete_TEXT;
break;
			case 'pjdefPercentField':
			L_pjdefPercentField_TEXT='(百分比欄位：其內容是百分比的欄位類型。範例包括「完成百分比」和「工時完成百分比」欄位。)';
sTemp=L_pjdefPercentField_TEXT;
break;
			case 'pjdefPercentNumberField':
			L_pjdefPercentNumberField_TEXT='(百分比/數字欄位：其內容是以百分比或小數表示之值的欄位類型。例如，在「工作分派單位」欄位中，一個全職分派的資源可以表示為 100% 或 1.00。)';
sTemp=L_pjdefPercentNumberField_TEXT;
break;
			case 'pjdefPercentWorkComplete':
			L_pjdefPercentWorkComplete_TEXT='(工時完成百分比：將任務、資源或工作分派的目前狀態表示為已完成之工時百分比的百分比值。)';
sTemp=L_pjdefPercentWorkComplete_TEXT;
break;
			case 'pjdefPERTAnalysis':
			L_pjdefPERTAnalysis_TEXT='(PERT 分析：PERT [程式、評估和檢閱技術] 分析是一種過程，您可以藉由這種過程，依據三個案例來評估可能的結果：最佳案例、預期案例，以及最糟案例。)';
sTemp=L_pjdefPERTAnalysis_TEXT;
break;
			case 'pjdefPerUseCost':
			L_pjdefPerUseCost_TEXT='(每次使用成本：使用資源的固定費用，它可取代或附加至變數。對於工作資源，每次使用成本會在每次使用資源時發生。對於材料資源，每次使用成本僅發生一次。)';
sTemp=L_pjdefPerUseCost_TEXT;
break;
			case 'pjdefPessimisticDuration':
			L_pjdefPessimisticDuration_TEXT='(悲觀工期：對任務所預期之作用工作時間總長度的最差時程可能性，也就是從任務的悲觀開始時間到悲觀完成時間的時間量。)';
sTemp=L_pjdefPessimisticDuration_TEXT;
break;
			case 'pjdefPhase':
			L_pjdefPhase_TEXT='(階段：完成專案中主要步驟的一組相關任務。)';
sTemp=L_pjdefPhase_TEXT;
break;
			case 'pjdefphysical_percent_complete':
			L_pjdefphysical_percent_complete_TEXT='(實體完成百分比：您在每個任務中輸入之「完成百分比 [%]」或「工作完成百分比 [%]」的替代值。當透過諸如差異分析或盈餘分析這樣的功能表分析專案效能時，這可能會有用。)';
sTemp=L_pjdefphysical_percent_complete_TEXT;
break;
			case 'pjdefPivotChart':
			L_pjdefPivotChart_TEXT='(樞紐分析圖：提供樞紐分析表及互動式跨表格的報表中之資料的圖形化表示，其會摘要及分析資料。使用「公事包分析器」來選取要在樞紐分析圖中顯示的資料。)';
sTemp=L_pjdefPivotChart_TEXT;
break;
			case 'pjdefPivotTable':
			L_pjdefPivotTable_TEXT='(樞紐分析表：彙總或交叉表格製作大量資料的互動式表格。您可以旋轉其列和欄來查看來源資料的不同摘要，藉由顯示不同頁面來篩選資料，或顯示詳細資訊。)';
sTemp=L_pjdefPivotTable_TEXT;
break;
			case 'pjdefPixel':
			L_pjdefPixel_TEXT='(像素：組成電腦圖像的許多光點 [或圖片元素] 之一。每個像素由點陣圖格線中的單一方塊來表示。)';
sTemp=L_pjdefPixel_TEXT;
break;
			case 'pjdefPlaceholderRes':
			L_pjdefPlaceholderRes_TEXT='(預留位置資源：加入至專案計劃以協助預估所需資源的類型和數目的暫時資源名稱。透過預留位置資源名稱，您可以開發專案提議及取得核准。)';
sTemp=L_pjdefPlaceholderRes_TEXT;
break;
			case 'pjdefPlacesBar':
			L_pjdefPlacesBar_TEXT='(放置列：在某些對話方塊 [例如 [開啟] 或 [另存新檔]] 左邊，包含「歷程記錄」、「我的文件」、「桌面」、「我的最愛」和「網站」資料夾之捷徑的列。按一下捷徑可顯示資料夾的內容。)';
sTemp=L_pjdefPlacesBar_TEXT;
break;
			case 'pjdefPlan':
			L_pjdefPlan_TEXT='(計劃：排程任務開始及完成日期以及資源與成本資料。比較基準計劃是您儲存及使用來監視進度的原始計劃。過程中的計劃是在專案期間所儲存的一組日期，以便與其他過程中計劃進行比較。)';
sTemp=L_pjdefPlan_TEXT;
break;
			case 'pjdefPlannedCosts':
			L_pjdefPlannedCosts_TEXT='(規劃的成本：任務、資源、工作分派和整個專案的最新成本，Project 會將它以成本或總成本顯示在「成本」欄位中。)';
sTemp=L_pjdefPlannedCosts_TEXT;
break;
			case 'pjdefPoints':
			L_pjdefPoints_TEXT='(點：起始於排字業的測量單位。一點是一英吋的 1/72，或大約一公分的 1/28。字型的高度通常是以點來表示。)';
sTemp=L_pjdefPoints_TEXT;
break;
			case 'pjdefPredecessor':
			L_pjdefPredecessor_TEXT='(前置任務：必須在另一個任務開始或完成之前開始或完成的任務。)';
sTemp=L_pjdefPredecessor_TEXT;
break;
			case 'pjdefPriority':
			L_pjdefPriority_TEXT='(優先順序：任務重要性及撫平 [也就是藉由延遲或落後某些任務來解決資源衝突或過度分派的問題] 可用性的指示。優先順序最低的任務會先被延遲或分割。)';
sTemp=L_pjdefPriority_TEXT;
break;
			case 'pjdefprivileges':
			L_pjdefprivileges_TEXT='(權限：這些權限指定在專案中使用者可以看到或修改的項目。例如，只有具有管理權限的人才能修改組織內所有專案經理要使用的大綱代碼。)';
sTemp=L_pjdefprivileges_TEXT;
break;
			case 'pjdefProcure':
			L_pjdefProcure_TEXT='(採購：獲取完成專案所需的工作和材料資源。)';
sTemp=L_pjdefProcure_TEXT;
break;
			case 'pjdefprofile':
			L_pjdefprofile_TEXT='(設定檔：用來指定您的現行專案應該連接至哪一個 Project Server 的設定集合。當啟動 Project 時，您可以在 [Microsoft Project Server 帳號] 對話方塊中指定設定檔。)';
sTemp=L_pjdefprofile_TEXT;
break;
			case 'pjdefProgressBar':
			L_pjdefProgressBar_TEXT='(進度列：在「甘特圖」上，顯示已完成之任務量的列。進度列覆蓋進行中或已完成的所有任務。)';
sTemp=L_pjdefProgressBar_TEXT;
break;
			case 'pjdefProgressLine':
			L_pjdefProgressLine_TEXT='(進度線：視覺化呈現專案的進度，顯示在「甘特圖」檢視中。進度線會連接進行中的任務，它會在「甘特圖」上建立圖形，指出後面的工作，並建立最大使用量，指出前面的工作。)';
sTemp=L_pjdefProgressLine_TEXT;
break;
			case 'pjdefProjectassumptions':
			L_pjdefProjectassumptions_TEXT='(專案假設：為了進行計劃而考量為真、真實或特定的因數。假設一般與風險度有關。)';
sTemp=L_pjdefProjectassumptions_TEXT;
break;
			case 'pjdefProjectCalendar':
			L_pjdefProjectCalendar_TEXT='(專案行事曆：專案所使用的基準行事曆。)';
sTemp=L_pjdefProjectCalendar_TEXT;
break;
			case 'pjdefProjectConstraint':
			L_pjdefProjectConstraint_TEXT='(專案限制式：將限制專案管理小組之選項的因數。例如，預定義的預算是可以限制小組的範圍、編制及排程選項的限制式。)';
sTemp=L_pjdefProjectConstraint_TEXT;
break;
			case 'pjdefProjectSummaryReport':
			L_pjdefProjectSummaryReport_TEXT='(專案摘要報表：由重要的專案資訊所組成的一頁摘要，包括任務和資源的數量、任務和排程狀態、開始和完成日期等等。)';
sTemp=L_pjdefProjectSummaryReport_TEXT;
break;
			case 'pjdefProjectSummaryTask':
			L_pjdefProjectSummaryTask_TEXT='(專案摘要任務：彙總專案中所有任務的工期、工作和成本的任務。專案摘要任務會出現在專案的頂端、其識別碼是 0，而且它會呈現專案的時間行，從開始到完成。)';
sTemp=L_pjdefProjectSummaryTask_TEXT;
break;
			case 'pjdefProjectTriangle':
			L_pjdefProjectTriangle_TEXT='(專案三角：時間、錢及範圍之間的相互關係。如果您調整這三個元素中的任意一個，其他兩個亦會受到影響。例如，如果您調整專案計劃來縮短排程，則您可能會增加成本並減少範圍。)';
sTemp=L_pjdefProjectTriangle_TEXT;
break;
			case 'pjdefPromoting':
			L_pjdefPromoting_TEXT='(凸排：將「任務名稱」欄位中的任務移至較高的大綱層級 [向左移]。)';
sTemp=L_pjdefPromoting_TEXT;
break;
			case 'pjdefproperty':
			L_pjdefproperty_TEXT='(屬性：您設定來定義物件特性 [例如大小、色彩或螢幕位置] 或其某方面行為 [例如物件是否隱藏] 的控制項、欄位或物件的命名屬性。)';
sTemp=L_pjdefproperty_TEXT;
break;
			case 'pjdefPublish_Assignments':
			L_pjdefPublish_Assignments_TEXT='(發佈工作分派：如果您使用 Project Server 作為您的小組共同作業方案，則您可發佈工作分派，以通知您的資源任務的新增及變更的工作分派。)';
sTemp=L_pjdefPublish_Assignments_TEXT;
break;
			case 'pjdefQuality':
			L_pjdefQuality_TEXT='(品質：產品、程序或專案的卓越程度或所想達到的水準。)';
sTemp=L_pjdefQuality_TEXT;
break;
			case 'pjdefratebased_cost':
			L_pjdefratebased_cost_TEXT='(比率型成本：以您在 [資源資訊] 對話方塊的 [成本] 索引標籤中輸入的比率為基礎的成本。)';
sTemp=L_pjdefratebased_cost_TEXT;
break;
			case 'pjdefReadOnly':
			L_pjdefReadOnly_TEXT='(唯讀：可設定的選項，以便讀取檔案但無法變更。您可開啟及檢視唯讀的專案檔案，但不能變更它。)';
sTemp=L_pjdefReadOnly_TEXT;
break;
			case 'pjdefReadWrite':
			L_pjdefReadWrite_TEXT='(可讀寫：開啟檔案的一般選項設定，以便讓檔案可以讀取和編輯，並且可以儲存變更。)';
sTemp=L_pjdefReadWrite_TEXT;
break;
			case 'pjdefRecurringTask':
			L_pjdefRecurringTask_TEXT='(週期性任務：專案期間重複發生的任務。例如，您可將每週狀態會議定義為週期性任務。)';
sTemp=L_pjdefRecurringTask_TEXT;
break;
			case 'pjdefRelativeReference':
			L_pjdefRelativeReference_TEXT='(相對參照：基於作用中儲存格之欄或列的參照。每次當作用中儲存格的位置變更時，相對參照的結果也會變更。)';
sTemp=L_pjdefRelativeReference_TEXT;
break;
			case 'pjdefRemainingCost':
			L_pjdefRemainingCost_TEXT='(剩餘成本：任務、資源或工作分派尚未產生的估計成本。)';
sTemp=L_pjdefRemainingCost_TEXT;
break;
			case 'pjdefRemainingDuration':
			L_pjdefRemainingDuration_TEXT='(剩餘工期：任務完成之前，所剩下的工時數量。計算公式如下：剩餘工期 = 工期 - 實際工期。)';
sTemp=L_pjdefRemainingDuration_TEXT;
break;
			case 'pjdefRemainingWork':
			L_pjdefRemainingWork_TEXT='(剩餘工時：任務上所留下將完成的工作量，以時間單位，如時數或天數，來表示。計算公式如下：剩餘工時 = 工時 - 實際工時。)';
sTemp=L_pjdefRemainingWork_TEXT;
break;
			case 'pjdefReport':
			L_pjdefReport_TEXT='(報表：您可在其中列印僅適合於預定收件者之排程資訊的格式。可以使用 Project 所提供的預先定義報表或建立自訂的報表。)';
sTemp=L_pjdefReport_TEXT;
break;
			case 'pjdefReportPeriod':
			L_pjdefReportPeriod_TEXT='(報表週期：您可以在此期間追蹤和更新工作群組管理員分派給你之任務的時間範圍。您可以將時間單位變更為天、週或整個任務的單一時間單位。)';
sTemp=L_pjdefReportPeriod_TEXT;
break;
			case 'pjdefReportType':
			L_pjdefReportType_TEXT='(報表類型：包含類似資訊的 Project 報表類別。報表類型有五種：概觀、現階段作業、成本、工作分派和工作負載。)';
sTemp=L_pjdefReportType_TEXT;
break;
			case 'pjdefresource_breakdown_structure':
			L_pjdefresource_breakdown_structure_TEXT='(RBS：描述組織階層的結構。RBS 代碼定義了資源保留在組織中的階層位置。)';
sTemp=L_pjdefresource_breakdown_structure_TEXT;
break;
			case 'pjdefResourceAllocation':
			L_pjdefResourceAllocation_TEXT='(資源分派：專案中任務的資源工作分派。)';
sTemp=L_pjdefResourceAllocation_TEXT;
break;
			case 'pjdefResourceCalendar':
			L_pjdefResourceCalendar_TEXT='(資源行事曆：指定個別資源的工作和非工作時間的行事曆。資源行事曆不同於基準行事曆，因為它可以指定多個資源的工作和非工作時間。)';
sTemp=L_pjdefResourceCalendar_TEXT;
break;
			case 'pjdefResourceDrivenScheduling':
			L_pjdefResourceDrivenScheduling_TEXT='(資源導向排程：以任務所需的工時量和分派至任務的資源單位數為任務工期基礎的排程方法。)';
sTemp=L_pjdefResourceDrivenScheduling_TEXT;
break;
			case 'pjdefResourceGroup':
			L_pjdefResourceGroup_TEXT='(資源群組：共用特性並按群組名稱分類的資源。例如，您可按工作職務分類資源並使用諸如水管工之類的群組名稱。或者，您可以按員工狀態來分類資源。)';
sTemp=L_pjdefResourceGroup_TEXT;
break;
			case 'pjdefResourceInfo':
			L_pjdefResourceInfo_TEXT='(資源資訊：在「資源工作表」檢視中顯示的資訊分類，其中指定關於資源的詳細資料 (如名稱、類型、群組、最大單位及標準工資率)。將不同的表格套用到檢視可取得其他資源資訊。)';
sTemp=L_pjdefResourceInfo_TEXT;
break;
			case 'pjdefResourceList':
			L_pjdefResourceList_TEXT='(資源清單：可用於指派給任務的資源。資源清單可儲存在單一專案檔案中，或與資源資料庫共用。)';
sTemp=L_pjdefResourceList_TEXT;
break;
			case 'pjdefResourcePool':
			L_pjdefResourcePool_TEXT='(資源資料庫：可用於指派給專案任務的一組資源。資源資料庫可供一個專案單獨使用，也可由數個專案共用。)';
sTemp=L_pjdefResourcePool_TEXT;
break;
			case 'pjdefResourceReport':
			L_pjdefResourceReport_TEXT='(資源報表：有關專案資源的列印資訊，通常包括關於成本和資源配置的資訊。)';
sTemp=L_pjdefResourceReport_TEXT;
break;
			case 'pjdefResources':
			L_pjdefResources_TEXT='(資源：用來完成專案任務的人員、設備和材料。)';
sTemp=L_pjdefResources_TEXT;
break;
			case 'pjdefResourceSharing':
			L_pjdefResourceSharing_TEXT='(資源共用：在多個檔案中使用相同的資源。當一個專案從另一個專案中借用資源時，借用資源的檔案即是共用檔案，貢獻資源的檔案就是資源資料庫。)';
sTemp=L_pjdefResourceSharing_TEXT;
break;
			case 'pjdefResourceType':
			L_pjdefResourceType_TEXT='(資源類型：有兩種資源類型：工作資源 (例如人員和設備)，此類資源會執行工作以完成任務；材料資源 (例如物資)，此類資源與工作毫無關聯，但在任務完成時會被消耗。)';
sTemp=L_pjdefResourceType_TEXT;
break;
			case 'pjdefResourceUsage':
			L_pjdefResourceUsage_TEXT='(資源使用狀況：資源在給定時段內排程為工作的小時數，因此可以作為該時段內資源配置的標記。)';
sTemp=L_pjdefResourceUsage_TEXT;
break;
			case 'pjdefResourceView':
			L_pjdefResourceView_TEXT='(資源檢視：顯示資源資訊的檢視。資源檢視包括「資源工作表」、「資源圖表」、「資源使用狀況」和「資源表單」檢視。)';
sTemp=L_pjdefResourceView_TEXT;
break;
			case 'pjdefrighttoleft':
			L_pjdefrighttoleft_TEXT='(由右至左：鍵盤設定、文件檢視、使用者介面物件及文字顯示的方向。希伯來文即是一種由右至左的語言。)';
sTemp=L_pjdefrighttoleft_TEXT;
break;
			case 'pjdefRisk':
			L_pjdefRisk_TEXT='(風險：可能對專案範圍、排程、預算或品質有負面影響的事件或狀況。)';
sTemp=L_pjdefRisk_TEXT;
break;
			case 'pjdefRiskManagementPlan':
			L_pjdefRiskManagementPlan_TEXT='(風險管理計劃：定義如何在整個專案中管理風險的文件。它可以包括已識別的風險、可能性、偶發事件計劃和實作它們的方法，以及如果發生風險事件時分派資源的策略。)';
sTemp=L_pjdefRiskManagementPlan_TEXT;
break;
			case 'pjdefRiskProbability':
			L_pjdefRiskProbability_TEXT='(風險機率：對特定風險事件會發生之可能性的評估。)';
sTemp=L_pjdefRiskProbability_TEXT;
break;
			case 'pjdefRollup':
			L_pjdefRollup_TEXT='(縮合：在「甘特圖」上，顯示表示子任務日期摘要任務列上之符號。您可縮合子任務的日期，以使得摘要任務列上的重要任務容易被看到。)';
sTemp=L_pjdefRollup_TEXT;
break;
			case 'pjdefRow':
			L_pjdefRow_TEXT='(列：顯示資訊之一般類別的一組水平並排欄位。Project 中的列通常包含任務、資源、工作分派或某些諸如工時及成本這樣的詳細資料的資訊。)';
sTemp=L_pjdefRow_TEXT;
break;
			case 'pjdefRtfField':
			L_pjdefRtfField_TEXT='(RTF 欄位：其內容可包含 RTF 格式 [格式化的] 文字的欄位類型。例如，可使用項目符號清單及粗體類型來格式化附註。)';
sTemp=L_pjdefRtfField_TEXT;
break;
			case 'pjdefScale':
			L_pjdefScale_TEXT='(比例：增加或減小列印頁上圖像的方法。減小比例可在每頁上列印更多的檢視或報表；增加比例會減少每頁上所列印的檢視或報表。)';
sTemp=L_pjdefScale_TEXT;
break;
			case 'pjdefSchedorcurcost':
			L_pjdefSchedorcurcost_TEXT='(排程的或目前的成本：任務、資源、工作分派及整個專案的最近成本，其會作為成本或總成本顯示在成本欄位中。它將以您所做的成本調整並以專案的進度，來保持最新的狀態。)';
sTemp=L_pjdefSchedorcurcost_TEXT;
break;
			case 'pjdefSchedule':
			L_pjdefSchedule_TEXT='(排程：安排專案中任務的時間及順序。排程主要由任務、任務相依性、工期、限制式和時間導向的專案資訊所組成。)';
sTemp=L_pjdefSchedule_TEXT;
break;
			case 'pjdefScheduled':
			L_pjdefScheduled_TEXT='(排程：有關專案的最新資訊，包括已開始之任務的實際和剩餘日期、工期和成本，及尚未開始之任務的最新規劃日期、工期和成本。)';
sTemp=L_pjdefScheduled_TEXT;
break;
			case 'pjdefScope':
			L_pjdefScope_TEXT='(範圍：所有專案目標和任務的組合，以及要完成它們所需的工作。)';
sTemp=L_pjdefScope_TEXT;
break;
			case 'pjdefScreenTips':
			L_pjdefScreenTips_TEXT='(工具提示：出現在螢幕上提供有關工具列按鈕和其他螢幕項目之資訊的附註。)';
sTemp=L_pjdefScreenTips_TEXT;
break;
			case 'pjdefSCurveGraph':
			L_pjdefSCurveGraph_TEXT='(S 形曲線圖：您可以利用 Excel，藉由使用如 BCWP 的時段資料，以及來自 Project 的累積成本，來繪製此圖形以顯示盈餘分析資訊。當您使用「分析時幅資料精靈」時，會繪製它。)';
sTemp=L_pjdefSCurveGraph_TEXT;
break;
			case 'pjdefsearch_page':
			L_pjdefsearch_page_TEXT='(搜尋網頁：用於尋找及跳至其他網際網路網站或內部網路上檔案的頁面。許多搜尋網頁都提供多種搜尋方式，如依主題、依關鍵字或依符合使用者的查詢。)';
sTemp=L_pjdefsearch_page_TEXT;
break;
			case 'pjdefserver_administrator':
			L_pjdefserver_administrator_TEXT='(伺服器管理員：負責設定組織的欄位、檢視和報表及設定和維護伺服器和伺服器軟體的人員。)';
sTemp=L_pjdefserver_administrator_TEXT;
break;
			case 'pjdefSharedRes':
			L_pjdefSharedRes_TEXT='(共用資源：由多個專案所使用的資源。一個資源可以是數個不同專案的個別資源清單的一部份，或是單一共用資源資料庫的一部份。)';
sTemp=L_pjdefSharedRes_TEXT;
break;
			case 'pjdefShareName':
			L_pjdefShareName_TEXT='(共用名稱：伺服器上留出之用於特殊目的之磁碟空間的磁碟分割。通常，伺服器空間將被分成幾個共用名稱，以用於滿足組織中特殊群組的需要，且將會為適當人員提供存取權。)';
sTemp=L_pjdefShareName_TEXT;
break;
			case 'pjdefSharingFiles':
			L_pjdefSharingFiles_TEXT='(共用檔案：使用其他檔案之資源的檔案，其他檔案可能是其他專案檔案，或是只包含資源資訊的檔案 (稱為資源資料庫)。)';
sTemp=L_pjdefSharingFiles_TEXT;
break;
			case 'pjdefSheet':
			L_pjdefSheet_TEXT='(工作表：任務或資源資訊之類似試算表的呈現方式 [以列和欄格式顯示]。每列指定個別任務或資源。每欄 [欄位] 指定資訊類型，如開始日期或標準工資率。)';
sTemp=L_pjdefSheet_TEXT;
break;
			case 'pjdefshortcut_key':
			L_pjdefshortcut_key_TEXT='(快速鍵：功能鍵或組合鍵，如 F5 或 CTRL+A，您可使用它來執行功能表指令。相反地，便捷鍵是組合鍵 (如 ALT+F)，可將焦點移至功能表、指令或控制項。)';
sTemp=L_pjdefshortcut_key_TEXT;
break;
			case 'pjdefShortcutMenu':
			L_pjdefShortcutMenu_TEXT='(快顯功能表：藉由指向 Project 的一部份並按一下滑鼠右鍵來存取的功能表。Project 有數個快顯功能表。使用快顯功能表可節省時間，並讓使用專案檔案變得更容易。)';
sTemp=L_pjdefShortcutMenu_TEXT;
break;
			case 'pjdefside_pane':
			L_pjdefside_pane_TEXT='(側邊窗格：Project 及 Project Web Access 介面左側上顯示的窗格。在 Project 中，側邊窗格含有「專案快速入門」資訊；在 Project Web Access 中，側邊窗格則含有連結。)';
sTemp=L_pjdefside_pane_TEXT;
break;
			case 'pjdefSinglePaneView':
			L_pjdefSinglePaneView_TEXT='(單一窗格檢視：其中只出現一個檢視的視窗，例如「任務工作表」、「網狀圖」檢視、「資源圖表」檢視或「行事曆」檢視。)';
sTemp=L_pjdefSinglePaneView_TEXT;
break;
			case 'pjdefSizingHandle':
			L_pjdefSizingHandle_TEXT='(縮放控點：出現在環繞所選取之繪圖物件周圍之矩形的每個角上及各邊上的方形控點。您可拖曳縮放控點來調整物件的大小。)';
sTemp=L_pjdefSizingHandle_TEXT;
break;
			case 'pjdefskill_set':
			L_pjdefskill_set_TEXT='(技術集：特定的資源技術。)';
sTemp=L_pjdefskill_set_TEXT;
break;
			case 'pjdefskills_codes':
			L_pjdefskills_codes_TEXT='(技術代碼：技術代碼是一種企業大綱代碼，可讓您指定資源具有的技術。)';
sTemp=L_pjdefskills_codes_TEXT;
break;
			case 'pjdefSlack':
			L_pjdefSlack_TEXT='(可寬延時間：任務在不影響其他任務或專案完成日期的狀況下可落後的時間量。可用可寬延時間是任務在不延遲其他任務的狀況下可落後多長時間。可寬延的總時間是任務在不延遲專案的狀況下可落後的時間量。)';
sTemp=L_pjdefSlack_TEXT;
break;
			case 'pjdefSlippage':
			L_pjdefSlippage_TEXT='(進度落後：任務從其原始的比較基準計劃延遲的時間量。進度落後是任務之排程的開始或完成日期與比較基準開始或完成日期之間的差異。)';
sTemp=L_pjdefSlippage_TEXT;
break;
			case 'pjdefSlippageBar':
			L_pjdefSlippageBar_TEXT='(進度落後長條圖：在「詳細甘特圖」檢視上表示任務落後程度的長條圖。)';
sTemp=L_pjdefSlippageBar_TEXT;
break;
			case 'pjdefSoftConstraint':
			L_pjdefSoftConstraint_TEXT='(彈性限制式：具彈性且不會使任務受限於單一日期的限制式。彈性限制式包括：「越快越好」、「越晚越好」、「不得早於...完成」、「不得晚於...完成」、「不得早於...開始」，以及「不得晚於...開始」。)';
sTemp=L_pjdefSoftConstraint_TEXT;
break;
			case 'pjdefSort':
			L_pjdefSort_TEXT='(排序：控制任務、資源和其他資訊之顯示順序的方法。)';
sTemp=L_pjdefSort_TEXT;
break;
			case 'pjdefSource':
			L_pjdefSource_TEXT='(來源：移動、複製、匯入或匯出之資訊其原始的位置；可以是檢視、表格、文件或其他程式。在 OLE 中，指的是將資訊提供給目的地之連結物件、文件或程式的文件或程式。)';
sTemp=L_pjdefSource_TEXT;
break;
			case 'pjdefSpecialSkills':
			L_pjdefSpecialSkills_TEXT='(特殊技術：較罕見的能力、知識和才能。)';
sTemp=L_pjdefSpecialSkills_TEXT;
break;
			case 'pjdefSPI':
			L_pjdefSPI_TEXT='(SPI：執行工作的預算成本 [BCWP] 與排程工作的預算成本 (BCWS) 之間的比率，常常用於估計專案完成日期。計算公式如下：SPI = BCWP/BCWS。)';
sTemp=L_pjdefSPI_TEXT;
break;
			case 'pjdefSplitTask':
			L_pjdefSplitTask_TEXT='(分割任務：其排程被中斷的任務。例如，為期兩天且不需要連續工時的任務可能會被分割，以便第一個工作日可以排在週一，而第二個工作日則排在週四。)';
sTemp=L_pjdefSplitTask_TEXT;
break;
			case 'pjdefStakeholders':
			L_pjdefStakeholders_TEXT='(共同工作人員：積極參與專案並且其利益受專案影響的人員或組織。)';
sTemp=L_pjdefStakeholders_TEXT;
break;
			case 'pjdefStandardRate':
			L_pjdefStandardRate_TEXT='(標準工資率：您分派至資源 [例如人員、設備或材料] 及 Project 用來計算總資源成本的基準工資率。)';
sTemp=L_pjdefStandardRate_TEXT;
break;
			case 'pjdefstart_page':
			L_pjdefstart_page_TEXT='(起始畫面：當您啟動網頁瀏覽器時出現的第一個頁面。起始畫面可包含到電腦、網路或網頁上之其他檔案的超連結。起始頁面可以包含某些到您電腦、網路或網頁上其他檔案的超連結。)';
sTemp=L_pjdefstart_page_TEXT;
break;
			case 'pjdefStartDate':
			L_pjdefStartDate_TEXT='(開始日期：排程任務開始的日期。此日期是依據前置任務及後續任務的工期、行事曆及限制式而定的。任務的開始日期還要以其自己的行事曆及限制式為依據。)';
sTemp=L_pjdefStartDate_TEXT;
break;
			case 'pjdefStaticPicture':
			L_pjdefStaticPicture_TEXT='(靜態圖片：資訊的快照，通常來自其他文件或程式，它不會連結到資訊所建立的文件或程式。)';
sTemp=L_pjdefStaticPicture_TEXT;
break;
			case 'pjdefStaticText':
			L_pjdefStaticText_TEXT='(靜態文字：在自訂表單或對話方塊中無法編輯的文字。)';
sTemp=L_pjdefStaticText_TEXT;
break;
			case 'pjdefStatusBar':
			L_pjdefStatusBar_TEXT='(狀態列：在 Project 視窗底端顯示有關目前活動資訊的區域。)';
sTemp=L_pjdefStatusBar_TEXT;
break;
			case 'pjdefStatusDate':
			L_pjdefStatusDate_TEXT='(狀態日期：您設定來報告專案時間、成本或效能狀況的日期 [而非目前日期]。)';
sTemp=L_pjdefStatusDate_TEXT;
break;
			case 'pjdefStatusReport':
			L_pjdefStatusReport_TEXT='(狀態報表：成員之專案工作及相關工作狀態的描述。狀態報表是在 Project Server 中要求、填寫及檢閱，而且無法用於自動更新 Project 中的專案資訊。)';
sTemp=L_pjdefStatusReport_TEXT;
break;
			case 'pjdefsubmenu':
			L_pjdefsubmenu_TEXT='(子功能表：當您指向較高層級之功能表的指令時會出現的功能表。)';
sTemp=L_pjdefsubmenu_TEXT;
break;
			case 'pjdefSubordinateTask':
			L_pjdefSubordinateTask_TEXT='(子任務：摘要任務的一部份。子任務資訊會合併到摘要任務中。您可以使用 Project 大綱功能來指定子任務。)';
sTemp=L_pjdefSubordinateTask_TEXT;
break;
			case 'pjdefSubphase':
			L_pjdefSubphase_TEXT='(子階段：巢狀化於另一個摘要任務中的摘要任務。使用 Project 大綱特性，您可以指定子階段。)';
sTemp=L_pjdefSubphase_TEXT;
break;
			case 'pjdefSubproject':
			L_pjdefSubproject_TEXT='(子專案：插入到其他專案中的專案。使用子專案是一種將複雜的專案分為幾個部份，使之更易於管理的方法。子專案也稱為插入專案。)';
sTemp=L_pjdefSubproject_TEXT;
break;
			case 'pjdefSuccessor':
			L_pjdefSuccessor_TEXT='(後續任務：在其他任務開始或完成前無法開始或完成的任務。)';
sTemp=L_pjdefSuccessor_TEXT;
break;
			case 'pjdefSummaryTask':
			L_pjdefSummaryTask_TEXT='(摘要任務：由子任務組成且彙總該些子任務的任務。請使用大綱來建立摘要任務。Project 會使用來自子任務的資訊來自動判定摘要任務資訊 [如工期和成本]。)';
sTemp=L_pjdefSummaryTask_TEXT;
break;
			case 'pjdefSumrecurringtask':
			L_pjdefSumrecurringtask_TEXT='(摘要週期性任務：定期發生之一組任務的摘要任務。例如，您可將每週狀態會議定義為週期性任務。)';
sTemp=L_pjdefSumrecurringtask_TEXT;
break;
			case 'pjdefSupplier':
			L_pjdefSupplier_TEXT='(供應商：提供完成專案所需之材料、產品或服務的承包商、廠商或其他代理商。)';
sTemp=L_pjdefSupplier_TEXT;
break;
			case 'pjdefSV':
			L_pjdefSV_TEXT='(SV：執行工作的預算成本 [BCWP] 與排程工作的預算成本 [BCWS] 之間的差異。計算方式：SV = 執行工作的預算成本 - 排程工作的預算成本。)';
sTemp=L_pjdefSV_TEXT;
break;
			case 'pjdefTabdelimited':
			L_pjdefTabdelimited_TEXT='(以 Tab 字元分隔的文字格式：以記錄為基礎的 ASCII 文字格式，其中任務或資源記錄的每個欄位都是由清單分隔字元 (通常是定位停駐點) 分隔的。每個任務或資源記錄都是以換行符號結尾。)';
sTemp=L_pjdefTabdelimited_TEXT;
break;
			case 'pjdefTable':
			L_pjdefTable_TEXT='(表格：在工作表檢視中顯示有關任務、資源和工作分派之特定資訊的欄位集。)';
sTemp=L_pjdefTable_TEXT;
break;
			case 'pjdefTask':
			L_pjdefTask_TEXT='(任務：有開頭及結尾的活動。專案計劃即是由任務所組成。)';
sTemp=L_pjdefTask_TEXT;
break;
			case 'pjdeftask_pane':
			L_pjdeftask_pane_TEXT='(任務窗格：Project 中提供常用指令的視窗。它位於左邊，可讓您仍在專案計劃中工作時，使用這些指令。)';
sTemp=L_pjdeftask_pane_TEXT;
break;
			case 'pjdefTaskCalendar':
			L_pjdefTaskCalendar_TEXT='(任務行事曆：可套用到個別任務以控制其排程的基礎行事曆，通常獨立於專案行事曆或任何指定的資源行事曆。預設所有任務都使用專案行事曆。)';
sTemp=L_pjdefTaskCalendar_TEXT;
break;
			case 'pjdefTaskDelegation':
			L_pjdefTaskDelegation_TEXT='(任務委派：某個團隊成員分派任務給 Project Server 中另一個團隊成員的過程。當任務委派給另一個團隊成員時，該團隊成員實際上會在任務上進行工作。)';
sTemp=L_pjdefTaskDelegation_TEXT;
break;
			case 'pjdefTaskDependencies':
			L_pjdefTaskDependencies_TEXT='(任務相依性：兩個連結任務之間的關係；由其完成及開始日期之間的相依性連結。任務相依性有四種：完成-開始 [FS]、開始-開始 [SS]、完成-完成 [FF]，以及開始-完成 [SF]。)';
sTemp=L_pjdefTaskDependencies_TEXT;
break;
			case 'pjdefTaskId':
			L_pjdefTaskId_TEXT='(任務識別碼：當您將任務指派到專案時，Project 自動指派給任務的號碼。任務識別碼指出該任務相對於其他任務的位置。)';
sTemp=L_pjdefTaskId_TEXT;
break;
			case 'pjdefTaskInfo':
			L_pjdefTaskInfo_TEXT='(任務資訊：Project 中提供之特殊任務的資訊。您可以在 [任務資訊] 對話方塊 [位於任務檢視中的 [專案] 功能表] 看到彙總的任務資訊。)';
sTemp=L_pjdefTaskInfo_TEXT;
break;
			case 'pjdefTaskList':
			L_pjdefTaskList_TEXT='(任務清單：顯示在「甘特圖」檢視的工作表部份中的資訊種類，用以指定有關任務的詳細資訊，如任務名稱、工期、開始和完成日期、前置任務，以及資源名稱。)';
sTemp=L_pjdefTaskList_TEXT;
break;
			case 'pjdefTaskReport':
			L_pjdefTaskReport_TEXT='(任務報表：專案之任務或活動的列印資訊。任務報表通常包括開始任務、已完成工時及預期工期的資訊。)';
sTemp=L_pjdefTaskReport_TEXT;
break;
			case 'pjdefTaskType':
			L_pjdefTaskType_TEXT='(任務類型：根據任務的哪方面是固定的及哪些方面是可變的而作出之任務的特性描述。任務類型有三種：固定單位、固定工作，以及固定工期。Project 中的預設任務類型是「固定單位」。)';
sTemp=L_pjdefTaskType_TEXT;
break;
			case 'pjdefTaskView':
			L_pjdefTaskView_TEXT='(任務檢視：顯示任務資訊的檢視。任務檢視包括三個任務表單；範例包括「行事曆」、「詳細甘特圖」、「甘特圖」、「上顯型里程碑」、「PA_PERT 資料編輯表」、「任務資料編輯」、「關聯圖表」、「任務工作表」，以及「任務分派狀況」。)';
sTemp=L_pjdefTaskView_TEXT;
break;
			case 'pjdefTCPI':
			L_pjdefTCPI_TEXT='(TCPI：剩下要執行的工時與剩下可花費的資金之間的比率，從狀態日期開始計算 [BAC - BCWP]/[BAC - ACWP]。TCPI 值大於一指示需要提高效能；小於一指示效能可以降低。)';
sTemp=L_pjdefTCPI_TEXT;
break;
			case 'pjdefTemplate':
			L_pjdefTemplate_TEXT='(範本：Project 檔案格式 [*.mpt]，可讓您重覆使用現有的排程作為建立新排程的起始點。任務及資源資訊、格式、巨集及專案特定的設定都可成為範本的一部份。)';
sTemp=L_pjdefTemplate_TEXT;
break;
			case 'pjdefTextField':
			L_pjdefTextField_TEXT='(文字欄位：內容是文字的欄位類型。範例包括「任務名稱」和「電子郵件地址」欄位。這個欄位最多可以含有 255 個字元。)';
sTemp=L_pjdefTextField_TEXT;
break;
			case 'pjdefTextListField':
			L_pjdefTextListField_TEXT='(文字清單欄位：其內容是由清單分隔字元 (通常是逗號) 分隔之文字項目清單的欄位類型。範例包括「資源群組」和「資源名稱」欄位。)';
sTemp=L_pjdefTextListField_TEXT;
break;
			case 'pjdefTimephased':
			L_pjdefTimephased_TEXT='(時段：依時分配的任務、資源或工作分派資訊。您可在「任務分派狀況」及「資源使用狀況」檢視右側欄位中的任何可用時段內，檢閱時段資訊。)';
sTemp=L_pjdefTimephased_TEXT;
break;
			case 'pjdefTimescale':
			L_pjdefTimescale_TEXT='(時幅：位於「甘特圖」檢視、「資源圖形」檢視、「任務分派狀況」，以及「資源使用狀況」頂端的期間標記。您可以自訂它，以便最多顯示三層，來顯示各種時間單位：頂端、中間和底端。)';
sTemp=L_pjdefTimescale_TEXT;
break;
			case 'pjdefTimesheet':
			L_pjdefTimesheet_TEXT='(時程表：在 Project Web Access 中，時程表是一個頁面，資源可以在其中記錄其任務上的進度並將更新傳送給專案經理。)';
sTemp=L_pjdefTimesheet_TEXT;
break;
			case 'pjdefTimeUnit':
			L_pjdefTimeUnit_TEXT='(時間單位縮寫：表示工作時間或已耗用時間的測量單位。工作時間縮寫的範例：hr = 小時。已耗用時間縮寫的範例：ewk = 經歷的週數。)';
sTemp=L_pjdefTimeUnit_TEXT;
break;
			case 'pjdeftitle_bar':
			L_pjdeftitle_bar_TEXT='(標題列：視窗、對話方塊或工具列頂端上，顯示文件、程式或工具列名稱的水平列。)';
sTemp=L_pjdeftitle_bar_TEXT;
break;
			case 'pjdeftoolbar':
			L_pjdeftoolbar_TEXT='(工具列：具有用來執行命令之按鈕和選項的列。若要顯示工具列，請指向 [檢視] 功能表上的 [工具列]，然後按一下您想要的工具列。若要看到更多的按鈕，請按一下工具列尾端的 [工具列選項]。)';
sTemp=L_pjdeftoolbar_TEXT;
break;
			case 'pjdefToolTip':
			L_pjdefToolTip_TEXT='(工具提示：描述工具列按鈕或其他工具功能的單字或短的詞。當您將指標暫停在按鈕或工具上時會出現「工具提示」。)';
sTemp=L_pjdefToolTip_TEXT;
break;
			case 'pjdefTopDownEstimating':
			L_pjdefTopDownEstimating_TEXT='(由上到下估計：使用先前類似專案的實際成本，作為估計目前專案總成本之基礎的估計方法。當專案的資訊有限時，通常會使用此方法。)';
sTemp=L_pjdefTopDownEstimating_TEXT;
break;
			case 'pjdefTotalCost':
			L_pjdefTotalCost_TEXT='(總成本：在專案存留期間所計算出的專案、任務、資源或工作分派成本。)';
sTemp=L_pjdefTotalCost_TEXT;
break;
			case 'pjdefTotalSlack':
			L_pjdefTotalSlack_TEXT='(可寬延的總時間：任務的完成日期可以延遲的時間量，這個時間量不會延遲專案的完成日期。)';
sTemp=L_pjdefTotalSlack_TEXT;
break;
			case 'pjdefUNC':
			L_pjdefUNC_TEXT='(UNC：「通用命名慣例」位址，用來識別位於網路伺服器的檔案位置。這些位址是以兩個反斜線字元開始 [\\]，提供伺服器名稱、共用名稱和檔案的完整路徑。)';
sTemp=L_pjdefUNC_TEXT;
break;
			case 'pjdefUnderallocation':
			L_pjdefUnderallocation_TEXT='(分派不足：將資源分派為少於資源可用的工時時數。)';
sTemp=L_pjdefUnderallocation_TEXT;
break;
			case 'pjdefunicode':
			L_pjdefunicode_TEXT='(Unicode：Unicode Consortium 所開發的字元編碼標準。藉由使用一個以上的字元組來代表每個字元，Unicode 讓世界上幾乎所有的文字語言都可以使用單一字元設定來表示。)';
sTemp=L_pjdefunicode_TEXT;
break;
			case 'pjdefUniqueId':
			L_pjdefUniqueId_TEXT='(專一識別碼：Project 自動分派給任務、資源或工作分派的專一識別碼。當其他任務加入專案或從專案移除時，它都不會變更。)';
sTemp=L_pjdefUniqueId_TEXT;
break;
			case 'pjdefUnitAvailability':
			L_pjdefUnitAvailability_TEXT='(單位可用性：可將資源排程給指定工時的時間量，以百分比或小數表示。它指資源的可用性；例如，資源的可用性可以是全部時間的 50%、100% 或 300%。)';
sTemp=L_pjdefUnitAvailability_TEXT;
break;
			case 'pjdefUnits':
			L_pjdefUnits_TEXT='(單位：分派給任務的資源數量。最大單位就是可供資源使用的最大單位數目。例如，如果您具有三個水管工，則最大單位是 300 百分比，或三個水管工全職工作。)';
sTemp=L_pjdefUnits_TEXT;
break;
			case 'pjdefURL':
			L_pjdefURL_TEXT='(URL：Uniform Resource Locator，它是命名和尋找網際網路上之物件 (例如檔案或新聞群組) 的標準。URL 只使用在「全球資訊網」上。它們用於 HTML 文件中，來指定超連結的目標。)';
sTemp=L_pjdefURL_TEXT;
break;
			case 'pjdefVAC':
			L_pjdefVAC_TEXT='(VAC：顯示完成時預算 [BAC] 與預算之任務完成成本 [EAC] 間之差額的盈餘分析欄位。在 Project 中，EAC 是「總成本」欄位，而 BAC 是「比較基準成本」欄位。)';
sTemp=L_pjdefVAC_TEXT;
break;
			case 'pjdefVariableConsumptionRate':
			L_pjdefVariableConsumptionRate_TEXT='(可變材料消耗：工作分派中使用之材料資源的以時間為基礎的數量。可變消耗指出如果任務工期或工作分派長度變更，所使用材料的數量也會變更。)';
sTemp=L_pjdefVariableConsumptionRate_TEXT;
break;
			case 'pjdefVariableCosts':
			L_pjdefVariableCosts_TEXT='(可變成本：可變更的費用，以資源實際工作量或消耗之材料資源的數量為依據。可變成本通常用於按小時計算其工資的資源或用於材料資源。)';
sTemp=L_pjdefVariableCosts_TEXT;
break;
			case 'pjdefVariance':
			L_pjdefVariance_TEXT='(差異：比較基準與排程的任務或資源資訊之間的差異，它們通常在您設定比較基準計劃並開始將實際資訊輸入排程時發生。差異可以發生在工時、成本及排程中。)';
sTemp=L_pjdefVariance_TEXT;
break;
			case 'pjdefversion':
			L_pjdefversion_TEXT='(版本：在 Project Server 中儲存專案時所建立的預設版本是「已發佈」。其他版本名稱可以由您的組織定義。它位在 [從 Microsoft Project Server 中開啟] 對話方塊中的專案名稱旁邊。)';
sTemp=L_pjdefversion_TEXT;
break;
			case 'pjdefView':
			L_pjdefView_TEXT='(檢視：一個或多個檢視 [甘特圖、資源工作表等]，以及表格和篩選器 (若適用的話) 的組合。使用檢視來處理各種格式的資訊。有三種類型的檢視：圖表或圖形、工作表和表單。)';
sTemp=L_pjdefView_TEXT;
break;
			case 'pjdefViewBar':
			L_pjdefViewBar_TEXT='(檢視列：出現在 Project 視窗左邊緣的 Project 螢幕項目。「檢視列」提供一種變更檢視的便利方式，只要按一下出現在 [檢視列] 上的圖示即可。)';
sTemp=L_pjdefViewBar_TEXT;
break;
			case 'pjdefVirus':
			L_pjdefVirus_TEXT='(病毒：藉由將其自身的複本插入電腦中的檔案，然後在開啟主機檔案時執行，而使電腦檔案「感染」的電腦程式或巨集。病毒可以將感染散播到其他檔案，而且可以毀損或刪除檔案。)';
sTemp=L_pjdefVirus_TEXT;
break;
			case 'pjdefVisual':
			L_pjdefVisual_TEXT='(視覺：用於描述當使用雙向文字時的插入點移動及文字選取。雙向文字內的移動通常是移至下一個可見的相鄰字元。)';
sTemp=L_pjdefVisual_TEXT;
break;
			case 'pjdefVisual_Basic_Editor':
			L_pjdefVisual_Basic_Editor_TEXT='(Visual Basic 編輯器：Visual Basic for Applicatons 介面，您可以在其中編輯已錄製的巨集，以及撰寫新的巨集及程式。若要開啟，請在 [工具] 功能表上，指向 [巨集]，然後按一下 [Visual Basic 編輯器]。)';
sTemp=L_pjdefVisual_Basic_Editor_TEXT;
break;
			case 'pjdefVisualBasic':
			L_pjdefVisualBasic_TEXT='(VBA：一種完整的程式設計語言，您可以使用它來自動化 Project 中及許多其他 Microsoft 程式的任務。)';
sTemp=L_pjdefVisualBasic_TEXT;
break;
			case 'pjdefWebBrowser':
			L_pjdefWebBrowser_TEXT='(網頁瀏覽器：能夠在「全球資訊網」上尋找和顯示資訊的電腦程式。)';
sTemp=L_pjdefWebBrowser_TEXT;
break;
			case 'pjdefWebInbox':
			L_pjdefWebInbox_TEXT='(網路收件匣：Project 中的訊息中心，其中工作群組管理員可以檢視來自使用 Microsoft Project Central 之工作群組成員的網頁式訊息。管理員可以根據工作群組成員的回應來更新專案排程。)';
sTemp=L_pjdefWebInbox_TEXT;
break;
			case 'pjdefWebServer':
			L_pjdefWebServer_TEXT='(網頁伺服器：將工作群組連接到 Project Server、內部網路或「全球資訊網」的電腦和支援軟體。)';
sTemp=L_pjdefWebServer_TEXT;
break;
			case 'pjdefWebSite':
			L_pjdefWebSite_TEXT='(網站：內部網路或「全球資訊網」上的網頁或網頁集合，其格式為 HTML 並可從網頁瀏覽器存取。)';
sTemp=L_pjdefWebSite_TEXT;
break;
			case 'pjdefWeightedDuration':
			L_pjdefWeightedDuration_TEXT='(偏重工期：偏重平均預期、最差及最佳的日期及工期。PERT 分析計算預設會偏重預期的工期，而不偏重於最差及最佳的工期。)';
sTemp=L_pjdefWeightedDuration_TEXT;
break;
			case 'pjdefWhatIfScenario':
			L_pjdefWhatIfScenario_TEXT='(條件式分析藍本：一種用來根據您所提供的資訊預測數值的方法。)';
sTemp=L_pjdefWhatIfScenario_TEXT;
break;
			case 'pjdefWildcard':
			L_pjdefWildcard_TEXT='(萬用字元：用在欄位中搜尋文字的字元。萬用字元包括：* [星號]，用於代表任一字元集，以及 ? [問號]，用於代表單一字元。您可以使用萬用字元，來搜尋文字欄位，但不能搜尋數字欄位。)';
sTemp=L_pjdefWildcard_TEXT;
break;
			case 'pjdefwizard':
			L_pjdefwizard_TEXT='(精靈：詢問問題，然後根據您的回答執行一組動作的功能。)';
sTemp=L_pjdefwizard_TEXT;
break;
			case 'pjdefWork':
			L_pjdefWork_TEXT='(工作：對於一組任務而言，為完成一個任務所需的總人工。對於一組工作分派而言，為指派了資源的工作量。對於一組資源而言，為指派了資源之所有任務的工作總量。工時與任務工期不同。)';
sTemp=L_pjdefWork_TEXT;
break;
			case 'pjdefWorkBreakdownStructure':
			L_pjdefWorkBreakdownStructure_TEXT='(WBS：用來組織任務以報告排程和追蹤成本的階層架構。使用 Project，您可以使用任務識別碼或將您自己的 WBS 代碼分派到每個任務，來表示工作分解結構。)';
sTemp=L_pjdefWorkBreakdownStructure_TEXT;
break;
			case 'pjdefWorkgroup':
			L_pjdefWorkgroup_TEXT='(工作群組：由工作於相同專案的管理員和成員組成的群組。管理員會分派任務給從管理員接收並回應工作群組訊息的成員 [透過電子郵件、內部網路和 Web]。)';
sTemp=L_pjdefWorkgroup_TEXT;
break;
			case 'pjdefWorkgroupManager':
			L_pjdefWorkgroupManager_TEXT='(工作群組管理員：在工作群組中，建立和維護專案排程，並使用工作群組訊息，將任務分派給工作群組成員；同時也使用工作群組功能在成員回覆時，更新專案中的任務。)';
sTemp=L_pjdefWorkgroupManager_TEXT;
break;
			case 'pjdefWorkgroupMembers':
			L_pjdefWorkgroupMembers_TEXT='(工作群組成員：接收來自工作群組管理員的工作群組訊息。他們可以使用 32 位元之 MAPI 相容的電子郵件系統，或使用其網頁瀏覽器登入 Project Server，來接收和回覆它們的訊息。)';
sTemp=L_pjdefWorkgroupMembers_TEXT;
break;
			case 'pjdefWorkgroupMessages':
			L_pjdefWorkgroupMessages_TEXT='(工作群組訊息：工作群組管理員和工作群組成員透過 Project Server 或電子郵件傳送之有關專案任務的訊息。)';
sTemp=L_pjdefWorkgroupMessages_TEXT;
break;
			case 'pjdefWorkingDaysReport':
			L_pjdefWorkingDaysReport_TEXT='(「工作日」報表：專案或資源組之工作及非工作時間的摘要。報表還包括標準時間的例外狀況 (如果有的話)。)';
sTemp=L_pjdefWorkingDaysReport_TEXT;
break;
			case 'pjdefWorkingTime':
			L_pjdefWorkingTime_TEXT='(工作時間：在資源或專案行事曆中所指定之工作可能發生的小時數。)';
sTemp=L_pjdefWorkingTime_TEXT;
break;
			case 'pjdefWorkResource':
			L_pjdefWorkResource_TEXT='(工作資源：執行工作以完成任務的人員及設備資源。工作資源會耗費時間 (小時或天) 來完成任務。)';
sTemp=L_pjdefWorkResource_TEXT;
break;
			case 'pjdefWorkspace':
			L_pjdefWorkspace_TEXT='(工作區：您可藉由開啟單一工作區檔案來儲存及重新開啟的檔案及設定。工作區檔案有 .mpw 副檔名。當您建立工作區檔案時，Project 會建立目前設定、開啟的專案、檢視等的清單。)';
sTemp=L_pjdefWorkspace_TEXT;
break;
			case 'pjdefWorldWideWeb':
			L_pjdefWorldWideWeb_TEXT='(WWW：使用圖形使用者介面而非文字使用者介面之網際網路的子集。顯示的網頁或網站係使用 HTML 來格式化。網頁瀏覽器讓使用者可以檢視網站。)';
sTemp=L_pjdefWorldWideWeb_TEXT;
break;
			case 'pjdefXLS':
			L_pjdefXLS_TEXT='(Excel 工作表檔案格式：Excel 所使用的檔案格式，以 .xls 的副檔名為特點。)';
sTemp=L_pjdefXLS_TEXT;
break;
			case 'pjdefXML':
			L_pjdefXML_TEXT='(XML：可延伸標記語言 [XML] 是一種以標準、一致方式從應用程式傳遞豐富、結構化資料的格式。XML 描述文件的內容，而 HTML 標記則描述文件的外觀。)';
sTemp=L_pjdefXML_TEXT;
break;
			case 'pjdefYesNoField':
			L_pjdefYesNoField_TEXT='(是/否欄位：內容設成「是」或「否」的欄位類型；也稱為「布林」欄位或「真/假」欄位。例如，「週期性」欄位指出任務是否為週期性的任務。)';
sTemp=L_pjdefYesNoField_TEXT;
break;
			case 'pjdefZoom':
			L_pjdefZoom_TEXT='(顯示比例：增加或減少檢視中顯示之資訊的方法。您可以拉近來檢視一個星期的資訊或拉遠來檢視整個專案。)';
sTemp=L_pjdefZoom_TEXT;
break;
			case 'pjenterpriseproject':
			L_pjenterpriseproject_TEXT='(企業專案：儲存在 Project Server 以確定資訊完整性的專案。若要變更企業專案，使用者需具有存取權限，才能從 Project Server 存回和取出它。)';
sTemp=L_pjenterpriseproject_TEXT;
break;
			case 'pjgroup':
			L_pjgroup_TEXT='(群組：分派相同權限之個別使用者的集合。)';
sTemp=L_pjgroup_TEXT;
break;
			case 'pjnonprojecttime':
			L_pjnonprojecttime_TEXT='(非工作時間：在資源或專案行事曆中指定 Project 不應排定任務 (因為工作未完成) 的小時或天數。例如，非工作時間可包括午休時間、週末及假期。)';
sTemp=L_pjnonprojecttime_TEXT;
break;
			case 'pjorganization':
			L_pjorganization_TEXT='(組織：與 Project Server 具有一對一關係之專案、使用者和資料的集合。)';
sTemp=L_pjorganization_TEXT;
break;
			case 'pjpayrate':
			L_pjpayrate_TEXT='(工資率：每小時的資源成本。Project 包括兩種類型的工資率：標準工資率和加班工資率。)';
sTemp=L_pjpayrate_TEXT;
break;
			case 'pjportfolio':
			L_pjportfolio_TEXT='(公事包：組織內的專案清單，可以共用共同管理的範圍、預算或資源。)';
sTemp=L_pjportfolio_TEXT;
break;
			case 'pjproposedresource':
			L_pjproposedresource_TEXT='(建議資源：尚未被授權的工作指定之擱置資源分派。此資源分派並不會降低資源用於其他專案的工作。)';
sTemp=L_pjproposedresource_TEXT;
break;
			case 'pjsecuritytemplate':
			L_pjsecuritytemplate_TEXT='(安全範本：一組預先定義的權限。)';
sTemp=L_pjsecuritytemplate_TEXT;
break;
			case 'pjsoftbooking':
			L_pjsoftbooking_TEXT='(軟登記：可用於進行計劃的資源分派類型。通常在知道工作分派或專案是否確實要繼續之前，會保留軟登記的資源以用於在專案層次上的工作分派。)';
sTemp=L_pjsoftbooking_TEXT;
break;
			case 'pjtodolist':
			L_pjtodolist_TEXT='(待辦事項清單：與專案排程沒有關聯的任務清單。)';
sTemp=L_pjtodolist_TEXT;
break;
			case 'pjtracking':
			L_pjtracking_TEXT='(追蹤：檢視及更新任務的實際進度，以便您可以看到不同時間的進度、計算任務的進度落後、比較已排程或比較基準資料與實際資料，以及檢查任務和專案的完成百分比。)';
sTemp=L_pjtracking_TEXT;
break;
			case 'pjviewpwa':
			L_pjviewpwa_TEXT='(檢視：Project Server 內專案或資源的清單或報表。檢視可讓您顯示和分析專案、任務和資源資料。)';
sTemp=L_pjviewpwa_TEXT;
break;
			case 'oiaspectratio':
			L_oiaspectratio_TEXT='(長寬比：圖片寬度與圖片高度之間的比率。重新設定圖片大小時，此比率可保持一致。)';
sTemp=L_oiaspectratio_TEXT;
break;
			case 'oibrightness':
			L_oibrightness_TEXT='(亮度：色彩的相對亮度。)';
sTemp=L_oibrightness_TEXT;
break;
			case 'oicontrast':
			L_oicontrast_TEXT='(對比：圖片中最暗與最亮區域之間的差異。)';
sTemp=L_oicontrast_TEXT;
break;
			case 'oihighlights':
			L_oihighlights_TEXT='(亮部：圖片中最亮的區域。)';
sTemp=L_oihighlights_TEXT;
break;
			case 'oihue':
			L_oihue_TEXT='(色調：易於將一種色彩與其他色彩區分出來的色彩屬性。色彩的色調亦為其名稱。)';
sTemp=L_oihue_TEXT;
break;
			case 'oimidtones':
			L_oimidtones_TEXT='(中間調：圖片中處於色調範圍中間 (最亮與最暗色調) 的色調。)';
sTemp=L_oimidtones_TEXT;
break;
			case 'oisaturation':
			L_oisaturation_TEXT='(飽和度：衡量色彩的純度，是由與灰色的對比來判定的。色彩越灰表示飽和度越低；相反則表示飽和度越高。)';
sTemp=L_oisaturation_TEXT;
break;
			case 'oishadows':
			L_oishadows_TEXT='(陰影：圖片中最暗的區域。)';
sTemp=L_oishadows_TEXT;
break;
			case 'oizoom':
			L_oizoom_TEXT='(縮放：變更顯示放大層次。當縮放層次高於百分之百時，較小部份的工作區可見，但其上的圖像會顯示的較大些。)';
sTemp=L_oizoom_TEXT;
break;sTemp=L_Zoom_TEXT;
			break;
		default:
			sTemp=L_UNDEFINED_TEXT;
			break;
	}
	return sTemp;
}