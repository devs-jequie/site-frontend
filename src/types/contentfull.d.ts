declare type EntriesResponse<T> = {
  items: {
    fields: T;
  }[];
};

declare type Entry<T> = {
  fields: T;
};

declare type ContentFullImage = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
};

declare type ContentFullRichText = {
  nodeType: "document";
  data: {};
  content: any;
};
