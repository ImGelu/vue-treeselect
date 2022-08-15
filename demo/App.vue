<template>
  <div>
    <TreeSelect
        :multiple="true"
        :options="[treeData]"
        noResultsText="No results..."
        placeholder="Select items..."
        v-model="selected"
        :default-expand-level="0"
        :autoSelectDescendants="true"
        :autoDeselectDescendants="true"
        :flat="true"
        :searchable="false"
        :show-count="true"
    >

    </TreeSelect>
    <div>
      Selected: {{ selected }}
    </div>
  </div>
</template>
<script>
import {defineComponent, ref, reactive} from 'vue';
import TreeSelect from "../src/components/TreeSelect.vue";

export default defineComponent({
  components: {TreeSelect},
  setup() {

    let selected = ref([]);
    let treeData = reactive({
      label: 'root',
      expand: true,
      id: 1,
      children: [
        {
          label: 'child 1', id: 2
        },
        {
          label: 'child 2', id: 3
        },
        {
          label: 'subparent 1',
          id: 4,
          expand: false,
          children: [
            {label: 'subchild 1', id: 5},
            {
              label: 'subchild 2',
              id: 6,
              expand: false,
              children: [
                {label: 'subchild 11', id: 7},
                {label: 'subchild 22', id: 8},
              ]
            },
          ]
        },
      ]
    });


    return {
      treeData,
      selected
    }
  }
})

</script>
