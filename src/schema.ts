import {composeWithMongoose} from 'graphql-compose-mongoose'
import {schemaComposer} from 'graphql-compose'

import {Video} from './models/video'
import {Category} from './models/category'
import {Company} from './models/company'
import {Event} from './models/event'
import {Tag} from './models/tag'

const VideoTC = composeWithMongoose(Video)
const CategoryTC = composeWithMongoose(Category)
const CompanyTC = composeWithMongoose(Company)
const EventTC = composeWithMongoose(Event)
const TagTC = composeWithMongoose(Tag)

schemaComposer.Query.addFields({
  // Video
  videoById: VideoTC.getResolver('findById'),
  videoOne: VideoTC.getResolver('findOne'),
  videoMany: VideoTC.getResolver('findMany'),
  videoCount: VideoTC.getResolver('count'),
  videoConnection: VideoTC.getResolver('connection'),
  videoPagination: VideoTC.getResolver('pagination'),

  // Category
  categoryOne: CategoryTC.getResolver('findOne'),
  categoryMany: CategoryTC.getResolver('findMany'),

  // Company
  companyOne: CompanyTC.getResolver('findOne'),
  companyMany: CompanyTC.getResolver('findMany'),

  // Event
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),

  // Tag
  tagOne: TagTC.getResolver('findOne'),
  tagMany: TagTC.getResolver('findMany'),
})

schemaComposer.Mutation.addFields({
  // Video
  videoCreateOne: VideoTC.getResolver('createOne'),
  videoCreateMany: VideoTC.getResolver('createMany'),
  videoUpdateById: VideoTC.getResolver('updateById'),
  videoUpdateOne: VideoTC.getResolver('updateOne'),
  videoUpdateMany: VideoTC.getResolver('updateMany'),
  videoRemoveById: VideoTC.getResolver('removeById'),
  videoRemoveOne: VideoTC.getResolver('removeOne'),
  videoRemoveMany: VideoTC.getResolver('removeMany'),

  // Category
  categoryCreateOne: CategoryTC.getResolver('createOne'),
  categoryCreateMany: CategoryTC.getResolver('createMany'),
  categoryUpdateById: CategoryTC.getResolver('updateById'),
  categoryUpdateOne: CategoryTC.getResolver('updateOne'),
  categoryUpdateMany: CategoryTC.getResolver('updateMany'),
  categoryRemoveById: CategoryTC.getResolver('removeById'),
  categoryRemoveOne: CategoryTC.getResolver('removeOne'),
  categoryRemoveMany: CategoryTC.getResolver('removeMany'),

  // Category
  companyCreateOne: CompanyTC.getResolver('createOne'),
  companyCreateMany: CompanyTC.getResolver('createMany'),
  companyUpdateById: CompanyTC.getResolver('updateById'),
  companyUpdateOne: CompanyTC.getResolver('updateOne'),
  companyUpdateMany: CompanyTC.getResolver('updateMany'),
  companyRemoveById: CompanyTC.getResolver('removeById'),
  companyRemoveOne: CompanyTC.getResolver('removeOne'),
  companyRemoveMany: CompanyTC.getResolver('removeMany'),

  // Event
  eventCreateOne: EventTC.getResolver('createOne'),
  eventCreateMany: EventTC.getResolver('createMany'),
  eventUpdateById: EventTC.getResolver('updateById'),
  eventUpdateOne: EventTC.getResolver('updateOne'),
  eventUpdateMany: EventTC.getResolver('updateMany'),
  eventRemoveById: EventTC.getResolver('removeById'),
  eventRemoveOne: EventTC.getResolver('removeOne'),
  eventRemoveMany: EventTC.getResolver('removeMany'),

  // Tag
  tagCreateOne: TagTC.getResolver('createOne'),
  tagCreateMany: TagTC.getResolver('createMany'),
  tagUpdateById: TagTC.getResolver('updateById'),
  tagUpdateOne: TagTC.getResolver('updateOne'),
  tagUpdateMany: TagTC.getResolver('updateMany'),
  tagRemoveById: TagTC.getResolver('removeById'),
  tagRemoveOne: TagTC.getResolver('removeOne'),
  tagRemoveMany: TagTC.getResolver('removeMany'),
})

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema
