<template>
  <div class="Home">
    <div>
      <el-menu
        :default-active="'1-1'"
        mode="horizontal"
        @select="handleNavSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">数据库工具</template>
          <el-menu-item index="1-1">字段查询</el-menu-item>
        </el-submenu>

      </el-menu>
    </div>
    <el-tabs v-model="currTabName" class="main-content" type="border-card" closable @tab-remove="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in tabs"
        :label="item.label"
        :name="item.name"
      >
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import * as API from 'src/tools/API';

  export default {
    name: 'Home',
    data() {
      return {
        // 当前tab的name
        currTabName: '1',
        //tab的label和name是关键属性。name对应currTabName
        tabs: [{
          label: '字段查询',
          name: "1",
          content: '用于处理数据库字段查询，方便写sql'
        }]
      }
    },
    methods: {
      request() {
        console.log("this is request!")
        API.test({
          name: "wzc"
        }).then((res) => {
          if (res.data.code == 200) {
            this.$message("success");
          } else {
            this.$message(res.data.msg);
          }
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      },
      handleNavSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      //点击删除
      handleTabsEdit(targetName) {
        var isCurrTab = this.currTabName == targetName;
        var rmIndex = 0;
        this.tabs.forEach((e, i) => {
          if (e.name == targetName)
            rmIndex = i;
        })
        this.tabs.splice(rmIndex, 1);
        if (isCurrTab) {
          if (this.tabs.length > 0) {
            if (rmIndex >= this.tabs.length) {
              rmIndex = this.tabs.length - 1
            }
            this.currTabName = this.tabs[rmIndex].name;
          }
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .Home {
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    .main-content {
      flex: 1;
    }
  }

</style>
