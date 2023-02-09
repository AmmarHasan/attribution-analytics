import { PageViewDto } from 'src/dto/pageview.dto';
import { ChannelEnum } from 'src/repository/pageview.repository';
import { directHostnames, organicHostnames } from './constants';

const checkUrlContainsGivenHostnames = (url: string, hostnames: string[]) => {
  const allHostnames = [
    ...hostnames,
    // Naked hostnames
    ...hostnames.map((_) => _.replace('www.', '')),
  ];

  return allHostnames.some((hostname) => hostname === new URL(url).hostname);
};

const getChannel = (pageviewDto: PageViewDto): ChannelEnum => {
  if (containsUtmParameters(pageviewDto.url)) {
    return ChannelEnum.paid;
  }

  if (
    pageviewDto.referrer_url === null &&
    checkUrlContainsGivenHostnames(pageviewDto.url, directHostnames)
  ) {
    return ChannelEnum.direct;
  }

  if (
    pageviewDto.referrer_url !== null &&
    checkUrlContainsGivenHostnames(pageviewDto.referrer_url, organicHostnames)
  ) {
    return ChannelEnum.organic;
  }

  return ChannelEnum.organic;
};

const containsUtmParameters = (url: string) =>
  Object.values(extractUtmParams(url)).some((utmParamValue) => !!utmParamValue);

// Extracts from utm parameters from searchParams in the given URL
const extractUtmParams = (url: string) => {
  const searchParams = new URL(url).searchParams;

  return {
    utm_source: searchParams.get('utm_source'),
    utm_campaign: searchParams.get('utm_campaign'),
    utm_medium: searchParams.get('utm_medium'),
    utm_content: searchParams.get('utm_content'),
  };
};

const snakecaseToCamelcase = (str: string) =>
  str
    .toLowerCase()
    .replace(/([_][a-z])/g, (group) => group.toUpperCase().replace('_', ''));

const convertObjectKeysFromSnakeToCamelcase = (
  objectWithSnakecaseKeys: Record<string, unknown>,
) => {
  const objectWithCamelcase: Record<string, unknown> = {};

  Object.keys(objectWithSnakecaseKeys).forEach((snakecaseKeys) => {
    objectWithCamelcase[snakecaseToCamelcase(snakecaseKeys)] =
      objectWithSnakecaseKeys[snakecaseKeys];
  });

  return objectWithCamelcase;
};

export {
  snakecaseToCamelcase,
  convertObjectKeysFromSnakeToCamelcase,
  extractUtmParams,
  getChannel,
};
