// 等待文档内容完全加载后执行
document.addEventListener('DOMContentLoaded', function () {
  // 选取确认按钮
  var confirmButton = document.querySelector('input[type="button"]');
  // 选取显示提示信息的p元素
  var promptElement = document.getElementById('提示');
  // 选取进度条
  var progressBar = document.querySelector('progress');

  // 给确认按钮添加点击事件监听器
  confirmButton.addEventListener('click', function() {
    // 初始化进度条的值为0
    progressBar.value = 0;

    // 获取最小值输入框中的值
    var minPrice = document.getElementById('最小值').value;
    // 获取最大值输入框中的值
    var maxPrice = document.getElementById('最大值').value;
    // 计算平均值
    var averagePrice = (parseInt(minPrice, 10) + parseInt(maxPrice, 10)) / 2;

    // 更改提示信息为正在获取京东数据，并设置进度条的值
    promptElement.textContent = '正在获取京东数据...';
    progressBar.value = 25;
    
    // 使用setTimeout模拟异步获取数据的过程
    setTimeout(function() {
      // 2秒后更改提示信息为正在获取淘宝数据，并设置进度条的值
      promptElement.textContent = '正在获取淘宝数据...';
      progressBar.value = 50;
      
      // 再次使用setTimeout模拟数据获取
      setTimeout(function() {
        // 2秒后更改提示信息为正在获取拼多多数据，并设置进度条的值
        promptElement.textContent = '正在获取拼多多数据...';
        progressBar.value = 75;
        
        // 再次使用setTimeout模拟数据整合过程
        setTimeout(function() {
          // 2秒后更改提示信息为正在整合数据
          promptElement.textContent = '正在整合数据...';
          
          // 最后使用setTimeout模拟整合数据完成，并计算最终结果
          setTimeout(function() {
            // 3秒后显示最终计算结果的提示信息，并设置进度条的值为100
            promptElement.textContent = '您配置电脑大约需要花费' + Math.round(averagePrice) + '元';
            progressBar.value = 100;
          }, 3000);
        }, 2000);
      }, 2000);
    }, 2000);
  });
});
