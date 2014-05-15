class ProjectSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name, :description
  has_many :tasks
  has_one :user
end
