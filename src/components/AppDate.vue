<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const props = defineProps({
  timestamp: {
    type: Number,
    required: true,
  },
});

const diffForHumans = () => dayjs.unix(props.timestamp).fromNow();
const humanFriendlyDate = () => dayjs.unix(props.timestamp).format('llll');
</script>
