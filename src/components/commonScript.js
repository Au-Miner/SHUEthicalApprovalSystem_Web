import { Message } from 'element-ui';
import axios from 'axios';
function Download(url) {
    if (url == "" || url == null) {
      Message.error("请在点击提交后重试");
      return;
    }
    axios({
      method: "get",
      url: "/file/download?fileAddress=" + url,
      data: {},
      responseType: "blob",
    })
      .then((res) => {
        var new_element = document.createElement("a");
        new_element.download = res.config.url.slice(
          res.config.url.search("---") + 3
        );
        new_element.style.display = "none";
        var blob = new Blob([res.data]);
        new_element.href = URL.createObjectURL(blob);
        document.body.appendChild(new_element);
        new_element.click();
        document.body.removeChild(new_element);
      })
      .catch((err) => {
        Message.error(err);
      });
  }
  export{
      Download
  }