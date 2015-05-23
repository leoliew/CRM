<%@ page pageEncoding="GB2312" import="com.opensymphony.xwork2.util.ValueStack"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
ValueStack vs = (ValueStack)request.getAttribute("struts.valueStack");
if (vs.findValue("ptotalpage")!=null) {
	int pcur =  (Integer)vs.findValue("preqpage");
	int totalPage =  (Integer)vs.findValue("ptotalpage");
%>
	<form>
    <tr class="beta">
      <td colSpan=21 vAlign=top align="right">
        <font class="bg" size="2">          &nbsp;&nbsp;
          共有<B>
          ${requestScope.ptotalrecord }
            <!-- 显示一共有多少条记录数 -->
          </B>条记录
          <FONT color=#000000>            &nbsp;
            页数
            <B>
              <font color=red>
                <!-- 显示当前页数 -->
                ${requestScope.preqpage }
              </font>
            </B>
            <B>
            /
              <font color=red>
                <!-- 显示一共有多少页页数 -->
                ${requestScope.ptotalpage }
              </font>
            </B>
            页
            每页
            <B>
		<input type="text"  value="${requestScope.pageSize }"
		  name="pageSize" size="2" onchange="changeRowsPress(this)">
              <!-- 显示每页的记录条数 -->
            </B>
            条
          </FONT>
          [
          <!-- 首页 -->
          <c:choose>
          	<c:when test="${requestScope.preqpage >1}">
          		<a href='javascript:gotoPage(1)'>首页</a>
          	</c:when>
          	<c:otherwise>
          		首页
          	</c:otherwise>
          </c:choose>
          <!-- 上页 -->
          <c:choose>
          	<c:when test="${requestScope.preqpage >1}">
          		<a href='javascript:gotoPage("${requestScope.preqpage-1}")'>上页</a>
          	</c:when>
          	<c:otherwise>
          		上页
          	</c:otherwise>
          </c:choose>
          <!-- 下页 -->
 		<c:choose>
          	<c:when test="${requestScope.preqpage <requestScope.ptotalpage}">
          		<a href='javascript:gotoPage("${requestScope.preqpage+1}")'>下页</a>
          	</c:when>
          	<c:otherwise>
          		下页
          	</c:otherwise>
          </c:choose>
           <!-- 末页 -->
           <c:choose>
          	<c:when test="${requestScope.preqpage<requestScope.ptotalpage}">
          		<a href='javascript:gotoPage("${requestScope.ptotalpage}")'>末页</a>
          	</c:when>
          	<c:otherwise>
          		末页
          	</c:otherwise>
          </c:choose>            
          &nbsp;&nbsp;跳转到
          <select name="reqPage" onchange="gotoPage(this.value)">
          <%
          for (int p=0; p<totalPage; p++) {
          %>
          <option value="<%=p+1%>"
            <%
            if (pcur == p+1) {
              out.print("selected");
            }
            %>
             ><%out.print(p+1);%></option>
          <%
          }
          %>
          </select>
          页
        </font>
      </td>
    </tr>
    </form>
<%
}else{
%>
没有分页
<%
}
%>