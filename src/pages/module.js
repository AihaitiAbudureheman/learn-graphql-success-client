import react from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult, ModuleDetail } from "../components";

export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = ({ moduleId, trackId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: {
      moduleId,
      trackId,
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module}></ModuleDetail>
      </QueryResult>
    </Layout>
  );
};

export default Module;
