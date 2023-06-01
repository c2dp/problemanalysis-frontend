<template>
  <div>
    <el-upload
      class="upload-demo"
      action="/api/upload"
      :before-upload="handleBeforeUpload"
      :on-success="handleUploadSuccess"
      :on-error="handleUploadError"
    >
      <el-button type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ElUpload, ElButton, ElMessage } from "element-plus";

import axios from "axios";

export default defineComponent({
  components: {
    ElUpload,

    ElButton,
  },

  methods: {
    handleBeforeUpload(file: File) {
      // 只允许上传 xlsx 文件
      const extension: string | undefined = file.name.split(".").pop();

      const allowedExtensions = ["xlsx"];

      if (!allowedExtensions.includes(extension ?? "")) {
        ElMessage.error("只允许上传 xlsx 文件");

        return false;
      }

      return true;
    },

    handleUploadSuccess(response: any) {
      // 处理上传成功的逻辑

      const { tableName } = response.data ?? "";

      ElMessage.success(`表格 ${tableName} 上传成功`);
    },

    handleUploadError(error: any) {
      // 处理上传失败的逻辑

      console.error(error);

      ElMessage.error("上传失败，请重试");
    },
  },
});
</script>
